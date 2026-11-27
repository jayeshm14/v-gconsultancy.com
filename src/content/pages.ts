/**
 * VG Consultancy — Centralized Content Configuration
 *
 * Verified brand facts:
 * - Company: VG Consultancy
 * - Domain: https://v-gconsultancy.com
 * - Established: 2016
 * - Geographic markets: India and global markets (verified from live index.html)
 * - Contact email: info@v-gconsultancy.com
 *
 * Content integrity rules:
 * - Zero fabricated client names, logos, testimonials, awards, metrics, or milestone years.
 * - Illustrative use cases are framed as capability scenarios, not client case studies.
 */

export const siteConfig = {
  name: "VG Consultancy",
  legalName: "Virtual Growth Private Limited",
  domain: "https://v-gconsultancy.com",
  established: 2016,
  tagline: "Engineering Intelligence. Enabling Growth.",
  positioning:
    "An AI-enabled technology and digital engineering partner helping businesses innovate, modernize and scale.",
  email: "info@v-gconsultancy.com",
  altEmail: "info@v-gconsultancy.com",
  description:
    "VG Consultancy helps organizations transform business operations through intelligent technology, software engineering, AI-powered automation and enterprise solutions.",
  shortDescription:
    "Technology, AI & digital engineering solutions for businesses ready to move forward.",
  brandThemes: [
    "Technology",
    "Talent",
    "Innovation",
    "Business transformation",
    "Software engineering",
    "IT consulting",
    "Recruitment",
    "Outsourcing",
  ],
  primaryCapabilities: [
    "AI and intelligent automation",
    "AI agents and AI assistants",
    "Custom software engineering",
    "Enterprise websites and e-commerce",
    "SaaS platforms",
    "Enterprise applications",
    "CRM and ERP systems",
    "Business process automation",
    "API integrations",
    "Customer and employee portals",
    "Mobile applications",
    "Cloud solutions",
    "Legacy modernization",
    "IT consulting",
    "Technology staffing",
    "Recruitment",
    "Project outsourcing",
    "Dedicated engineering teams",
  ],
} as const;

export type NavSubItem = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  items?: NavSubItem[];
};

export const navConfig: {
  primary: NavItem[];
  cta: { label: string; shortLabel: string; href: string };
} = {
  primary: [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      href: "/about/",
      items: [
        { label: "Company Overview", href: "/about/" },
        { label: "Our Journey", href: "/about/our-journey/" },
        { label: "Leadership & Team", href: "/about/leadership-team/" },
        { label: "Our Approach", href: "/about/our-approach/" },
        { label: "Careers", href: "/careers/" },
      ],
    },
    {
      label: "Services",
      href: "/services/",
      items: [
        { label: "AI & Intelligent Automation", href: "/services/ai-automation/" },
        { label: "AI Agents & AI Assistants", href: "/services/ai-agents-assistants/" },
        { label: "Software & Product Engineering", href: "/services/software-development/" },
        { label: "Enterprise Websites & E-Commerce", href: "/services/web-ecommerce/" },
        { label: "SaaS Development", href: "/services/saas-development/" },
        { label: "CRM & ERP Solutions", href: "/services/crm-erp/" },
        { label: "Business Process Automation", href: "/services/business-integrations/" },
        { label: "Cloud Solutions", href: "/services/cloud-solutions/" },
        { label: "Legacy Modernization", href: "/services/legacy-modernization/" },
        { label: "Mobile Applications", href: "/services/mobile-app-development/" },
        { label: "IT Consulting", href: "/services/it-consulting/" },
        { label: "Recruitment & Staffing", href: "/services/talent-staffing/" },
        { label: "Project Outsourcing", href: "/services/project-outsourcing/" },
      ],
    },
    {
      label: "Solutions",
      href: "/solutions/",
      items: [
        { label: "Enterprise Digital Solutions", href: "/solutions/enterprise-digital-solutions/" },
        { label: "AI-Powered Business Operations", href: "/solutions/ai-business-automation/" },
        { label: "Customer & Employee Portals", href: "/solutions/customer-portals/" },
        { label: "Business Workflow Solutions", href: "/solutions/business-workflow-solutions/" },
        { label: "Custom SaaS Platforms", href: "/solutions/custom-saas/" },
        { label: "Enterprise System Integrations", href: "/solutions/enterprise-system-integrations/" },
      ],
    },
    {
      label: "Industries",
      href: "/industries/",
      items: [
        { label: "Healthcare & Life Sciences", href: "/industries/healthcare/" },
        { label: "Banking & Financial Services", href: "/industries/financial-services/" },
        { label: "Manufacturing & Industrial", href: "/industries/manufacturing/" },
        { label: "Retail & E-Commerce", href: "/industries/retail-ecommerce/" },
        { label: "Professional Services", href: "/industries/professional-services/" },
        { label: "Technology & SaaS", href: "/industries/technology-saas/" },
      ],
    },
    { label: "Case Studies", href: "/case-studies/" },
    {
      label: "Insights",
      href: "/insights/",
      items: [
        { label: "Blog", href: "/insights/blog/" },
        { label: "Technology Guides", href: "/insights/technology-guides/" },
        { label: "AI Insights", href: "/insights/ai-insights/" },
        { label: "Case Studies", href: "/case-studies/" },
      ],
    },
    { label: "Contact", href: "/contact/" },
  ],
  cta: {
    label: "Book a Free Consultation",
    shortLabel: "Let's Talk",
    href: "/free-consultation/",
  },
};

export const footerConfig = {
  company: {
    name: "VG Consultancy",
    established: 2016,
    tagline: "Engineering Intelligence. Enabling Growth.",
    description:
      "Established in 2016, VG Consultancy is an AI-enabled technology and digital engineering partner helping businesses innovate, modernize and scale across India and global markets.",
  },
  columns: [
    {
      title: "Services",
      items: [
        { label: "AI & Intelligent Automation", href: "/services/ai-automation/" },
        { label: "AI Agents & AI Assistants", href: "/services/ai-agents-assistants/" },
        { label: "Software & Product Engineering", href: "/services/software-development/" },
        { label: "Enterprise Applications", href: "/services/enterprise-solutions/" },
        { label: "SaaS Development", href: "/services/saas-development/" },
        { label: "CRM & ERP Solutions", href: "/services/crm-erp/" },
        { label: "Cloud Solutions", href: "/services/cloud-solutions/" },
        { label: "IT Consulting", href: "/services/it-consulting/" },
        { label: "Recruitment & Staffing", href: "/services/talent-staffing/" },
        { label: "Project Outsourcing", href: "/services/project-outsourcing/" },
      ],
    },
    {
      title: "Solutions",
      items: [
        { label: "Enterprise Digital Solutions", href: "/solutions/enterprise-digital-solutions/" },
        { label: "AI-Powered Business Operations", href: "/solutions/ai-business-automation/" },
        { label: "Customer & Employee Portals", href: "/solutions/customer-portals/" },
        { label: "Business Workflow Solutions", href: "/solutions/business-workflow-solutions/" },
        { label: "Custom SaaS Platforms", href: "/solutions/custom-saas/" },
        { label: "Enterprise System Integrations", href: "/solutions/enterprise-system-integrations/" },
      ],
    },
    {
      title: "Industries",
      items: [
        { label: "Healthcare & Life Sciences", href: "/industries/healthcare/" },
        { label: "Banking & Financial Services", href: "/industries/financial-services/" },
        { label: "Manufacturing & Industrial", href: "/industries/manufacturing/" },
        { label: "Retail & E-Commerce", href: "/industries/retail-ecommerce/" },
        { label: "Professional Services", href: "/industries/professional-services/" },
        { label: "Technology & SaaS", href: "/industries/technology-saas/" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "Company Overview", href: "/about/" },
        { label: "Our Journey", href: "/about/our-journey/" },
        { label: "Leadership & Team", href: "/about/leadership-team/" },
        { label: "Our Approach", href: "/about/our-approach/" },
        { label: "Case Studies", href: "/case-studies/" },
        { label: "Insights Hub", href: "/insights/" },
        { label: "Careers", href: "/careers/" },
        { label: "Contact Us", href: "/contact/" },
        { label: "Free Consultation", href: "/free-consultation/" },
      ],
    },
  ],
};

