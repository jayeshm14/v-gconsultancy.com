# SEO SPECIFICATION — VG CONSULTANCY

## 1. TECHNICAL SEO ARCHITECTURE

- **Rendering:** Next.js App Router Server Components (SSR/SSG) ensuring full HTML crawlability without client-only hydration gaps.
- **Canonical URLs:** Every page sets `alternates: { canonical: "https://v-gconsultancy.com/<path>/" }` matching `trailingSlash: true`.
- **XML Sitemap (`/sitemap.xml`):** Dynamically generated via `src/app/sitemap.ts`, listing ONLY `index, follow` canonical URLs (excluding `noindex` legal/404 pages).
- **Robots (`/robots.txt`):** Generated via `src/app/robots.ts`, allowing `/` (blocking `/api/`), referencing `https://v-gconsultancy.com/sitemap.xml`.
- **HTTP Status Codes:**
  - All valid routes: `200 OK`
  - Unknown routes: real `404 Not Found` via `src/app/not-found.tsx`
  - Legacy `.html` routes: permanent redirects (`308`/`301`) in `next.config.js`
- **Noindex Rules:** Legal pages (`/privacy-policy/`, `/terms-and-conditions/`, `/cookie-policy/`) and `/404/` carry `robots: { index: false, follow: true }`.

---

## 2. STRUCTURED DATA (JSON-LD)

| Schema Type | Applied On | Key Verified Properties |
|-------------|------------|-------------------------|
| `Organization` | Global (`layout.tsx`) | `name: "VG Consultancy"`, `url`, `foundingDate: "2016"`, `email: "info@v-gconsultancy.com"`, `logo` |
| `WebSite` | Global (`layout.tsx`) | `name`, `url`, `publisher` |
| `Service` | `/services/[slug]/` | `name`, `description`, `provider` (`VG Consultancy`), `serviceType` |
| `BreadcrumbList` | All subpages | Ordered `ListItem` trail matching visible breadcrumbs |
| `FAQPage` | Service & Industry pages | `Question` / `Answer` pairs matching visible FAQ items |
| `Article` / `BlogPosting` | `/insights/[category]/[slug]/` | `headline`, `description`, `datePublished`, `author` (`VG Consultancy Engineering Team`), `publisher` |

> **Rule:** Never emit `AggregateRating`, `Review`, or unverified `sameAs` social URLs in JSON-LD.

---

## 3. KEYWORD INTENT MAPPING

Each page targets a distinct search intent:
- `/`: AI & technology digital engineering partner
- `/services/ai-automation/`: AI automation services, intelligent workflow automation
- `/services/ai-agents-assistants/`: AI agent development, enterprise AI assistants
- `/services/software-development/`: custom software development, product engineering
- `/services/web-ecommerce/`: enterprise website development, e-commerce platforms
- `/services/saas-development/`: multi-tenant SaaS development
- `/services/crm-erp/`: CRM and ERP solutions
- `/services/business-integrations/`: business process automation, API integrations
- `/services/cloud-solutions/`: cloud migration, cloud modernization
- `/services/legacy-modernization/`: legacy application modernization
- `/services/it-consulting/`: strategic IT consulting services
- `/services/talent-staffing/`: IT recruitment and technology staffing
- `/services/project-outsourcing/`: software development outsourcing, dedicated teams
