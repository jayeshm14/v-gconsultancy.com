# IMPLEMENTATION PLAN — VG CONSULTANCY

## Execution Phases

1. **Phase 1 — Discovery (Completed):** Audited live mirrored site (`mirror/`) and existing partial scaffold (`src/`), documenting verified assets, broken code, and unverified claims in `DISCOVERY_REPORT.md`.
2. **Phase 2 — Specification (Completed):** Authored `WEBSITE_REQUIREMENTS.md`, `BRAND_GUIDELINES.md`, `INFORMATION_ARCHITECTURE.md`, `SITEMAP.md`, `CONTENT_SPECIFICATION.md`, `SEO_SPECIFICATION.md`, `TECHNICAL_ARCHITECTURE.md`, and `IMPLEMENTATION_PLAN.md`.
3. **Phase 3 — Design System & Core Infrastructure:**
   - Fix `postcss.config.js` / Tailwind v3 compatibility and `globals.css` surface-aware contrast tokens.
   - Load `Inter` and `Manrope` in `layout.tsx`, generate real `icon.png` / `apple-icon.png` from preserved `public/images/logo.png`, add `Organization` & `WebSite` JSON-LD.
   - Upgrade `Navbar.tsx` (keyboard accessible dropdowns, `Escape` support, responsive breakpoint without overlap at 768px/1024px) and `Footer.tsx` (complete 5-column layout, no dead `#` links).
   - Build reusable `Breadcrumbs.tsx`, `JsonLd.tsx`, `CookieConsent.tsx`, and templates (`ServicePageTemplate.tsx`, `SolutionPageTemplate.tsx`, `IndustryPageTemplate.tsx`).
4. **Phase 4 — Content & All Routes:**
   - Repair & enrich `src/content/pages.ts` (fix syntax & mojibake, add Industry FAQs, add `/solutions/business-workflow-solutions/` & `/solutions/enterprise-system-integrations/`, remove fabricated milestone years).
   - Create `src/content/insights.ts` with rich, verifiable engineering guides, blog posts, and AI insights, plus dynamic article routes and searchable `InsightsExplorer`.
   - Fix all 14 `/services/*/page.tsx` routes to load `serviceRoutes` and export canonical metadata.
   - Implement `CareersForm` + `/api/careers/`, fix `ConsultationForm` + `/api/consultation/`, upgrade `/api/contact/` with `src/lib/submissions.ts`.
   - Implement `src/app/not-found.tsx` and update `next.config.js` (`trailingSlash: true`, redirects, security headers).
5. **Phase 5 — Technical SEO Verification:**
   - Validate `sitemap.ts` (indexable routes only), `robots.ts`, canonical URLs, JSON-LD across all route types.
6. **Phase 6 — Comprehensive QA & Testing:**
   - Run `npx tsc --noEmit`, `npm run lint`, `npm run build`.
   - Start production server (`npm run start`) and execute automated verification across ALL routes (HTTP 200 checks, 404 status check, redirect status checks, SEO meta/H1/canonical/JSON-LD checks, form API validation & honeypot checks).
   - Execute real browser viewport & interactive checks across `360px`, `390px`, `430px`, `768px`, `1024px`, `1280px`, `1440px`, `1920px` (verifying zero horizontal overflow, dropdowns, mobile menu, forms, and visual polish).
7. **Phase 7 — Final Documentation:**
   - Produce `README.md`, `DEPLOYMENT_GUIDE.md`, `ENVIRONMENT_VARIABLES.md`, `SEO_CHECKLIST.md`, `ROUTE_INVENTORY.md`, `TEST_REPORT.md`, and `CONTENT_VERIFICATION_REPORT.md`.