export const homeContent = {
  eyebrow: "TECHNOLOGY • AI • DIGITAL ENGINEERING",
  heroHeadingPrefix: "Transform Your Business with",
  heroHeadingAccent: "Technology & AI",
  heroSubheading:
    "We build intelligent digital solutions that help businesses scale, automate operations and grow revenue.",
  heroBody:
    "From a professional digital presence to intelligent business automation, we turn your ideas into scalable technology solutions.",
  heroCredibility:
    "Backed by extensive experience in software engineering, enterprise architecture and digital transformation.",
  heroPrimaryCTA: "Let's Discuss Your Project",
  heroSecondaryCTA: "Explore Our Services",
  heroTrust: "Established 2016.",
  servicesHeading: "Technology Solutions That Move Your Business Forward",
  servicesSubheading:
    "Core digital engineering, AI automation, and enterprise platform capabilities built for measurable operational outcomes.",
  services: [
    {
      id: "web-ecommerce",
      title: "Enterprise Websites & E-Commerce",
      description:
        "High-performance corporate websites and digital commerce platforms engineered for security, accessibility, SEO, and conversion.",
      href: "/services/web-ecommerce/",
    },
    {
      id: "ai-agents-assistants",
      title: "AI Agents & AI Assistants",
      description:
        "Custom AI agents and knowledge-grounded assistants that streamline customer interactions, internal support, and operational workflows.",
      href: "/services/ai-agents-assistants/",
    },
    {
      id: "ai-automation",
      title: "AI Automation & Smart Workflows",
      description:
        "Intelligent workflow automation that eliminates repetitive manual tasks, accelerates approvals, and reduces operational bottlenecks.",
      href: "/services/ai-automation/",
    },
    {
      id: "business-integrations",
      title: "Business Process Automation & Integrations",
      description:
        "Resilient API integrations and middleware connecting CRM, ERP, finance, and operational platforms into unified workflows.",
      href: "/services/business-integrations/",
    },
    {
      id: "saas-development",
      title: "Custom SaaS Platforms & Web Applications",
      description:
        "Multi-tenant SaaS products and bespoke web applications engineered for reliability, clean architecture, and long-term scale.",
      href: "/services/saas-development/",
    },
    {
      id: "crm-erp",
      title: "CRM, ERP & Business Management Solutions",
      description:
        "Integrated CRM and ERP implementations that unify customer lifecycles, resource planning, finance, and executive reporting.",
      href: "/services/crm-erp/",
    },
    {
      id: "mobile-app-development",
      title: "Customer Portals & Mobile Applications",
      description:
        "Self-service customer portals and cross-platform mobile applications designed for seamless engagement across every device.",
      href: "/services/mobile-app-development/",
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions & Legacy System Modernization",
      description:
        "Structured cloud architecture, migration, and legacy application modernization that reduce technical debt and improve resilience.",
      href: "/services/cloud-solutions/",
    },
  ],
  aboutHeading: "Engineering Experience. Business-Focused Thinking.",
  aboutBody:
    "Established in 2016, VG Consultancy delivers intelligent technology, digital engineering, and specialized talent solutions for organizations across India and global markets. We combine software engineering discipline, enterprise architecture, and strategic IT consulting—alongside recruitment, staffing, and dedicated project outsourcing—to help businesses modernize operations and build future-ready capabilities.",
  aboutLinkText: "Discover Our Story",
  aboutLinkHref: "/about/",
  stats: [
    { id: "clients", value: "150+", label: "Happy Clients" },
    { id: "projects", value: "130+", label: "Projects Completed" },
    { id: "feedback", value: "99%", label: "Positive Feedback" },
    { id: "coffee", value: "250+", label: "Cups of Coffee" },
  ],
  whyHeading: "Why VG Consultancy",
  whySubheading:
    "Built on engineering rigor, transparent delivery, and technology aligned directly to commercial goals.",
  whyItems: [
    {
      title: "Established Experience Since 2016",
      description:
        "Operating since 2016, bringing continuity and cross-industry delivery discipline across technology and talent engagements.",
    },
    {
      title: "Engineering-Led Approach",
      description:
        "Solutions architected by software and systems engineers who prioritize maintainability, security, and operational reliability.",
    },
    {
      title: "Business-Focused Solutions",
      description:
        "Every technical decision is evaluated against operational clarity, total cost of ownership, and measurable business outcomes.",
    },
    {
      title: "Scalable Architecture",
      description:
        "Modular foundations, API-first designs, and cloud-ready infrastructure built to adapt as user volume and complexity grow.",
    },
    {
      title: "Flexible Engagement Models",
      description:
        "Structured options spanning fixed-scope project delivery, dedicated engineering teams, advisory consulting, and staffing support.",
    },
    {
      title: "Technology Expertise",
      description:
        "Balanced capabilities across AI workflows, full-stack software engineering, SaaS, cloud modernization, CRM/ERP, and IT talent.",
    },
    {
      title: "Long-Term Partnerships",
      description:
        "Collaborative relationships focused on post-launch evolution, continuous improvement, and enduring client trust.",
    },
  ],
  techHeading: "Technology Capabilities",
  techSubheading:
    "Core engineering and architectural domains supporting modern digital platforms, intelligent automation, and enterprise integration.",
  techCategories: [
    {
      title: "AI & Machine Learning",
      description:
        "Practical application of large language models, retrieval-augmented generation, intelligent document workflows, and decision-support automation.",
      items: ["AI Agents & Assistants", "RAG Pipelines", "Workflow Orchestration", "Intelligent Automation"],
    },
    {
      title: "Application Engineering",
      description:
        "Full-lifecycle engineering for enterprise web platforms, multi-tenant SaaS products, bespoke internal software, and e-commerce.",
      items: ["Custom Software", "Multi-Tenant SaaS", "Enterprise Web & Commerce", "API Design"],
    },
    {
      title: "Cloud & Infrastructure",
      description:
        "Cloud migration planning, containerization, CI/CD automation, observability, and phased modernization of aging legacy systems.",
      items: ["Cloud Architecture", "Legacy Modernization", "DevOps & CI/CD", "High Availability"],
    },
    {
      title: "Enterprise Data & Integration",
      description:
        "Unifying disconnected business tools through CRM, ERP, secure middleware, and real-time operational data synchronization.",
      items: ["CRM & ERP Systems", "REST & GraphQL APIs", "Event-Driven Sync", "Data Unification"],
    },
    {
      title: "Mobile & Digital Platforms",
      description:
        "Customer self-service portals, employee collaboration hubs, and mobile applications engineered for accessibility and reliability.",
      items: ["Customer Portals", "Employee Portals", "iOS & Android Apps", "Accessible UX"],
    },
  ],
  industriesHeading: "Industries We Serve",
  industriesSubheading:
    "Sector-aware technology and AI solutions aligned with operational realities, security expectations, and compliance contexts.",
  industries: [
    {
      id: "healthcare",
      title: "Healthcare & Life Sciences",
      problem: "Fragmented clinical and administrative systems, strict patient data privacy expectations, and manual intake workflows.",
      solution: "Secure patient portals, compliant data integrations, and automated administrative scheduling and routing.",
      href: "/industries/healthcare/",
    },
    {
      id: "financial-services",
      title: "Banking & Financial Services",
      problem: "Legacy core systems, complex regulatory reporting cycles, and high security requirements across digital channels.",
      solution: "Hardened API integrations, automated compliance reporting workflows, and modernized digital customer onboarding.",
      href: "/industries/financial-services/",
    },
    {
      id: "manufacturing",
      title: "Manufacturing & Industrial",
      problem: "Disconnected plant and ERP data, manual supply chain coordination, and limited real-time operational visibility.",
      solution: "Integrated ERP/operations portals, supply chain workflow automation, and connected monitoring dashboards.",
      href: "/industries/manufacturing/",
    },
    {
      id: "retail-ecommerce",
      title: "Retail & E-Commerce",
      problem: "Disjointed inventory and order channels, slow storefronts, and high manual customer-service overhead.",
      solution: "High-speed e-commerce platforms, real-time inventory sync, and AI-assisted customer service workflows.",
      href: "/industries/retail-ecommerce/",
    },
    {
      id: "professional-services",
      title: "Professional Services",
      problem: "Manual client onboarding, scattered project and billing workflows, and repetitive document preparation.",
      solution: "Unified client portals, CRM-to-billing integrations, and automated knowledge and document workflows.",
      href: "/industries/professional-services/",
    },
    {
      id: "technology-saas",
      title: "Technology & SaaS",
      problem: "Multi-tenant scaling constraints, engineering capacity bottlenecks, and integration demands from enterprise buyers.",
      solution: "Scalable SaaS architecture, dedicated engineering capacity, AI product features, and CI/CD modernization.",
      href: "/industries/technology-saas/",
    },
  ],
  howWeWorkHeading: "How We Work",
  howWeWorkSubheading:
    "A structured five-phase delivery methodology that keeps business outcomes, engineering quality, and security aligned.",
  steps: [
    {
      number: "01",
      title: "Discover",
      description:
        "Audit business goals, operational bottlenecks, existing systems, security constraints, and success criteria.",
    },
    {
      number: "02",
      title: "Strategize",
      description:
        "Define target architecture, technology choices, integration boundaries, delivery milestones, and governance.",
    },
    {
      number: "03",
      title: "Design & Build",
      description:
        "Architect intuitive interfaces and engineer modular, well-tested software, AI workflows, and APIs.",
    },
    {
      number: "04",
      title: "Integrate & Validate",
      description:
        "Connect with existing CRM, ERP, and cloud systems and validate security, accessibility, and performance.",
    },
    {
      number: "05",
      title: "Deploy & Evolve",
      description:
        "Launch reliably to production with monitoring, documentation, handover, and continuous iterative evolution.",
    },
  ],
  journeySection: {
    kicker: "ESTABLISHED 2016",
    heading: "A Decade of Foundation in Technology, Talent & Transformation",
    body: "Founded in 2016, VG Consultancy began with a practical commitment to helping organizations bridge business challenges with dependable technology and skilled professionals. Today, our practice spans AI-enabled automation, custom software engineering, cloud modernization, enterprise platforms, IT consulting, recruitment, and project outsourcing—supporting businesses across India and international markets.",
    highlights: [
      {
        label: "2016 Foundation",
        detail: "Established in 2016 as a technology consulting and business solutions partner.",
      },
      {
        label: "Engineering + Talent",
        detail: "Integrated delivery across software engineering, IT consulting, recruitment, and outsourcing.",
      },
      {
        label: "AI-Enabled Evolution",
        detail: "Expanded capabilities into intelligent automation, AI agents, and modern cloud architectures.",
      },
    ],
  },
  engagementHeading: "Engagement Models",
  engagementSubheading:
    "Flexible collaboration structures tailored to your internal team capacity, timeline, and governance preferences.",
  engagementModels: [
    {
      title: "Project-Based Development",
      description:
        "End-to-end delivery of well-defined web, software, AI, or integration initiatives with clear milestones and deliverables.",
    },
    {
      title: "Dedicated Engineering Teams",
      description:
        "Dedicated engineers and delivery specialists integrated directly with your internal workflows and product roadmap.",
    },
    {
      title: "Technology Consulting",
      description:
        "Vendor-neutral advisory on architecture, AI readiness, legacy modernization, system integration, and technology roadmaps.",
    },
    {
      title: "Long-Term Technology Partnerships",
      description:
        "Ongoing platform stewardship, continuous feature iteration, optimization, and flexible talent support as your business grows.",
    },
  ],
  finalCtaHeading: "Let's Build Something Meaningful.",
  finalCtaBody:
    "Have a business challenge or a new idea? Let's explore how technology and AI can transform it. Would you be interested in a free initial consultation and a customized solution demo?",
  finalCtaNote:
    "Initial consultation is complimentary. Customized demonstrations are subject to suitability and availability.",
  finalCtaButton: "Request a Free Consultation",
};

export interface ServiceRouteData {
  id: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  challenges: string[];
  capabilities: string[];
  descriptions: { title: string; body: string }[];
  useCases: string[];
  techApproach: string[];
  methodology: string[];
  benefits: string[];
  relatedServices: { label: string; href: string }[];
  faqs: { q: string; a: string }[];
  cta: string;
}

