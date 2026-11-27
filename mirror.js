// v-gconsultancy.com full offline mirror
// Downloads every real page + all external assets, rewrites all URLs to be relative/local.
import fs from 'node:fs';
import path from 'node:path';
import { URL } from 'node:url';

const ROOT = 'https://v-gconsultancy.com';
const OUT = path.resolve('mirror');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

// The 3 real pages (server returns homepage catch-all for every other route).
const PAGES = [
  { url: ROOT + '/', file: 'index.html' },
  { url: ROOT + '/about.html', file: 'about.html' },
  { url: ROOT + '/service.html', file: 'service.html' },
];

// External stylesheets referenced via <link href> (only external assets besides inline CSS).
const STYLESHEETS = [
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
];

// Internal links to pages that do NOT exist as real pages (server serves homepage for them).
// Map to index.html to match live behavior and avoid broken local links.
const REAL_PAGE_FILES = new Set(PAGES.map((p) => p.file));

fs.mkdirSync(OUT, { recursive: true });
const cssDir = path.join(OUT, 'css');
const fontDir = path.join(OUT, 'fonts');
fs.mkdirSync(cssDir, { recursive: true });
fs.mkdirSync(fontDir, { recursive: true });

let downloaded = 0;

async function fetchBuf(u) {
  const res = await fetch(u, { headers: { 'User-Agent': UA }, redirect: 'follow' });
  if (!res.ok) throw new Error(`${res.status} for ${u}`);
  return Buffer.from(await res.arrayBuffer());
}
async function fetchText(u) {
  return (await fetchBuf(u)).toString('utf8');
}

function safeName(u, prefix) {
  try {
    const p = new URL(u).pathname;
    let base = path.basename(p) || 'asset';
    if (!path.extname(base)) base += '.bin';
    const q = new URL(u).search;
    const qsafe = q ? '_' + q.replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 40) : '';
    return (prefix ? prefix + '_' : '') + base.replace(/[^a-zA-Z0-9._-]/g, '_') + qsafe;
  } catch (e) {
    return prefix || 'asset';
  }
}

async function downloadAsset(u, destDir, prefix) {
  const name = safeName(u, prefix);
  const dest = path.join(destDir, name);
  if (fs.existsSync(dest)) return name;
  const buf = await fetchBuf(u);
  fs.writeFileSync(dest, buf);
  downloaded++;
  return name;
}

// Rewrite every url(...) in a CSS file: resolve against cssUrl, download, reference ../fonts/
async function rewriteCss(cssUrl, cssFileName) {
  const cssText = await fetchText(cssUrl);
  const baseUrl = new URL(cssUrl);
  const regex = /url\(\s*['"]?([^'")]*)['"]?\s*\)/gi;
  let result = '';
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(cssText)) !== null) {
    const u = match[1];
    result += cssText.slice(lastIndex, match.index);
    result += 'url(';
    if (!u || u.startsWith('data:') || u.startsWith('#')) {
      result += u;
    } else {
      const abs = new URL(u, cssUrl).href;
      const fname = await downloadAsset(abs, fontDir, 'font');
      result += `../fonts/${fname}`;
    }
    result += ')';
    lastIndex = regex.lastIndex;
  }
  result += cssText.slice(lastIndex);
  fs.writeFileSync(path.join(cssDir, cssFileName), result, 'utf8');
  downloaded++;
  return `css/${cssFileName}`;
}

function resolveLink(href) {
  if (!href) return href;
  if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
    return href;
  }
  let isAbs = false;
  try { isAbs = new URL(href).protocol === 'http:' || new URL(href).protocol === 'https:'; } catch (e) { isAbs = false; }
  if (isAbs) return href; // external asset (handled as stylesheet)
  let h = href.replace(/^\/+/, '');
  const base = h.split('?')[0].split('#')[0];
  if (REAL_PAGE_FILES.has(base)) return base;
  return 'index.html'; // catch-all routes serve the homepage locally too
}

async function main() {
  // 1. Download + rewrite pages
  for (const pg of PAGES) {
    let html = await fetchText(pg.url);
    html = html.replace(/\bhref=(")([^"]*)(")/gi, (m, q, u, q2) => `href=${q}${resolveLink(u)}${q2}`);
    fs.writeFileSync(path.join(OUT, pg.file), html, 'utf8');
    downloaded++;
    console.log(`[page] ${pg.url} -> ${pg.file} (${html.length} bytes)`);
  }

  // 2. Download stylesheets + their fonts
  const cssLocal = {};
  for (const cssUrl of STYLESHEETS) {
    const fname = safeName(cssUrl, 'css');
    const local = await rewriteCss(cssUrl, fname);
    cssLocal[cssUrl] = local;
    console.log(`[css]  ${cssUrl} -> ${local}`);
  }

  // 3. Point each page's <link href> at the local CSS
  for (const pg of PAGES) {
    let html = fs.readFileSync(path.join(OUT, pg.file), 'utf8');
    for (const [cssUrl, local] of Object.entries(cssLocal)) {
      html = html.replace(cssUrl, local);
    }
    fs.writeFileSync(path.join(OUT, pg.file), html, 'utf8');
  }

  console.log(`\nDone. ${downloaded} resources fetched. Output: ${OUT}`);
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
