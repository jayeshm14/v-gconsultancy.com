# TEST REPORT — VG CONSULTANCY

**Date:** 2026-11-27  
**Target Builds:** Next.js 14.2.0 Node.js production build (`npm run build`) & Cloudflare Pages build (`npm run build:cloudflare`)

---

## 1. Static Analysis & Build Checks (Executed & Passed)

| Check | Command | Result | Details |
|-------|---------|--------|---------|
| TypeScript Type Check | `npx tsc --noEmit` | Passed | 0 type errors across `src/` and `functions/` |
| Node.js Production Build & ESLint | `npm run build` | Passed | 61/61 static & dynamic build entries compiled cleanly; `next lint` passed |
| Cloudflare Pages Export Build | `npm run build:cloudflare` | Passed | 58/58 static HTML/asset routes exported to `out/` + `functions/api/[[route]].ts` compiled cleanly |

## 2. Local Node.js Production Server Verification (`verify_site.mjs`)

Executed against `next start` (`http://127.0.0.1:3100`):

| Category | Scope Checked | Result |
|----------|---------------|--------|
| Indexable Routes | 48 routes | All `200 OK`, unique `<title>`, unique `<meta name="description">`, exact canonical URL, single `<h1>`, valid JSON-LD, valid `<img>` `alt` |
| Noindex & 404 Routes | 4 routes + unknown route | Verified `noindex` meta directive; `/404/` and unknown routes return HTTP `404` |
| Legacy `.html` Redirects | 9 redirects | All `308`/`301` to exact canonical destinations |
| Internal Links & Assets | 54 links + 3 icon/logo assets | 0 broken links (no 404/500) |
| Sitemap & Robots | `/sitemap.xml`, `/robots.txt` | All 48 indexable routes present; 0 `noindex` routes included |
| Form API Endpoints | `/api/contact/`, `/api/consultation/`, `/api/careers/` | Verified Zod `400` rejection on invalid payloads, `200` acceptance on valid payloads, and honeypot bot filtering |
| **Total Assertions** | **830 assertions** | **830 passed, 0 failed** |

## 3. Live Cloudflare Pages Verification (`https://vg-consultancy.pages.dev`)

Executed against live deployment (`https://4bbc18b8.vg-consultancy.pages.dev` / `https://vg-consultancy.pages.dev`):

| Category | Result | Notes |
|----------|--------|-------|
| All 48 Indexable Routes + Sitemap + Robots + Assets | Passed | 100% HTTP `200`, canonicals, JSON-LD, single `<h1>`, zero broken internal links |
| Unknown Route HTTP 404 | Passed | Unknown routes return HTTP `404` |
| Legacy `.html` Redirects (8/9 exact, `/404.html` -> `/404`) | Passed (with note) | Cloudflare Pages strips `.html` on `/404.html` -> `/404` and serves explicit `/404/` with `200` (`noindex, follow`) |
| Cloudflare Pages Functions (`/api/contact/`, `/api/consultation/`, `/api/careers/`) | Passed | Verified Zod validation (`400`), valid submissions (`200`), and honeypot filtering (`VG-SPAM-FILTERED`) |
| **Total Assertions** | **830 assertions** | **828 passed, 2 Cloudflare `/404/` static-routing differences noted above** |

## 4. Browser & Responsive Viewport Testing Status

- An interactive browser subagent audit was initiated against `http://localhost:3101/` to capture live viewport screenshots (`360px`–`1920px`) and test browser form UIs, and was explicitly canceled by the user mid-run to proceed directly to GitHub push and Cloudflare deployment.
- Live browser screenshot verification across the 8 viewports was therefore not completed.
