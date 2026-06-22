import { chromium } from 'playwright';

const targets = [
  ['https://www.vanquish-yachts.com/yachts/17881-vq40-inboard-composite', 'ref-vanquish-vq40'],
  ['https://azimutyachts.com/en/', 'ref-azimut'],
];

const b = await chromium.launch();
for (const [url, name] of targets) {
  const p = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  try {
    await p.goto(url, { waitUntil: 'load', timeout: 60000 });
    await p.waitForTimeout(4500); // let hero video / fonts / lazy images settle
    // dismiss common cookie overlays so they don't dominate the shot
    for (const sel of ['#onetrust-accept-btn-handler', 'button:has-text("Accept")', 'button:has-text("ACCEPT")', 'button:has-text("Agree")', '[aria-label="Accept"]']) {
      try { const el = await p.$(sel); if (el) { await el.click({ timeout: 1500 }); await p.waitForTimeout(800); break; } } catch {}
    }
    await p.screenshot({ path: `docs/${name}-fold.png` });
    await p.screenshot({ path: `docs/${name}-full.png`, fullPage: true });
    console.log('OK  ', name, url);
  } catch (e) {
    console.log('FAIL', name, e.message);
  }
  await p.close();
}
await b.close();
console.log('done');
