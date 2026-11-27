# DISCOVERY REPORT — VG CONSULTANCY

**Date:** 2026-11-27  
**Source:** https://v-gconsultancy.com/ (live site mirrored locally to `/mirror/`) + existing workspace audit  
**Prepared by:** VG Consultancy Rebuild Engineering Team

---

## 1. EXISTING LIVE WEBSITE SUMMARY (`mirror/`)

| Item | Finding |
|------|---------|
| Domain | `https://v-gconsultancy.com/` |
| Company Name | VG Consultancy |
| Established | 2016 (footer: `© 2026 VG Consultancy`; tagline theme: `Technology, Talent & Innovation`) |
| Real HTML Pages | 3 distinct pages: `index.html`, `about.html`, `service.html` |
| Catch-all Behavior | Legacy URLs (`/contact.html`, `/blogs.html`, `/404.html`, `/portfolio.html`, `/team.html`, `/services.html`) all served the homepage HTML |
| Geographic Reach (Verified) | `mirror/index.html` explicitly states: *"We work with companies across India and global markets, helping them navigate change, improve efficiency, and build future-ready capabilities."* |
| External Assets | Google Fonts (`Inter`, `DM Sans`, `Manrope`), FontAwesome 6.5.0 CSS |
| Local Images | Inline base64 PNG logo (`4,319 bytes`, 88x45 display aspect) |
| CMS / Backend | None (static HTML, `mailto:` links only, no working form backend) |

## 2. VERIFIED BRAND ASSETS & CONTENT

### Logo
- Preserved original PNG at `mirror/logo-original.png` and `public/images/logo.png` (`4,319` bytes, dimensions `88x45` px).
- Used in header and footer across `index.html`, `about.html`, and `service.html`.

### Existing Colour Palette (`mirror/*.html`)
| Token | Hex | Usage |
|-------|-----|-------|
| Gold | `#DDA255` | Primary accent, gradients, CTA buttons, icons |
| Bronze | `#B88A47` | Secondary accent, kickers |
| Grey | `#7B7B77` / `#7B7B7B` | Gradient endpoint / tertiary neutral |
| Dark Navy | `#101923` | Header, footer, hero background |
| Secondary Navy | `#182638` | Dark gradient & card background |
| Light Surface | `#F7F8FA` / `#F7F6F3` | Alternating section backgrounds |

### Typography
- `Inter` (`index.html`, `service.html`)
- `DM Sans` + `Manrope` (`about.html`)

### Verified Contact Information
- Primary email: `info@vgconsultancy.com` (header & footer)
- Alternate domain email on homepage CTA: `info@v-gconsultancy.com`
- Phone number: Not present on existing site (marked TBD / Owner Confirmation Required)
- Physical office address: Not present on existing site (marked TBD / Owner Confirmation Required)
- Social profiles: LinkedIn, Facebook, Instagram links in `mirror/index.html` all pointed to `href="#"` (no verified URLs)

### Verified Existing Service Lines
1. IT Consulting & Digital Transformation
2. Recruitment & Staffing Solutions (IT & non-IT, permanent & contract)
3. AI Solutions & Intelligent Automation
4. Software Development & Web Solutions (modern websites, custom software, SaaS platforms, web applications)
5. CRM, ERP & Business Solutions (CRM, ERP, workflow integrations)
6. Project Outsourcing & EDC Services (dedicated teams, project outsourcing)

### Verified Mission, Vision & Core Values (`mirror/about.html`)
- **Mission:** Empower businesses with innovative technology, intelligent solutions, and exceptional talent across IT consulting, AI-driven automation, software development, recruitment, and outsourcing.
- **Vision:** Become a trusted global partner for technology, talent, and business transformation.
- **Core Values:** Innovation, Integrity, Partnership, Quality, Growth.

## 3. EXISTING WORKSPACE SCAFFOLD AUDIT (`src/`)

An incomplete Next.js 14.2.0 + TypeScript + Tailwind CSS scaffold already exists in `src/`. Full code inspection identified critical defects that must be repaired and upgraded:
1. **Compile/Build Failure:** `src/content/pages.ts` fails webpack compilation due to syntax errors (`q = "..."`, unquoted string at line 1325) and UTF-8 mojibake (`â€¢`, `â€”`).
2. **Tailwind/PostCSS Version Mismatch:** `package.json` includes `@tailwindcss/postcss` (Tailwind v4) alongside `tailwindcss@^3.4.0` and v3 `@tailwind` directives in `globals.css`.
3. **Broken Service Routes:** `src/app/services/*/page.tsx` queries `pages["/"].services` (which only has 8 summary objects lacking `challenges`, `capabilities`, `faqs`, etc.) instead of `serviceRoutes`, causing runtime crashes on all 14 service pages.
4. **Missing Navbar on Templates:** `ServicePageTemplate.tsx` and `SolutionPageTemplate.tsx` import `Navbar` but never render `<Navbar />`.
5. **Contrast & Typography Bugs:** `globals.css` sets `h1..h6 { @apply text-brand-ink; }`, making dark headings invisible on `#101923` dark heroes/CTAs; `Manrope` font is referenced in `tailwind.config.js` but not loaded in `layout.tsx`; `text-brand-muted` (`#64748B`) on dark `#101923` fails WCAG 2.2 AA contrast.
6. **Broken Form Handler:** `ConsultationForm.tsx` submits JSON while `/api/consultation/route.ts` calls `req.formData()`, causing a 500 error; neither form has spam protection or real email/webhook dispatch support; `/careers/` lacks an enquiry flow.
7. **HTML/JSX & Asset Bugs:** Nested `<Link>` inside `<Link>` on homepage service cards; invalid `</nz>` SVG tag; missing `/favicon.ico` and `/apple-touch-icon.png` causing 404 requests.
8. **SEO & Content Integrity Bugs:** `sitemap.ts` includes `noindex` pages; `our-journey/page.tsx` fabricates unverified milestone years (`2018`, `2020`, `2022`, `2024`); `layout.tsx` includes unverified Twitter handle `@vgconsultancy`; missing JSON-LD structured data, canonical URLs, and `not-found.tsx`; missing 2 solution routes from primary nav dropdown (`/solutions/business-workflow-solutions/`, `/solutions/enterprise-system-integrations/`).

## 4. RISKS & UNVERIFIED CLAIMS (TO EXCLUDE OR MARK CLEARLY)

| # | Item | Finding | Action |
|---|------|---------|--------|
| 1 | Statistics (`150+ clients`, `130+ projects`, `99% feedback`, `250+ coffee`) | Present on `mirror/index.html` without verifiable source | Excluded from rebuilt site |
| 2 | `"Award-Winning Agency"` | Unverified claim on `mirror/index.html` | Excluded from rebuilt site |
| 3 | Milestone years `2018`, `2020`, `2022`, `2024` | Fabricated in prior scaffold `our-journey/page.tsx` | Removed; retain verified `Established 2016` only |
| 4 | Phone, address, social URLs | Not verified on existing site | Omit dead `#` links; use `info@vgconsultancy.com`; document as pending owner input |
| 5 | Case studies & client logos | None published on existing site | Explicitly present unpublished status placeholder |
