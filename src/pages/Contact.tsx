import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Clock, Send } from 'lucide-react';
import { SEO } from '../components';

/* EmailJS — configure via Vite env vars.
   Copy .env.example → .env.local and fill:
     VITE_EMAILJS_SERVICE_ID=...
     VITE_EMAILJS_TEMPLATE_ID=...
     VITE_EMAILJS_PUBLIC_KEY=...
   If not set, the form falls back to a mailto: handoff. */
const EMAILJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
const CONTACT_EMAIL = 'founder@voilacode.com';

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

const PROJECT_TYPES = [
  'Web application',
  'Mobile app (iOS + Android)',
  'Desktop app (Electron / Tauri)',
  'AI integration / LLM product',
  'Platform / multi-product',
  'Other',
];

const BUDGET_RANGES = ['Under $25k', '$25k – $75k', '$75k – $200k', '$200k+', 'Not sure yet'];

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

export const ContactPage: React.FC = () => {
  useReveal();
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const onChange = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      setErrorMsg('Name, email, and a short message are required.');
      return;
    }
    setStatus('sending');
    setErrorMsg('');

    try {
      if (EMAILJS_SERVICE && EMAILJS_TEMPLATE && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(
          EMAILJS_SERVICE,
          EMAILJS_TEMPLATE,
          {
            from_name: form.name,
            from_email: form.email,
            company: form.company || '—',
            project_type: form.projectType || '—',
            budget: form.budget || '—',
            message: form.message,
            to_email: CONTACT_EMAIL,
          },
          { publicKey: EMAILJS_PUBLIC_KEY }
        );
        setStatus('sent');
      } else {
        // Fallback — open the user's mail client with the message preformatted.
        const subject = `New project enquiry from ${form.name}${form.company ? ` · ${form.company}` : ''}`;
        const body = [
          `Name: ${form.name}`,
          `Email: ${form.email}`,
          `Company: ${form.company || '—'}`,
          `Project: ${form.projectType || '—'}`,
          `Budget: ${form.budget || '—'}`,
          ``,
          form.message,
        ].join('\n');
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus('sent');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please email us directly at ' + CONTACT_EMAIL + '.');
      console.error(err);
    }
  };

  /* ── input styles (inline so the page is self-contained) ── */
  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--vc-font-mono)',
    fontSize: '0.72rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--vc-muted)',
    marginBottom: '0.6rem',
  };
  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.85rem 1rem',
    background: 'var(--vc-paper-tint)',
    border: '1px solid var(--vc-line)',
    borderRadius: '4px',
    fontSize: '1rem',
    fontFamily: 'var(--vc-font-sans)',
    color: 'var(--vc-ink)',
    transition: 'border-color 160ms ease',
  };

  return (
    <>
      <SEO
        title="Contact Voilacode — Start a project"
        description="Tell us about your product — stage, scope, timeline, what's blocking you. We reply within 24 hours on business days."
      />

      {/* ─── Hero ─── */}
      <section className="vc-section" style={{ paddingTop: 'clamp(3rem, 7vw, 5.5rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <div className="vc-wrap">
          <div className="vc-reveal" style={{ maxWidth: '900px' }}>
            <span className="vc-eyebrow" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
              Get in touch · We reply within 24 hours on business days
            </span>
            <h1 className="vc-display" style={{ marginTop: '1rem', fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
              Let's build something{' '}
              <span className="vc-display-italic" style={{ color: 'var(--vc-accent)' }}>
                worth keeping
              </span>
              .
            </h1>
            <p className="vc-lead" style={{ marginTop: '1.75rem', maxWidth: '60ch' }}>
              Tell us about your product — stage, scope, timeline, what's blocking you. We read
              every message personally, and we'll come back to you within a day with honest
              thoughts on whether we're a fit.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Form + Sidebar ─── */}
      <section className="vc-section" style={{ paddingTop: 0 }}>
        <div className="vc-wrap">
          <div
            className="vc-reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)',
              gap: '4rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--vc-line)',
            }}
          >
            {/* ── Form ── */}
            <div>
              {status === 'sent' ? (
                <div
                  style={{
                    padding: '3rem 2rem',
                    textAlign: 'center',
                    background: 'var(--vc-paper-tint)',
                    border: '1px solid var(--vc-line)',
                  }}
                >
                  <CheckCircle2 size={40} color="var(--vc-accent)" style={{ margin: '0 auto 1.25rem' }} />
                  <h2
                    style={{
                      fontFamily: 'var(--vc-font-display)',
                      fontSize: '2rem',
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                      color: 'var(--vc-ink)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Message sent.
                  </h2>
                  <p style={{ color: 'var(--vc-muted)', lineHeight: 1.65, maxWidth: '44ch', margin: '0 auto' }}>
                    Thanks for reaching out. We'll read your note within the day and get back to you with next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} style={{ display: 'grid', gap: '1.75rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                      <label htmlFor="name" style={labelStyle}>Name *</label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={onChange('name')} style={inputStyle} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" style={labelStyle}>Email *</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={onChange('email')} style={inputStyle} placeholder="you@company.com" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" style={labelStyle}>Company</label>
                    <input id="company" name="company" type="text" value={form.company} onChange={onChange('company')} style={inputStyle} placeholder="Optional" />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                      <label htmlFor="projectType" style={labelStyle}>Project type</label>
                      <select id="projectType" name="projectType" value={form.projectType} onChange={onChange('projectType')} style={{ ...inputStyle, appearance: 'none', paddingRight: '2.5rem', cursor: 'pointer' }}>
                        <option value="">Select…</option>
                        {PROJECT_TYPES.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" style={labelStyle}>Budget range</label>
                      <select id="budget" name="budget" value={form.budget} onChange={onChange('budget')} style={{ ...inputStyle, appearance: 'none', paddingRight: '2.5rem', cursor: 'pointer' }}>
                        <option value="">Select…</option>
                        {BUDGET_RANGES.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" style={labelStyle}>Tell us about your project *</label>
                    <textarea id="message" name="message" required value={form.message} onChange={onChange('message')} rows={7} style={{ ...inputStyle, resize: 'vertical', fontFamily: 'var(--vc-font-sans)', lineHeight: 1.55 }} placeholder="Stage, timeline, what's blocking you, what success looks like…" />
                  </div>

                  {status === 'error' && errorMsg && (
                    <div
                      role="alert"
                      style={{
                        padding: '0.9rem 1rem',
                        background: 'var(--vc-accent-soft)',
                        border: '1px solid var(--vc-accent)',
                        color: 'var(--vc-accent-deep)',
                        fontSize: '0.92rem',
                      }}
                    >
                      {errorMsg}
                    </div>
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '0.5rem' }}>
                    <button
                      type="submit"
                      className="vc-btn vc-btn-primary"
                      disabled={status === 'sending'}
                      style={{ opacity: status === 'sending' ? 0.6 : 1, cursor: status === 'sending' ? 'progress' : 'pointer' }}
                    >
                      {status === 'sending' ? 'Sending…' : (<>Send message <Send size={16} /></>)}
                    </button>
                    <span style={{ fontSize: '0.85rem', color: 'var(--vc-muted)' }}>
                      Or email us directly at{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--vc-ink)', borderBottom: '1px solid var(--vc-ink)' }}>
                        {CONTACT_EMAIL}
                      </a>
                    </span>
                  </div>
                </form>
              )}
            </div>

            {/* ── Sidebar ── */}
            <aside style={{ display: 'grid', gap: '2rem', alignContent: 'start' }}>
              <div>
                <h3 style={labelStyle}>Email</h3>
                <a href={`mailto:${CONTACT_EMAIL}`} style={{ fontSize: '1rem', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--vc-ink)' }}>
                  <Mail size={16} /> {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <h3 style={labelStyle}>Studio</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--vc-muted)', lineHeight: 1.55, display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <MapPin size={16} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--vc-ink)' }} />
                  <span>Hitech City,<br />Hyderabad — 500081</span>
                </p>
              </div>
              <div>
                <h3 style={labelStyle}>Response time</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--vc-muted)', lineHeight: 1.55, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={16} style={{ color: 'var(--vc-ink)' }} />
                  Within 24 hours, Mon–Fri
                </p>
              </div>

              <div
                style={{
                  marginTop: '1rem',
                  padding: '1.5rem',
                  background: 'var(--vc-paper-alt)',
                  borderRadius: '4px',
                }}
              >
                <h3 style={{ ...labelStyle, marginBottom: '0.85rem' }}>What happens next</h3>
                <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.85rem' }}>
                  {[
                    'We read your message within a day and reply personally.',
                    'If there\'s a fit, we set up a 30-minute scoping call.',
                    'You get a written plan with timeline and cost — no surprises.',
                  ].map((step, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.85rem', fontSize: '0.9rem', color: 'var(--vc-muted)', lineHeight: 1.5 }}>
                      <span style={{ fontFamily: 'var(--vc-font-mono)', color: 'var(--vc-accent)', fontSize: '0.72rem', letterSpacing: '0.12em', marginTop: '2px' }}>
                        0{i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ─── Alternate channels ─── */}
      <section className="vc-section" style={{ background: 'var(--vc-paper-alt)' }}>
        <div className="vc-wrap">
          <div
            className="vc-reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="vc-eyebrow" style={{ display: 'inline-flex', marginBottom: '1rem' }}>Other channels</span>
              <h2 className="vc-h2" style={{ maxWidth: '16ch' }}>Prefer a different way to reach us?</h2>
            </div>
            <a href={`mailto:${CONTACT_EMAIL}`} className="vc-arrow-link" style={{ fontSize: '1.05rem' }}>
              <Mail size={18} /> Email direct
            </a>
            <a href="https://github.com/bloomneo" target="_blank" rel="noreferrer" className="vc-arrow-link" style={{ fontSize: '1.05rem' }}>
              <ArrowUpRight size={18} /> GitHub
            </a>
            <a href="https://dev.bloomneo.com/bloom/" target="_blank" rel="noreferrer" className="vc-arrow-link" style={{ fontSize: '1.05rem' }}>
              <ArrowUpRight size={18} /> Bloom docs
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
