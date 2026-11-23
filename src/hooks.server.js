import { minify } from 'html-minifier-terser';

/** @type {import('@sveltejs/kit/hooks').Handle} */
export const handle = ({ event, resolve }) => {
	let buffer = '';

	return resolve(event, {
		transformPageChunk: async ({ html, done }) => {
			buffer += html;

			if (!done) return '';

			return minify(buffer, {
				collapseWhitespace: true,
				removeComments: true,
				removeAttributeQuotes: true,
				removeRedundantAttributes: true,
				minifyCSS: true
			});
		}
	});
};
