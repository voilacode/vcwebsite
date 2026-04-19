/**
 * Site-wide SEO constants.
 * Change these in one place — every page's metadata + every JSON-LD
 * schema + every static discoverability file pulls from here.
 */

export const SITE_URL = 'https://voilacode.com';
export const SITE_NAME = 'Voilacode';
export const ORG_LEGAL_NAME = 'Voilacode Technologies';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const DEFAULT_TITLE =
  'Voilacode — Your engineering partner for the AI era';
export const DEFAULT_DESCRIPTION =
  'Voilacode is a software consulting studio in Hyderabad, India. We build production applications across web, desktop, and mobile with AI coding agents — and author Bloom, the open-source framework behind every product we ship.';

export const KEYWORDS = [
  'software consulting studio India',
  'AI software development Hyderabad',
  'React Node.js agency',
  'custom software development',
  'AI coding agents',
  'Claude Code consulting',
  'cross-platform app development',
  'Electron desktop development',
  'Capacitor mobile development',
  'multi-tenant SaaS development',
  'Bloom framework',
  'agentic coding studio',
  'product engineering',
  'team augmentation',
  'prototype to production',
  'software engineering Hyderabad',
  'TypeScript full-stack',
  'GST compliance software',
  'AI proctoring development',
  'India software consulting',
].join(', ');

export const CONTACT_EMAIL = 'founder@voilacode.com';

export const GEO = {
  region: 'IN-TG',
  placename: 'Hyderabad',
  position: '17.4485;78.3908', // Hitech City approx
} as const;

export const FOUNDERS = [
  { name: 'Poojitha N', url: SITE_URL },
  { name: 'Krishna Teja GS', url: SITE_URL },
];

export const SOCIAL = {
  github: 'https://github.com/voilacode',
  bloomSite: 'https://dev.bloomneo.com',
};

export const ADDRESS = {
  streetAddress: 'Hitech City',
  addressLocality: 'Hyderabad',
  addressRegion: 'Telangana',
  postalCode: '500081',
  addressCountry: 'IN',
};

/** Absolute URL helper — always produces an https://voilacode.com/... URL. */
export const absoluteUrl = (path: string = '/'): string => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
};
