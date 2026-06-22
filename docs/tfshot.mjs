import { chromium } from 'playwright';
const VH = 900;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: VH } });
await p.goto('http://localhost:4459/', { waitUntil: 'networkidle' });
await p.evaluate(() => document.fonts.ready);
await p.waitForTimeout(2500);
const top = await p.evaluate(() => {
  const el = document.querySelector('[data-transform]');
  return el.getBoundingClientRect().top + window.scrollY;
});
let i = 0;
for (const s of [0.04, 0.5, 0.95]) {
  const y = top + s * VH * 2.2;
  await p.evaluate((yy) => (window.__lenis ? window.__lenis.scrollTo(yy, { immediate: true }) : window.scrollTo(0, yy)), y);
  await p.waitForTimeout(1000);
  await p.screenshot({ path: `docs/qa/TF-${i}.png` });
  i++;
}
console.log('transform shots captured');
await b.close();
