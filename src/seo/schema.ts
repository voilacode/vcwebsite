/**
 * JSON-LD schema builders — each returns a plain object that becomes
 * a `<script type="application/ld+json">` block via the <SEO> component.
 * One file so the shape of each schema is reviewable in isolation.
 */

import {
  ADDRESS,
  CONTACT_EMAIL,
  DEFAULT_DESCRIPTION,
  FOUNDERS,
  ORG_LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
  SOCIAL,
  absoluteUrl,
} from './constants';

/* ── Organization — appears on every page via index.html ── */
export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: ORG_LEGAL_NAME,
  alternateName: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl('/voilacode_logo.png'),
  image: absoluteUrl('/voilacode_logo.png'),
  email: CONTACT_EMAIL,
  foundingDate: '2023',
  description: DEFAULT_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    ...ADDRESS,
  },
  founder: FOUNDERS.map((f) => ({
    '@type': 'Person',
    name: f.name,
  })),
  sameAs: [SOCIAL.github, SOCIAL.bloomSite],
  knowsAbout: [
    'Software engineering',
    'AI-assisted software development',
    'Full-stack TypeScript',
    'React',
    'Node.js',
    'Multi-tenant SaaS',
    'Cross-platform development (Electron, Capacitor)',
    'AI agent integration',
    'Open-source frameworks',
  ],
});

/* ── LocalBusiness — strengthens India / Hyderabad local SEO ── */
export const localBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: ORG_LEGAL_NAME,
  image: absoluteUrl('/voilacode_logo.png'),
  url: SITE_URL,
  email: CONTACT_EMAIL,
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    ...ADDRESS,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.4485,
    longitude: 78.3908,
  },
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Worldwide' },
  ],
});

/* ── WebSite — appears on every page via index.html ── */
export const webSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en',
});

/* ── Breadcrumb — per-page ── */
export const breadcrumbSchema = (crumbs: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: absoluteUrl(c.path),
  })),
});

/* ── WebPage — per-page base schema ── */
export const webPageSchema = (opts: {
  name: string;
  description: string;
  path: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${absoluteUrl(opts.path)}#webpage`,
  url: absoluteUrl(opts.path),
  name: opts.name,
  description: opts.description,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  inLanguage: 'en',
});

/* ── FAQPage — for Home if we add a FAQ ── */
export const faqPageSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

/* ── CreativeWork — per case study page ── */
export const caseStudyCreativeWorkSchema = (cs: {
  slug: string;
  client: string;
  tagline: string;
  intro: string;
  year: string;
  categories: string[];
  liveUrl?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  '@id': `${absoluteUrl(`/work/${cs.slug}`)}#casestudy`,
  name: `${cs.client} — ${cs.tagline}`,
  headline: cs.tagline,
  description: cs.intro,
  datePublished: `${cs.year}-01-01`,
  creator: { '@id': `${SITE_URL}/#organization` },
  publisher: { '@id': `${SITE_URL}/#organization` },
  url: absoluteUrl(`/work/${cs.slug}`),
  ...(cs.liveUrl ? { mainEntityOfPage: cs.liveUrl } : {}),
  about: cs.categories,
  inLanguage: 'en',
});

/* ── Person — for founders on /about ── */
export const personSchema = (p: { name: string; jobTitle?: string; url?: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: p.name,
  ...(p.jobTitle ? { jobTitle: p.jobTitle } : {}),
  ...(p.url ? { url: p.url } : { url: SITE_URL }),
  worksFor: { '@id': `${SITE_URL}/#organization` },
});

/* ── Service — for the Contact page ── */
export const serviceSchema = (opts: {
  name: string;
  description: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: opts.name,
  description: opts.description,
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: { '@type': 'Country', name: 'Worldwide' },
  serviceType: 'Software engineering consulting',
});
