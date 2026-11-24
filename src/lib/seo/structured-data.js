import { m } from '../../paraglide/messages.js';
import contact from '#lib/config/contact.json';
import legal from '#lib/config/legal.json';

import { siteUrl, siteLocale } from '#lib/config/site.js';

export { siteUrl };

const entityBaseUrl = 'https://oldtimerberater.eu/';

export const ids = {
  website: `${siteUrl}#website`,
  business: `${entityBaseUrl}#business`,
  advisor: `${entityBaseUrl}#advisor`,
  service: `${entityBaseUrl}#service`,
  offer: `${entityBaseUrl}#offer`,
  catalog: `${entityBaseUrl}#catalog`,
  contact: `${entityBaseUrl}#contact`
};

/** @param {string} id */
export const ref = (id) => ({ '@id': id });

const contactUrl = `${siteUrl}contact/`;

const individualServices = [
  {
    id: 'search',
    name: m.schema_catalog_search({}, { locale: siteLocale })
  },
  {
    id: 'provenance',
    name: m.schema_catalog_provenance({}, { locale: siteLocale })
  },
  {
    id: 'assessment',
    name: m.schema_catalog_assessment({}, { locale: siteLocale })
  },
  {
    id: 'acquisition',
    name: m.schema_catalog_acquisition({}, { locale: siteLocale })
  }
];

export const entities = {
  website: {
    '@type': 'WebSite',
    '@id': ids.website,
    name: m.common_advisory({}, { locale: siteLocale }),
    alternateName: 'oldtimerberater.eu',
    url: siteUrl,
    inLanguage: siteLocale,
    publisher: ref(ids.business)
  },

  business: {
    '@type': 'LocalBusiness',
    '@id': ids.business,
    name: legal.legalName,
    legalName: legal.legalName,
    url: siteUrl,
    description: m.schema_business_description({}, { locale: siteLocale }),
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
    jobTitle: m.schema_advisor_job_title({}, { locale: siteLocale }),
    description: m.schema_advisor_description({}, { locale: siteLocale }),
    workLocation: {
      '@type': 'Place',
      name: m.common_location({}, { locale: siteLocale })
    },
    knowsLanguage: ['en', 'de', 'ru'],
    worksFor: ref(ids.business),
    contactPoint: ref(ids.contact)
  },

  contact: {
    '@type': 'ContactPoint',
    '@id': ids.contact,
    contactType: m.schema_contact_type({}, { locale: siteLocale }),
    email: contact.email,
    telephone: contact.phone.replaceAll(' ', ''),
    availableLanguage: ['en', 'de', 'ru'],
    url: contactUrl
  },

  service: {
    '@type': 'Service',
    '@id': ids.service,
    name: m.schema_service_name({}, { locale: siteLocale }),
    serviceType: m.schema_service_type({}, { locale: siteLocale }),
    description: m.schema_business_description({}, { locale: siteLocale }),
    provider: ref(ids.business),
    audience: {
      '@type': 'Audience',
      audienceType: m.schema_service_audience({}, { locale: siteLocale })
    },
    areaServed: m.schema_service_area({}, { locale: siteLocale }),
    url: siteUrl,
    offers: ref(ids.offer),
    hasOfferCatalog: ref(ids.catalog)
  },

  offer: {
    '@type': 'Offer',
    '@id': ids.offer,
    name: m.schema_offer_name({}, { locale: siteLocale }),
    url: contactUrl,
    offeredBy: ref(ids.business),
    itemOffered: ref(ids.service)
  },

  catalog: {
    '@type': 'OfferCatalog',
    '@id': ids.catalog,
    name: m.schema_catalog_name({}, { locale: siteLocale }),
    itemListElement: individualServices.map((service) => ({
      '@type': 'Offer',
      '@id': `${entityBaseUrl}#offer-${service.id}`,
      name: service.name,
      url: contactUrl,
      offeredBy: ref(ids.business),
      itemOffered: {
        '@type': 'Service',
        '@id': `${entityBaseUrl}#service-${service.id}`,
        name: service.name,
        provider: ref(ids.business),
        areaServed: m.schema_service_area({}, { locale: siteLocale })
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
    inLanguage: siteLocale,
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
