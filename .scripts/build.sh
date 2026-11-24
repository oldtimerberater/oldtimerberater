#!/bin/sh
set -eu

cd "$(dirname "$0")/.."

locales=$(node -p 'require("./project.inlang/settings.json").locales.join(" ")')

staging=$(mktemp -d .build.XXXXXXXXXX)
trap 'rm -rf "$staging"' EXIT

for locale in $locales; do
  printf '\nBuilding website: %s\n\n' "$locale"

  VITE_SITE_LOCALE="$locale" \
    SITE_BUILD_DIR="$staging/$locale" \
    pnpm exec vite build

  [ -f "$staging/$locale/index.html" ] || {
    echo "Build output missing for locale: $locale" >&2
    exit 1
  }
done

rm -rf build
mv "$staging" build

printf '\nSuccessfully built all locales: %s\n' "$locales"
