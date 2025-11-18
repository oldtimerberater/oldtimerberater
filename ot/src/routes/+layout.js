import { siteInfo, JSONLD } from "$lib/content/siteInfo";
export const load = () => {
  return {
    siteInfo,
    JSONLD,
  };
};

export const prerender = true;

