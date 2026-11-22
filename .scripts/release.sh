#!/bin/sh
set -eu

# Project configuration.
cd "$(dirname "$0")/.."

dataset="tank/production_datasets/oldtimerberater"
destination="/tank/production_datasets/oldtimerberater"

[ -d "$destination" ] || {
    echo "Production dataset is not mounted" >&2
    exit 1
}

[ -w "$destination" ] || {
    echo "Production dataset is not writable" >&2
    exit 1
}

# 1. Build the website, including Brotli and Gzip compression.
pnpm run build

[ -f build/index.html ] || {
    echo "Build output is missing" >&2
    exit 1
}

# 2. Synchronize files using content checksums.
# Unchanged files retain their existing modification times.
changes=$(mktemp -t release.XXXXXXXXXX)
trap 'rm -f "$changes"' EXIT

timestamp=$(date '+%Y%m%d%H%M.%S')

rsync -rclp \
    --delete \
    --chmod=D755,F644 \
    --out-format='%i %n' \
    build/ "$destination/" > "$changes"

# 3. Assign the release timestamp to changed original files.
# Their compressed variants must have the same mtime.
while IFS= read -r entry; do
    case "$entry" in
        '>f'*) ;;
        *) continue ;;
    esac

    file=${entry#* }

    case "$file" in
        *.br|*.gz) continue ;;
    esac

    touch -m -t "$timestamp" "$destination/$file"

    for extension in .br .gz; do
        variant="$destination/$file$extension"

        if [ -f "$variant" ]; then
            touch -m -t "$timestamp" "$variant"
        fi
    done
done < "$changes"

# 4. Handle compressed variants that changed independently.
# Align their mtime with the corresponding original file.
while IFS= read -r entry; do
    case "$entry" in
        '>f'*) ;;
        *) continue ;;
    esac

    file=${entry#* }

    case "$file" in
        *.br) original=${file%.br} ;;
        *.gz) original=${file%.gz} ;;
        *) continue ;;
    esac

    if [ -f "$destination/$original" ]; then
        touch -m -r \
            "$destination/$original" \
            "$destination/$file"
    fi
done < "$changes"

# 5. Create a ZFS snapshot, replicate it, and publish it.
 /usr/local/sbin/zfs-deploy-send "$dataset"
