import { siteUrl } from '#lib/config/site.js';

export const prerender = true;

export function GET() {
  const content = [
    'Contact: mailto:dmitry.medvedev@gmail.com',
    `Canonical: ${new URL('.well-known/security.txt', siteUrl).href}`,
    'Expires: 2027-05-01T00:00:00Z',
    'Preferred-Languages: en',
    ''
  ].join('\n');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}
