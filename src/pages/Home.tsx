import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { SEO } from '../components';
import { CASE_STUDIES } from '../content/case-studies';
import { WorkCover } from '../components/WorkCover';

/* Featured work — first 3 from the case study content file. */
const FEATURED_WORK = CASE_STUDIES.slice(0, 3);

const CAPABILITIES = [
  {
    n: '01',
    title: 'Product engineering',
    body: 'Full-stack delivery across web, desktop, and mobile — typed end-to-end, FBCA-structured, agent-reviewable.',
  },
  {
    n: '02',
    title: 'AI integration',
    body: 'LLM tool-calling, agent orchestration, RAG pipelines, evaluation harnesses — built in, not bolted on.',
  },
  {
    n: '03',
    title: 'Ops & maintenance',
    body: 'Deployment pipelines, observability, incident response, and the quiet ongoing care that keeps production healthy.',
  },
  {
    n: '04',
    title: 'Team augmentation',
    body: 'Embed senior engineers alongside your team. You keep control; we add velocity — treated like your own hires, not a vendor.',
  },
];

const PROCESS = [
  {
    n: '01',
    title: 'Scope',
    body: 'A discovery sprint where we listen, challenge assumptions, and write you a plan — scope, cost, risks. Fixed-fee. Yours to keep, even if we don\'t engage.',
  },
  {
    n: '02',
    title: 'Ship',
    body: 'Short build cycles with regular demos on working software. No waterfall, no guesswork. Every decision documented, every assumption called out, every change reviewed before it lands.',
  },
  {
    n: '03',
    title: 'Maintain',
    body: 'We stay on — deployment tuned, dependencies current, incidents triaged, roadmap conversations continued. When you take it in-house, version-matched docs + llms.txt + AGENTS.md let the next engineer join mid-stride.',
  },
];

/* ───────────────────────────── Visual ─────────────────────────────
   Pure CSS/SVG covers — no external images, no stock photos.
   Each tag ("bloom" | "helix" | "gallery" | "ai") gets a distinct
   generative visual.
────────────────────────────────────────────────────────────────── */


/* ───────────────────────────── Reveal hook ───────────────────────── */

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
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

/* ───────────────────────────── Page ───────────────────────────── */

