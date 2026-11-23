
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

export const ref = (id) => ({ '@id': id });

const contactUrl = `${siteUrl}contact/`;

const individualServices = [
  {
    id: 'search',
    name: 'Search and Sourcing of Historically Significant Motor Cars'
  },
  {
    id: 'provenance',
    name: 'Provenance and Historical Research'
  },
  {
    id: 'assessment',
    name: 'Vehicle Assessment and Coordination of Specialist Inspections'
  },
  {
    id: 'acquisition',
    name: 'Acquisition Assistance and Negotiations'
  }
];

export const entities = {
  website: {
    '@type': 'WebSite',
    '@id': ids.website,
    name: 'Independent Advisory',
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
    description:
      'Independent research, assessment and acquisition advisory for collectors of historically significant motor cars.',
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
    jobTitle: 'Independent Motor Car Advisor',
    description:
      'Independent advisor for collectors of historically significant motor cars.',
    workLocation: {
      '@type': 'Place',
      name: 'Berlin, Germany'
    },
    knowsLanguage: ['en', 'de', 'ru'],
    worksFor: ref(ids.business),
    contactPoint: ref(ids.contact)
  },

  contact: {
    '@type': 'ContactPoint',
    '@id': ids.contact,
    contactType: 'Private enquiries',
    email: contact.email,
    telephone: contact.phone.replaceAll(' ', ''),
    availableLanguage: ['en', 'de', 'ru'],
    url: contactUrl
  },

  service: {
    '@type': 'Service',
    '@id': ids.service,
    name: 'Independent Advisory for Collectors of Historically Significant Motor Cars',
    serviceType: 'Historic motor car advisory',
    description:
      'Independent research, assessment and acquisition advisory for collectors of historically significant motor cars.',
    provider: ref(ids.business),
    audience: {
      '@type': 'Audience',
      audienceType: 'Collectors of historically significant motor cars'
    },
    areaServed: 'Worldwide',
    url: siteUrl,
    offers: ref(ids.offer),
    hasOfferCatalog: ref(ids.catalog)
  },

  offer: {
    '@type': 'Offer',
    '@id': ids.offer,
    name: 'Individual Advisory Engagement',
    url: contactUrl,
    offeredBy: ref(ids.business),
    itemOffered: ref(ids.service)
  },

  catalog: {
    '@type': 'OfferCatalog',
    '@id': ids.catalog,
    name: 'Collector Advisory Services',
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
        areaServed: 'Worldwide'
      }
    }))
  }
};

export function pageEntity({
  path,
  name,
  description,
  type = 'WebPage',
  mainEntity,
  about
}) {
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

export function jsonLd(entities) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': entities
  }).replace(/</g, '\\u003c');
}

