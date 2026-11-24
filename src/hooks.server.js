import { minify } from 'html-minifier-terser';
import { overwriteGetLocale } from './paraglide/runtime.js';
import { siteLocale } from '#lib/config/site.js';

overwriteGetLocale(() => siteLocale);

/** @type {import('@sveltejs/kit/hooks').Handle} */
export const handle = ({ event, resolve }) => {
  let buffer = '';

  return resolve(event, {
    transformPageChunk: async ({ html, done }) => {
      buffer += html;

      if (!done) return '';

      return minify(buffer.replace('%lang%', siteLocale), {
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        minifyCSS: true
      });
    }
  });
};
