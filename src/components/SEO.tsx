/**
 * SEO — per-page metadata via React 19's native metadata hoisting.
 *
 * React 19 lifts <title>, <meta>, <link>, and <script> rendered inside
 * any component into document <head> automatically — no react-helmet
 * dependency required. This component bundles the common surface:
 * title, description, canonical, OpenGraph + Twitter, and optional
 * JSON-LD blocks.
 *
 * Usage:
 *   <SEO
 *     title="About Voilacode"
 *     description="..."
 *     path="/about"
 *     jsonLd={[webPageSchema({...}), breadcrumbSchema([...])]}
 *   />
 */

import React from 'react';
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  KEYWORDS,
  SITE_NAME,
  absoluteUrl,
} from '../seo/constants';

type SEOProps = {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  keywords = KEYWORDS,
  noindex = false,
  jsonLd,
}) => {
  const canonical = absoluteUrl(path);
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* OpenGraph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD structured data */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
};

export default SEO;
