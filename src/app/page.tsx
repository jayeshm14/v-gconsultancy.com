import Link from "next/link";
import {
  Bot,
  Zap,
  Link as LinkIcon,
  Code2,
  Database,
  Smartphone,
  Cloud,
  Layers,
  Handshake,
  Brain,
  Users,
  Award,
  Target,
  Globe,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Smile,
  FolderCheck,
  ThumbsUp,
  Coffee,
  type LucideIcon,
} from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "VG Consultancy | Technology, AI & Digital Engineering",
  description:
    "VG Consultancy helps organizations transform business operations through intelligent technology, software engineering, AI-powered automation and enterprise solutions. Established in 2016.",
  path: "/",
});

const serviceIcons: Record<string, LucideIcon> = {
  "web-ecommerce": Globe,
  "ai-agents-assistants": Bot,
  "ai-automation": Zap,
  "business-integrations": LinkIcon,
  "saas-development": Code2,
  "crm-erp": Database,
  "mobile-app-development": Smartphone,
  "cloud-solutions": Cloud,
};

const whyIcons: Record<string, LucideIcon> = {
  "Established Experience Since 2016": Award,
  "Engineering-Led Approach": Code2,
  "Business-Focused Solutions": Target,
  "Scalable Architecture": Layers,
  "Flexible Engagement Models": Handshake,
  "Technology Expertise": Brain,
  "Long-Term Partnerships": Users,
};

