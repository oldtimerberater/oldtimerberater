import { siteUrl } from '#lib/config/site.js';

export const prerender = true;

export function GET() {
  const robots = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${new URL('sitemap.xml', siteUrl).href}`,
    ''
  ].join('\n');

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}
