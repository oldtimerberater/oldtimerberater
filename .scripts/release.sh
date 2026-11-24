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

# 1. Build all localized websites, including Brotli and Gzip compression.
pnpm run build

locales=$(node -p 'require("./project.inlang/settings.json").locales.join(" ")')

[ -n "$locales" ] || {
  echo "No enabled locales found" >&2
  exit 1
}

# Verify all localized build artifacts before modifying the production dataset.
for locale in $locales; do
  for artifact in \
    index.html \
    method/index.html \
    advisor/index.html \
    contact/index.html \
    imprint/index.html \
    privacy/index.html \
    sitemap.xml \
    robots.txt \
    llms.txt \
    .well-known/security.txt \
    .well-known/ai-catalog.json; do
    for extension in '' .br .gz; do
      file="build/$locale/$artifact$extension"

      [ -f "$file" ] || {
        echo "Build artifact missing: $file" >&2
        exit 1
      }
    done
  done

  echo "Build artifacts verified: $locale"
done

# 2. Synchronize files using content checksums.
# Unchanged files retain their existing modification times.
changes=$(mktemp -t release.XXXXXXXXXX)
trap 'rm -f "$changes"' EXIT

timestamp=$(date '+%Y%m%d%H%M.%S')

rsync -rclp \
  --delete \
  --chmod=D755,F644 \
  --out-format='%i %n' \
  build/ "$destination/" >"$changes"

# 3. Assign the release timestamp to changed original files.
# Their compressed variants must have the same mtime.
while IFS= read -r entry; do
  case "$entry" in
  '>f'*) ;;
  *) continue ;;
  esac

  file=${entry#* }

  case "$file" in
  *.br | *.gz) continue ;;
  esac

  touch -m -t "$timestamp" "$destination/$file"

  for extension in .br .gz; do
    variant="$destination/$file$extension"

    if [ -f "$variant" ]; then
      touch -m -t "$timestamp" "$variant"
    fi
  done
done <"$changes"

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
done <"$changes"

# 5. Create a ZFS snapshot, replicate it, and publish it.
/usr/local/sbin/zfs-deploy-send "$dataset"