const statIcons: Record<string, LucideIcon> = {
  clients: Smile,
  projects: FolderCheck,
  feedback: ThumbsUp,
  coffee: Coffee,
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* HERO SECTION */}
        <section className="bg-gradient-dark text-white py-16 sm:py-20 lg:py-28 border-b border-white/10">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-5">
                  {homeContent.eyebrow}
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white mb-6">
                  {homeContent.heroHeadingPrefix}{" "}
                  <span className="text-brand-gold">{homeContent.heroHeadingAccent}</span>
                </h1>

                <p className="text-slate-100 text-lg sm:text-xl leading-relaxed mb-4 max-w-2xl font-medium">
                  {homeContent.heroSubheading}
                </p>

                <p className="text-brand-dark-muted text-base leading-relaxed mb-4 max-w-2xl">
                  {homeContent.heroBody}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-2xl">
                  {homeContent.heroCredibility}
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="/free-consultation/">
                      {homeContent.heroPrimaryCTA}
                      <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild size="lg" className="w-full sm:w-auto">
                    <Link href="/services/">{homeContent.heroSecondaryCTA}</Link>
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-sm">
                  <span className="inline-flex items-center gap-2 font-bold text-brand-gold">
                    <ShieldCheck size={18} aria-hidden="true" />
                    {homeContent.heroTrust}
                  </span>
                  <span className="text-brand-dark-muted">
                    Engineering Intelligence. Enabling Growth.
                  </span>
                </div>
              </div>

              {/* Restrained Enterprise Architecture Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-white/15 bg-brand-navy/90 p-6 sm:p-8 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                        CORE PRACTICE AREAS
                      </p>
                      <p className="text-sm text-brand-dark-muted mt-0.5">
                        Integrated Engineering &amp; AI Delivery
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-brand-teal/20 border border-brand-teal/40 px-3 py-1 text-xs font-bold text-emerald-300">
                      Est. 2016
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {[
                      {
                        title: "AI Agents & Intelligent Automation",
                        desc: "Grounded workflows, RAG assistants, and decision support",
                        href: "/services/ai-automation/",
                      },
                      {
                        title: "Custom Software, Web & SaaS",
                        desc: "Scalable digital products and multi-tenant platforms",
                        href: "/services/software-development/",
                      },
                      {
                        title: "Enterprise Systems & Cloud",
                        desc: "CRM, ERP, API integrations, and legacy modernization",
                        href: "/services/cloud-solutions/",
                      },
                      {
                        title: "IT Consulting, Talent & Outsourcing",
                        desc: "Advisory, recruitment, staffing, and dedicated squads",
                        href: "/services/project-outsourcing/",
                      },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-brand-gold/50 hover:bg-white/10 transition-colors group"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <h2 className="text-sm font-bold text-white group-hover:text-brand-gold transition-colors">
                              {item.title}
                            </h2>
                            <p className="text-xs text-brand-dark-muted mt-1">{item.desc}</p>
                          </div>
                          <ArrowRight
                            size={16}
                            className="text-brand-gold shrink-0 group-hover:translate-x-0.5 transition-transform"
                            aria-hidden="true"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section aria-label="Core commitments" className="bg-brand-gold text-brand-dark border-b border-brand-bronze/30">
          <div className="container py-5">
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-around gap-4 text-xs sm:text-sm font-extrabold tracking-wide text-center">
              <span className="inline-flex items-center gap-2">
                <Award size={17} aria-hidden="true" /> YOUR SUCCESS IS OUR PRIORITY
              </span>
              <span className="inline-flex items-center gap-2">
                <Brain size={17} aria-hidden="true" /> INNOVATIVE SOLUTIONS
              </span>
              <span className="inline-flex items-center gap-2">
                <Layers size={17} aria-hidden="true" /> SCALABLE GROWTH
              </span>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION (8 Capabilities) */}
        <section className="section bg-brand-light">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">WHAT WE DO</span>
              <h2 className="section-title">{homeContent.servicesHeading}</h2>
              <p className="section-subtitle">{homeContent.servicesSubheading}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {homeContent.services.map((svc, idx) => {
                const Icon = serviceIcons[svc.id] || Code2;
                return (
                  <Link
                    key={svc.id}
                    href={svc.href}
                    className="group card p-6"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div className="service-icon">
                        <Icon size={22} aria-hidden="true" />
                      </div>
                      <span className="text-xs font-extrabold text-brand-bronze-text">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-brand-ink mb-2.5 group-hover:text-brand-bronze-text transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed mb-5 flex-1">
                      {svc.description}
                    </p>
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-brand-bronze-text">
                      <span>Explore Service</span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <Button asChild variant="outline-dark" size="lg">
                <Link href="/services/">
                  View All 14 Services Including IT Consulting &amp; Staffing
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="rounded-3xl bg-gradient-dark text-white p-8 sm:p-10 border border-brand-gold/25">
                  <img
                    src="/images/logo.png"
                    alt="VG Consultancy emblem"
                    width={88}
                    height={45}
                    className="h-11 w-auto mb-2 object-contain"
                  />
                  <p className="text-slate-200 text-xs font-semibold tracking-wide mb-6">
                    Virtual Growth Private Limited
                  </p>
                  <p className="text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-2">
                    ESTABLISHED 2016
                  </p>
                  <p className="font-display text-2xl font-extrabold text-white leading-snug mb-4">
                    Technology, Talent &amp; Intelligent Business Transformation
                  </p>
                  <p className="text-brand-dark-muted text-sm leading-relaxed mb-6">
                    Serving organizations across India and global markets with engineering discipline, AI integration, and specialized IT talent.
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                      <span className="font-bold text-white block">Primary Focus</span>
                      <span className="text-brand-dark-muted">AI &amp; Digital Engineering</span>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                      <span className="font-bold text-white block">Talent Lines</span>
                      <span className="text-brand-dark-muted">Consulting &amp; Staffing</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <span className="section-kicker">ABOUT VG CONSULTANCY</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-ink leading-tight mb-5">
                  {homeContent.aboutHeading}
                </h2>
                <p className="text-brand-muted text-base sm:text-lg leading-relaxed mb-6">
                  {homeContent.aboutBody}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link href={homeContent.aboutLinkHref}>
                      {homeContent.aboutLinkText}
                      <ArrowRight size={17} aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline-dark" size="lg">
                    <Link href="/about/our-approach/">See Our Approach</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATISTICS SECTION */}
        <section aria-label="Company highlights and statistics" className="bg-gradient-dark text-white py-14 border-y border-brand-gold/25">
          <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {homeContent.stats.map((stat) => {
                const Icon = statIcons[stat.id] || Award;
                return (
                  <div
                    key={stat.id}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col items-center"
                  >
                    <Icon size={26} className="text-brand-gold mb-3" aria-hidden="true" />
                    <p className="font-display text-3xl sm:text-4xl font-extrabold text-brand-gold mb-1">
                      {stat.value}
                    </p>
                    <p className="text-brand-dark-muted text-sm font-medium">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY VG CONSULTANCY */}
        <section className="section bg-brand-light">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">WHY VG CONSULTANCY</span>
              <h2 className="section-title">Why Organizations Partner With Us</h2>
              <p className="section-subtitle">{homeContent.whySubheading}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {homeContent.whyItems.map((item) => {
                const Icon = whyIcons[item.title] || CheckCircle2;
                return (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                    <div className="w-11 h-11 rounded-xl bg-brand-light border border-slate-200 flex items-center justify-center text-brand-bronze-text mb-4">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-ink mb-2">{item.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TECHNOLOGY CAPABILITIES */}
        <section className="section bg-white">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">TECHNOLOGY CAPABILITIES</span>
              <h2 className="section-title">{homeContent.techHeading}</h2>
              <p className="section-subtitle">{homeContent.techSubheading}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {homeContent.techCategories.map((cat) => (
                <div key={cat.title} className="rounded-2xl border border-slate-200 bg-brand-light p-7">
                  <h3 className="text-lg font-bold text-brand-ink mb-2.5">{cat.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed mb-5">{cat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((tech) => (
                      <span key={tech} className="badge badge-blue">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="section bg-brand-light">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">INDUSTRIES</span>
              <h2 className="section-title">{homeContent.industriesHeading}</h2>
              <p className="section-subtitle">{homeContent.industriesSubheading}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {homeContent.industries.map((ind) => (
                <Link key={ind.id} href={ind.href} className="card p-7 group">
                  <h3 className="text-xl font-bold text-brand-ink mb-3 group-hover:text-brand-bronze-text transition-colors">
                    {ind.title}
                  </h3>
                  <div className="space-y-3 text-sm mb-5 flex-1">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-muted block mb-1">
                        Key Challenge
                      </span>
                      <p className="text-brand-muted leading-relaxed">{ind.problem}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
                        Our Solution Focus
                      </span>
                      <p className="text-brand-ink leading-relaxed">{ind.solution}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-brand-bronze-text">
                    <span>Explore Sector</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="section bg-white">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">HOW WE WORK</span>
              <h2 className="section-title">{homeContent.howWeWorkHeading}</h2>
              <p className="section-subtitle">{homeContent.howWeWorkSubheading}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {homeContent.steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-brand-light p-6 flex flex-col"
                >
                  <span className="w-10 h-10 rounded-full bg-brand-dark text-brand-gold flex items-center justify-center font-extrabold text-sm mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-brand-ink mb-2">{step.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE & COMPANY JOURNEY (VERIFIED 2016) */}
        <section className="section bg-brand-dark text-white">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-4">
                  {homeContent.journeySection.kicker}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                  {homeContent.journeySection.heading}
                </h2>
                <p className="text-brand-dark-muted text-base leading-relaxed mb-6">
                  {homeContent.journeySection.body}
                </p>
                <Button asChild variant="outline">
                  <Link href="/about/our-journey/">
                    Explore Our Journey
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </Button>
              </div>

              <div className="lg:col-span-6 space-y-4">
                {homeContent.journeySection.highlights.map((hl) => (
                  <div
                    key={hl.label}
                    className="rounded-2xl border border-white/15 bg-white/5 p-5"
                  >
                    <h3 className="text-base font-bold text-brand-gold mb-1">{hl.label}</h3>
                    <p className="text-brand-dark-muted text-sm leading-relaxed">{hl.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ENGAGEMENT MODELS */}
        <section className="section bg-brand-light">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">ENGAGEMENT MODELS</span>
              <h2 className="section-title">{homeContent.engagementHeading}</h2>
              <p className="section-subtitle">{homeContent.engagementSubheading}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {homeContent.engagementModels.map((model) => (
                <div
                  key={model.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-brand-ink mb-2.5">{model.title}</h3>
                  <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                    {model.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section bg-white">
          <div className="container">
            <div className="rounded-3xl bg-gradient-dark text-white p-8 sm:p-12 lg:p-16 text-center border border-brand-gold/35 shadow-xl">
              <span className="text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-3 block">
                START A CONVERSATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
                {homeContent.finalCtaHeading}
              </h2>
              <p className="text-slate-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
                {homeContent.finalCtaBody}
              </p>
              <p className="text-brand-dark-muted text-sm mb-8 max-w-xl mx-auto">
                {homeContent.finalCtaNote}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/free-consultation/">
                    {homeContent.finalCtaButton}
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link href="/contact/">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
