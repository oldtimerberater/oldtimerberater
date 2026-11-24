import { siteUrl } from '#lib/config/site.js';

export const prerender = true;

const paths = [
  '/',
  '/method/',
  '/advisor/',
  '/contact/',
  '/imprint/',
  '/privacy/'
];

export function GET() {
  const urls = paths.map(
    (path) => `	<url>
		<loc>${new URL(path, siteUrl).href}</loc>
	</url>`
  );

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    ''
  ].join('\n');

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
