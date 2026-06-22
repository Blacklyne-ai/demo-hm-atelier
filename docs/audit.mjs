import { chromium } from 'playwright';
const BASE = 'http://localhost:4459';
const pages = ['/', '/work', '/craft', '/about', '/contact', '/legal', '/privacy', '/ar', '/404'];
const b = await chromium.launch();
for (const [vp, w, h, tag] of [['desktop',1440,900,'D'],['mobile',390,844,'M']]) {
  const ctx = await b.newContext({ viewport:{width:w,height:h}, reducedMotion:'reduce', deviceScaleFactor:1, isMobile: vp==='mobile' });
  for (const path of pages) {
    const p = await ctx.newPage();
    const errs=[];
    p.on('console', m=>{ if(m.type()==='error') errs.push(m.text().slice(0,80)); });
    p.on('pageerror', e=>errs.push('PAGEERR '+e.message.slice(0,80)));
    try {
      await p.goto(BASE+path,{waitUntil:'networkidle',timeout:45000});
      await p.evaluate(()=>document.fonts.ready);
      await p.evaluate(async()=>{ document.querySelectorAll('.fade-in,[data-sg-media],[data-sg-text]').forEach(e=>{e.classList.add('is-visible'); e.style.opacity='1'; e.style.transform='none';}); for(let y=0;y<document.body.scrollHeight;y+=700){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,40));} window.scrollTo(0,0); });
      await p.waitForTimeout(700);
      const ov = await p.evaluate(()=>({ sw:document.documentElement.scrollWidth, iw:window.innerWidth }));
      const overflow = ov.sw > ov.iw+1 ? `OVERFLOW ${ov.sw}>${ov.iw}` : 'ok';
      const name = path==='/'?'home':path.replace(/\//g,'')||'home';
      await p.screenshot({ path:`docs/qa/${tag}-${name}.png`, fullPage:true });
      console.log(`${tag} ${path.padEnd(10)} ${overflow}  errors:${errs.length}${errs.length?' :: '+errs.slice(0,2).join(' | '):''}`);
    } catch(e){ console.log(`${tag} ${path} FAIL ${e.message.slice(0,60)}`); }
    await p.close();
  }
  await ctx.close();
}
await b.close();
console.log('audit done');