export const HomePage: React.FC = () => {
  useReveal();

  return (
    <>
      <SEO
        title="Voilacode — Agentic software studio. The team behind Bloom."
        description="Voilacode is a software studio that ships production software across web, desktop, and mobile with AI coding agents. We make Bloom — the open-source framework we build every product on."
      />

      {/* ───────── Hero ───────── */}
      <section className="vc-section" style={{ paddingTop: 'clamp(3rem, 7vw, 5.5rem)' }}>
        <div className="vc-wrap">
          <div className="vc-reveal" style={{ maxWidth: '1000px' }}>
            <span className="vc-eyebrow" style={{ marginBottom: '1.75rem', display: 'inline-flex' }}>
              Software consulting studio · Hyderabad, India · Remote-first
            </span>
            <h1 className="vc-display" style={{ marginTop: '1.25rem' }}>
              Your engineering partner
              <br />
              for the <span className="vc-display-italic" style={{ color: 'var(--vc-accent)' }}>AI era</span>.
            </h1>
            <p className="vc-lead" style={{ marginTop: '2rem', maxWidth: '58ch' }}>
              We build production applications across web, desktop, and mobile. As an extension of
              your team — AI-native by default. Backed by{' '}
              <a
                href="https://dev.bloomneo.com/bloom/"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--vc-ink)', borderBottom: '1px solid var(--vc-ink)' }}
              >
                Bloom
              </a>
              , the open-source framework we built.
            </p>
            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="vc-btn vc-btn-primary">
                Start a project <ArrowUpRight size={16} />
              </Link>
              <Link to="/work" className="vc-btn vc-btn-ghost">
                See our work <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Ticker ───────── */}
      <section className="vc-ticker">
        <div className="vc-ticker-track">
          {Array.from({ length: 2 }).map((_, loop) => (
            <React.Fragment key={loop}>
              <span className="vc-ticker-item">Web apps</span>
              <span className="vc-ticker-item vc-ticker-dot">✦</span>
              <span className="vc-ticker-item">Desktop</span>
              <span className="vc-ticker-item vc-ticker-dot">✦</span>
              <span className="vc-ticker-item">iOS + Android</span>
              <span className="vc-ticker-item vc-ticker-dot">✦</span>
              <span className="vc-ticker-item">AI integration</span>
              <span className="vc-ticker-item vc-ticker-dot">✦</span>
              <span className="vc-ticker-item">SaaS platforms</span>
              <span className="vc-ticker-item vc-ticker-dot">✦</span>
              <span className="vc-ticker-item">Browser extensions</span>
              <span className="vc-ticker-item vc-ticker-dot">✦</span>
              <span className="vc-ticker-item">Framework work</span>
              <span className="vc-ticker-item vc-ticker-dot">✦</span>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ───────── Featured work ───────── */}
      <section className="vc-section" id="work">
        <div className="vc-wrap">
          <div
            className="vc-reveal"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', gap: '2rem', flexWrap: 'wrap' }}
          >
            <div>
              <span className="vc-eyebrow" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
                Selected work
              </span>
              <h2 className="vc-h2" style={{ marginTop: '1rem', maxWidth: '22ch' }}>
                Products we've engineered — <em>shipping in production today</em>.
              </h2>
            </div>
            <Link to="/work" className="vc-arrow-link">
              All case studies <ArrowRight size={18} />
            </Link>
          </div>

          <div className="vc-work-grid">
            {FEATURED_WORK.map((w) => (
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
                  <div style={{ marginTop: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--vc-ink)', fontWeight: 500 }}>
                    {w.client} <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Bloom positioning ───────── */}
      <section className="vc-section vc-band-dark">
        <div className="vc-wrap">
          <div className="vc-reveal vc-grid-2">
            <div>
              <span className="vc-eyebrow" style={{ color: 'var(--vc-accent)', marginBottom: '1.5rem', display: 'inline-flex' }}>
                Open-source, shipped by us
              </span>
              <h2 className="vc-h2" style={{ color: '#EDE7F3', maxWidth: '16ch' }}>
                We're the team behind <em>Bloom</em>.
              </h2>
              <p className="vc-lead" style={{ color: 'rgba(237,231,243,0.7)', marginTop: '1.75rem', maxWidth: '50ch' }}>
                Bloom is the TypeScript full-stack framework we built for the era where developers and AI coding
                agents ship software together. Every client project we take on starts from it — which means you
                inherit a stack that's typed end-to-end, drift-checked in CI, and designed so Claude Code, Cursor,
                or Copilot can extend it correctly on the first try.
              </p>
              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="https://dev.bloomneo.com/bloom/"
                  target="_blank"
                  rel="noreferrer"
                  className="vc-btn"
                  style={{ background: 'var(--vc-accent)', color: 'var(--vc-accent-ink)' }}
                >
                  Explore Bloom <ArrowUpRight size={16} />
                </a>
                <a
                  href="https://github.com/bloomneo"
                  target="_blank"
                  rel="noreferrer"
                  className="vc-btn vc-btn-outline"
                  style={{ color: '#EDE7F3', borderColor: 'rgba(237,231,243,0.3)' }}
                >
                  GitHub
                </a>
              </div>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>
              {[
                { k: '@bloomneo/appkit', v: 'Node backend toolkit · 12 typed modules · auto-scaling memory → Redis → cloud', href: 'https://dev.bloomneo.com/appkit/' },
                { k: '@bloomneo/uikit', v: 'React component library · 45+ components · 5 OKLCH themes · cross-platform', href: 'https://dev.bloomneo.com/uikit/' },
                { k: '@bloomneo/bloom', v: 'Scaffolder · FBCA convention · 5 templates · postinstall doc hydration', href: 'https://dev.bloomneo.com/bloom/' },
              ].map((p) => (
                <a
                  key={p.k}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'block',
                    padding: '1.5rem 1.75rem',
                    border: '1px solid rgba(237,231,243,0.12)',
                    transition: 'border-color 200ms ease, background 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--vc-accent)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(108,59,230,0.10)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(237,231,243,0.12)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  }}
                >
                  <div className="vc-mono" style={{ color: 'var(--vc-accent)' }}>{p.k}</div>
                  <div style={{ marginTop: '0.4rem', fontSize: '0.92rem', color: 'rgba(237,231,243,0.72)', lineHeight: 1.5 }}>{p.v}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Capabilities ───────── */}
      <section className="vc-section">
        <div className="vc-wrap">
          <div className="vc-reveal" style={{ maxWidth: '44ch', marginBottom: '3.5rem' }}>
            <span className="vc-eyebrow" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
              Capabilities
            </span>
            <h2 className="vc-h2" style={{ marginTop: '1rem' }}>
              Narrow stack. Broad shipping surface.
            </h2>
            <p className="vc-lead" style={{ marginTop: '1.5rem' }}>
              We don't list thirty services. We ship four things well — and we say no to everything else.
            </p>
          </div>

          <ul className="vc-caps vc-reveal">
            {CAPABILITIES.map((c) => (
              <li key={c.n}>
                <span className="vc-cap-num">{c.n}</span>
                <h3 className="vc-cap-title">{c.title}</h3>
                <p className="vc-cap-desc">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── Process ───────── */}
      <section
        className="vc-section"
        style={{ background: 'var(--vc-paper-alt)' }}
      >
        <div className="vc-wrap">
          <div className="vc-reveal" style={{ maxWidth: '52ch', marginBottom: '3.5rem' }}>
            <span className="vc-eyebrow" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
              How we work
            </span>
            <h2 className="vc-h2" style={{ marginTop: '1rem' }}>
              Three phases. No surprises.
            </h2>
          </div>

          <div className="vc-card-grid">
            {PROCESS.map((p) => (
              <div key={p.n} className="vc-reveal">
                <div style={{ fontFamily: 'var(--vc-font-mono)', fontSize: '0.75rem', letterSpacing: '0.16em', color: 'var(--vc-accent)', marginBottom: '1rem' }}>
                  PHASE {p.n}
                </div>
                <h3 className="vc-h3" style={{ fontFamily: 'var(--vc-font-display)', fontSize: '1.75rem', fontWeight: 500, marginBottom: '1rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--vc-muted)', lineHeight: 1.65, fontSize: '0.95rem' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Closing CTA ───────── */}
      <section className="vc-section" style={{ textAlign: 'center' }}>
        <div className="vc-wrap vc-reveal">
          <h2 className="vc-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', maxWidth: '22ch', margin: '0 auto' }}>
            Build something worth <span className="vc-display-italic" style={{ color: 'var(--vc-accent)' }}>shipping</span>.
          </h2>
          <p className="vc-lead" style={{ margin: '2rem auto 0' }}>
            Fast, typed, cross-platform — and agent-reviewable from day one.
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

export default HomePage;