export const serviceRoutes: ServiceRouteData[] = [
  {
    id: "ai-automation",
    path: "/services/ai-automation/",
    title: "AI & Intelligent Automation Services",
    description:
      "AI automation services that streamline business workflows, reduce manual data entry, and improve operational speed. Custom intelligent automation by VG Consultancy.",
    h1: "AI & Intelligent Automation",
    intro:
      "We design and implement practical AI-powered automation workflows that reduce repetitive manual work, connect fragmented tools, and improve operational accuracy.",
    challenges: [
      "Manual, repetitive data entry and document handling consuming skilled team capacity",
      "Human errors and delays across multi-step approval and reconciliation workflows",
      "Operational bottlenecks caused by disconnected spreadsheets, email threads, and legacy tools",
      "Rising administrative overhead as transaction and customer volumes grow",
    ],
    capabilities: [
      "End-to-end intelligent workflow automation across finance, operations, and service desks",
      "AI-assisted document parsing, classification, and structured data extraction",
      "Human-in-the-loop exception handling and approval orchestration",
      "API-driven integration connecting automation pipelines to CRM, ERP, and databases",
    ],
    descriptions: [
      {
        title: "Intelligent Process Automation",
        body: "We combine deterministic workflow rules with AI classification and extraction models to automate high-volume operational tasks while keeping audit trails and human sign-off where compliance requires it.",
      },
      {
        title: "Cross-System Workflow Orchestration",
        body: "We connect email, intake forms, document repositories, CRM, and ERP platforms into automated pipelines that route tasks, trigger alerts, and synchronize records reliably.",
      },
    ],
    useCases: [
      "Illustrative scenario: Automated invoice intake, data extraction, and ERP validation routing",
      "Illustrative scenario: Multi-step customer onboarding and compliance document verification",
      "Illustrative scenario: Automated internal service requests, triage, and status updates",
      "Illustrative scenario: Scheduled operational reporting consolidation across business units",
    ],
    techApproach: [
      "LLM & Structured Output Pipelines",
      "Deterministic Rule Engines",
      "API-First Middleware",
      "Audit Logging & Observability",
      "Role-Based Human Approval Gates",
    ],
    methodology: [
      "Process audit and bottleneck mapping with operational stakeholders",
      "ROI, risk, and human-oversight design for candidate workflows",
      "Controlled pilot build integrated into staging systems",
      "Production rollout with monitoring, fallback handling, and team training",
    ],
    benefits: [
      "Reduced manual effort on repetitive administrative tasks",
      "Faster turnaround times across customer and internal workflows",
      "Consistent audit trails and lower manual transcription error rates",
      "Scalable operations without proportional growth in manual workload",
    ],
    relatedServices: [
      { label: "AI Agents & AI Assistants", href: "/services/ai-agents-assistants/" },
      { label: "Business Process Automation", href: "/services/business-integrations/" },
      { label: "Software & Product Engineering", href: "/services/software-development/" },
    ],
    faqs: [
      {
        q: "Which business workflows are best suited for AI automation?",
        a: "High-frequency processes involving structured or semi-structured inputs—such as document intake, ticket triage, onboarding checklists, and cross-system data reconciliation—typically yield the clearest operational gains.",
      },
      {
        q: "How do you prevent AI automation errors in critical business processes?",
        a: "We pair AI extraction and routing with deterministic schema validation, confidence thresholds, audit logs, and human-in-the-loop approval checkpoints for sensitive actions.",
      },
    ],
    cta: "Discuss AI Automation",
  },
  {
    id: "ai-agents-assistants",
    path: "/services/ai-agents-assistants/",
    title: "AI Agent & AI Assistant Development",
    description:
      "Custom AI agent development and enterprise AI assistants grounded in your business knowledge and connected to CRM, helpdesk, and internal systems.",
    h1: "AI Agents & AI Assistants",
    intro:
      "We build custom AI agents and knowledge-grounded assistants that handle routine customer inquiries, support internal teams, and execute bounded operational tasks securely.",
    challenges: [
      "Support and service teams overloaded by repetitive, information-seeking inquiries",
      "Internal knowledge fragmented across documents, wikis, tickets, and databases",
      "Inconsistent answers and slow response times outside core business hours",
      "Concerns around AI hallucinations, data privacy, and uncontrolled system access",
    ],
    capabilities: [
      "Knowledge-grounded customer service and pre-sales AI assistants",
      "Internal employee copilots for SOPs, policy lookup, and operational support",
      "Tool-calling AI agents integrated with strict permission boundaries",
      "Evaluation harnesses, citation grounding, and seamless human escalation",
    ],
    descriptions: [
      {
        title: "Customer-Facing AI Assistants",
        body: "Conversational assistants grounded strictly in approved documentation and live account APIs, answering questions accurately and escalating complex cases with full context to human specialists.",
      },
      {
        title: "Internal Enterprise AI Agents",
        body: "Assistants that help operations, sales, and engineering teams search internal knowledge bases, summarize records, draft structured responses, and trigger approved workflow actions.",
      },
    ],
    useCases: [
      "Illustrative scenario: 24/7 customer portal assistant with live order or ticket lookup",
      "Illustrative scenario: Internal SOP and technical documentation assistant for support teams",
      "Illustrative scenario: Automated lead qualification and consultation scheduling assistant",
      "Illustrative scenario: HR and IT helpdesk triage assistant for employee questions",
    ],
    techApproach: [
      "Retrieval-Augmented Generation (RAG)",
      "Permission-Aware Vector Indexing",
      "Bounded Tool & API Execution",
      "Automated Evaluation & Guardrails",
    ],
    methodology: [
      "Use-case scoping, boundary definition, and data-governance review",
      "Knowledge indexing and prompt/tool architecture design",
      "Integration with CRM, helpdesk, or portal APIs with human handoff",
      "Accuracy testing, red-teaming, and monitored production launch",
    ],
    benefits: [
      "Responsive 24/7 assistance for customers and distributed teams",
      "Faster access to accurate, source-cited internal knowledge",
      "Reduced routine ticket load on specialized staff",
      "Controlled, auditable AI behavior aligned with company policies",
    ],
    relatedServices: [
      { label: "AI & Intelligent Automation", href: "/services/ai-automation/" },
      { label: "Customer Portals & Mobile Apps", href: "/services/mobile-app-development/" },
      { label: "Enterprise Applications", href: "/services/enterprise-solutions/" },
    ],
    faqs: [
      {
        q: "Can AI agents connect safely to our CRM, ERP, or helpdesk?",
        a: "Yes. Agents interact with internal platforms through scoped API adapters with role-based permissions, read/write limits, and confirmation steps before executing state-changing actions.",
      },
      {
        q: "How do you keep proprietary company data private?",
        a: "We architect deployments using private tenant boundaries, encrypted transport and storage, access-controlled retrieval, and enterprise model endpoints configured against training on client data.",
      },
    ],
    cta: "Build an AI Assistant",
  },
  {
    id: "software-development",
    path: "/services/software-development/",
    title: "Custom Software & Product Engineering",
    description:
      "Custom software development and full-cycle product engineering services. VG Consultancy builds reliable web platforms, APIs, and bespoke applications.",
    h1: "Software & Product Engineering",
    intro:
      "We architect and engineer bespoke software products—from internal operational platforms to commercial web applications—tailored directly to your business model.",
    challenges: [
      "Off-the-shelf software forcing awkward workarounds around core differentiators",
      "Accumulated technical debt slowing down product updates and onboarding",
      "Fragmented internal tools that lack reliable APIs or clean user workflows",
      "Limited internal engineering bandwidth to take new products from concept to launch",
    ],
    capabilities: [
      "Full-stack web application and platform engineering",
      "Bespoke internal business systems and workflow tools",
      "API architecture, microservices, and modular backend engineering",
      "Technical architecture reviews, automated testing, and CI/CD pipelines",
    ],
    descriptions: [
      {
        title: "Custom Software Development",
        body: "Purpose-built software engineered around your domain rules, user roles, and compliance expectations, giving your team full control over features and roadmap.",
      },
      {
        title: "End-to-End Product Engineering",
        body: "From technical discovery and UX prototyping to backend engineering, automated QA, deployment, and post-launch iteration.",
      },
    ],
    useCases: [
      "Illustrative scenario: Custom B2B client and partner operational platform",
      "Illustrative scenario: Internal resource, scheduling, and operations management suite",
      "Illustrative scenario: Domain-specific data processing and reporting application",
      "Illustrative scenario: Extensible API gateway supporting web and mobile clients",
    ],
    techApproach: [
      "TypeScript, React & Next.js",
      "Modular REST & GraphQL APIs",
      "Relational & Cloud Databases",
      "Automated Testing & CI/CD",
    ],
    methodology: [
      "Requirements discovery and technical architecture specification",
      "Iterative sprint delivery with regular working demonstrations",
      "Automated unit, integration, and security testing",
      "Production deployment, documentation, and structured handover",
    ],
    benefits: [
      "Software aligned precisely to your business processes",
      "Clean, documented, maintainable codebase without vendor lock-in",
      "Full intellectual property ownership upon delivery",
      "Reliable foundation ready for future AI and system integrations",
    ],
    relatedServices: [
      { label: "SaaS Development", href: "/services/saas-development/" },
      { label: "Enterprise Applications", href: "/services/enterprise-solutions/" },
      { label: "Cloud Solutions", href: "/services/cloud-solutions/" },
    ],
    faqs: [
      {
        q: "Does the client retain ownership of custom software source code?",
        a: "Yes. All custom source code, documentation, and deliverables created under client engagement agreements belong to the client upon completion as governed by the contract.",
      },
      {
        q: "Can you work alongside our internal engineering team?",
        a: "Yes. We frequently collaborate with internal product managers, architects, and developers using shared repositories, sprint rituals, and code review standards.",
      },
    ],
    cta: "Discuss Your Software Project",
  },
  {
    id: "web-ecommerce",
    path: "/services/web-ecommerce/",
    title: "Enterprise Websites & E-Commerce Development",
    description:
      "Enterprise website and e-commerce platform development focused on speed, accessibility, technical SEO, security, and business conversion.",
    h1: "Enterprise Websites & E-Commerce",
    intro:
      "We build modern corporate websites and digital commerce platforms designed to establish international credibility, rank cleanly in search engines, and convert visitors into qualified inquiries.",
    challenges: [
      "Outdated corporate websites that undermine enterprise buyer confidence",
      "Poor Core Web Vitals, slow mobile rendering, and weak search visibility",
      "Rigid templates making content updates and localization slow",
      "E-commerce storefronts disconnected from inventory, CRM, and fulfillment systems",
    ],
    capabilities: [
      "International corporate website architecture and rebuilds",
      "Custom and headless e-commerce platform development",
      "Technical SEO, structured data, and URL migration preservation",
      "WCAG 2.2 AA accessibility and conversion-focused UX",
    ],
    descriptions: [
      {
        title: "Enterprise Corporate Websites",
        body: "Server-rendered, fast-loading digital flagships engineered with clear information architecture, technical SEO, schema markup, and secure lead-capture integrations.",
      },
      {
        title: "E-Commerce & Digital Commerce Platforms",
        body: "Scalable storefronts with structured product catalogs, secure payment gateways, ERP/inventory sync, and frictionless mobile checkout flows.",
      },
    ],
    useCases: [
      "Illustrative scenario: Multi-service corporate website rebuild preserving legacy SEO equity",
      "Illustrative scenario: B2B wholesale ordering portal with account-specific pricing",
      "Illustrative scenario: Direct-to-consumer storefront integrated with fulfillment and CRM",
      "Illustrative scenario: Content-rich resource hub with structured search and filtering",
    ],
    techApproach: [
      "Next.js SSR/SSG & Edge Caching",
      "Technical SEO & Schema Markup",
      "Secure Payment & CRM Integrations",
      "Responsive Mobile-First UI",
    ],
    methodology: [
      "Audit of existing site, SEO equity, and buyer journeys",
      "Information architecture, wireframing, and design system creation",
      "Component-driven development and CMS/form integration",
      "Cross-viewport QA, Core Web Vitals optimization, and controlled launch",
    ],
    benefits: [
      "Credible international digital presence aligned with brand standards",
      "Stronger organic search crawlability and technical SEO hygiene",
      "Accessible user journeys across desktop, tablet, and mobile devices",
      "Maintainable component architecture for future campaigns",
    ],
    relatedServices: [
      { label: "Software & Product Engineering", href: "/services/software-development/" },
      { label: "Customer Portals & Mobile Apps", href: "/services/mobile-app-development/" },
      { label: "IT Consulting", href: "/services/it-consulting/" },
    ],
    faqs: [
      {
        q: "How do you protect search rankings during a website rebuild?",
        a: "We inventory existing URLs, map permanent 301/308 redirects, preserve metadata and semantic headings, validate canonicals, and test sitemaps before cutover.",
      },
      {
        q: "Do you support ongoing website optimization and maintenance?",
        a: "Yes. We offer ongoing technical maintenance, performance monitoring, security updates, and iterative feature enhancements.",
      },
    ],
    cta: "Plan Your Web Platform",
  },
  {
    id: "saas-development",
    path: "/services/saas-development/",
    title: "SaaS Platform Development Services",
    description:
      "Multi-tenant SaaS development services. VG Consultancy architects and builds scalable, subscription-ready SaaS platforms from MVP to enterprise scale.",
    h1: "SaaS Development",
    intro:
      "We partner with software ventures and enterprises to design, build, and scale multi-tenant SaaS platforms equipped for subscription billing, security isolation, and rapid iteration.",
    challenges: [
      "Designing clean tenant data isolation without duplicating operational overhead",
      "Integrating subscription plans, metering, invoicing, and role-based access",
      "Supporting enterprise customer expectations such as SSO, audit logs, and SLAs",
      "Shipping new product capabilities rapidly without destabilizing existing tenants",
    ],
    capabilities: [
      "Multi-tenant SaaS architecture and tenant isolation modeling",
      "Subscription billing, entitlement, and account provisioning workflows",
      "Authentication, SSO, RBAC, and tenant administration consoles",
      "Analytics dashboards, webhooks, and customer-facing APIs",
    ],
    descriptions: [
      {
        title: "Multi-Tenant Product Architecture",
        body: "Carefully modeled data partitioning, tenant context enforcement, and scalable cloud infrastructure designed to grow smoothly from initial customers to large enterprise accounts.",
      },
      {
        title: "Commercial SaaS Operations",
        body: "Integrated billing, role-based administration, usage telemetry, and customer onboarding flows built into the platform foundation.",
      },
    ],
    useCases: [
      "Illustrative scenario: Vertical B2B SaaS platform for regulated industry operations",
      "Illustrative scenario: AI-enabled analytics or workflow SaaS product",
      "Illustrative scenario: White-label multi-organization portal for partner networks",
      "Illustrative scenario: Transitioning an internal enterprise tool into a commercial SaaS product",
    ],
    techApproach: [
      "Tenant-Isolated Cloud Databases",
      "RBAC & Enterprise Auth (SSO/MFA)",
      "Subscription & Webhook Pipelines",
      "Observability & Feature Rollouts",
    ],
    methodology: [
      "Product scoping, MVP prioritization, and tenant model definition",
      "Core platform architecture, auth, and billing foundation",
      "Iterative feature engineering with automated testing",
      "Beta onboarding, telemetry verification, and production scaling",
    ],
    benefits: [
      "Production-ready multi-tenant architecture from day one",
      "Cleaner path to enterprise readiness (RBAC, auditability, APIs)",
      "Predictable engineering velocity with automated CI/CD",
      "Lower long-term operational friction as customer accounts scale",
    ],
    relatedServices: [
      { label: "Software & Product Engineering", href: "/services/software-development/" },
      { label: "Cloud Solutions", href: "/services/cloud-solutions/" },
      { label: "AI Agents & AI Assistants", href: "/services/ai-agents-assistants/" },
    ],
    faqs: [
      {
        q: "Can you help modernize or re-architect an existing single-tenant product into SaaS?",
        a: "Yes. We assess your current codebase and database schema to design a phased transition to multi-tenant SaaS without disrupting existing customers.",
      },
      {
        q: "How do you handle tenant data security in multi-tenant applications?",
        a: "We enforce strict tenant-context isolation at the application, API, and database layers, backed by automated authorization tests and audit logging.",
      },
    ],
    cta: "Build Your SaaS Platform",
  },
  {
    id: "enterprise-solutions",
    path: "/services/enterprise-solutions/",
    title: "Enterprise Application Development",
    description:
      "Enterprise application development for complex business workflows, multi-department portals, role-based security, and legacy integration.",
    h1: "Enterprise Applications",
    intro:
      "We engineer resilient enterprise applications tailored for complex organizational workflows, multi-role governance, and seamless integration with existing core systems.",
    challenges: [
      "Complex business rules spanning multiple departments, regions, and approval tiers",
      "High concurrency and reliability expectations across mission-critical operations",
      "Legacy enterprise systems that cannot be replaced overnight",
      "Strict security, audit logging, and access-governance requirements",
    ],
    capabilities: [
      "Large-scale enterprise web applications and operational consoles",
      "Custom workflow, approval, and case-management platforms",
      "Partner, vendor, and internal operations portals",
      "Middleware and adapters bridging modern apps with legacy systems",
    ],
    descriptions: [
      {
        title: "Mission-Critical Business Applications",
        body: "Applications designed around nuanced organizational hierarchies, compliance controls, and real-time operational visibility.",
      },
      {
        title: "Unified Enterprise Portals",
        body: "Centralized web portals giving employees, vendors, and leadership a consistent interface over disparate backend systems.",
      },
    ],
    useCases: [
      "Illustrative scenario: Multi-department procurement and vendor approval application",
      "Illustrative scenario: Enterprise operations and compliance tracking workbench",
      "Illustrative scenario: Executive KPI and financial consolidation dashboard",
      "Illustrative scenario: Partner and distributor self-service management portal",
    ],
    techApproach: [
      "Modular Domain-Driven Architecture",
      "Fine-Grained Role-Based Access Control",
      "Comprehensive Audit Trails",
      "Resilient Cloud & Hybrid Deployment",
    ],
    methodology: [
      "Enterprise stakeholder alignment and workflow mapping",
      "Security, integration, and high-availability architecture design",
      "Phased modular delivery and user acceptance testing",
      "Controlled organizational rollout and governance documentation",
    ],
    benefits: [
      "Consolidated operations across departments and systems",
      "Stronger governance, traceability, and role-based security",
      "Reduced reliance on brittle manual spreadsheets",
      "Extensibility for future automation and analytics",
    ],
    relatedServices: [
      { label: "CRM & ERP Solutions", href: "/services/crm-erp/" },
      { label: "Legacy Modernization", href: "/services/legacy-modernization/" },
      { label: "Business Process Automation", href: "/services/business-integrations/" },
    ],
    faqs: [
      {
        q: "Can new enterprise applications integrate with our existing ERP or directory?",
        a: "Yes. We integrate with enterprise identity providers (SSO) and backend systems via APIs, queues, or structured adapters.",
      },
      {
        q: "How do you manage rollout across multiple departments?",
        a: "We structure phased rollouts with staging validation, user acceptance testing, training documentation, and parallel operational support.",
      },
    ],
    cta: "Discuss Enterprise Applications",
  },
  {
    id: "crm-erp",
    path: "/services/crm-erp/",
    title: "CRM, ERP & Business Management Solutions",
    description:
      "CRM and ERP implementation, customization, and integration services by VG Consultancy to unify sales, customer service, finance, and operations.",
    h1: "CRM & ERP Solutions",
    intro:
      "We implement, customize, and integrate CRM and ERP systems that give leadership and operational teams a reliable, single source of truth across customers, inventory, and finance.",
    challenges: [
      "Customer records duplicated or inconsistent across sales, support, and billing",
      "Manual handoffs between commercial teams and operational fulfillment",
      "Limited real-time visibility into pipeline, inventory, or project margins",
      "Low user adoption due to poorly tailored workflows",
    ],
    capabilities: [
      "CRM architecture, customization, and workflow automation",
      "ERP implementation, module configuration, and custom extensions",
      "Data cleansing, deduplication, and structured migration",
      "Two-way integration connecting CRM/ERP to web, e-commerce, and finance tools",
    ],
    descriptions: [
      {
        title: "Customer Relationship Management (CRM)",
        body: "Structured pipelines, account hierarchies, automated follow-ups, and service case tracking tailored to how your commercial and support teams operate.",
      },
      {
        title: "Enterprise Resource Planning (ERP)",
        body: "Unified operational workflows across procurement, inventory, resource allocation, invoicing, and management reporting.",
      },
    ],
    useCases: [
      "Illustrative scenario: Unifying lead capture, sales pipeline, and contract invoicing",
      "Illustrative scenario: Connecting e-commerce orders directly to ERP inventory and dispatch",
      "Illustrative scenario: Custom operational reporting dashboards for multi-unit leadership",
      "Illustrative scenario: Automated customer support case routing linked to account history",
    ],
    techApproach: [
      "Vendor-Neutral Platform Alignment",
      "Custom Extension & API Adapters",
      "Validated ETL Data Migration",
      "Role-Tailored User Workflows",
    ],
    methodology: [
      "Operational workflow discovery and data-model audit",
      "Platform configuration and custom integration engineering",
      "Data cleansing, test migration, and UAT validation",
      "Team enablement, go-live support, and post-launch refinement",
    ],
    benefits: [
      "Single source of truth across customer and operational data",
      "Reduced manual re-entry between commercial and finance teams",
      "Clearer pipeline forecasting and operational visibility",
      "Higher team adoption through workflows matched to real processes",
    ],
    relatedServices: [
      { label: "Business Process Automation", href: "/services/business-integrations/" },
      { label: "Enterprise Applications", href: "/services/enterprise-solutions/" },
      { label: "IT Consulting", href: "/services/it-consulting/" },
    ],
    faqs: [
      {
        q: "Do you build custom CRM/ERP modules or configure existing platforms?",
        a: "We do both—configuring and integrating established platforms where they fit best, and engineering custom modules or portals where business workflows require tailored capabilities.",
      },
      {
        q: "How do you handle historical data migration safely?",
        a: "We run structured extraction, deduplication, schema mapping, and staged dry-run validations with business stakeholders before final cutover.",
      },
    ],
    cta: "Unify Your CRM & ERP",
  },
  {
    id: "business-integrations",
    path: "/services/business-integrations/",
    title: "Business Process Automation & API Integrations",
    description:
      "Business process automation and enterprise API integration services. Connect CRM, ERP, billing, and operational platforms reliably.",
    h1: "Business Process Automation & Integrations",
    intro:
      "We eliminate data silos and manual copy-paste workflows by engineering reliable API integrations, event-driven synchronization, and automated business processes across your software ecosystem.",
    challenges: [
      "Core business applications operating as isolated islands with conflicting data",
      "Staff spending hours exporting CSVs and manually updating multiple systems",
      "Silent integration failures causing missed orders, billing delays, or stale reports",
      "Brittle point-to-point scripts that break whenever an upstream tool updates",
    ],
    capabilities: [
      "Custom REST, GraphQL, and webhook API integration engineering",
      "Middleware and event-driven system synchronization",
      "Multi-system business workflow automation and orchestration",
      "Retry queues, dead-letter handling, monitoring, and alerting",
    ],
    descriptions: [
      {
        title: "Resilient API & Middleware Engineering",
        body: "Clean integration layers with schema validation, idempotency, rate-limit handling, and automated error recovery so systems stay synchronized under load.",
      },
      {
        title: "Cross-Platform Process Automation",
        body: "Automated triggers that carry business events smoothly from customer intake through fulfillment, billing, and analytics.",
      },
    ],
    useCases: [
      "Illustrative scenario: Bi-directional CRM-to-ERP customer and order synchronization",
      "Illustrative scenario: Payment gateway, invoicing, and accounting ledger automation",
      "Illustrative scenario: Multi-channel e-commerce inventory and shipping integration",
      "Illustrative scenario: Automated employee onboarding provisioning across IT tools",
    ],
    techApproach: [
      "REST & GraphQL APIs",
      "Event-Driven Queues & Webhooks",
      "Idempotent Sync Pipelines",
      "Centralized Error Alerting",
    ],
    methodology: [
      "System landscape mapping and data-ownership definition",
      "Contract-first API and transformation specification",
      "Staging integration testing including failure and retry scenarios",
      "Production rollout with telemetry and operational runbooks",
    ],
    benefits: [
      "Elimination of repetitive manual data reconciliation",
      "Consistent, timely data across customer and finance teams",
      "Faster operational cycles with fewer human handoff errors",
      "Observable, maintainable integration architecture",
    ],
    relatedServices: [
      { label: "AI & Intelligent Automation", href: "/services/ai-automation/" },
      { label: "CRM & ERP Solutions", href: "/services/crm-erp/" },
      { label: "Cloud Solutions", href: "/services/cloud-solutions/" },
    ],
    faqs: [
      {
        q: "Can you integrate older systems that do not expose modern REST APIs?",
        a: "Yes. Where modern APIs are unavailable, we evaluate secure database views, scheduled file/SFTP exchange, or custom adapter layers to bridge legacy systems safely.",
      },
      {
        q: "How do you prevent data loss if a third-party API goes down temporarily?",
        a: "We use queued event processing, idempotent retries with exponential backoff, and dead-letter alerting so temporary outages never silently drop records.",
      },
    ],
    cta: "Connect Your Systems",
  },
  {
    id: "mobile-app-development",
    path: "/services/mobile-app-development/",
    title: "Customer Portals & Mobile Applications",
    description:
      "iOS, Android, and responsive web portal development. VG Consultancy builds mobile applications and customer/employee portals built for usability and scale.",
    h1: "Customer Portals & Mobile Applications",
    intro:
      "We design and build cross-platform mobile applications and self-service web portals that connect customers, field teams, and partners to your services anywhere.",
    challenges: [
      "Customers relying on phone or email for routine status checks and requests",
      "Field or distributed staff lacking mobile access to operational workflows",
      "High cost and slow velocity maintaining fragmented native codebases",
      "Poor mobile usability or unreliable performance on constrained networks",
    ],
    capabilities: [
      "Cross-platform iOS and Android mobile app development",
      "Responsive customer, partner, and employee self-service portals",
      "Secure authentication, push notifications, and document workflows",
      "Offline-capable synchronization for field operations",
    ],
    descriptions: [
      {
        title: "Mobile Application Engineering",
        body: "Intuitive mobile apps for customer engagement or field operations, engineered with shared maintainability, secure local storage, and reliable backend APIs.",
      },
      {
        title: "Self-Service Customer & Employee Portals",
        body: "Role-based portals enabling users to track requests, manage accounts, access documents, and collaborate without manual back-office intervention.",
      },
    ],
    useCases: [
      "Illustrative scenario: Client self-service portal for order tracking, billing, and support",
      "Illustrative scenario: Mobile field-service app for inspections, checklists, and photo uploads",
      "Illustrative scenario: Patient or member engagement portal with appointment scheduling",
      "Illustrative scenario: Internal employee hub for requests, approvals, and knowledge access",
    ],
    techApproach: [
      "Cross-Platform Mobile & Responsive Web",
      "Secure Token Auth & Biometrics/SSO",
      "Offline-Resilient Sync Patterns",
      "WCAG-Conscious Mobile UX",
    ],
    methodology: [
      "User journey mapping across mobile and desktop contexts",
      "Interactive prototyping and usability validation",
      "Iterative app and API engineering with device testing",
      "App store compliance, launch, and post-release monitoring",
    ],
    benefits: [
      "Improved customer convenience and self-service adoption",
      "Lower inbound support volume for routine status requests",
      "Real-time operational updates from field and remote teams",
      "Consistent brand experience across web and mobile",
    ],
    relatedServices: [
      { label: "Enterprise Websites & E-Commerce", href: "/services/web-ecommerce/" },
      { label: "Software & Product Engineering", href: "/services/software-development/" },
      { label: "AI Agents & AI Assistants", href: "/services/ai-agents-assistants/" },
    ],
    faqs: [
      {
        q: "Should we build a responsive web portal, a mobile app, or both?",
        a: "We help evaluate your users' workflows: responsive web portals excel for broad zero-install access, while mobile apps add clear value for frequent engagement, push notifications, camera/device features, or offline field use.",
      },
      {
        q: "Do you handle backend APIs alongside the mobile app?",
        a: "Yes. We design and build both the mobile/portal frontend and the secure backend APIs and system integrations required to power them.",
      },
    ],
    cta: "Build Your App or Portal",
  },
  {
    id: "cloud-solutions",
    path: "/services/cloud-solutions/",
    title: "Cloud Solutions & Architecture Services",
    description:
      "Cloud migration, cloud-native architecture, DevOps automation, and infrastructure optimization services from VG Consultancy.",
    h1: "Cloud Solutions",
    intro:
      "We help organizations design resilient cloud architectures, migrate workloads safely from legacy hosting, and automate deployment pipelines for speed and cost visibility.",
    challenges: [
      "Aging on-premise or single-server infrastructure creating downtime risks",
      "Unpredictable cloud bills without clear resource governance",
      "Manual, error-prone server deployments slowing down release cycles",
      "Security, backup, and disaster recovery gaps across environments",
    ],
    capabilities: [
      "Cloud readiness assessments and migration planning",
      "Cloud-native architecture and containerization",
      "Infrastructure as Code (IaC) and automated CI/CD pipelines",
      "Monitoring, logging, backup strategy, and cloud cost optimization",
    ],
    descriptions: [
      {
        title: "Cloud Migration & Architecture",
        body: "Structured migration of applications and databases to modern cloud environments with minimal disruption, clear rollback paths, and hardened network boundaries.",
      },
      {
        title: "DevOps & Reliability Engineering",
        body: "Reproducible infrastructure definitions, automated build-test-deploy pipelines, and proactive observability across staging and production.",
      },
    ],
    useCases: [
      "Illustrative scenario: Migrating monolithic business applications from on-premise servers to cloud",
      "Illustrative scenario: Implementing automated CI/CD pipelines and zero-downtime releases",
      "Illustrative scenario: Hardening backup, failover, and disaster recovery posture",
      "Illustrative scenario: Right-sizing cloud compute and storage to reduce monthly waste",
    ],
    techApproach: [
      "AWS, Azure & Google Cloud Architectures",
      "Containers & Managed Services",
      "Infrastructure as Code",
      "Centralized Telemetry & Alerts",
    ],
    methodology: [
      "Workload inventory, dependency mapping, and readiness assessment",
      "Target architecture, security, and cost-model blueprint",
      "Automated environment provisioning and staged migration",
      "Load/failover verification, handover, and continuous optimization",
    ],
    benefits: [
      "Higher system availability and resilient scaling under peak load",
      "Faster, safer software releases via automated CI/CD",
      "Improved security posture, backups, and auditability",
      "Clearer visibility and control over infrastructure spend",
    ],
    relatedServices: [
      { label: "Legacy Modernization", href: "/services/legacy-modernization/" },
      { label: "Software & Product Engineering", href: "/services/software-development/" },
      { label: "SaaS Development", href: "/services/saas-development/" },
    ],
    faqs: [
      {
        q: "Which cloud providers do you support?",
        a: "We work across AWS, Microsoft Azure, and Google Cloud Platform, aligning recommendations with your existing team skills, compliance needs, and cost structure.",
      },
      {
        q: "How do you minimize downtime during cloud migration?",
        a: "We use staged replication, blue-green or canary cutover strategies, and thorough pre-cutover rehearsal in isolated staging environments.",
      },
    ],
    cta: "Modernize Your Cloud",
  },
  {
    id: "legacy-modernization",
    path: "/services/legacy-modernization/",
    title: "Legacy System Modernization Services",
    description:
      "Legacy software modernization services. VG Consultancy refactors, replatforms, or replaces aging applications safely without disrupting operations.",
    h1: "Legacy System Modernization",
    intro:
      "We transform aging, hard-to-maintain applications and databases into modern, secure, and extensible platforms—preserving critical business logic while removing technical bottlenecks.",
    challenges: [
      "Outdated software stacks that are costly to maintain and difficult to staff",
      "Lack of APIs preventing integration with modern web, mobile, and AI tools",
      "Unsupported dependencies creating security and compliance exposure",
      "Fear of operational disruption holding back necessary system replacement",
    ],
    capabilities: [
      "Legacy codebase and architecture audits",
      "Phased refactoring, strangler-fig migration, and replatforming",
      "Database modernization and validated historical data migration",
      "Modern UI and API layers over critical backend workflows",
    ],
    descriptions: [
      {
        title: "Incremental Re-Architecting",
        body: "Instead of risky big-bang rewrites, we often extract high-value modules incrementally—modernizing interfaces, APIs, and data stores step by step.",
      },
      {
        title: "Full Replacement & Data Migration",
        body: "When legacy platforms can no longer be sustained, we engineer modern cloud-ready replacements with automated regression testing and verified data migration.",
      },
    ],
    useCases: [
      "Illustrative scenario: Replacing aging desktop or intranet tools with secure web portals",
      "Illustrative scenario: Exposing modern REST APIs around legacy operational databases",
      "Illustrative scenario: Consolidating multiple legacy spreadsheets and tools into one platform",
      "Illustrative scenario: Migrating unsupported frameworks to long-term supported stacks",
    ],
    techApproach: [
      "Strangler-Fig Migration Pattern",
      "Automated Regression Suites",
      "Schema Mapping & Data Cleansing",
      "Modular Modern Tech Stacks",
    ],
    methodology: [
      "System discovery, dependency mapping, and risk assessment",
      "Modernization strategy (rehost, refactor, or replace) per module",
      "Incremental parallel-run implementation with business validation",
      "Controlled cutover, legacy decommissioning, and documentation",
    ],
    benefits: [
      "Lower ongoing maintenance and troubleshooting burden",
      "Elimination of unsupported security vulnerabilities",
      "Ability to integrate AI, portals, and modern partner APIs",
      "Easier onboarding for engineering teams",
    ],
    relatedServices: [
      { label: "Cloud Solutions", href: "/services/cloud-solutions/" },
      { label: "Software & Product Engineering", href: "/services/software-development/" },
      { label: "Enterprise Applications", href: "/services/enterprise-solutions/" },
    ],
    faqs: [
      {
        q: "How do you keep business operations running during modernization?",
        a: "We favor incremental migration and parallel verification phases so critical workflows stay live while modules transition cleanly to the modern platform.",
      },
      {
        q: "Do you handle cleaning and migrating historical data?",
        a: "Yes. Data profiling, cleansing, deduplication, and integrity verification are built into our modernization workflow.",
      },
    ],
    cta: "Plan Legacy Modernization",
  },
  {
    id: "it-consulting",
    path: "/services/it-consulting/",
    title: "IT Consulting & Digital Strategy Services",
    description:
      "Strategic IT consulting and digital transformation advisory by VG Consultancy. Vendor-neutral architecture, AI readiness, and technology roadmaps.",
    h1: "IT Consulting",
    intro:
      "We provide strategic, vendor-neutral IT consulting that helps leadership align technology investments, system architecture, and AI initiatives with measurable business priorities.",
    challenges: [
      "Technology investments expanding without a cohesive long-term architecture",
      "Uncertainty around where AI and automation create genuine ROI vs. hype",
      "Build-vs-buy dilemmas across SaaS, CRM, ERP, and custom engineering",
      "Security, scalability, and technical debt risks in growing organizations",
    ],
    capabilities: [
      "Digital transformation strategy and multi-quarter technology roadmaps",
      "AI readiness assessments and practical automation prioritization",
      "Software architecture, scalability, and security posture reviews",
      "Vendor selection, build-vs-buy analysis, and technical due diligence",
    ],
    descriptions: [
      {
        title: "Technology Strategy & Architecture Advisory",
        body: "Clear, practical roadmaps backed by engineering reality—helping executive teams sequence modernization, integrations, and platform investments responsibly.",
      },
      {
        title: "Digital Transformation Guidance",
        body: "Hands-on advisory bridging executive goals, operational teams, and delivery engineers so transformation programs ship measurable milestones.",
      },
    ],
    useCases: [
      "Illustrative scenario: Pre-project architecture blueprint and build-vs-buy evaluation",
      "Illustrative scenario: Enterprise AI opportunity assessment and governance framework",
      "Illustrative scenario: Independent review of existing platform performance and bottlenecks",
      "Illustrative scenario: Fractional technical leadership for scaling organizations",
    ],
    techApproach: [
      "Vendor-Neutral Evaluation",
      "Architecture & Risk Modeling",
      "Total Cost of Ownership Analysis",
      "Actionable Delivery Roadmaps",
    ],
    methodology: [
      "Stakeholder interviews and current-state technical audit",
      "Gap, risk, and opportunity prioritization",
      "Target architecture and phased roadmap presentation",
      "Implementation oversight or transition into engineering delivery",
    ],
    benefits: [
      "Clearer capital allocation across technology initiatives",
      "Reduced risk of costly platform lock-in or rework",
      "Practical sequencing from quick operational wins to foundational upgrades",
      "Independent engineering perspective at the leadership table",
    ],
    relatedServices: [
      { label: "AI & Intelligent Automation", href: "/services/ai-automation/" },
      { label: "Legacy Modernization", href: "/services/legacy-modernization/" },
      { label: "Recruitment & Staffing", href: "/services/talent-staffing/" },
    ],
    faqs: [
      {
        q: "Are your technology recommendations vendor-neutral?",
        a: "Yes. We do not resell third-party software licenses as our primary business; recommendations are based on fit, maintainability, security, and total cost for your organization.",
      },
      {
        q: "Can consulting engagements transition into implementation with VG Consultancy?",
        a: "Yes, or your internal team can execute the roadmap independently—our strategy deliverables are documented cleanly for either path.",
      },
    ],
    cta: "Schedule IT Advisory",
  },
  {
    id: "talent-staffing",
    path: "/services/talent-staffing/",
    title: "IT Recruitment & Technology Staffing Services",
    description:
      "IT recruitment and technology staffing services from VG Consultancy. Permanent hiring, contract staffing, and technical talent acquisition.",
    h1: "Recruitment & Staffing",
    intro:
      "Alongside our engineering practice, VG Consultancy connects organizations across IT and non-IT sectors with vetted technology and business professionals—supporting both permanent hiring and flexible contract staffing.",
    challenges: [
      "Extended hiring cycles leaving critical product and IT initiatives understaffed",
      "Filtering through large applicant volumes lacking practical technical depth",
      "Need for flexible contract specialists during peak transformation phases",
      "High operational cost of misaligned hires in specialized roles",
    ],
    capabilities: [
      "Permanent technology and corporate talent acquisition",
      "Contract and project-based IT staffing",
      "Technical screening aligned with real engineering standards",
      "Role scoping across software, AI/data, cloud, ERP, and business functions",
    ],
    descriptions: [
      {
        title: "Permanent Recruitment",
        body: "Targeted sourcing and structured technical/functional screening to help organizations hire reliable permanent contributors across software engineering, IT, and operations.",
      },
      {
        title: "Contract & Flexible Staffing",
        body: "Responsive staffing support for surge capacity, specialized project skills, or transitional coverage without slowing down delivery timelines.",
      },
    ],
    useCases: [
      "Illustrative scenario: Sourcing full-stack, cloud, or AI engineers for growing product teams",
      "Illustrative scenario: Contract ERP, QA, or DevOps specialists for rollout phases",
      "Illustrative scenario: Building out regional technology and support functions",
      "Illustrative scenario: Targeted hiring for hard-to-fill technical leadership roles",
    ],
    techApproach: [
      "Engineering-Informed Screening",
      "Role & Competency Calibration",
      "Structured Candidate Shortlisting",
      "Onboarding Coordination",
    ],
    methodology: [
      "Role intake and technical/cultural calibration with hiring managers",
      "Targeted sourcing and multi-stage candidate evaluation",
      "Curated shortlist presentation and interview coordination",
      "Offer support and smooth onboarding follow-through",
    ],
    benefits: [
      "Faster access to vetted, role-relevant candidates",
      "Less engineering leader time spent screening mismatched profiles",
      "Flexible mix of permanent and contract talent strategies",
      "Backed by a consultancy that actively works in modern technology",
    ],
    relatedServices: [
      { label: "Project Outsourcing", href: "/services/project-outsourcing/" },
      { label: "IT Consulting", href: "/services/it-consulting/" },
      { label: "Software & Product Engineering", href: "/services/software-development/" },
    ],
    faqs: [
      {
        q: "What makes recruitment with an engineering consultancy different?",
        a: "Because VG Consultancy actively delivers software, AI, and enterprise IT projects, our screening aligns with real technical requirements rather than keyword matching alone.",
      },
      {
        q: "Do you support both IT and non-IT hiring requirements?",
        a: "Yes. While technology and digital roles are a core strength, we also support broader business and operational staffing needs across client organizations.",
      },
    ],
    cta: "Discuss Talent Needs",
  },
  {
    id: "project-outsourcing",
    path: "/services/project-outsourcing/",
    title: "Project Outsourcing & Dedicated Engineering Teams",
    description:
      "Software project outsourcing and dedicated engineering teams (EDC) from VG Consultancy. Scale delivery capacity predictably.",
    h1: "Project Outsourcing",
    intro:
      "We provide structured project outsourcing and dedicated engineering teams that extend your delivery capacity—giving you predictable execution across software, AI, cloud, and enterprise initiatives.",
    challenges: [
      "Product and IT roadmaps outpacing available internal engineering capacity",
      "Difficulty assembling specialized cross-functional skills quickly in-house",
      "Fixed timelines or modernization backlogs requiring dedicated focus",
      "Need for transparent governance and communication across distributed teams",
    ],
    capabilities: [
      "Dedicated Engineering Teams & Extended Delivery Center (EDC) models",
      "End-to-end project-based outsourcing with defined milestones",
      "Cross-functional pods (engineering, UI/UX, QA, architecture)",
      "Transparent sprint reporting and collaborative overlap windows",
    ],
    descriptions: [
      {
        title: "Dedicated Engineering Teams (EDC)",
        body: "Committed engineers and specialists operating as an integrated extension of your organization—aligned to your tooling, standards, and sprint cadence.",
      },
      {
        title: "Managed Project Outsourcing",
        body: "Complete delivery ownership from specification through QA and deployment, suited for initiatives where you want defined outcomes without daily micro-management.",
      },
    ],
    useCases: [
      "Illustrative scenario: Extending product engineering capacity for a multi-quarter roadmap",
      "Illustrative scenario: Outsourcing a complete web, mobile, or portal build end-to-end",
      "Illustrative scenario: Dedicated QA, integration, and maintenance pod for enterprise systems",
      "Illustrative scenario: Rapidly spinning up an AI prototyping and automation squad",
    ],
    techApproach: [
      "Agile Sprint Governance",
      "Shared Git & Issue Workflows",
      "Automated QA & Code Reviews",
      "Clear Knowledge Transfer",
    ],
    methodology: [
      "Scope, skill-mix, and governance alignment",
      "Team assembly and environment onboarding",
      "Iterative delivery with weekly demos and transparent progress tracking",
      "Documentation, handover, and flexible scaling adjustments",
    ],
    benefits: [
      "Predictable scaling of engineering capacity without long hiring delays",
      "Access to multi-disciplinary architecture, AI, and QA skills",
      "Internal leadership stays focused on core strategic priorities",
      "Structured documentation and clean IP handover",
    ],
    relatedServices: [
      { label: "Recruitment & Staffing", href: "/services/talent-staffing/" },
      { label: "Software & Product Engineering", href: "/services/software-development/" },
      { label: "IT Consulting", href: "/services/it-consulting/" },
    ],
    faqs: [
      {
        q: "What is the difference between Project Outsourcing and Recruitment & Staffing?",
        a: "Staffing places individuals into your own management structure, while Project Outsourcing and Dedicated Teams provide structured delivery squads backed by VG Consultancy's engineering governance.",
      },
      {
        q: "Can dedicated team capacity scale as project phases change?",
        a: "Yes. Engagement agreements are structured to allow planned scaling up during peak build phases and transitioning cleanly to steady-state support.",
      },
    ],
    cta: "Explore Dedicated Teams",
  },
];

