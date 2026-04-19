import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Fonts — minimal set: Inter for body, Playfair Display for editorial display
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/500.css';
import '@fontsource/playfair-display/400-italic.css';

const container = document.getElementById('root')!;
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// react-snap pre-renders each route to HTML at build time, injecting
// the rendered markup into <div id="root">. If we detect that markup,
// hydrate it (keeps SEO-visible HTML + makes it interactive). If the
// root is empty, we're in a dev server or a route react-snap didn't
// render — fresh render instead.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
