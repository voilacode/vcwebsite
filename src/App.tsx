import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/Home';
import WorkPage from './pages/Work';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import CaseStudyPage from './pages/CaseStudy';
import { PrivacyPage, TermsPage } from './pages/Legal';
import { Nav, Footer } from './components';

// Scroll-to-top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
};

const LoadingFallback: React.FC = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh',
      color: 'var(--vc-muted)',
      fontFamily: 'var(--vc-font-mono)',
      fontSize: '0.8rem',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
    }}
  >
    Loading…
  </div>
);

const NotYetBuilt: React.FC<{ title: string }> = ({ title }) => (
  <section className="vc-section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
    <div className="vc-wrap">
      <span className="vc-eyebrow" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Soon</span>
      <h1 className="vc-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>{title}</h1>
      <p className="vc-lead" style={{ margin: '1.5rem auto 0' }}>
        This page is still being built. The home page is live — start there.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/" className="vc-btn vc-btn-outline">Back to home</a>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:slug" element={<CaseStudyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotYetBuilt title="Page not found" />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
