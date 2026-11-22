import { minify } from 'html-minifier-terser';
import { getTextDirection } from '#lib/paraglide/runtime.js';
import { paraglideMiddleware } from '#lib/paraglide/server.js';

/** @type {import('@sveltejs/kit/hooks').Handle} */
const handleParaglide = ({ event, resolve }) =>
  paraglideMiddleware(event.request, ({ request, locale }) => {
    let buffer = '';

    return resolve(
      { ...event, request },
      {
        transformPageChunk: async ({ html, done }) => {
          buffer += html;

          if (!done) return '';

          const localized = buffer
            .replaceAll('%paraglide.lang%', locale)
            .replaceAll('%paraglide.dir%', getTextDirection(locale));

          return minify(localized, {
            collapseWhitespace: true,
            removeComments: true,
            removeAttributeQuotes: true,
            removeRedundantAttributes: true,
            minifyCSS: true
          });
        }
      }
    );
  });

/** @type {import('@sveltejs/kit/hooks').Handle} */
export const handle = handleParaglide;
