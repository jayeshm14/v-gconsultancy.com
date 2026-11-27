export type InsightCategory = "blog" | "technology-guides" | "ai-insights";

export interface InsightArticle {
  slug: string;
  category: InsightCategory;
  categoryLabel: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  summary: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  relatedServiceHref: string;
  relatedServiceLabel: string;
}

export const insightCategoryMeta: Record<
  InsightCategory,
  {
    title: string;
    heading: string;
    description: string;
    intro: string;
  }
> = {
  blog: {
    title: "Blog & Engineering Perspectives",
    heading: "Blog",
    description:
      "Perspectives from VG Consultancy on software engineering, enterprise modernization, technology talent, and digital transformation.",
    intro:
      "Practical commentary from our engineering and consulting teams on building durable digital systems and aligning technology with business outcomes.",
  },
  "technology-guides": {
    title: "Enterprise Technology Guides",
    heading: "Technology Guides",
    description:
      "In-depth architecture and implementation guides covering legacy modernization, API integration, cloud reliability, and SaaS engineering.",
    intro:
      "Structured reference guides for CTOs, engineering leaders, and operations directors evaluating modernization, integration, and platform decisions.",
  },
  "ai-insights": {
    title: "AI Insights & Automation Briefings",
    heading: "AI Insights",
    description:
      "Practical briefings on enterprise AI agents, RAG architectures, workflow automation, and AI governance from VG Consultancy.",
    intro:
      "Engineering-led guidance on deploying AI assistants and intelligent automation safely inside real business operations.",
  },
};

