# TEST REPORT — VG CONSULTANCY

**Date:** 2026-11-27  
**Target Build:** Next.js 14.2.0 production build (`npm run build`)

---

## 1. Static Analysis & Build Checks (Executed & Passed)

| Check | Command | Result | Details |
|-------|---------|--------|---------|
| TypeScript Type Check | `npx tsc --noEmit` | Passed | 0 type errors |
| Production Build & ESLint | `npm run build` | Passed | 61/61 static & dynamic build entries compiled cleanly; `next lint` passed |

## 2. Automated Live Server & SEO Verification (`verify_site.mjs`) (Executed & Passed)

Executed against `next start` production server (`http://127.0.0.1:3100`):

| Category | Scope Checked | Result |
|----------|---------------|--------|
| Indexable Routes | 48 routes | All returned `200 OK`, unique `<title>`, unique `<meta name="description">`, exact canonical URL, single `<h1>`, valid JSON-LD, valid `<img>` `alt` attributes |
| Noindex Routes | 4 routes (`/privacy-policy/`, `/terms-and-conditions/`, `/cookie-policy/`, `/404/`) | Verified `noindex` meta directive; `/404/` and unknown routes return HTTP `404` |
| Legacy `.html` Redirects | 9 redirects | All returned `308`/`301` to exact canonical destinations |
| Internal Links | 54 discovered links | 0 broken links (no 404/500) |
| Static Assets | `/images/logo.png`, `/icon.png`, `/apple-icon.png` | All returned `200 OK` |
| Sitemap & Robots | `/sitemap.xml`, `/robots.txt` | All 48 indexable routes present; 0 `noindex` routes included |
| Form API Endpoints | `/api/contact/`, `/api/consultation/`, `/api/careers/` | Verified Zod `400` rejection on invalid payloads, `200` acceptance on valid payloads, and honeypot bot filtering |
| **Total Assertions** | **830 assertions** | **830 passed, 0 failed** |

## 3. Browser & Responsive Viewport Testing Status

- **Status:** An interactive browser subagent session was initiated against `http://localhost:3101/` to inspect `360px`–`1920px` viewports and form UIs, and was explicitly canceled by the user mid-run to proceed directly to GitHub push and Cloudflare deployment.
- **Note:** Automated HTML/CSS/build checks passed completely; live visual screenshot verification across the 8 viewports was not completed due to cancellation of that subagent run.