export interface SolutionRouteData {
  id: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  problem: string;
  solution: string;
  capabilities: string[];
  architecture: string;
  integrations: string[];
  security: string[];
  implementation: string[];
  benefits: string[];
  relatedServices: { label: string; href: string }[];
  cta: string;
}

export const solutionRoutes: SolutionRouteData[] = [
  {
    id: "enterprise-digital-solutions",
    path: "/solutions/enterprise-digital-solutions/",
    title: "Enterprise Digital Solutions",
    description:
      "End-to-end enterprise digital solutions that unify workflows, modernize legacy platforms, and strengthen operational visibility.",
    h1: "Enterprise Digital Solutions",
    intro:
      "Unified digital platforms engineered to connect departments, streamline governance, and modernize legacy business operations.",
    problem:
      "Growing enterprises often operate across fragmented applications, manual spreadsheet workarounds, and aging internal systems that slow decision-making and inflate maintenance costs.",
    solution:
      "A cohesive, modular digital architecture combining custom enterprise web applications, centralized operational dashboards, automated workflows, and secure API integrations.",
    capabilities: [
      "Unified operational consoles and cross-department dashboards",
      "Configurable multi-tier approval and compliance workflows",
      "Centralized master-data visibility across business units",
      "Role-based workspaces for employees, managers, and partners",
    ],
    architecture:
      "Modular, API-first cloud architecture separating presentation portals, domain services, and integration adapters—allowing incremental upgrades without full-system downtime.",
    integrations: [
      "Enterprise ERP Platforms",
      "CRM Systems",
      "Identity Providers (SSO/SAML)",
      "HR, Payroll & Finance Tools",
      "Data Warehouses & BI",
    ],
    security: [
      "Role-based access control (RBAC) with least-privilege permissions",
      "TLS encryption in transit and encryption at rest for sensitive records",
      "Immutable audit logging across administrative and approval actions",
      "Alignment with enterprise security review and compliance expectations",
    ],
    implementation: [
      "Enterprise workflow discovery and system landscape mapping",
      "Target architecture, security, and integration blueprint",
      "Phased rollout prioritized by department and operational impact",
      "User acceptance testing, training, and continuous evolution",
    ],
    benefits: [
      "Unified operational visibility across teams and regions",
      "Fewer manual handoffs and spreadsheet reconciliation errors",
      "Stronger governance and audit readiness",
      "Adaptable foundation for future AI and analytics capabilities",
    ],
    relatedServices: [
      { label: "Enterprise Applications", href: "/services/enterprise-solutions/" },
      { label: "Legacy Modernization", href: "/services/legacy-modernization/" },
      { label: "IT Consulting", href: "/services/it-consulting/" },
    ],
    cta: "Discuss Enterprise Solutions",
  },
  {
    id: "ai-business-automation",
    path: "/solutions/ai-business-automation/",
    title: "AI-Powered Business Operations",
    description:
      "AI-powered business operations solutions combining AI agents, RAG knowledge assistants, and intelligent workflow automation.",
    h1: "AI-Powered Business Operations",
    intro:
      "Transform routine operational workloads by embedding grounded AI agents and intelligent workflow orchestration directly into your core systems.",
    problem:
      "High-volume customer inquiries, unstructured document intake, and manual cross-system routing create operational bottlenecks that scale linearly with headcount.",
    solution:
      "Domain-grounded AI assistants and automated workflow pipelines layered cleanly over your CRM, helpdesk, and ERP—complete with validation rules and human oversight.",
    capabilities: [
      "24/7 customer and employee knowledge assistants with source citations",
      "Automated document classification, extraction, and validation",
      "Intelligent ticket triage, summarization, and routing",
      "Exception-based human-in-the-loop review dashboards",
    ],
    architecture:
      "Retrieval-Augmented Generation (RAG) pipelines, access-controlled vector stores, deterministic schema validators, and scoped API tool adapters.",
    integrations: [
      "Helpdesk & Ticketing Systems",
      "CRM & Sales Pipelines",
      "ERP & Accounts Payable",
      "Email, Chat & Document Storage",
      "Internal Knowledge Bases",
    ],
    security: [
      "Document-level access permissions enforced during AI retrieval",
      "Encryption in transit and at rest with private tenant isolation",
      "Prompt-injection guards and bounded API action scopes",
      "Full audit logs of prompts, retrieved sources, and automated actions",
    ],
    implementation: [
      "Identify high-leverage workflows and define accuracy benchmarks",
      "Build controlled pilot with real internal test cases",
      "Integrate human review checkpoints and API guardrails",
      "Deploy to production with continuous accuracy monitoring",
    ],
    benefits: [
      "Faster response and processing cycles across service and back-office teams",
      "Consistent information delivery grounded in approved company sources",
      "Reduced manual triage and data-entry workload",
      "Auditable, controlled AI adoption aligned with governance standards",
    ],
    relatedServices: [
      { label: "AI & Intelligent Automation", href: "/services/ai-automation/" },
      { label: "AI Agents & AI Assistants", href: "/services/ai-agents-assistants/" },
      { label: "Business Process Automation", href: "/services/business-integrations/" },
    ],
    cta: "Automate Business Operations",
  },
  {
    id: "customer-portals",
    path: "/solutions/customer-portals/",
    title: "Customer & Employee Portals",
    description:
      "Secure, role-based customer, partner, and employee portal solutions engineered for self-service, transparency, and workflow efficiency.",
    h1: "Customer & Employee Portals",
    intro:
      "Give customers, partners, and employees a unified, intuitive digital workspace to access information, submit requests, and track outcomes in real time.",
    problem:
      "When customers and staff lack self-service visibility, support queues fill up with routine status inquiries and teams rely on slow email back-and-forth.",
    solution:
      "Secure, responsive web and mobile portals connected directly to your CRM, ERP, and ticketing systems with tailored role-based views.",
    capabilities: [
      "Customer self-service account, order, invoice, and ticket portals",
      "Employee operations, onboarding, and knowledge hubs",
      "Vendor and partner collaboration workspaces",
      "Real-time notifications, document exchange, and status tracking",
    ],
    architecture:
      "Responsive Next.js portal frontend backed by authenticated REST/GraphQL APIs, role-based authorization middleware, and real-time webhook sync.",
    integrations: [
      "CRM Platforms",
      "Customer Support & Helpdesk",
      "ERP & Billing Systems",
      "Document Management & E-Sign",
      "Enterprise SSO / MFA",
    ],
    security: [
      "SSO, MFA, and hardened session management",
      "Strict tenant and account-level data authorization",
      "Encrypted document upload and virus/type validation",
      "WCAG 2.2 AA accessible interface design",
    ],
    implementation: [
      "Map user personas, self-service tasks, and backend data sources",
      "Design intuitive UX and accessible component system",
      "Build portal frontend and secure backend integration layer",
      "Pilot with select users, refine, and launch across accounts",
    ],
    benefits: [
      "Higher customer satisfaction through 24/7 self-service transparency",
      "Lower support load for routine document and status requests",
      "Faster partner and employee onboarding",
      "Consistent brand experience across desktop and mobile",
    ],
    relatedServices: [
      { label: "Customer Portals & Mobile Apps", href: "/services/mobile-app-development/" },
      { label: "Enterprise Websites & E-Commerce", href: "/services/web-ecommerce/" },
      { label: "Enterprise Applications", href: "/services/enterprise-solutions/" },
    ],
    cta: "Build Your Portal",
  },
  {
    id: "business-workflow-solutions",
    path: "/solutions/business-workflow-solutions/",
    title: "Business Workflow Solutions",
    description:
      "Tailored business workflow solutions that digitize approvals, standardize operations, and automate cross-team handoffs.",
    h1: "Business Workflow Solutions",
    intro:
      "Replace ad-hoc spreadsheets, email chains, and manual sign-offs with structured digital workflows that enforce consistency and visibility across teams.",
    problem:
      "Critical operational processes—such as procurement approvals, onboarding, quality reviews, and service handoffs—often stall in email threads with no visibility into bottlenecks.",
    solution:
      "Custom digital workflow platforms combining dynamic intake forms, rule-based routing, SLA escalations, and automated system updates.",
    capabilities: [
      "Configurable multi-stage approval and escalation rules",
      "Dynamic intake forms with validation and conditional logic",
      "Real-time bottleneck tracking and SLA monitoring",
      "Automated notifications and document generation",
    ],
    architecture:
      "State-machine-backed workflow engine with event logging, role-based task queues, and clean API hooks into downstream systems.",
    integrations: [
      "Microsoft 365 / Google Workspace",
      "CRM & ERP Systems",
      "Finance & Procurement Tools",
      "HR & Identity Platforms",
    ],
    security: [
      "Segregation of duties and verifiable approval signatures",
      "Complete timestamped audit history per workflow instance",
      "Encrypted payload storage and role-restricted visibility",
      "Automated input validation and spam/abuse controls",
    ],
    implementation: [
      "Document current-state workflows, exceptions, and bottlenecks",
      "Design streamlined target state and escalation policies",
      "Implement workflow engine, UI forms, and system connectors",
      "Train operational leads and monitor cycle-time improvements",
    ],
    benefits: [
      "Clear accountability at every step of business execution",
      "Faster approval turnaround times without chasing emails",
      "Built-in audit compliance for operational and financial controls",
      "Easy visibility for managers to spot and resolve delays",
    ],
    relatedServices: [
      { label: "Business Process Automation", href: "/services/business-integrations/" },
      { label: "AI & Intelligent Automation", href: "/services/ai-automation/" },
      { label: "Software & Product Engineering", href: "/services/software-development/" },
    ],
    cta: "Streamline Your Workflows",
  },
  {
    id: "custom-saas",
    path: "/solutions/custom-saas/",
    title: "Custom SaaS Platforms",
    description:
      "Custom SaaS platform solutions built for multi-tenancy, subscription billing, enterprise security, and rapid product iteration.",
    h1: "Custom SaaS Platforms",
    intro:
      "Bring scalable, multi-tenant software products to market faster with architecture engineered for security, recurring billing, and enterprise buyer readiness.",
    problem:
      "Building a commercial or multi-organization SaaS product involves complex foundational requirements—tenant isolation, billing, SSO, permissions, and observability—before the first core feature even ships.",
    solution:
      "A complete, production-grade SaaS architecture tailored to your domain, giving product teams a reliable foundation for rapid iteration.",
    capabilities: [
      "Multi-tenant isolation and organization workspaces",
      "Subscription plans, trials, usage tracking, and invoicing",
      "Self-serve onboarding, team invites, and granular RBAC",
      "Customer-facing REST APIs, webhooks, and admin analytics",
    ],
    architecture:
      "Cloud-native microservices or modular monoliths with tenant-scoped data access, containerized deployment, and automated CI/CD pipelines.",
    integrations: [
      "Payment & Billing Providers",
      "Enterprise SSO / OAuth2 / SAML",
      "Transactional Email & Notifications",
      "Product Analytics & Telemetry",
    ],
    security: [
      "Strict tenant-boundary enforcement across APIs and queries",
      "API rate limiting, key rotation, and webhook signature verification",
      "Encrypted credentials and compliance-ready audit logging",
      "Automated security dependency and regression checks",
    ],
    implementation: [
      "Define MVP scope, pricing model, and tenant architecture",
      "Build core platform foundation (auth, tenancy, billing)",
      "Develop differentiated domain features in iterative sprints",
      "Execute beta testing, load validation, and commercial launch",
    ],
    benefits: [
      "Faster path from product concept to recurring-revenue launch",
      "Enterprise-ready security and tenancy from early versions",
      "Maintainable codebase ready for rapid feature expansion",
      "Reduced operational friction managing growing customer accounts",
    ],
    relatedServices: [
      { label: "SaaS Development", href: "/services/saas-development/" },
      { label: "Cloud Solutions", href: "/services/cloud-solutions/" },
      { label: "Dedicated Engineering Teams", href: "/services/project-outsourcing/" },
    ],
    cta: "Launch Your SaaS Platform",
  },
  {
    id: "enterprise-system-integrations",
    path: "/solutions/enterprise-system-integrations/",
    title: "Enterprise System Integrations",
    description:
      "Enterprise system integration solutions connecting ERP, CRM, e-commerce, data warehouses, and legacy software into a reliable architecture.",
    h1: "Enterprise System Integrations",
    intro:
      "Connect your core business platforms—CRM, ERP, billing, logistics, and legacy databases—through resilient, observable integration layers that keep operational data synchronized.",
    problem:
      "As organizations adopt specialized tools across departments, disconnected data models lead to duplicate entry, conflicting KPIs, and brittle manual exports.",
    solution:
      "A structured integration architecture using canonical data contracts, event queues, and API middleware to synchronize records cleanly across platforms.",
    capabilities: [
      "Bi-directional CRM, ERP, finance, and inventory synchronization",
      "Canonical data mapping and conflict-resolution rules",
      "Event-driven webhooks and queued background processing",
      "Integration health dashboards, retry queues, and alerting",
    ],
    architecture:
      "Decoupled integration hub with schema validation, dead-letter queues, idempotent consumers, and adapter modules isolating third-party API changes.",
    integrations: [
      "CRM & Marketing Automation",
      "ERP, Supply Chain & Inventory",
      "Billing, Payments & Accounting",
      "Legacy On-Premise Databases",
      "Cloud Data Warehouses",
    ],
    security: [
      "Encrypted API credentials and secret rotation practices",
      "Mutual TLS / signed webhooks and IP allowlisting where supported",
      "Field-level filtering to minimize sensitive data exposure",
      "Traceable audit logs for every synchronized transaction",
    ],
    implementation: [
      "Inventory source/target systems and define source-of-truth rules",
      "Design canonical schemas, error handling, and retry policies",
      "Implement and test adapters against sandbox environments",
      "Deploy with live monitoring, alerts, and operational runbooks",
    ],
    benefits: [
      "Accurate, synchronized operational data across departments",
      "Elimination of manual CSV imports and duplicate entry",
      "Faster visibility for finance and executive reporting",
      "Resilient architecture that isolates upstream vendor API changes",
    ],
    relatedServices: [
      { label: "Business Process Automation", href: "/services/business-integrations/" },
      { label: "CRM & ERP Solutions", href: "/services/crm-erp/" },
      { label: "Legacy Modernization", href: "/services/legacy-modernization/" },
    ],
    cta: "Plan System Integrations",
  },
];