export const insightArticles: InsightArticle[] = [
  {
    slug: "enterprise-ai-agents-beyond-chatbots",
    category: "ai-insights",
    categoryLabel: "AI Insights",
    title: "Enterprise AI Agents: Moving From Demo Chatbots to Bounded Operational Workflows",
    description:
      "How organizations design reliable AI agents with grounded retrieval, strict API permission boundaries, validation schemas, and human escalation.",
    publishedAt: "2026-10-15",
    readTime: "6 min read",
    tags: ["AI Agents", "RAG", "Governance", "Automation"],
    summary:
      "Why production AI assistants succeed when treated as bounded software systems—combining retrieval grounding, deterministic schema checks, and explicit human approval gates.",
    sections: [
      {
        heading: "Why Prototype Chatbots Stall Before Production",
        paragraphs: [
          "Many organizations experiment with conversational AI prototypes that look impressive on curated prompts yet stall before customer or operational rollout. The gap is rarely the underlying language model alone—it is the missing engineering layer around data access, permission enforcement, and deterministic integration.",
          "Without grounded context and bounded execution rules, an assistant can misstate policy details or attempt actions outside its authority. Production readiness starts by treating an AI agent as a constrained software component inside your existing architecture.",
        ],
      },
      {
        heading: "Four Architectural Pillars for Production AI Assistants",
        paragraphs: [
          "Across customer support, internal knowledge retrieval, and workflow triage, reliable AI systems share four structural safeguards:",
        ],
        bullets: [
          "Permission-aware Retrieval-Augmented Generation (RAG) so users only retrieve documents they are authorized to view.",
          "Strict schema validation between model outputs and downstream CRM, ERP, or helpdesk APIs.",
          "Confidence thresholds and explicit human-in-the-loop checkpoints before state-changing actions.",
          "Traceable audit logs capturing retrieved sources, tool calls, and escalation context.",
        ],
      },
      {
        heading: "Starting With Bounded, High-Friction Workflows",
        paragraphs: [
          "Rather than attempting an autonomous agent across every department at once, high-return implementations target focused bottlenecks: structured intake triage, knowledge lookup with source citations, or draft generation reviewed by a specialist.",
        ],
      },
    ],
    relatedServiceHref: "/services/ai-agents-assistants/",
    relatedServiceLabel: "AI Agents & AI Assistants",
  },
  {
    slug: "practical-ai-automation-checklist-for-operations",
    category: "ai-insights",
    categoryLabel: "AI Insights",
    title: "Evaluating Business Processes for AI Automation: A Practical Readiness Framework",
    description:
      "A structured checklist to identify which operational workflows benefit from AI automation versus deterministic API integrations.",
    publishedAt: "2026-09-22",
    readTime: "5 min read",
    tags: ["AI Automation", "Operations", "Workflow Design"],
    summary:
      "Not every workflow needs generative AI. Learn how to pair deterministic rules with AI extraction where unstructured inputs slow down operations.",
    sections: [
      {
        heading: "Distinguishing Deterministic Rules From AI Judgment",
        paragraphs: [
          "If two systems already exchange clean, structured records via API, deterministic integration middleware is faster, cheaper, and completely predictable. AI adds genuine leverage where teams currently spend manual hours reading emails, PDFs, tickets, or inconsistent vendor documents before entering data.",
        ],
      },
      {
        heading: "Readiness Criteria Before Automating",
        paragraphs: [
          "Before committing engineering effort to an automation pipeline, evaluate each candidate workflow across four practical criteria:",
        ],
        bullets: [
          "Volume and frequency: Does the manual process recur daily or weekly across multiple staff?",
          "Exception clarity: Can stakeholders clearly define when human review is mandatory?",
          "System connectivity: Do target CRM, ERP, or storage platforms provide stable APIs or export paths?",
          "Verification metrics: How will the team measure accuracy, turnaround time, and exception rates?",
        ],
      },
    ],
    relatedServiceHref: "/services/ai-automation/",
    relatedServiceLabel: "AI & Intelligent Automation",
  },
  {
    slug: "phased-legacy-modernization-strangler-pattern",
    category: "technology-guides",
    categoryLabel: "Technology Guides",
    title: "Phased Legacy Modernization: Replacing Fragile Systems Without Business Disruption",
    description:
      "An architectural guide to modernizing legacy software incrementally using API facades, parallel validation, and staged data migration.",
    publishedAt: "2026-10-02",
    readTime: "7 min read",
    tags: ["Legacy Modernization", "Architecture", "Cloud"],
    summary:
      "Big-bang rewrites carry high operational risk. Here is how incremental strangler-fig modernization keeps core operations stable while retiring technical debt.",
    sections: [
      {
        heading: "Why Big-Bang Rewrites Frequently Overrun",
        paragraphs: [
          "Legacy systems often encode years of undocumented edge cases, compliance checks, and operational workarounds. Attempting to freeze feature requests while rebuilding an entire platform from scratch exposes organizations to long timelines and risky cutover weekends.",
        ],
      },
      {
        heading: "The Incremental Modernization Sequence",
        paragraphs: [
          "A phased engineering approach breaks modernization into verifiable slices:",
        ],
        bullets: [
          "Dependency and data-flow mapping across the legacy database and user workflows.",
          "Introducing an API gateway or anti-corruption layer to decouple modern interfaces from legacy internals.",
          "Migrating one bounded workflow (such as customer portals or reporting) at a time with parallel verification.",
          "Automated regression suites and staged data-cleansing dry runs prior to decommissioning legacy modules.",
        ],
      },
    ],
    relatedServiceHref: "/services/legacy-modernization/",
    relatedServiceLabel: "Legacy System Modernization",
  },
  {
    slug: "designing-resilient-crm-erp-integrations",
    category: "technology-guides",
    categoryLabel: "Technology Guides",
    title: "Designing Resilient CRM, ERP, and E-Commerce Integrations",
    description:
      "Engineering patterns for preventing duplicate records, silent sync failures, and API rate-limit bottlenecks across enterprise software.",
    publishedAt: "2026-08-28",
    readTime: "6 min read",
    tags: ["API Integrations", "CRM", "ERP", "Middleware"],
    summary:
      "Point-to-point scripts fail quietly under load. Learn how canonical models, idempotency keys, and dead-letter queues keep enterprise data accurate.",
    sections: [
      {
        heading: "The Hidden Cost of Fragile Point-to-Point Scripts",
        paragraphs: [
          "Quick scripts connecting a storefront or CRM to an ERP often work in low-volume testing, then break silently when a third-party API experiences a brief timeout or changes a field format. Missing orders and mismatched invoices quickly erode team trust.",
        ],
      },
      {
        heading: "Core Reliability Patterns",
        paragraphs: [
          "Production integration middleware relies on clear engineering safeguards:",
        ],
        bullets: [
          "Single source of truth ownership defined per entity (customer, SKU, invoice, fulfillment).",
          "Idempotency keys so retried webhooks never create duplicate orders or accounting entries.",
          "Queued asynchronous processing with exponential backoff and dead-letter alerting.",
          "Schema validation at system boundaries to surface upstream changes immediately.",
        ],
      },
    ],
    relatedServiceHref: "/services/business-integrations/",
    relatedServiceLabel: "Business Process Automation & Integrations",
  },
  {
    slug: "aligning-engineering-and-talent-for-digital-transformation",
    category: "blog",
    categoryLabel: "Blog",
    title: "Why Digital Transformation Requires Both Engineering Execution and Specialized Talent",
    description:
      "How combining software engineering, IT advisory, and targeted technical hiring helps growing organizations sustain transformation.",
    publishedAt: "2026-11-05",
    readTime: "4 min read",
    tags: ["Digital Transformation", "Engineering", "Talent"],
    summary:
      "Technology initiatives succeed when architecture, implementation capacity, and long-term internal capability evolve together.",
    sections: [
      {
        heading: "Technology Alone Does Not Sustain Change",
        paragraphs: [
          "Since VG Consultancy was established in 2016, one pattern has remained consistent across industries: ambitious digital projects stall not only from architectural mistakes, but from mismatched team capacity during and after launch.",
          "Organizations often need immediate engineering execution to modernize platforms or introduce AI workflows, paired with a practical plan to recruit, upskill, or retain the specialists who will steward those systems long term.",
        ],
      },
      {
        heading: "Bridging Delivery and Capability Building",
        paragraphs: [
          "Whether through project-based delivery, dedicated engineering squads, or targeted IT recruitment and staffing, aligning delivery governance with long-term talent planning ensures new platforms create durable operational value rather than becoming tomorrow's unsupported legacy.",
        ],
      },
    ],
    relatedServiceHref: "/services/project-outsourcing/",
    relatedServiceLabel: "Project Outsourcing & Dedicated Teams",
  },
  {
    slug: "modern-corporate-websites-technical-seo-and-trust",
    category: "blog",
    categoryLabel: "Blog",
    title: "What International B2B Buyers Expect From an Enterprise Technology Website",
    description:
      "Key engineering, accessibility, SEO, and content integrity principles behind credible international corporate websites.",
    publishedAt: "2026-10-24",
    readTime: "5 min read",
    tags: ["Enterprise Web", "Technical SEO", "Accessibility"],
    summary:
      "Enterprise buyers evaluate technical competence from the very first page load—through clear positioning, fast performance, and verifiable substance.",
    sections: [
      {
        heading: "Clarity, Speed, and Verifiable Substance",
        paragraphs: [
          "International B2B buyers rarely have patience for vague slogans or slow, cluttered websites. Clear navigation by service, industry, and solution—backed by fast server-rendered pages and accessible forms—signals engineering discipline before a consultation ever happens.",
        ],
      },
      {
        heading: "Technical Foundations That Matter",
        paragraphs: [
          "Every corporate rebuild should prioritize durable web fundamentals:",
        ],
        bullets: [
          "Server-rendered crawlable pages with clean canonical URLs, sitemaps, and structured data.",
          "WCAG 2.2 AA contrast, keyboard navigation, and accessible form validation.",
          "Honest, verified company positioning without inflated metrics or generic filler.",
          "Preserved legacy URL redirects so historical search equity carries forward cleanly.",
        ],
      },
    ],
    relatedServiceHref: "/services/web-ecommerce/",
    relatedServiceLabel: "Enterprise Websites & E-Commerce",
  },
];

export function getInsightBySlug(category: InsightCategory, slug: string): InsightArticle | undefined {
  return insightArticles.find((a) => a.category === category && a.slug === slug);
}

export function getInsightsByCategory(category: InsightCategory): InsightArticle[] {
  return insightArticles.filter((a) => a.category === category);
}
