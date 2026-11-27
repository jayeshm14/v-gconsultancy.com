# INFORMATION ARCHITECTURE — VG CONSULTANCY

## 1. PRIMARY NAVIGATION STRUCTURE

8 top-level items + 1 primary CTA button (`Book a Free Consultation` -> `/free-consultation/`):

1. **Home** (`/`)
2. **About Us** (`/about/`) — Dropdown:
   - Company Overview (`/about/`)
   - Our Journey (`/about/our-journey/`)
   - Leadership & Team (`/about/leadership-team/`)
   - Our Approach (`/about/our-approach/`)
   - Careers (`/careers/`)
3. **Services** (`/services/`) — Dropdown (13 items + hub shows all 14):
   - AI & Intelligent Automation (`/services/ai-automation/`)
   - AI Agents & AI Assistants (`/services/ai-agents-assistants/`)
   - Software & Product Engineering (`/services/software-development/`)
   - Enterprise Websites & E-Commerce (`/services/web-ecommerce/`)
   - SaaS Development (`/services/saas-development/`)
   - CRM & ERP Solutions (`/services/crm-erp/`)
   - Business Process Automation (`/services/business-integrations/`)
   - Cloud Solutions (`/services/cloud-solutions/`)
   - Legacy Modernization (`/services/legacy-modernization/`)
   - Mobile Applications (`/services/mobile-app-development/`)
   - IT Consulting (`/services/it-consulting/`)
   - Recruitment & Staffing (`/services/talent-staffing/`)
   - Project Outsourcing (`/services/project-outsourcing/`)
   *(Plus `/services/enterprise-solutions/` linked from Services Hub, Solutions, and Footer)*
4. **Solutions** (`/solutions/`) — Dropdown (6 items):
   - Enterprise Digital Solutions (`/solutions/enterprise-digital-solutions/`)
   - AI-Powered Business Operations (`/solutions/ai-business-automation/`)
   - Customer & Employee Portals (`/solutions/customer-portals/`)
   - Business Workflow Solutions (`/solutions/business-workflow-solutions/`)
   - Custom SaaS Platforms (`/solutions/custom-saas/`)
   - Enterprise System Integrations (`/solutions/enterprise-system-integrations/`)
5. **Industries** (`/industries/`) — Dropdown (6 items):
   - Healthcare & Life Sciences (`/industries/healthcare/`)
   - Banking & Financial Services (`/industries/financial-services/`)
   - Manufacturing & Industrial (`/industries/manufacturing/`)
   - Retail & E-Commerce (`/industries/retail-ecommerce/`)
   - Professional Services (`/industries/professional-services/`)
   - Technology & SaaS (`/industries/technology-saas/`)
6. **Case Studies** (`/case-studies/`)
7. **Insights** (`/insights/`) — Dropdown (4 items):
   - Blog (`/insights/blog/`)
   - Technology Guides (`/insights/technology-guides/`)
   - AI Insights (`/insights/ai-insights/`)
   - Case Studies (`/case-studies/`)
8. **Contact** (`/contact/`)

---

## 2. FOOTER ARCHITECTURE (5 COLUMNS + LEGAL BAR)

1. **Brand Summary:** Preserved logo, established 2016 statement, positioning summary, verified email (`info@vgconsultancy.com`).
2. **Services:** Key engineering, AI, cloud, consulting, and talent services.
3. **Solutions:** All 6 solution tracks.
4. **Industries:** All 6 target industry verticals.
5. **Company & Resources:** About, Journey, Leadership, Approach, Case Studies, Insights, Careers, Contact, Free Consultation.
- **Bottom Legal Bar:** `© 2016–2026 VG Consultancy. All Rights Reserved.` + Privacy Policy, Terms & Conditions, Cookie Policy.

---

## 3. BREADCRUMB & CONVERSION FLOW

- Every page below `/` includes breadcrumb navigation (`Home > Section > Current Page`) backed by `BreadcrumbList` JSON-LD.
- Every service, solution, industry, and insight page links horizontally to related capabilities and vertically to `/free-consultation/` or `/contact/`.