export interface IndustryRouteData {
  id: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  challenges: string[];
  solutions: string[];
  useCases: string[];
  benefits: string[];
  relatedServices: { label: string; href: string }[];
  faqs: { q: string; a: string }[];
  cta: string;
}

export const industryRoutes: IndustryRouteData[] = [
  {
    id: "healthcare",
    path: "/industries/healthcare/",
    title: "Healthcare & Life Sciences Technology Solutions",
    description:
      "Digital engineering, patient portals, data integration, and workflow automation for healthcare and life sciences organizations.",
    h1: "Healthcare & Life Sciences",
    intro:
      "We help healthcare providers, diagnostics organizations, and life sciences teams modernize legacy systems, improve digital patient experiences, and streamline administrative workflows with security-first engineering.",
    challenges: [
      "Strict patient data privacy, access-control, and regulatory compliance obligations",
      "Fragmented clinical, scheduling, and administrative software systems",
      "Manual patient intake, appointment coordination, and document processing",
      "Legacy systems limiting interoperability and modern telehealth experiences",
    ],
    solutions: [
      "Secure patient and practitioner self-service web and mobile portals",
      "Structured healthcare data integration and workflow automation",
      "Telehealth scheduling, intake, and digital engagement platforms",
      "Phased modernization of aging administrative and clinical-support software",
    ],
    useCases: [
      "Illustrative scenario: Digital patient intake, appointment scheduling, and records access portal",
      "Illustrative scenario: Automated referral routing and administrative document triage",
      "Illustrative scenario: Inter-system synchronization between scheduling, lab, and billing tools",
      "Illustrative scenario: Internal compliance and quality-reporting workflow platform",
    ],
    benefits: [
      "Smoother digital experience for patients and care coordinators",
      "Reduced administrative paperwork and manual scheduling errors",
      "Stronger role-based access controls and auditability",
      "Clearer interoperability across internal and partner systems",
    ],
    relatedServices: [
      { label: "Customer Portals & Mobile Apps", href: "/services/mobile-app-development/" },
      { label: "Business Process Automation", href: "/services/business-integrations/" },
      { label: "Cloud Solutions", href: "/services/cloud-solutions/" },
    ],
    faqs: [
      {
        q: "How do you approach data privacy and access controls for healthcare applications?",
        a: "We design healthcare platforms around least-privilege role-based access, encryption in transit and at rest, comprehensive audit logging, and strict environment segregation aligned with your compliance requirements.",
      },
      {
        q: "Can you integrate new patient portals with existing practice management or EHR tools?",
        a: "Yes. We evaluate available APIs or structured integration standards supported by your existing systems to synchronize appointments, status updates, and administrative records safely.",
      },
    ],
    cta: "Discuss Healthcare Solutions",
  },
  {
    id: "financial-services",
    path: "/industries/financial-services/",
    title: "Banking & Financial Services Technology",
    description:
      "Secure software engineering, legacy modernization, workflow automation, and API integrations for banking and financial services.",
    h1: "Banking & Financial Services",
    intro:
      "We help financial institutions, fintechs, and advisory firms modernize core digital touchpoints, automate compliance-heavy workflows, and engineer secure, auditable platforms.",
    challenges: [
      "Complex regulatory reporting, auditability, and KYC/onboarding workflows",
      "Aging core systems slowing down digital product launches and partner integrations",
      "High security standards required across customer portals and transaction APIs",
      "Manual reconciliation across finance, risk, and client servicing teams",
    ],
    solutions: [
      "Hardened digital client onboarding and document verification workflows",
      "Secure API integration layers connecting core systems and third-party services",
      "Automated compliance reporting and operational reconciliation pipelines",
      "Phased legacy modernization and cloud infrastructure hardening",
    ],
    useCases: [
      "Illustrative scenario: Digital client KYC intake and multi-tier compliance approval portal",
      "Illustrative scenario: Automated financial reconciliation and exception-routing workflows",
      "Illustrative scenario: Secure wealth or commercial banking client self-service portal",
      "Illustrative scenario: API gateway exposing modernized services over legacy core systems",
    ],
    benefits: [
      "Faster, cleaner digital onboarding for commercial and retail clients",
      "Stronger audit trails across compliance and operational workflows",
      "Reduced manual reconciliation effort and operational risk",
      "Modern, scalable architecture without disruptive core overhauls",
    ],
    relatedServices: [
      { label: "Legacy Modernization", href: "/services/legacy-modernization/" },
      { label: "Enterprise Applications", href: "/services/enterprise-solutions/" },
      { label: "AI & Intelligent Automation", href: "/services/ai-automation/" },
    ],
    faqs: [
      {
        q: "How do you reduce risk when modernizing legacy financial systems?",
        a: "We apply incremental strangler-fig modernization patterns, automated regression testing, and parallel validation phases so existing financial workflows remain stable during transition.",
      },
      {
        q: "Can you build custom client portals with strict multi-factor authentication and audit logs?",
        a: "Yes. Enterprise authentication (SSO/MFA), granular permissions, and immutable activity logs are core components of our financial services architectures.",
      },
    ],
    cta: "Discuss Financial Solutions",
  },
  {
    id: "manufacturing",
    path: "/industries/manufacturing/",
    title: "Manufacturing & Industrial Technology Solutions",
    description:
      "Operational software, ERP integration, supply chain automation, and analytics solutions for manufacturing and industrial enterprises.",
    h1: "Manufacturing & Industrial",
    intro:
      "We partner with manufacturing and industrial organizations to connect plant operations, supply chain workflows, ERP systems, and vendor portals for clearer operational visibility.",
    challenges: [
      "Disconnected production, inventory, quality, and ERP reporting tools",
      "Limited real-time visibility across suppliers, procurement, and dispatch",
      "Manual inspection checklists, maintenance logs, and shift handovers",
      "Legacy operational systems lacking mobile or web accessibility",
    ],
    solutions: [
      "Integrated ERP, inventory, and production-tracking portals",
      "Digital vendor, procurement, and supply chain coordination workflows",
      "Mobile field and shop-floor inspection/maintenance applications",
      "Operational dashboards consolidating plant and logistics telemetry",
    ],
    useCases: [
      "Illustrative scenario: Supplier portal synchronizing purchase orders and dispatch status with ERP",
      "Illustrative scenario: Digital quality-control and equipment maintenance mobile workflow",
      "Illustrative scenario: Multi-site inventory and production scheduling visibility console",
      "Illustrative scenario: Automated exception alerts for supply chain or fulfillment delays",
    ],
    benefits: [
      "Improved operational visibility across plants, warehouses, and suppliers",
      "Reduced manual data entry between shop-floor operations and ERP",
      "Faster issue escalation and preventive maintenance tracking",
      "Streamlined vendor communication and procurement cycles",
    ],
    relatedServices: [
      { label: "CRM & ERP Solutions", href: "/services/crm-erp/" },
      { label: "Business Process Automation", href: "/services/business-integrations/" },
      { label: "Customer Portals & Mobile Apps", href: "/services/mobile-app-development/" },
    ],
    faqs: [
      {
        q: "Can your mobile or shop-floor apps work in areas with limited connectivity?",
        a: "Yes. For field and industrial environments, we can architect offline-capable workflows that cache actions locally and synchronize safely once connectivity resumes.",
      },
      {
        q: "Do you integrate with existing manufacturing ERP platforms?",
        a: "Yes. We build clean API and data-sync layers so new portals or mobile workflows read from and write back to your ERP system of record.",
      },
    ],
    cta: "Discuss Manufacturing Solutions",
  },
  {
    id: "retail-ecommerce",
    path: "/industries/retail-ecommerce/",
    title: "Retail & E-Commerce Technology Solutions",
    description:
      "High-performance e-commerce platforms, omnichannel inventory integration, customer portals, and AI service automation for retail brands.",
    h1: "Retail & E-Commerce",
    intro:
      "We build fast, conversion-focused e-commerce platforms and connected retail operations—unifying storefront experiences, inventory management, fulfillment, and AI-assisted customer support.",
    challenges: [
      "Slow storefront load times hurting organic search and mobile conversion",
      "Inventory mismatches across online storefronts, warehouses, and channels",
      "High seasonal traffic spikes straining fragile hosting architectures",
      "Support teams overwhelmed by repetitive order-status and return inquiries",
    ],
    solutions: [
      "Performance-optimized web and e-commerce storefronts built for Core Web Vitals",
      "Real-time inventory, order, and fulfillment synchronization with ERP/WMS",
      "Customer self-service account portals and loyalty/order tracking",
      "AI customer assistants grounded in catalog, policy, and order status data",
    ],
    useCases: [
      "Illustrative scenario: High-speed B2C or B2B e-commerce storefront with ERP inventory sync",
      "Illustrative scenario: Customer self-service returns and order-tracking portal",
      "Illustrative scenario: AI support assistant resolving routine order and shipping questions",
      "Illustrative scenario: Unified multi-warehouse order routing and fulfillment dashboard",
    ],
    benefits: [
      "Faster mobile browsing and smoother checkout journeys",
      "Accurate stock visibility reducing overselling and manual order fixes",
      "Scalable cloud architecture prepared for seasonal traffic peaks",
      "Lower support overhead via self-service and AI-assisted triage",
    ],
    relatedServices: [
      { label: "Enterprise Websites & E-Commerce", href: "/services/web-ecommerce/" },
      { label: "AI Agents & AI Assistants", href: "/services/ai-agents-assistants/" },
      { label: "Business Process Automation", href: "/services/business-integrations/" },
    ],
    faqs: [
      {
        q: "Can you integrate our online store with our warehouse or ERP system?",
        a: "Yes. Real-time or near-real-time synchronization of SKU catalogs, stock levels, orders, and shipping updates is a core part of our commerce engineering.",
      },
      {
        q: "How do you optimize e-commerce sites for search and mobile speed?",
        a: "We use server-side rendering, responsive image formats, clean semantic HTML, structured product metadata, and edge caching to target strong Core Web Vitals.",
      },
    ],
    cta: "Discuss Retail Solutions",
  },
  {
    id: "professional-services",
    path: "/industries/professional-services/",
    title: "Professional Services Technology Solutions",
    description:
      "Client portals, CRM/practice integrations, and AI document automation for consulting, legal, accounting, and advisory firms.",
    h1: "Professional Services",
    intro:
      "We help consulting, advisory, legal, and accounting organizations elevate client delivery through branded client portals, automated engagement workflows, and intelligent knowledge tools.",
    challenges: [
      "Client deliverables, approvals, and status updates scattered across email threads",
      "Manual client onboarding, NDA/engagement tracking, and resource allocation",
      "Knowledge locked inside past proposals, documents, and team inboxes",
      "Disconnected CRM, time tracking, project management, and invoicing systems",
    ],
    solutions: [
      "Branded client collaboration portals for deliverables, requests, and billing",
      "Automated client onboarding and internal approval workflows",
      "CRM-to-project and finance system integrations",
      "Private AI knowledge assistants for internal research and document drafting",
    ],
    useCases: [
      "Illustrative scenario: Client engagement portal for document exchange and milestone sign-offs",
      "Illustrative scenario: Automated intake-to-CRM-to-billing onboarding pipeline",
      "Illustrative scenario: Access-controlled AI assistant searching internal methodology libraries",
      "Illustrative scenario: Practice utilization and project margin reporting dashboard",
    ],
    benefits: [
      "Elevated digital client experience matching advisory credibility",
      "Less partner and consultant time lost to administrative coordination",
      "Faster knowledge retrieval across distributed practice teams",
      "Cleaner alignment between project delivery and billing",
    ],
    relatedServices: [
      { label: "Customer Portals & Mobile Apps", href: "/services/mobile-app-development/" },
      { label: "AI Agents & AI Assistants", href: "/services/ai-agents-assistants/" },
      { label: "CRM & ERP Solutions", href: "/services/crm-erp/" },
    ],
    faqs: [
      {
        q: "How do you keep client engagements separated inside an internal AI knowledge assistant?",
        a: "We enforce strict workspace and document-level access controls at retrieval time so staff only query materials they are authorized to access.",
      },
      {
        q: "Can client portals integrate with our existing CRM and accounting software?",
        a: "Yes. We connect portals directly with CRM, document storage, and billing platforms so updates reflect automatically.",
      },
    ],
    cta: "Discuss Advisory Solutions",
  },
  {
    id: "technology-saas",
    path: "/industries/technology-saas/",
    title: "Technology & SaaS Engineering Partner",
    description:
      "Multi-tenant SaaS architecture, AI feature engineering, cloud DevOps, and dedicated engineering teams for technology and SaaS companies.",
    h1: "Technology & SaaS",
    intro:
      "We partner with software companies and SaaS scale-ups to accelerate product roadmaps, strengthen multi-tenant architecture, embed practical AI capabilities, and expand engineering capacity.",
    challenges: [
      "Product roadmap pressure outpacing internal engineering bandwidth",
      "Scaling multi-tenant performance, reliability, and enterprise security readiness",
      "Integrating customer-requested third-party APIs and AI product features quickly",
      "Controlling cloud infrastructure costs and deployment stability as usage grows",
    ],
    solutions: [
      "Dedicated engineering squads and co-delivery across frontend, backend, and QA",
      "Multi-tenant SaaS architecture modernization and performance optimization",
      "Embedded AI assistants, RAG features, and workflow automation inside SaaS products",
      "Cloud DevOps, CI/CD automation, and observability upgrades",
    ],
    useCases: [
      "Illustrative scenario: Dedicated engineering pod accelerating a multi-quarter SaaS roadmap",
      "Illustrative scenario: Adding an AI copilot or intelligent search feature to an existing SaaS app",
      "Illustrative scenario: Re-architecting slow database queries and multi-tenant APIs",
      "Illustrative scenario: Recruiting specialized senior engineers alongside immediate squad support",
    ],
    benefits: [
      "Faster feature delivery without sacrificing architectural quality",
      "Flexible scaling through dedicated teams or permanent hiring support",
      "Higher platform resilience, test coverage, and release confidence",
      "Practical AI engineering focused on real user adoption",
    ],
    relatedServices: [
      { label: "SaaS Development", href: "/services/saas-development/" },
      { label: "Project Outsourcing", href: "/services/project-outsourcing/" },
      { label: "Recruitment & Staffing", href: "/services/talent-staffing/" },
    ],
    faqs: [
      {
        q: "Can your engineers embed directly into our existing Git and sprint workflow?",
        a: "Yes. Our dedicated engineering teams work directly within your repositories, CI checks, code review standards, and sprint planning rituals.",
      },
      {
        q: "Can we combine dedicated engineering capacity with permanent recruitment?",
        a: "Yes. Many technology companies start with a dedicated VG Consultancy pod to ship immediately while using our recruitment practice to build permanent in-house teams.",
      },
    ],
    cta: "Accelerate Your Roadmap",
  },
];
