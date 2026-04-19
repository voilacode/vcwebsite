import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components';

/* Shared layout for Privacy + Terms — long-form text pages, editorial
   single column. Content is kept as structured sections so it's easy
   to edit without touching the layout. */

type Section = { h: string; body: React.ReactNode };

const LegalLayout: React.FC<{
  title: string;
  eyebrow: string;
  intro: string;
  updated: string;
  sections: Section[];
}> = ({ title, eyebrow, intro, updated, sections }) => (
  <>
    {/* Hero */}
    <section className="vc-section" style={{ paddingTop: 'clamp(3rem, 7vw, 5.5rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
      <div className="vc-wrap" style={{ maxWidth: '800px' }}>
        <span className="vc-eyebrow" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
          {eyebrow}
        </span>
        <h1 className="vc-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginTop: '0.75rem' }}>
          {title}
        </h1>
        <p style={{ marginTop: '1.25rem', fontSize: '1.05rem', lineHeight: 1.65, color: 'var(--vc-muted)' }}>
          {intro}
        </p>
        <p
          className="vc-mono"
          style={{
            marginTop: '1.5rem',
            fontSize: '0.72rem',
            letterSpacing: '0.14em',
            color: 'var(--vc-muted)',
            textTransform: 'uppercase',
          }}
        >
          Last updated · {updated}
        </p>
      </div>
    </section>

    {/* Body */}
    <section className="vc-section" style={{ paddingTop: 0 }}>
      <div className="vc-wrap" style={{ maxWidth: '760px' }}>
        <div style={{ borderTop: '1px solid var(--vc-line)', paddingTop: '2.5rem' }}>
          {sections.map((s, i) => (
            <div
              key={i}
              style={{
                marginBottom: '2.5rem',
                paddingBottom: i < sections.length - 1 ? '2.5rem' : 0,
                borderBottom: i < sections.length - 1 ? '1px solid var(--vc-line)' : 'none',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--vc-font-display)',
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  color: 'var(--vc-ink)',
                  marginBottom: '1rem',
                }}
              >
                {s.h}
              </h2>
              <div style={{ color: 'var(--vc-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                {s.body}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--vc-line)', fontSize: '0.92rem', color: 'var(--vc-muted)' }}>
          Questions? Email us at{' '}
          <a href="mailto:founder@voilacode.com" style={{ color: 'var(--vc-ink)', borderBottom: '1px solid var(--vc-ink)' }}>
            founder@voilacode.com
          </a>
          {' '}or see our <Link to="/contact" style={{ color: 'var(--vc-ink)', borderBottom: '1px solid var(--vc-ink)' }}>contact page</Link>.
        </div>
      </div>
    </section>
  </>
);

export const PrivacyPage: React.FC = () => (
  <>
    <SEO title="Privacy Policy — Voilacode" description="How Voilacode handles personal data, cookies, and third-party services." />
    <LegalLayout
      title="Privacy Policy."
      eyebrow="Legal · Privacy"
      intro="This page explains what personal data Voilacode Technologies collects from visitors to voilacode.com, how we use it, and your rights. Short version: we collect as little as possible and never sell any of it."
      updated="19 April 2026"
      sections={[
        {
          h: 'What we collect',
          body: (
            <>
              <p>When you visit this site, we collect minimal analytics (page views, referrer, approximate region) to understand which pages help prospective clients. We do not set advertising cookies, run cross-site trackers, or fingerprint visitors.</p>
              <p style={{ marginTop: '0.75rem' }}>When you fill out our contact form, we collect the name, email, company, and message you share with us. That information lands in our inbox — no third-party CRM — and we keep it only as long as it takes to answer you and evaluate a potential engagement.</p>
            </>
          ),
        },
        {
          h: 'How we use it',
          body: (
            <p>Strictly to respond to your enquiry and, if an engagement follows, to manage that relationship. We do not add you to marketing lists. We do not share your details with partners or advertisers.</p>
          ),
        },
        {
          h: 'Third-party services',
          body: (
            <>
              <p>The site uses a handful of third-party services, each with its own privacy practices:</p>
              <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem', display: 'grid', gap: '0.4rem' }}>
                <li>EmailJS — delivers the contact form to our inbox</li>
                <li>GitHub Pages / hosting infrastructure — serves this site</li>
                <li>Anonymised site analytics (privacy-preserving)</li>
              </ul>
              <p style={{ marginTop: '0.75rem' }}>We choose vendors that process the minimum data needed and offer clear data-processing terms.</p>
            </>
          ),
        },
        {
          h: 'Your rights',
          body: (
            <p>You can ask us at any time to tell you what we hold about you, correct it, or delete it. Email <a href="mailto:founder@voilacode.com" style={{ color: 'var(--vc-ink)', borderBottom: '1px solid var(--vc-ink)' }}>founder@voilacode.com</a> and we will respond within 30 days.</p>
          ),
        },
        {
          h: 'Changes',
          body: (
            <p>If we update this policy, we will change the "Last updated" date at the top of this page. Material changes will be called out in our next direct communication with you.</p>
          ),
        },
      ]}
    />
  </>
);

export const TermsPage: React.FC = () => (
  <>
    <SEO title="Terms of Service — Voilacode" description="Terms that govern the use of voilacode.com." />
    <LegalLayout
      title="Terms of Service."
      eyebrow="Legal · Terms"
      intro="These terms cover visits to voilacode.com and use of any openly-published material on this site. Engagement-specific work is governed by a separate written agreement signed at the start of each project."
      updated="19 April 2026"
      sections={[
        {
          h: 'Site usage',
          body: (
            <p>You may browse, link to, and share the pages of this site freely. The content — essays, case studies, code samples — is for informational purposes and does not constitute a commitment or formal offer of services.</p>
          ),
        },
        {
          h: 'Project engagements',
          body: (
            <p>Any client engagement is governed by a separate written agreement (statement of work, master services agreement, or equivalent) signed by Voilacode Technologies and the client. Nothing on this site overrides or modifies that agreement.</p>
          ),
        },
        {
          h: 'Open-source work',
          body: (
            <p>Our open-source projects — including <a href="https://github.com/bloomneo" target="_blank" rel="noreferrer" style={{ color: 'var(--vc-ink)', borderBottom: '1px solid var(--vc-ink)' }}>Bloom, AppKit, and UIKit</a> — are released under the MIT License. Use them commercially, fork them, vendor them; the licence terms are in each repository.</p>
          ),
        },
        {
          h: 'Intellectual property',
          body: (
            <p>The Voilacode name, logo, and distinctive visual design are ours. Case study content, screenshots, and narratives published here remain Voilacode\'s property unless explicitly released otherwise. If you want to reference our work, we\'re happy to review and approve specific uses — just ask.</p>
          ),
        },
        {
          h: 'Limitation of liability',
          body: (
            <p>The site is provided "as is." We do our best to keep information accurate, but we are not liable for indirect, consequential, or commercial losses arising from reliance on general content. Liability for paid engagements is governed by the agreement covering that work.</p>
          ),
        },
        {
          h: 'Governing law',
          body: (
            <p>These terms are governed by the laws of India and the jurisdiction of courts in Hyderabad, Telangana, unless an engagement agreement specifies otherwise.</p>
          ),
        },
      ]}
    />
  </>
);
