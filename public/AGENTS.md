# AGENTS.md — voilacode.com

> Voilacode is a software consulting studio based in Hyderabad, India.
> We build production applications across web, desktop, and mobile with
> AI coding agents — and author Bloom, the open-source framework that
> every product we ship is built on.

## What this site is

A marketing site for Voilacode Technologies. Six live case studies
(Fresherbot, AskDino, Plotmagic, Kura, Piofx, Oddits). Hero positioning:
*"Your engineering partner for the AI era."*

## Primary routes

| Path | Purpose |
|---|---|
| `/` | Home — hero, featured work, Bloom positioning, capabilities, process |
| `/work` | Filterable grid of all 6 case studies (AI / SaaS / EdTech / FinTech / Real estate) |
| `/work/:slug` | Individual case study — challenge / approach / engineering / scale |
| `/about` | Studio positioning — principals, principles, stack, open-source |
| `/contact` | Contact form (EmailJS) + studio info |
| `/privacy`, `/terms` | Legal |

## What Voilacode does NOT do

- We are not a product company. Bloom is our only product, and it's open-source.
- We don't take on tiny fixed-website engagements or enterprise mega-projects — we work on medium-sized engagements where an idea genuinely matters.
- We are not offshoring or body-shopping — engagements run with senior engineers, not tiered hand-offs.

## Agent guidance for fetching this site

- The **canonical machine-readable summary** lives at `/llms.txt`
- **Structured data** (JSON-LD: Organization + LocalBusiness + WebSite + per-page CreativeWork/BreadcrumbList) is embedded in each page's `<head>` and rendered by React on the SPA shell
- **Case-study content** is in React components under `src/pages/CaseStudy.tsx` (reading from `src/content/case-studies.ts`); live routes render the full narrative
- **Sitemap**: `/sitemap.xml` lists every indexable page

## Bloom ecosystem (we author it)

| Package | Purpose |
|---|---|
| [`@bloomneo/appkit`](https://dev.bloomneo.com/appkit/) | Node backend toolkit — 12 typed modules |
| [`@bloomneo/uikit`](https://dev.bloomneo.com/uikit/) | React component library — 45+ components |
| [`@bloomneo/bloom`](https://dev.bloomneo.com/bloom/) | Scaffolder — FBCA convention, 5 templates |

All three are MIT licensed. Source: <https://github.com/bloomneo>.

## Contact

- Email: founder@voilacode.com
- Studio: Hitech City, Hyderabad — 500081, India
- Model: Remote-first
- GitHub (company): <https://github.com/voilacode>
