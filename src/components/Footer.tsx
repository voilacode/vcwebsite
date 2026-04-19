import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="vc-footer">
      <div className="vc-wrap">
        <div className="vc-footer-grid">
          <div>
            <p className="vc-eyebrow" style={{ color: '#9A9AA0', marginBottom: '1.5rem' }}>
              Let's build something
            </p>
            <h2 className="vc-footer-sig">
              Have an idea worth building?
            </h2>
            <div style={{ marginTop: '2rem' }}>
              <Link
                to="/contact"
                className="vc-btn vc-btn-primary"
                style={{ background: 'var(--vc-accent)', color: '#FFFFFF' }}
              >
                Start a project <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="vc-footer-col">
            <h4>Studio</h4>
            <ul>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="vc-footer-col">
            <h4>Ecosystem</h4>
            <ul>
              <li><a href="https://dev.bloomneo.com/bloom/" target="_blank" rel="noreferrer">Bloom framework ↗</a></li>
              <li><a href="https://dev.bloomneo.com/appkit/" target="_blank" rel="noreferrer">AppKit ↗</a></li>
              <li><a href="https://dev.bloomneo.com/uikit/" target="_blank" rel="noreferrer">UIKit ↗</a></li>
              <li><a href="https://github.com/bloomneo" target="_blank" rel="noreferrer">GitHub ↗</a></li>
            </ul>
          </div>

          <div className="vc-footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:founder@voilacode.com">founder@voilacode.com</a></li>
              <li><a href="tel:+917032309797">+91 7032309797</a></li>
              <li style={{ color: '#9A9AA0', fontSize: '0.85rem', lineHeight: 1.5 }}>
                Hitech City,<br />Hyderabad — 500081
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            paddingTop: '1.5rem',
            paddingBottom: '1rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.25rem',
            fontFamily: 'var(--vc-font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#9A9AA0',
          }}
          aria-label="Trust &amp; compliance"
        >
          <span>GDPR-aligned</span>
          <span style={{ color: '#4A4853' }}>·</span>
          <span>NDA-ready</span>
          <span style={{ color: '#4A4853' }}>·</span>
          <span>DPA on request</span>
          <span style={{ color: '#4A4853' }}>·</span>
          <span>IP assigned at delivery</span>
          <span style={{ color: '#4A4853' }}>·</span>
          <span>Open-source · MIT</span>
        </div>

        <div className="vc-footer-bottom" style={{ borderTop: 'none', paddingTop: '1rem' }}>
          <span>© {year} Voilacode Technologies — The team behind Bloom.</span>
          <span>
            <Link to="/privacy" style={{ marginRight: '1rem' }}>Privacy</Link>
            <Link to="/terms">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
