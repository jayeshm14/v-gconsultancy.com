import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { serviceRoutes } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Technology, AI & Engineering Services",
  description:
    "Explore VG Consultancy's 15 core capabilities across AI automation, software engineering, quality assurance, SaaS, CRM/ERP, cloud modernization, IT consulting, and staffing.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main id="main-content" className="flex-1">
        <section className="bg-gradient-dark text-white py-16 lg:py-24 border-b border-white/10">
          <div className="container">
            <div className="mb-8">
              <Breadcrumbs items={[{ label: "Services", href: "/services/" }]} dark />
            </div>
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-brand-gold/35 bg-brand-gold/10 text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-4">
                ALL SERVICES
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
                Our Technology &amp; Engineering Services
              </h1>
              <p className="text-brand-dark-muted text-lg leading-relaxed">
                From AI-powered automation and custom software engineering to cloud modernization, IT consulting, recruitment, and project outsourcing—every capability is structured around measurable business value.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-brand-light">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceRoutes.map((svc, idx) => (
                <Link key={svc.id} href={svc.path} className="card p-7 group">
                  <div className="flex items-center justify-between mb-5">
                    <div className="service-icon">
                      <Code2 size={22} aria-hidden="true" />
                    </div>
                    <span className="text-xs font-extrabold text-brand-bronze-text">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-brand-ink mb-3 group-hover:text-brand-bronze-text transition-colors">
                    {svc.h1}
                  </h2>
                  <p className="text-brand-muted text-sm leading-relaxed mb-6 flex-1">
                    {svc.intro}
                  </p>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-brand-bronze-text">
                    <span>Explore {svc.h1}</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-14 rounded-3xl bg-gradient-dark text-white p-8 sm:p-12 text-center border border-brand-gold/30">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Not Sure Which Engagement Fits Best?
              </h2>
              <p className="text-brand-dark-muted text-base max-w-2xl mx-auto mb-6">
                Book a complimentary initial consultation to discuss your priorities across AI, engineering, modernization, or talent.
              </p>
              <Button asChild size="lg">
                <Link href="/free-consultation/">
                  Book a Free Consultation
                  <ArrowRight size={18} aria-hidden="true" />
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
