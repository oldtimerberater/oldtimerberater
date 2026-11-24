import { m } from '../../paraglide/messages.js';
import { siteUrl, siteLocale } from '#lib/config/site.js';

export const prerender = true;

/** @type {{ locale: typeof siteLocale }} */
const options = { locale: siteLocale };

export function GET() {
  const content = [
    `# ${m.common_advisory({}, options)}`,
    '',
    `> ${m.llms_summary({}, options)}`,
    '',
    m.llms_process({}, options),
    '',
    m.llms_confidentiality({}, options),
    '',
    `## ${m.llms_section_advisory({}, options)}`,
    '',
    `- [${m.navigation_home({}, options)}](${siteUrl}): ${m.llms_home_description({}, options)}`,
    `- [${m.common_method({}, options)}](${new URL('method/', siteUrl).href}): ${m.llms_method_description({}, options)}`,
    `- [${m.advisor_title({}, options)}](${new URL('advisor/', siteUrl).href}): ${m.llms_advisor_description({}, options)}`,
    `- [${m.contact_title({}, options)}](${new URL('contact/', siteUrl).href}): ${m.llms_contact_description({}, options)}`,
    '',
    `## ${m.llms_section_optional({}, options)}`,
    '',
    `- [${m.common_imprint({}, options)}](${new URL('imprint/', siteUrl).href}): ${m.llms_imprint_description({}, options)}`,
    `- [${m.common_privacy({}, options)}](${new URL('privacy/', siteUrl).href}): ${m.llms_privacy_description({}, options)}`,
    ''
  ].join('\n');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}
