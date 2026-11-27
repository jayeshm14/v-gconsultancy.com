const fs = require('fs');
const path = require('path');

// Read the content config
const contentPath = path.join('src', 'content', 'pages.ts');
// We'll hardcode the service data mapping since we can't easily import TS

const serviceData = {
  "ai-automation": {
    label: "AI & Intelligent Automation",
    breadcrumb: [{ label: "Services", href: "/services/" }, { label: "AI & Intelligent Automation", href: "/services/ai-automation/" }]
  },
  "ai-agents-assistants": {
    label: "AI Agents & AI Assistants",
    breadcrumb: [{ label: "Services", href: "/services/" }, { label: "AI Agents & AI Assistants", href: "/services/ai-agents-assistants/" }]
  },
  "software-development": {
    label: "Software & Product Engineering",
    breadcrumb: [{ label: "Services", href: "/services/" }, { label: "Software & Product Engineering", href: "/services/software-development/" }]
  },
  "web-ecommerce": {
    label: "Enterprise Websites & E-Commerce",
    breadcrumb: [{ label: "Services", href: "/services/" }, { label: "Enterprise Websites & E-Commerce", href: "/services/web-ecommerce/" }]
  },
  "saas-development": {
    label: "SaaS Development",
    breadcrumb: [{ label: "Services", href: "/services/" }, { label: "SaaS Development", href: "/services/saas-development/" }]
  },
  "enterprise-solutions": {
    label: "Enterprise Applications",
    breadcrumb: [{ label: "Services", href: "/services/" }, { label: "Enterprise Applications", href: "/services/enterprise-solutions/" }]
  },
  "crm-erp": {
    label: "CRM & ERP Solutions",
    breadcrumb: [{ label: "Services", href: "/services/" }, { label: "CRM & ERP Solutions", href: "/services/crm-erp/" }]
  },
  "business-integrations": {
    label: "Business Process Automation & Integrations",
    breadcrumb: [{ label: "Services", href: "/services/" }, { label: "Business Process Automation", href: "/services/business-integrations/" }]
  },
  "mobile-app-development": {
    label: "Mobile Applications",
    breadcrumb: [{ label: "Services", href: "/services/" }, { label: "Mobile Applications", href: "/services/mobile-app-development/" }]
  },
  "cloud-solutions": {
    label: "Cloud Solutions & Legacy Modernization",
    breadcrumb: [{ label: "Services", href: "/services/" }, { label: "Cloud Solutions", href: "/services/cloud-solutions/" }]
  },
  "legacy-modernization": {
    label: "Legacy System Modernization",
    breadcrumb: [{ label: "Services", href: "/services/" }, { label: "Legacy Modernization", href: "/services/legacy-modernization/" }]
  },
  "it-consulting": {
    label: "IT Consulting",
    breadcrumb: [{ label: "Services", href: "/services/" }, { label: "IT Consulting", href: "/services/it-consulting/" }]
  },
  "talent-staffing": {
    label: "Recruitment & Staffing",
    breadcrumb: [{ label: "Services", href: "/services/" }, { label: "Recruitment & Staffing", href: "/services/talent-staffing/" }]
  },
  "project-outsourcing": {
    label: "Project Outsourcing",
    breadcrumb: [{ label: "Services", href: "/services/" }, { label: "Project Outsourcing", href: "/services/project-outsourcing/" }]
  },
};

const servicesDir = path.join('src', 'app', 'services');

for (const [routeKey, info] of Object.entries(serviceData)) {
  const dir = path.join(servicesDir, routeKey);
  const filePath = path.join(dir, 'page.tsx');
  
  const content = `import { ServicePage } from "@/components/sections/ServicePageTemplate";
import { pages } from "@/content/pages";

const serviceData = (pages["/"] as any).services.find((s: any) => s.id === "${routeKey}");

export const metadata = {
  title: "${info.label} | VG Consultancy",
  description: "${info.label} services from VG Consultancy — technology, AI and digital engineering solutions.",
};

export default function Route() {
  return <ServicePage data={serviceData} breadcrumb={${JSON.stringify(info.breadcrumb)}} />;
}
`;

  fs.writeFileSync(filePath, content);
  console.log(`Created: ${filePath}`);
}

console.log(`\nGenerated ${Object.keys(serviceData).length} service route files.`);
