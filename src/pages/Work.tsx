import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES, CATEGORY_ORDER, type Category } from '../content/case-studies';
import { WorkCover } from '../components/WorkCover';
import { SEO } from '../components';

/* Filter options — "All" + the explicit categories declared on each
   case study. No regex matching; a case either lists a category or
   it doesn't. */
type Filter = 'All' | Category;
const FILTERS: Filter[] = ['All', ...CATEGORY_ORDER];

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

export const WorkPage: React.FC = () => {
  useReveal();
  const [active, setActive] = useState<Filter>('All');

  const filtered = useMemo(
    () =>
      active === 'All'
        ? CASE_STUDIES
        : CASE_STUDIES.filter((c) => c.categories.includes(active)),
    [active]
  );

  // count per filter so the pills show matches at a glance
  const counts = useMemo(() => {
    const out: Record<Filter, number> = { All: CASE_STUDIES.length } as Record<Filter, number>;
    for (const cat of CATEGORY_ORDER) {
      out[cat] = CASE_STUDIES.filter((c) => c.categories.includes(cat)).length;
    }
    return out;
  }, []);

  return (
    <>
      <SEO
        title="Work — Voilacode · Software consulting studio, case studies"
        description="Case studies from Voilacode — AI proctoring at university scale, India GST compliance, generative plot design, vertical SaaS on our own framework, and more."
      />

      {/* ─── Hero ─── */}
      <section className="vc-section" style={{ paddingTop: 'clamp(3rem, 7vw, 5.5rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <div className="vc-wrap">
          <div className="vc-reveal" style={{ maxWidth: '900px' }}>
            <span className="vc-eyebrow" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
              Case studies · {CASE_STUDIES.length} shipped
            </span>
            <h1 className="vc-display" style={{ marginTop: '1rem', fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
              Work we've engineered.
              <br />
              <span className="vc-display-italic" style={{ color: 'var(--vc-accent)' }}>
                Shipping in production today
              </span>
              .
            </h1>
            <p className="vc-lead" style={{ marginTop: '1.75rem', maxWidth: '60ch' }}>
              Every case study below is a live product. The engineering choices are the ones we'd
              make again. The scale numbers are current, not aspirational.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Filter bar ─── */}
      <section className="vc-section-tight" style={{ paddingTop: 0, paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <div className="vc-wrap">
          <div
            className="vc-reveal"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--vc-line)',
            }}
            role="tablist"
            aria-label="Filter case studies by category"
          >
            {FILTERS.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  role="tab"
                  aria-selected={isActive}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.55rem 1.1rem',
                    borderRadius: '999px',
                    border: `1px solid ${isActive ? 'var(--vc-ink)' : 'var(--vc-line)'}`,
                    background: isActive ? 'var(--vc-ink)' : 'transparent',
                    color: isActive ? 'var(--vc-paper)' : 'var(--vc-ink)',
                    fontFamily: 'var(--vc-font-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'background 160ms ease, color 160ms ease, border-color 160ms ease',
                  }}
                >
                  {cat}
                  <span
                    className="vc-mono"
                    style={{
                      fontSize: '0.65rem',
                      color: isActive ? 'rgba(237,231,243,0.55)' : 'var(--vc-muted)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {counts[cat]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Grid ─── */}
      <section className="vc-section" style={{ paddingTop: 0 }}>
        <div className="vc-wrap">
          {filtered.length === 0 ? (
            <div className="vc-reveal" style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--vc-muted)' }}>
              <p style={{ fontSize: '1.1rem' }}>No case studies in this category yet.</p>
              <button
                onClick={() => setActive('All')}
                className="vc-btn vc-btn-outline"
                style={{ marginTop: '1.5rem' }}
              >
                Show all
              </button>
            </div>
          ) : (
            <div className="vc-work-grid">
              {filtered.map((w) => (
                <Link key={w.slug} to={`/work/${w.slug}`} className="vc-work-card vc-reveal">
                  <div className="vc-work-cover">
                    <WorkCover kind={w.coverKind} />
                  </div>
                  <div className="vc-work-body">
                    <div className="vc-work-meta">
                      <span>{w.tags[0]}</span>
                      <span>{w.year}</span>
                    </div>
                    <h3 className="vc-work-title">{w.tagline}</h3>
                    <p className="vc-work-desc">{w.intro}</p>
                    <div
                      style={{
                        marginTop: '1.25rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.85rem',
                        color: 'var(--vc-ink)',
                        fontWeight: 500,
                      }}
                    >
                      {w.client} <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── Closing CTA ─── */}
      <section
        className="vc-section"
        style={{ background: 'var(--vc-paper-alt)', textAlign: 'center' }}
      >
        <div className="vc-wrap vc-reveal">
          <span className="vc-eyebrow" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>
            Yours next?
          </span>
          <h2 className="vc-h2" style={{ maxWidth: '22ch', margin: '0 auto' }}>
            Have a problem <em>worth engineering</em>?
          </h2>
          <p className="vc-lead" style={{ margin: '1.5rem auto 0' }}>
            We take on a small number of engagements each quarter. Tell us what you're building.
          </p>
          <div style={{ marginTop: '2.5rem' }}>
            <Link to="/contact" className="vc-btn vc-btn-primary">
              Start a project <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkPage;
