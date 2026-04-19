import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { SEO } from '../components';

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

const PRINCIPLES = [
  {
    n: '01',
    title: 'Trust, earned with every release.',
    body:
      'Clients stay because the code holds up, the updates arrive on Friday afternoon without drama, and the same senior engineer who started the project is the one who answers your email three years later. Trust is the deliverable — the software is just the artifact.',
  },
  {
    n: '02',
    title: 'Future-ready, not future-hyped.',
    body:
      'AI coding agents are teammates on every engagement — Claude Code, Cursor, Copilot — accelerating the work we already know how to do. But the judgment, the taste, the decisions stay with us. You get software built for the next decade, not a demo from the last one.',
  },
  {
    n: '03',
    title: 'Skill you can feel in the details.',
    body:
      'The code you inherit from us reads like documentation. Types that tell the story, errors that point at the fix, a stack your next engineer can step into without an onboarding doc. Craft isn\'t a posture. It\'s what the diff looks like on Monday morning.',
  },
  {
    n: '04',
    title: 'Reliability, baked in from day one.',
    body:
      'Auth, multi-tenancy, audit logs, error handling, observability — the things you shouldn\'t have to discover missing at 2am. Built on Bloom, our own framework, so every product you get from us starts with the invariants already in place.',
  },
  {
    n: '05',
    title: 'Built with passion. Delivered with love.',
    body:
      'Not every brief is a fit — and the ones that are, we treat like our own product. Software built with genuine care lasts longer than software built to a spec. We pick engagements where we can say yes with our whole hearts.',
  },
];

const STACK = [
  { label: 'Language', value: 'TypeScript, end-to-end' },
  { label: 'Backend', value: 'Node.js · Express · Prisma' },
  { label: 'Frontend', value: 'React · Vite · Tailwind' },
  { label: 'Framework', value: 'Bloom (we author it)' },
  { label: 'Databases', value: 'PostgreSQL · SQLite · Redis' },
  { label: 'Infra', value: 'Fly.io · AWS · Vercel' },
  { label: 'Mobile', value: 'Capacitor · React Native where required' },
  { label: 'Desktop', value: 'Electron · Tauri' },
  { label: 'AI', value: 'Anthropic · OpenAI · on-prem when needed' },
];

const FACTS = [
  { k: 'Founded', v: '2023' },
  { k: 'Based', v: 'Hyderabad, India · Remote-first' },
  { k: 'Team', v: 'Senior. Accountable. Shipping.' },
  { k: 'Engagement size', v: 'Medium — the bets that matter' },
  { k: 'Open-source', v: 'Bloom · AppKit · UIKit · MIT' },
  { k: 'Projects live', v: '6+ across web · desktop · mobile' },
];

