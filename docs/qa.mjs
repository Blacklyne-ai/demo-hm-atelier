import { chromium } from 'playwright';
const BASE = 'http://localhost:4459';
const b = await chromium.launch();

const pages = ['/', '/work', '/craft', '/about', '/contact', '/legal', '/ar', '/404'];

// ── A. Full-page layout (reduced-motion → static, all sections render) ──
const ctxA = await b.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce', deviceScaleFactor: 1 });
for (const path of pages) {
  const p = await ctxA.newPage();
  const errs = [];
  p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
  p.on('pageerror', (e) => errs.push('PAGEERR: ' + e.message));
  await p.goto(BASE + path, { waitUntil: 'networkidle', timeout: 45000 });
  await p.evaluate(() => document.fonts.ready);
  // reveal all fade-ins + force lazy images to load, then scroll through
  await p.evaluate(async () => {
    document.querySelectorAll('.fade-in').forEach((e) => e.classList.add('is-visible'));
    document.querySelectorAll('img[loading="lazy"]').forEach((i) => i.setAttribute('loading', 'eager'));
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
    window.scrollTo(0, 0);
  });
  await p.waitForTimeout(900);
  const name = path === '/' ? 'home' : path.replace(/\//g, '') || 'home';
  await p.screenshot({ path: `docs/qa/D-${name}.png`, fullPage: true });
  console.log(`D-${name}  errors=${errs.length}${errs.length ? ' :: ' + errs.slice(0, 3).join(' | ') : ''}`);
  await p.close();
}
await ctxA.close();

// ── B. Live hero (normal motion) desktop + mobile ──
const ctxB = await b.newContext({ viewport: { width: 1440, height: 900 } });
const ph = await ctxB.newPage();
await ph.goto(BASE + '/', { waitUntil: 'networkidle' });
await ph.evaluate(() => document.fonts.ready);
await ph.waitForTimeout(1500);
await ph.screenshot({ path: 'docs/qa/L-hero-desktop.png' });
await ctxB.close();

const ctxM = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, deviceScaleFactor: 2 });
const pm = await ctxM.newPage();
await pm.goto(BASE + '/', { waitUntil: 'networkidle' });
await pm.evaluate(() => document.fonts.ready);
await pm.waitForTimeout(1500);
await pm.screenshot({ path: 'docs/qa/L-hero-mobile.png' });
// mobile work page full
await pm.goto(BASE + '/work', { waitUntil: 'networkidle', reducedMotion: 'reduce' });
await pm.waitForTimeout(800);
await pm.screenshot({ path: 'docs/qa/M-work.png', fullPage: true });
await ctxM.close();

await b.close();
console.log('QA done');
