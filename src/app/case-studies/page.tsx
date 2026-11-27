import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "VG Consultancy case studies and client engagement overview across AI automation, software engineering, and enterprise modernization.",
  path: "/case-studies/",
});

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main id="main-content" className="flex-1">
        <section className="bg-gradient-dark text-white py-16 lg:py-24 border-b border-white/10">
          <div className="container">
            <div className="mb-8">
              <Breadcrumbs items={[{ label: "Case Studies", href: "/case-studies/" }]} dark />
            </div>
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-brand-gold/35 bg-brand-gold/10 text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-4">
                CLIENT ENGAGEMENTS
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
                Case Studies &amp; Engagement Portfolio
              </h1>
              <p className="text-brand-dark-muted text-lg leading-relaxed">
                Explore the domains where VG Consultancy delivers AI, software engineering, and enterprise transformation—alongside our client confidentiality standards.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container max-w-4xl">
            <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:p-8 mb-10">
              <div className="flex items-start gap-3">
                <ShieldCheck size={22} className="text-brand-bronze-text mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <h2 className="text-lg font-extrabold text-brand-ink mb-1">
                    Publication Status Notice
                  </h2>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    Named client case studies, logos, and client-specific project metrics are not published publicly without explicit client authorization. We never publish synthetic testimonials or unverified statistics. Relevant architectural walkthroughs can be shared directly during a qualified consultation where appropriate.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-extrabold text-brand-ink mb-6">
              Illustrative Engagement Tracks
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  title: "AI-Powered Operations & Assistants",
                  scope: "Knowledge-grounded customer and internal assistants, automated document triage, and workflow orchestration.",
                  href: "/solutions/ai-business-automation/",
                },
                {
                  title: "Custom SaaS & Web Platforms",
                  scope: "Multi-tenant SaaS engineering, corporate websites, e-commerce storefronts, and customer self-service portals.",
                  href: "/solutions/custom-saas/",
                },
                {
                  title: "Enterprise Integrations & Modernization",
                  scope: "CRM/ERP unification, middleware APIs, cloud migration, and phased legacy software modernization.",
                  href: "/solutions/enterprise-system-integrations/",
                },
                {
                  title: "Dedicated Engineering & IT Staffing",
                  scope: "Embedded engineering squads, project outsourcing, and technical hiring across India and global teams.",
                  href: "/services/project-outsourcing/",
                },
              ].map((track) => (
                <Link key={track.href} href={track.href} className="card p-7 group">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-brand-bronze-text mb-2">
                    CAPABILITY TRACK
                  </span>
                  <h3 className="text-lg font-bold text-brand-ink mb-2 group-hover:text-brand-bronze-text">
                    {track.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed mb-4 flex-1">
                    {track.scope}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-bronze-text">
                    Explore Architecture <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="rounded-3xl bg-gradient-dark text-white p-8 sm:p-10 text-center">
              <h2 className="text-2xl font-extrabold text-white mb-3">
                Request a Tailored Capability Walkthrough
              </h2>
              <p className="text-brand-dark-muted text-sm sm:text-base max-w-xl mx-auto mb-6">
                Initial consultation is complimentary. Customized demonstrations are subject to suitability and availability.
              </p>
              <Button asChild size="lg">
                <Link href="/free-consultation/">
                  Request a Free Consultation
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
