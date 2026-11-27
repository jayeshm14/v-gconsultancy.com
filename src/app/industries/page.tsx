import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { industryRoutes } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "Sector-specific technology, AI, and digital engineering solutions for Healthcare, Banking & Financial Services, Manufacturing, Retail, Professional Services, and SaaS.",
  path: "/industries/",
});

export default function IndustriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main id="main-content" className="flex-1">
        <section className="bg-gradient-dark text-white py-16 lg:py-24 border-b border-white/10">
          <div className="container">
            <div className="mb-8">
              <Breadcrumbs items={[{ label: "Industries", href: "/industries/" }]} dark />
            </div>
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-brand-gold/35 bg-brand-gold/10 text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-4">
                SECTOR EXPERTISE
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
                Industries We Serve
              </h1>
              <p className="text-brand-dark-muted text-lg leading-relaxed">
                Technology, AI, and software engineering tailored to the operational workflows, integration landscapes, and regulatory realities of six core sectors.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-brand-light">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryRoutes.map((ind) => (
                <Link key={ind.id} href={ind.path} className="card p-7 group">
                  <div className="w-12 h-12 rounded-xl bg-brand-dark text-brand-gold flex items-center justify-center mb-5">
                    <Building2 size={22} aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold text-brand-ink mb-3 group-hover:text-brand-bronze-text transition-colors">
                    {ind.h1}
                  </h2>
                  <p className="text-brand-muted text-sm leading-relaxed mb-6 flex-1">
                    {ind.intro}
                  </p>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-brand-bronze-text">
                    <span>Explore {ind.h1}</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
