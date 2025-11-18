export const siteInfo = {
  domain: "oldtimerberater.eu",
  meta: {
    description: "oldtimer & parts brokerage",
  },
  title: "oldtimer",
  founder: {
    firstName: "Andrey",
    lastName: "Paymushin",
  },
  contacts: {
    telephone: "+49 176 11111111",
    email: "andrey.paymushin@gmail.com",
  },
  address: {
    streetAddress: "Musterstraße 1",
    addressLocality: "Berlin",
    addressRegion: "Berlin",
    postalCode: "10115",
    addressCountry: "DE"
  },
  workTime: {
    weekDays: [
      "Mo",
      "Tu",
      "We",
      "Th",
      "Fr",
    ],
    from: "10:00",
    till: "18:00",
  },
  availableLanguages: [
    "German",
    "English",
  ],
};

export const JSONLD = ({
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "@id": `https://${siteInfo.domain}/#business`,
  name: `${siteInfo.founder.firstName} ${siteInfo.founder.lastName}`,
  url: `https://${siteInfo.domain}/${siteInfo.founder.firstName.toLowerCase()}.${siteInfo.founder.lastName.toLowerCase()}`,
  telephone: `${siteInfo.contacts.telephone}`,
  email: `${siteInfo.contacts.email}`,
  image: `https://${siteInfo.domain}/preview.png`,
  priceRange: "€€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteInfo.address.streetAddress}`,
    addressLocality: `${siteInfo.address.addressLocality}`,
    addressRegion: `${siteInfo.address.addressRegion}`,
    postalCode: `${siteInfo.address.postalCode}`,
    addressCountry: `${siteInfo.address.addressCountry}`,
  },
  openingHours: `${siteInfo.workTime.weekDays} ${siteInfo.workTime.from}-${siteInfo.workTime.till}`,
  "founder": {
    "@type": "Person",
    "name": `${siteInfo.founder.firstName} ${siteInfo.founder.lastName}`
  },
  "availableLanguage": siteInfo.availableLanguages.map((lang) => ({ "@type": "Language", "name": lang })),
});