export const AboutPage: React.FC = () => {
  useReveal();

  return (
    <>
      <SEO
        title="About Voilacode — A small studio with strong engineering opinions"
        description="Voilacode is a software consulting studio based in Hyderabad, India. We build production applications for the AI era — and author Bloom, the open-source framework behind every product we ship."
      />

      {/* ─── Hero ─── */}
      <section className="vc-section" style={{ paddingTop: 'clamp(3rem, 7vw, 5.5rem)' }}>
        <div className="vc-wrap">
          <div className="vc-reveal" style={{ maxWidth: '1000px' }}>
            <span className="vc-eyebrow" style={{ marginBottom: '1.75rem', display: 'inline-flex' }}>
              About Voilacode
            </span>
            <h1 className="vc-display" style={{ marginTop: '1.25rem' }}>
              Engineered with skill.
              <br />
              <span className="vc-display-italic" style={{ color: 'var(--vc-accent)' }}>
                Delivered with love
              </span>
              .
            </h1>
            <p className="vc-lead" style={{ marginTop: '2rem', maxWidth: '58ch' }}>
              Voilacode is a software consulting studio in Hyderabad, India. We partner with
              founders and teams on the products that shape their business — work built on trust,
              shaped by skill, and delivered with care. Engineered for the AI era on{' '}
              <a
                href="https://dev.bloomneo.com/bloom/"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--vc-ink)', borderBottom: '1px solid var(--vc-ink)' }}
              >
                Bloom
              </a>
              , the open-source framework we author.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Fact strip ─── */}
      <section className="vc-section-tight" style={{ paddingTop: 0 }}>
        <div className="vc-wrap">
          <div
            className="vc-reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 0,
              borderTop: '1px solid var(--vc-line)',
              borderBottom: '1px solid var(--vc-line)',
            }}
          >
            {FACTS.map((f, i) => (
              <div
                key={f.k}
                style={{
                  padding: '1.5rem 1.25rem 1.5rem 0',
                  borderRight: i % 3 !== 2 ? '1px solid var(--vc-line)' : 'none',
                }}
              >
                <div
                  className="vc-mono"
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--vc-muted)',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}
                >
                  {f.k}
                </div>
                <div style={{ fontFamily: 'var(--vc-font-display)', fontSize: '1.15rem', fontWeight: 500, color: 'var(--vc-ink)', lineHeight: 1.25 }}>
                  {f.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Manifesto ─── */}
      <section className="vc-section">
        <div className="vc-wrap">
          <div
            className="vc-reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            <div>
              <span className="vc-eyebrow" style={{ display: 'inline-flex' }}>
                What we believe
              </span>
            </div>
            <div>
              <p
                style={{
                  fontSize: 'clamp(1.25rem, 2.2vw, 1.5rem)',
                  lineHeight: 1.5,
                  color: 'var(--vc-ink)',
                  maxWidth: '60ch',
                  fontFamily: 'var(--vc-font-display)',
                  fontWeight: 400,
                }}
              >
                Great software isn't built once — it{' '}
                <em style={{ color: 'var(--vc-accent)' }}>keeps getting better</em> for the team
                that owns it, the customers who rely on it, the business that grows around it.
              </p>
              <p
                style={{
                  marginTop: '1.5rem',
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  color: 'var(--vc-muted)',
                  maxWidth: '60ch',
                }}
              >
                That takes more than code. It takes care, craft, and a partner who's still around
                when things change. Every product we ship is built on the framework we maintain in
                public — so what you inherit is a codebase your next engineer can read, extend, and
                trust for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Principles ─── */}
      <section className="vc-section" style={{ background: 'var(--vc-paper-alt)' }}>
        <div className="vc-wrap">
          <div className="vc-reveal" style={{ marginBottom: '3rem' }}>
            <span className="vc-eyebrow" style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
              How we work
            </span>
            <h2 className="vc-h2" style={{ marginTop: '1rem', maxWidth: '22ch' }}>
              Five principles that shape every engagement.
            </h2>
          </div>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {PRINCIPLES.map((p) => (
              <div
                key={p.n}
                className="vc-reveal"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 0.5fr) minmax(0, 3fr)',
                  gap: '2rem',
                  paddingTop: '2rem',
                  paddingBottom: '0.5rem',
                  borderTop: '1px solid var(--vc-line)',
                }}
              >
                <div>
                  <div
                    className="vc-mono"
                    style={{
                      color: 'var(--vc-accent)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.16em',
                      fontWeight: 600,
                    }}
                  >
                    {p.n}
                  </div>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--vc-font-display)',
                      fontSize: 'clamp(1.3rem, 2.2vw, 1.65rem)',
                      fontWeight: 500,
                      lineHeight: 1.2,
                      letterSpacing: '-0.01em',
                      color: 'var(--vc-ink)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ color: 'var(--vc-muted)', fontSize: '1rem', lineHeight: 1.65, maxWidth: '64ch' }}>
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stack ─── */}
      <section className="vc-section">
        <div className="vc-wrap">
          <div className="vc-reveal" style={{ marginBottom: '3rem', maxWidth: '60ch' }}>
            <span className="vc-eyebrow" style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
              Our stack
            </span>
            <h2 className="vc-h2" style={{ marginTop: '1rem' }}>
              Boring, battle-tested, carefully chosen.
            </h2>
            <p className="vc-lead" style={{ marginTop: '1.5rem' }}>
              No framework-of-the-month. We pick tools that will still be maintained in five years, and
              we open-source the glue that holds them together.
            </p>
          </div>

          <div
            className="vc-reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 0,
              borderTop: '1px solid var(--vc-line)',
            }}
          >
            {STACK.map((s) => (
              <div
                key={s.label}
                style={{
                  padding: '1.5rem 1.5rem 1.5rem 0',
                  borderBottom: '1px solid var(--vc-line)',
                }}
              >
                <div
                  className="vc-mono"
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--vc-muted)',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                  }}
                >
                  {s.label}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--vc-ink)' }}>
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bloom / open-source block ─── */}
      <section className="vc-section" style={{ background: 'var(--vc-ink)', color: 'var(--vc-paper)' }}>
        <div className="vc-wrap">
          <div
            className="vc-reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span
                className="vc-eyebrow"
                style={{ color: 'var(--vc-accent)', display: 'inline-flex', marginBottom: '1.5rem' }}
              >
                Open-source, maintained in public
              </span>
              <h2 className="vc-h2" style={{ color: 'var(--vc-paper)', marginTop: '1rem', maxWidth: '18ch' }}>
                We build <em>Bloom</em> because we needed it.
              </h2>
              <p
                className="vc-lead"
                style={{ color: 'rgba(247,245,251,0.7)', marginTop: '1.75rem', maxWidth: '52ch' }}
              >
                Every project we took on started from the same scaffold: a TypeScript fullstack app with
                auth, multi-tenancy, error handling, and AI-agent-readable docs. Eventually it was easier to
                open-source it than to keep copy-pasting. Today Bloom is the foundation of every product we
                ship — and anyone can use it.
              </p>
              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="https://dev.bloomneo.com/bloom/"
                  target="_blank"
                  rel="noreferrer"
                  className="vc-btn"
                  style={{ background: 'var(--vc-accent)', color: '#FFFFFF' }}
                >
                  Explore Bloom <ArrowUpRight size={16} />
                </a>
                <a
                  href="https://github.com/bloomneo"
                  target="_blank"
                  rel="noreferrer"
                  className="vc-btn vc-btn-outline"
                  style={{ color: 'var(--vc-paper)', borderColor: 'rgba(247,245,251,0.3)' }}
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>
              {[
                { k: '@bloomneo/appkit', v: 'Node backend toolkit · 12 typed modules' },
                { k: '@bloomneo/uikit', v: 'React component library · 45+ components · 5 themes' },
                { k: '@bloomneo/bloom', v: 'Scaffolder · FBCA convention · 5 templates' },
              ].map((p) => (
                <div
                  key={p.k}
                  style={{
                    padding: '1.25rem 1.5rem',
                    border: '1px solid rgba(247,245,251,0.12)',
                  }}
                >
                  <div className="vc-mono" style={{ color: 'var(--vc-accent)', fontSize: '0.8rem', letterSpacing: '0.04em' }}>
                    {p.k}
                  </div>
                  <div style={{ marginTop: '0.35rem', fontSize: '0.9rem', color: 'rgba(247,245,251,0.72)', lineHeight: 1.5 }}>
                    {p.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Team / founder ─── */}
      <section className="vc-section">
        <div className="vc-wrap">
          <div
            className="vc-reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            <div>
              <span className="vc-eyebrow" style={{ display: 'inline-flex' }}>
                The team
              </span>
            </div>
            <div>
              <h2 className="vc-h2" style={{ maxWidth: '22ch' }}>
                Built for ideas that matter.
              </h2>
              <p
                style={{
                  marginTop: '1.5rem',
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  color: 'var(--vc-muted)',
                  maxWidth: '62ch',
                }}
              >
                Founded in 2023 by{' '}
                <strong style={{ color: 'var(--vc-ink)' }}>Poojitha N</strong> and{' '}
                <strong style={{ color: 'var(--vc-ink)' }}>Krishna Teja GS</strong> — principals of
                the studio, accountable end-to-end. Senior engineers shipping across web, desktop,
                and mobile, backed by a bench of specialists we bring in for design, compliance,
                and native-platform work.
              </p>
              <p
                style={{
                  marginTop: '1rem',
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  color: 'var(--vc-muted)',
                  maxWidth: '62ch',
                }}
              >
                We work best on{' '}
                <strong style={{ color: 'var(--vc-ink)' }}>medium-sized engagements</strong> — the
                products founders bet the company on. Not enterprise mega-projects. Not throwaway
                MVPs. When an idea matters, we put our hearts into it.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/contact" className="vc-arrow-link">
                  Start a conversation <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Closing CTA ─── */}
      <section className="vc-section" style={{ background: 'var(--vc-paper-alt)', textAlign: 'center' }}>
        <div className="vc-wrap vc-reveal">
          <h2 className="vc-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', maxWidth: '22ch', margin: '0 auto' }}>
            Build something <span className="vc-display-italic" style={{ color: 'var(--vc-accent)' }}>worth keeping</span>.
          </h2>
          <p className="vc-lead" style={{ margin: '1.75rem auto 0' }}>
            Have an idea worth engineering? Tell us.
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

export default AboutPage;
