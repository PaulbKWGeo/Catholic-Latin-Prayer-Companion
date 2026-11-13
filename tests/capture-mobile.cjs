// Captures evidence only. No image is automatically approved as a baseline.
const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
(async () => {
  const browser = await chromium.launch({ headless: true });
  fs.mkdirSync('visual-evidence', { recursive: true });
  const pages = ['index.html', 'reader-preview.html', 'integration-preview.html'];
  for (const file of pages) {
    if (!fs.existsSync(file)) continue;
    const page = await browser.newPage({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await page.goto('file://' + path.resolve(file), { waitUntil: 'load' });
    await page.screenshot({ path: 'visual-evidence/' + file.replace('.html', '') + '-iphone.png', fullPage: true });
    const data = await page.evaluate(() => {
      const el = document.querySelector('.hero-brand');
      const title = document.querySelector('.hero-title');
      const rect = x => x ? (() => { const r = x.getBoundingClientRect(); return { x:r.x, y:r.y, width:r.width, height:r.height }; })() : null;
      return { brand:rect(el), title:rect(title), viewport:innerWidth, pageWidth:document.documentElement.scrollWidth };
    });
    fs.writeFileSync('visual-evidence/' + file.replace('.html','') + '-layout.json', JSON.stringify(data, null, 2));
    await page.close();
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
