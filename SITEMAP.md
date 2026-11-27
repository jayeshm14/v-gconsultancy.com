# SITEMAP — VG CONSULTANCY

**Base URL:** `https://v-gconsultancy.com`  
**Trailing Slash Convention:** Enabled (`trailingSlash: true`) for 1:1 parity with canonical URLs.

## Indexable Public Routes (Included in `/sitemap.xml`)

### Core Corporate (7)
- `/` (Priority `1.0`)
- `/about/`
- `/about/our-journey/`
- `/about/leadership-team/`
- `/about/our-approach/`
- `/careers/`
- `/contact/`
- `/free-consultation/`

### Services (15)
- `/services/`
- `/services/ai-automation/`
- `/services/ai-agents-assistants/`
- `/services/software-development/`
- `/services/web-ecommerce/`
- `/services/saas-development/`
- `/services/enterprise-solutions/`
- `/services/crm-erp/`
- `/services/business-integrations/`
- `/services/mobile-app-development/`
- `/services/cloud-solutions/`
- `/services/legacy-modernization/`
- `/services/it-consulting/`
- `/services/talent-staffing/`
- `/services/project-outsourcing/`

### Solutions (7)
- `/solutions/`
- `/solutions/enterprise-digital-solutions/`
- `/solutions/ai-business-automation/`
- `/solutions/customer-portals/`
- `/solutions/business-workflow-solutions/`
- `/solutions/custom-saas/`
- `/solutions/enterprise-system-integrations/`

### Industries (7)
- `/industries/`
- `/industries/healthcare/`
- `/industries/financial-services/`
- `/industries/manufacturing/`
- `/industries/retail-ecommerce/`
- `/industries/professional-services/`
- `/industries/technology-saas/`

### Portfolio & Insights (5 hubs + article detail routes)
- `/case-studies/`
- `/insights/`
- `/insights/blog/`
- `/insights/technology-guides/`
- `/insights/ai-insights/`
- `/insights/blog/[slug]/` (indexable editorial posts)
- `/insights/technology-guides/[slug]/` (indexable engineering guides)
- `/insights/ai-insights/[slug]/` (indexable AI architecture briefings)

## Non-Indexed Routes (Excluded from `/sitemap.xml`, `noindex, follow`)
- `/privacy-policy/`
- `/terms-and-conditions/`
- `/cookie-policy/`
- `/404/` (plus Next.js `not-found.tsx` serving HTTP `404` on unknown routes)

## Legacy 301/308 Redirects
- `/about.html` -> `/about/`
- `/services.html` -> `/services/`
- `/service.html` -> `/services/`
- `/portfolio.html` -> `/case-studies/`
- `/contact.html` -> `/contact/`
- `/blogs.html` -> `/insights/blog/`
- `/team.html` -> `/about/leadership-team/`
- `/404.html` -> `/404/`
- `/index.html` -> `/`
