import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { PageLayout } from '@voilajsx/uikit/page';
import { Header, Footer, HeroSection } from './components';
import { AppRouter } from './router';

// Component to handle scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="flex items-center gap-3 text-muted-foreground">
      <div className="w-6 h-6 border-2 border-muted-foreground/30 border-t-muted-foreground rounded-full animate-spin" />
      <span>Loading page...</span>
    </div>
  </div>
);

// Layout wrapper that chooses layout based on current route
const LayoutWrapper: React.FC = () => {
  const location = useLocation();

  if (location.pathname === '/error' || location.pathname.startsWith('/error')) {
    // ErrorPage uses its own BlankLayout
    return (
      <>
        <ScrollToTop />
        <Suspense fallback={<LoadingSpinner />}>
          <AppRouter />
        </Suspense>
      </>
    );
  }

  // Default: PageLayout for all other pages
  const isHomePage = location.pathname === '/';

  return (
    <>
      <ScrollToTop />
      <PageLayout scheme="default" tone="clean" size="xl">
        <Header />
        {isHomePage && <HeroSection />}
        <PageLayout.Content>
          <Suspense fallback={<LoadingSpinner />}>
            <AppRouter />
          </Suspense>
        </PageLayout.Content>
        <Footer />
      </PageLayout>
    </>
  );
};

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;