# TECHNICAL ARCHITECTURE — VG CONSULTANCY

## 1. TECHNOLOGY STACK

- **Framework:** Next.js 14.2.0 (App Router, TypeScript strict mode)
- **UI & Styling:** React 18.3, Tailwind CSS 3.4, custom design tokens in `globals.css` & `tailwind.config.js`
- **Icons:** `lucide-react` (tree-shaken SVG icons)
- **Fonts:** `next/font/google` (`Inter` + `Manrope` with `display: "swap"`)
- **Validation:** `zod` + `react-hook-form` (`@hookform/resolvers` or schema validation)
- **Backend APIs:** Next.js Route Handlers (`/api/contact/`, `/api/consultation/`, `/api/careers/`)

---

## 2. DIRECTORY STRUCTURE

```text
src/
  app/
    layout.tsx               # Fonts, global metadata, Organization + WebSite JSON-LD, CookieConsent
    globals.css              # Design tokens, utility classes, reduced-motion & focus styles
    page.tsx                 # Complete corporate homepage
    not-found.tsx            # HTTP 404 handler
    sitemap.ts               # Dynamic XML sitemap (indexable routes only)
    robots.ts                # Robots directives
    api/
      contact/route.ts       # Contact enquiry API
      consultation/route.ts  # Consultation booking API
      careers/route.ts       # Careers enquiry API
    about/ ...               # About, Our Journey, Leadership & Team, Our Approach
    services/ ...            # Hub + 14 dedicated service routes
    solutions/ ...           # Hub + 6 dedicated solution routes
    industries/ ...          # Hub + 6 dedicated industry routes
    insights/ ...            # Hub + Blog, Technology Guides, AI Insights + article detail routes
    case-studies/            # Case studies & engagement showcase
    careers/                 # Careers & enquiry form
    contact/                 # Contact & enquiry form
    free-consultation/       # Consultation request page & form
    privacy-policy/          # Privacy policy (noindex)
    terms-and-conditions/    # Terms & conditions (noindex)
    cookie-policy/           # Cookie policy (noindex)
    404/                     # Explicit /404/ route (noindex)
  components/
    navigation/Navbar.tsx    # Accessible desktop dropdowns + mobile drawer
    navigation/Footer.tsx    # 5-column enterprise footer
    seo/JsonLd.tsx           # Reusable JSON-LD script injector
    seo/Breadcrumbs.tsx      # Accessible breadcrumb trail + BreadcrumbList schema
    sections/                # ServicePageTemplate, SolutionPageTemplate, IndustryPageTemplate, InsightsExplorer
    forms/                   # ContactForm, ConsultationForm, CareersForm
    ui/                      # Button, CookieConsent
  content/
    pages.ts                 # Centralized site config, nav, homepage, services, solutions, industries
    insights.ts              # Structured editorial articles, technology guides & AI insights
  lib/
    seo.ts                   # Metadata & canonical URL builder
    submissions.ts           # Shared Zod validation, honeypot check, Resend/SMTP/Webhook dispatcher
    utils.ts                 # Tailwind class merge helper
```

---

## 3. FORM PROCESSING & SECURITY ARCHITECTURE

- All 3 forms (`Contact`, `Consultation`, `Careers`) validate input client-side and server-side with `zod`, include a hidden honeypot (`website` field) to reject automated bots, and submit JSON to `/api/*/`.
- `src/lib/submissions.ts` supports:
  1. **Resend API** when `RESEND_API_KEY` is configured.
  2. **Webhook Dispatch** when `FORM_WEBHOOK_URL` is configured.
  3. **Safe Pending-Config Mode** when credentials are absent in `.env.local`, returning structured `200` (with `deliveryMode: "pending_configuration"`) or explicit status so the UI transparently informs the user and documents required configuration without exposing secrets.
- Security headers configured in `next.config.js` (`X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`).
