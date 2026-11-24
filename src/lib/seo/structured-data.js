import { m } from '../../paraglide/messages.js';
import contact from '#lib/config/contact.json';
import legal from '#lib/config/legal.json';

export const siteUrl = 'https://oldtimerberater.eu/';

export const ids = {
  website: `${siteUrl}#website`,
  business: `${siteUrl}#business`,
  advisor: `${siteUrl}#advisor`,
  service: `${siteUrl}#service`,
  offer: `${siteUrl}#offer`,
  catalog: `${siteUrl}#catalog`,
  contact: `${siteUrl}#contact`
};

/** @param {string} id */
export const ref = (id) => ({ '@id': id });

const contactUrl = `${siteUrl}contact/`;

const individualServices = [
  {
    id: 'search',
    name: m.schema_catalog_search()
  },
  {
    id: 'provenance',
    name: m.schema_catalog_provenance()
  },
  {
    id: 'assessment',
    name: m.schema_catalog_assessment()
  },
  {
    id: 'acquisition',
    name: m.schema_catalog_acquisition()
  }
];

export const entities = {
  website: {
    '@type': 'WebSite',
    '@id': ids.website,
    name: m.schema_website_name(),
    alternateName: 'oldtimerberater.eu',
    url: siteUrl,
    inLanguage: 'en',
    publisher: ref(ids.business)
  },

  business: {
    '@type': 'LocalBusiness',
    '@id': ids.business,
    name: legal.legalName,
    legalName: legal.legalName,
    url: siteUrl,
    description: m.schema_business_description(),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Berlin',
      addressCountry: 'DE'
    },
    email: contact.email,
    telephone: contact.phone.replaceAll(' ', ''),
    founder: ref(ids.advisor),
    contactPoint: ref(ids.contact)
  },

  advisor: {
    '@type': 'Person',
    '@id': ids.advisor,
    name: legal.legalName,
    url: `${siteUrl}advisor/`,
    jobTitle: m.schema_advisor_job_title(),
    description: m.schema_advisor_description(),
    workLocation: {
      '@type': 'Place',
      name: m.schema_advisor_location()
    },
    knowsLanguage: ['en', 'de', 'ru'],
    worksFor: ref(ids.business),
    contactPoint: ref(ids.contact)
  },

  contact: {
    '@type': 'ContactPoint',
    '@id': ids.contact,
    contactType: m.schema_contact_type(),
    email: contact.email,
    telephone: contact.phone.replaceAll(' ', ''),
    availableLanguage: ['en', 'de', 'ru'],
    url: contactUrl
  },

  service: {
    '@type': 'Service',
    '@id': ids.service,
    name: m.schema_service_name(),
    serviceType: m.schema_service_type(),
    description: m.schema_business_description(),
    provider: ref(ids.business),
    audience: {
      '@type': 'Audience',
      audienceType: m.schema_service_audience()
    },
    areaServed: m.schema_service_area(),
    url: siteUrl,
    offers: ref(ids.offer),
    hasOfferCatalog: ref(ids.catalog)
  },

  offer: {
    '@type': 'Offer',
    '@id': ids.offer,
    name: m.schema_offer_name(),
    url: contactUrl,
    offeredBy: ref(ids.business),
    itemOffered: ref(ids.service)
  },

  catalog: {
    '@type': 'OfferCatalog',
    '@id': ids.catalog,
    name: m.schema_catalog_name(),
    itemListElement: individualServices.map((service) => ({
      '@type': 'Offer',
      '@id': `${siteUrl}#offer-${service.id}`,
      name: service.name,
      url: contactUrl,
      offeredBy: ref(ids.business),
      itemOffered: {
        '@type': 'Service',
        '@id': `${siteUrl}#service-${service.id}`,
        name: service.name,
        provider: ref(ids.business),
        areaServed: m.schema_service_area()
      }
    }))
  }
};

/**
 * @param {{
 *   path: string,
 *   name: string,
 *   description: string,
 *   type?: string,
 *   mainEntity?: string,
 *   about?: string
 * }} options
 */
export function pageEntity({ path, name, description, type = 'WebPage', mainEntity, about }) {
  const url = new URL(path, siteUrl).href;

  return {
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: 'en',
    isPartOf: ref(ids.website),
    ...(mainEntity ? { mainEntity: ref(mainEntity) } : {}),
    ...(about ? { about: ref(about) } : {})
  };
}

/** @param {Record<string, unknown>[]} entities */
export function jsonLd(entities) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': entities
  }).replace(/</g, '\\u003c');
}
