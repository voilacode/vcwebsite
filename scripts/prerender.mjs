#!/usr/bin/env node
/**
 * prerender.mjs — Post-build SSG via Puppeteer.
 *
 * After `vite build`, spins up a tiny static server over `dist/` (with
 * SPA fallback), visits every route we care about with headless
 * Chromium, waits for React to finish rendering, and captures the
 * fully-rendered HTML. Each route gets its own `dist/<route>/index.html`.
 *
 * Once done, GitHub Pages serves per-route HTML natively — LLM crawlers
 * + social scrapers see the baked-in per-page title / meta / JSON-LD /
 * body content without executing any JavaScript.
 *
 * Run: node scripts/prerender.mjs
 * CI:  package.json build script chains this after vite build.
 */

import { spawn } from 'node:child_process';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, '..', 'dist');
const PORT = 5555;
const BASE = `http://127.0.0.1:${PORT}`;

/* Routes to pre-render.
   Keep in sync with src/App.tsx + public/sitemap.xml. */
const ROUTES = [
  '/',
  '/work',
  '/work/fresherbot',
  '/work/askdino',
  '/work/plotmagic',
  '/work/kura',
  '/work/piofx',
  '/work/oddits',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
];

if (!existsSync(DIST)) {
  console.error(`✗ ${DIST} does not exist. Run \`vite build\` first.`);
  process.exit(1);
}

/* ── 1. Spin up a static server over dist/ with SPA fallback ─────── */

console.log(`→ Starting static server on ${BASE} ...`);
const srv = spawn('npx', ['serve', '-s', 'dist', '-l', String(PORT)], {
  stdio: ['ignore', 'pipe', 'pipe'],
  cwd: resolve(__dirname, '..'),
});

const killServer = () => {
  try { srv.kill('SIGTERM'); } catch {}
};
process.on('exit', killServer);
process.on('SIGINT', () => { killServer(); process.exit(130); });

// wait for server to be listening — poll until we get a 200
await new Promise(async (ok, fail) => {
  const deadline = Date.now() + 15000;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(BASE + '/');
      if (res.ok) return ok();
    } catch {}
    await new Promise((r) => setTimeout(r, 200));
  }
  fail(new Error('Static server never came up within 15s'));
});
console.log('✓ Server up');

/* ── 2. Launch headless Chromium ─────────────────────────────────── */

console.log('→ Launching headless Chromium ...');
const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
});
console.log('✓ Browser ready');

/* ── 3. Read the shell — we'll use its head links (CSS/JS) and fonts
         as the canonical base, then splice in each route's rendered
         <head> + <body>. Some tools preserve the full page; we capture
         puppeteer's page.content() which gives the live DOM. ───────── */

let rendered = 0;
let errors = 0;

for (const route of ROUTES) {
  const url = BASE + route;
  const page = await browser.newPage();
  page.on('console', (msg) => {
    const t = msg.type();
    if (t === 'error' || t === 'warning') {
      // surface console errors — useful if React throws during render
      console.log(`   [${route}] console.${t}: ${msg.text()}`);
    }
  });

  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 20000 });
    // React 19 + SEO component metadata hoisting is synchronous on
    // first render — but the reveal observer / font loading can push a
    // tiny bit of rendering past networkidle0. One short settle:
    await new Promise((r) => setTimeout(r, 400));

    const html = await page.content();

    // write to dist/<route>/index.html (or dist/index.html for '/')
    const outPath = route === '/'
      ? join(DIST, 'index.html')
      : join(DIST, route.slice(1), 'index.html');

    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, 'utf8');

    const size = Buffer.byteLength(html, 'utf8');
    console.log(`  ✓ ${route.padEnd(22)} → ${outPath.replace(DIST, 'dist')}  (${(size / 1024).toFixed(1)} KB)`);
    rendered++;
  } catch (err) {
    console.error(`  ✗ ${route} failed: ${err.message}`);
    errors++;
  } finally {
    await page.close();
  }
}

/* ── 4. Also refresh 404.html with the "/"-rendered shell so that
         unknown paths fall through to a fully-populated SPA shell
         instead of a bare index.html ─────────────────────────────── */
try {
  const rootHtml = await readFile(join(DIST, 'index.html'), 'utf8');
  await writeFile(join(DIST, '404.html'), rootHtml, 'utf8');
  console.log('  ✓ 404.html refreshed from rendered /');
} catch (err) {
  console.error(`  ! 404.html refresh skipped: ${err.message}`);
}

/* ── 5. Tear down ────────────────────────────────────────────────── */

await browser.close();
killServer();

console.log('');
console.log(`Pre-render complete: ${rendered} routes, ${errors} errors`);
if (errors > 0) process.exit(1);
