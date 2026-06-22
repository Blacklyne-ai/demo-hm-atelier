import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('http://localhost:4459/', { waitUntil: 'networkidle' });
await p.evaluate(() => document.fonts.ready);
await p.waitForTimeout(800);
// scroll through exhibition scenes, capture each
const scenes = await p.$$('[data-ex-scene]');
let i = 0;
for (const s of scenes) {
  await s.scrollIntoViewIfNeeded();
  await p.waitForTimeout(1400);
  await p.screenshot({ path: `docs/qa/EX-${i}.png` });
  i++;
}
console.log('exhibition scenes captured:', i);
await b.close();
