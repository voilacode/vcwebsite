import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { getCaseStudy, CASE_STUDIES } from '../content/case-studies';
import { WorkCover } from '../components/WorkCover';
import { SEO } from '../components';
import { caseStudyCreativeWorkSchema, breadcrumbSchema } from '../seo/schema';

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.vc-reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

export const CaseStudyPage: React.FC = () => {
  useReveal();
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudy(slug) : undefined;

  if (!study) return <Navigate to="/work" replace />;

  const idx = CASE_STUDIES.findIndex((c) => c.slug === study.slug);
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];

  return (
    <>
      <SEO
        title={`${study.client} — ${study.tagline} · Voilacode case study`}
        description={`${study.intro} · Engineered by Voilacode, the team behind Bloom.`}
        path={`/work/${study.slug}`}
        jsonLd={[
          caseStudyCreativeWorkSchema({
            slug: study.slug,
            client: study.client,
            tagline: study.tagline,
            intro: study.intro,
            year: study.year,
            categories: study.categories,
            liveUrl: study.liveUrl,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Work', path: '/work' },
            { name: study.client, path: `/work/${study.slug}` },
          ]),
        ]}
      />

      {/* ─── Hero ─── */}
      <section className="vc-section" style={{ paddingTop: 'clamp(3rem, 7vw, 5.5rem)', paddingBottom: 0 }}>
        <div className="vc-wrap">
          <div className="vc-reveal" style={{ marginBottom: '2rem' }}>
            <Link to="/work" className="vc-eyebrow" style={{ display: 'inline-flex', textDecoration: 'none', gap: '0.5rem' }}>
              <ArrowLeft size={12} /> All work
            </Link>
          </div>

          <div className="vc-reveal" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, auto)', gap: '2rem', alignItems: 'end', marginBottom: '2.5rem' }}>
            <div>
              <div className="vc-mono" style={{ color: 'var(--vc-accent)', marginBottom: '1rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                {study.client} · {study.year}
              </div>
              <h1 className="vc-display" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', maxWidth: '22ch' }}>
                {study.tagline}
              </h1>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'flex-end' }}>
              {study.tags.map((t) => (
                <span key={t} className="vc-mono" style={{ padding: '0.4rem 0.8rem', border: '1px solid var(--vc-line)', borderRadius: '999px', fontSize: '0.72rem', letterSpacing: '0.1em', color: 'var(--vc-muted)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="vc-reveal" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--vc-line)' }}>
            <p className="vc-lead" style={{ maxWidth: 'none', marginTop: '0.5rem' }}>
              {study.intro}
            </p>
            <div style={{ display: 'grid', gap: '1.25rem' }}>
              <div>
                <div className="vc-mono" style={{ color: 'var(--vc-muted)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Role</div>
                <div style={{ marginTop: '0.35rem', fontWeight: 500 }}>{study.role}</div>
              </div>
              {study.liveUrl && (
                <div>
                  <div className="vc-mono" style={{ color: 'var(--vc-muted)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Live</div>
                  <a href={study.liveUrl} target="_blank" rel="noreferrer" className="vc-arrow-link" style={{ marginTop: '0.35rem', fontSize: '0.95rem' }}>
                    Visit site <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Cover visual ─── */}
      <section className="vc-section-tight" style={{ paddingTop: 'clamp(3rem, 5vw, 4rem)' }}>
        <div className="vc-wrap">
          <div className="vc-reveal" style={{ aspectRatio: '16 / 9', overflow: 'hidden', border: '1px solid var(--vc-line)' }}>
            <WorkCover kind={study.coverKind} />
          </div>
        </div>
      </section>

      {/* ─── Motto ─── */}
      <section className="vc-section-tight">
        <div className="vc-wrap">
          <div className="vc-reveal" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <span className="vc-eyebrow" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>
              Our thesis
            </span>
            <h2 style={{ fontFamily: 'var(--vc-font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: 1.15, letterSpacing: '-0.01em', fontWeight: 500, fontStyle: 'italic', color: 'var(--vc-ink)', marginTop: '1rem' }}>
              "{study.motto}"
            </h2>
          </div>
        </div>
      </section>

      {/* ─── Challenge ─── */}
      <section className="vc-section">
        <div className="vc-wrap">
          <div className="vc-reveal" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)', gap: '4rem' }}>
            <div>
              <span className="vc-eyebrow" style={{ display: 'inline-flex' }}>The challenge</span>
            </div>
            <p style={{ fontSize: 'clamp(1.125rem, 1.8vw, 1.35rem)', lineHeight: 1.6, color: 'var(--vc-ink)', maxWidth: '62ch' }}>
              {study.challenge}
            </p>
          </div>
        </div>
      </section>

      {/* ─── Approach ─── */}
      <section className="vc-section" style={{ background: 'var(--vc-paper-alt)' }}>
        <div className="vc-wrap">
          <div className="vc-reveal" style={{ marginBottom: '3rem' }}>
            <span className="vc-eyebrow" style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>How we approached it</span>
            <h2 className="vc-h2" style={{ marginTop: '1rem', maxWidth: '20ch' }}>
              Four decisions that shaped the product.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {study.approach.map((a, i) => (
              <div key={i} className="vc-reveal" style={{ paddingTop: '1.75rem', borderTop: '1px solid var(--vc-line)' }}>
                <div className="vc-mono" style={{ color: 'var(--vc-accent)', fontSize: '0.72rem', letterSpacing: '0.16em', marginBottom: '1rem' }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontFamily: 'var(--vc-font-display)', fontSize: '1.4rem', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: '0.85rem', color: 'var(--vc-ink)' }}>
                  {a.heading}
                </h3>
                <p style={{ color: 'var(--vc-muted)', lineHeight: 1.65, fontSize: '0.95rem' }}>
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Engineering highlight ─── */}
      <section className="vc-section vc-band-dark">
        <div className="vc-wrap">
          <div className="vc-reveal" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'start' }}>
            <div>
              <span className="vc-eyebrow" style={{ color: 'var(--vc-accent)', display: 'inline-flex', marginBottom: '1.5rem' }}>
                Engineering
              </span>
              <h2 className="vc-h2" style={{ color: '#EDE7F3', maxWidth: '18ch', marginTop: '1rem' }}>
                {study.engineering.heading}
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(237,231,243,0.72)', marginTop: '1.75rem', maxWidth: '58ch' }}>
                {study.engineering.body}
              </p>
            </div>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {study.engineering.highlights.map((h) => (
                <div key={h.label} style={{ padding: '1.25rem 1.5rem', border: '1px solid rgba(237,231,243,0.12)' }}>
                  <div className="vc-mono" style={{ color: 'var(--vc-accent)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    {h.label}
                  </div>
                  <div style={{ fontFamily: 'var(--vc-font-display)', fontSize: '1.35rem', fontWeight: 500, color: '#EDE7F3', lineHeight: 1.15 }}>
                    {h.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Scale / live note ─── */}
      <section className="vc-section-tight">
        <div className="vc-wrap">
          <div className="vc-reveal" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <span className="vc-eyebrow" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>Live today</span>
            <p style={{ fontFamily: 'var(--vc-font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.3, color: 'var(--vc-ink)', fontWeight: 500, marginTop: '1rem' }}>
              {study.scale}
            </p>
            {study.liveUrl && (
              <div style={{ marginTop: '2rem' }}>
                <a href={study.liveUrl} target="_blank" rel="noreferrer" className="vc-btn vc-btn-primary">
                  Visit {study.client} <ExternalLink size={16} />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── Next case study ─── */}
      <section className="vc-section" style={{ borderTop: '1px solid var(--vc-line)' }}>
        <div className="vc-wrap">
          <Link
            to={`/work/${next.slug}`}
            className="vc-reveal"
            style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '2rem', alignItems: 'center', padding: '1rem 0' }}
          >
            <div>
              <span className="vc-eyebrow" style={{ display: 'inline-flex', marginBottom: '1rem' }}>Next case study</span>
              <h3 style={{ fontFamily: 'var(--vc-font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--vc-ink)', marginTop: '0.5rem' }}>
                {next.client} — {next.tagline}
              </h3>
            </div>
            <div style={{ justifySelf: 'end', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--vc-accent)', fontWeight: 500 }}>
              Read next <ArrowRight size={20} />
            </div>
          </Link>
        </div>
      </section>

      {/* ─── Closing CTA ─── */}
      <section className="vc-section" style={{ background: 'var(--vc-paper-alt)', textAlign: 'center' }}>
        <div className="vc-wrap vc-reveal">
          <h2 className="vc-h2" style={{ maxWidth: '20ch', margin: '0 auto' }}>
            Have a problem worth solving?
          </h2>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/contact" className="vc-btn vc-btn-primary">
              Start a project <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyPage;
