const fs = require('fs');
const path = require('path');

const solutionsDir = path.join('src', 'app', 'solutions');
const industriesDir = path.join('src', 'app', 'industries');

const solutionRoutes = [
  {
    route: "enterprise-digital-solutions",
    label: "Enterprise Digital Solutions",
    breadcrumb: [{ label: "Solutions", href: "/solutions/" }, { label: "Enterprise Digital Solutions", href: "/solutions/enterprise-digital-solutions/" }]
  },
  {
    route: "ai-business-automation",
    label: "AI-Powered Business Operations",
    breadcrumb: [{ label: "Solutions", href: "/solutions/" }, { label: "AI-Powered Business Operations", href: "/solutions/ai-business-automation/" }]
  },
  {
    route: "customer-portals",
    label: "Customer & Employee Portals",
    breadcrumb: [{ label: "Solutions", href: "/solutions/" }, { label: "Customer & Employee Portals", href: "/solutions/customer-portals/" }]
  },
  {
    route: "custom-saas",
    label: "Custom SaaS Platforms",
    breadcrumb: [{ label: "Solutions", href: "/solutions/" }, { label: "Custom SaaS Platforms", href: "/solutions/custom-saas/" }]
  },
];

const industryRoutes = [
  {
    route: "healthcare",
    label: "Healthcare & Life Sciences",
    breadcrumb: [{ label: "Industries", href: "/industries/" }, { label: "Healthcare & Life Sciences", href: "/industries/healthcare/" }]
  },
  {
    route: "financial-services",
    label: "Banking & Financial Services",
    breadcrumb: [{ label: "Industries", href: "/industries/" }, { label: "Banking & Financial Services", href: "/industries/financial-services/" }]
  },
  {
    route: "manufacturing",
    label: "Manufacturing & Industrial",
    breadcrumb: [{ label: "Industries", href: "/industries/" }, { label: "Manufacturing & Industrial", href: "/industries/manufacturing/" }]
  },
  {
    route: "retail-ecommerce",
    label: "Retail & E-Commerce",
    breadcrumb: [{ label: "Industries", href: "/industries/" }, { label: "Retail & E-Commerce", href: "/industries/retail-ecommerce/" }]
  },
  {
    route: "professional-services",
    label: "Professional Services",
    breadcrumb: [{ label: "Industries", href: "/industries/" }, { label: "Professional Services", href: "/industries/professional-services/" }]
  },
  {
    route: "technology-saas",
    label: "Technology & SaaS",
    breadcrumb: [{ label: "Industries", href: "/industries/" }, { label: "Technology & SaaS", href: "/industries/technology-saas/" }]
  },
];

function generateRouteFile(dir, routeInfo, template) {
  const filePath = path.join(dir, routeInfo.route, 'page.tsx');
  const content = template(routeInfo);
  fs.writeFileSync(filePath, content);
  console.log(`Created: ${filePath}`);
}

const solutionTemplate = (info) => `import { SolutionPage } from "@/components/sections/SolutionPageTemplate";
import { solutionRoutes } from "@/content/pages";

const solutionData = solutionRoutes.find((s: any) => s.path === "/solutions/${info.route}/");

export const metadata = {
  title: "${info.label} | VG Consultancy",
  description: "${info.label} solutions from VG Consultancy — technology, AI and digital engineering solutions.",
};

export default function Route() {
  return <SolutionPage data={solutionData} breadcrumb={${JSON.stringify(info.breadcrumb)}} />;
}
`;

const industryTemplate = (info) => `import { SolutionPage } from "@/components/sections/SolutionPageTemplate";
import { industryRoutes } from "@/content/pages";

const industryData = industryRoutes.find((s: any) => s.path === "/industries/${info.route}/");

export const metadata = {
  title: "${info.label} | VG Consultancy",
  description: "${info.label} technology solutions from VG Consultancy.",
};

export default function Route() {
  return <SolutionPage data={industryData} breadcrumb={${JSON.stringify(info.breadcrumb)}} />;
}
`;

for (const info of solutionRoutes) {
  generateRouteFile(solutionsDir, info, solutionTemplate);
}

for (const info of industryRoutes) {
  generateRouteFile(industriesDir, info, industryTemplate);
}

console.log(`\nGenerated ${solutionRoutes.length} solution routes and ${industryRoutes.length} industry routes.`);
