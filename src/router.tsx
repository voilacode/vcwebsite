import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Solutions from './pages/Solutions';
import Technologies from './pages/Technologies';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ErrorPage from './pages/ErrorPage';

// Simple route configuration - users can easily add/remove routes here
export const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/portfolio', component: Portfolio },
  { path: '/solutions', component: Solutions },
  { path: '/technologies', component: Technologies },
  { path: '/contact', component: Contact },
  { path: '/privacy', component: Privacy },
  { path: '/terms', component: Terms },
  { path: '/error', component: ErrorPage },
];

// Simple router - just routes, nothing else
export const AppRouter: React.FC = () => (
  <Routes>
    {routes.map(({ path, component: Component }) => (
      <Route key={path} path={path} element={<Component />} />
    ))}
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);