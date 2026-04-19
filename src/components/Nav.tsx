import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
];

export const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="vc-nav">
      <div className="vc-wrap vc-nav-inner">
        <Link to="/" className="vc-nav-brand" onClick={() => setOpen(false)} aria-label="Voilacode">
          <picture>
            <source srcSet="/voilacode-logo-white.png" media="(prefers-color-scheme: dark)" />
            <img
              src="/voilacode_logo.png"
              alt="Voilacode"
              className="vc-nav-logo"
            />
          </picture>
        </Link>

        <div className="vc-nav-right">
          <ul className={`vc-nav-links${open ? ' open' : ''}`}>
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="vc-btn vc-btn-primary vc-nav-cta"
            onClick={() => setOpen(false)}
          >
            Talk to us
          </Link>

          <button
            className="vc-nav-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
