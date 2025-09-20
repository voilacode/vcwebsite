import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import App from './App';
import './index.css';
import '@voilajsx/uikit/styles';

// Import fontsource fonts
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/playfair-display/500.css';
import '@fontsource/libre-baskerville/400.css';
import '@fontsource/libre-baskerville/700.css';
import '@fontsource/caveat/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme="vivid" mode="light" forceConfig={true}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);