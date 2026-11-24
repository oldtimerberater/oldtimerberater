const requestedLocale = import.meta.env.VITE_SITE_LOCALE ?? 'en';

if (requestedLocale !== 'en' && requestedLocale !== 'de') {
  throw new Error(`Unsupported site locale: ${requestedLocale}`);
}

export const siteLocale = requestedLocale === 'de' ? 'de' : 'en';

export const siteUrls = {
  en: 'https://oldtimerberater.eu/',
  de: 'https://de.oldtimerberater.eu/'
};

export const siteUrl = siteUrls[siteLocale];
