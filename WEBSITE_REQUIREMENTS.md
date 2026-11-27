# WEBSITE REQUIREMENTS SPECIFICATION — VG CONSULTANCY

**Project:** Complete Corporate Website Rebuild for VG Consultancy (`https://v-gconsultancy.com/`)  
**Version:** 2.0  
**Established:** 2016

---

## 1. BUSINESS & STRATEGIC OBJECTIVES

1. Position VG Consultancy as an established (since 2016), internationally oriented technology, AI, and digital engineering partner (`Engineering Intelligence. Enabling Growth.`).
2. Lead the narrative with **AI, intelligent automation, custom software engineering, SaaS, cloud, and enterprise systems**, while retaining **IT consulting, recruitment, staffing, and project outsourcing** as core supporting pillars.
3. Preserve recognizable brand identity (original logo, dark navy + signature gold/bronze heritage) elevated into a high-trust international corporate design.
4. Deliver a complete multi-page architecture (50+ real routes), never a homepage-only or shallow template site.
5. Enforce strict content integrity: zero fabricated clients, testimonials, awards, metrics, milestones, or offices.

---

## 2. FUNCTIONAL REQUIREMENTS

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| FR-01 | Responsive Corporate Navigation | 8 primary items (`Home`, `About Us`, `Services`, `Solutions`, `Industries`, `Case Studies`, `Insights`, `Contact`) + primary CTA (`Book a Free Consultation`), keyboard-accessible dropdowns (click + `Enter`/`Space`/`Escape` + focus management), mobile drawer across all viewports (`360px`–`1920px`). |
| FR-02 | Complete Page Inventory | All required core, service (14), solution (6), industry (6), insights (hub + 3 categories + article detail pages), case studies, consultation, legal, and 404 pages implemented with unique metadata and full content. |
| FR-03 | Homepage Narrative | Implements Hero (eyebrow, H1, supporting copy, credibility statement, dual CTAs, `Established 2016.` trust indicator), Trust Bar, 8 Services Grid, About Highlight, Why VG Consultancy (7 pillars), Technology Capabilities (5 categories), 6 Industries, 5-step How We Work, Verified 2016 Journey Summary, 4 Engagement Models, and Final CTA. |
| FR-04 | Working Forms & APIs | Contact (`/api/contact/`), Consultation (`/api/consultation/`), and Careers Enquiry (`/api/careers/`) forms with Zod client+server validation, honeypot spam protection, error/success states, and server-side email/webhook integration adapter (Resend / SMTP / Webhook via env vars, safe honest pending state when unconfigured). |
| FR-05 | Searchable Insights | `/insights/` hub supports live search and category filtering across published editorial guides and AI insights, with dedicated article routes. |
| FR-06 | Breadcrumbs & Internal Linking | Every subpage displays semantic `<nav aria-label="Breadcrumb">` navigation and cross-links to related services/solutions/CTAs. |
| FR-07 | Cookie Consent | Accessible, dismissible/configurable cookie notice persisted in `localStorage` with link to `/cookie-policy/`. |
| FR-08 | Legacy URL Migration | Permanent 301/308 redirects from legacy `.html` URLs (`/about.html`, `/services.html`, `/service.html`, `/portfolio.html`, `/contact.html`, `/blogs.html`, `/team.html`, `/404.html`, `/index.html`) to canonical destinations. |

---

## 3. NON-FUNCTIONAL REQUIREMENTS

- **SEO:** Server-rendered HTML, unique `<title>` and `<meta name="description">`, canonical URLs, `sitemap.xml` (indexable routes only), `robots.txt`, Open Graph, JSON-LD (`Organization`, `WebSite`, `Service`, `BreadcrumbList`, `FAQPage`, `Article`/`BlogPosting`), single `<h1>` per page, semantic landmarks.
- **Accessibility:** WCAG 2.2 AA compliance — >= 4.5:1 normal text contrast, >= 3:1 large text/UI contrast, visible focus rings, keyboard-only operability, `prefers-reduced-motion` support, explicit `<label htmlFor>` associations and `aria-describedby` error messages.
- **Performance:** Target LCP <= 2.5s, INP <= 200ms, CLS <= 0.1 via Next.js font optimization (`Inter` + `Manrope`), static pre-rendering of content pages, minimal client JS, zero 404 assets.
- **Security:** No client-side secrets, strict Zod payload validation, honeypot + payload-size guards, security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`).
- **Responsive Design:** Zero horizontal overflow, zero clipped text, >= 44px touch targets across `360px`, `390px`, `430px`, `768px`, `1024px`, `1280px`, `1440px`, `1920px`.
