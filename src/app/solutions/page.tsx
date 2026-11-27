import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { solutionRoutes } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Enterprise Solutions",
  description:
    "Explore VG Consultancy's enterprise digital solutions, AI-powered operations, customer portals, workflow automation, custom SaaS, and system integrations.",
  path: "/solutions/",
});

export default function SolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main id="main-content" className="flex-1">
        <section className="bg-gradient-dark text-white py-16 lg:py-24 border-b border-white/10">
          <div className="container">
            <div className="mb-8">
              <Breadcrumbs items={[{ label: "Solutions", href: "/solutions/" }]} dark />
            </div>
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-brand-gold/35 bg-brand-gold/10 text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-4">
                SOLUTION ARCHITECTURES
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
                Enterprise Digital Solutions
              </h1>
              <p className="text-brand-dark-muted text-lg leading-relaxed">
                End-to-end solution blueprints combining AI automation, custom platforms, secure portals, and enterprise integrations to modernize operations.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-brand-light">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutionRoutes.map((sol) => (
                <Link key={sol.id} href={sol.path} className="card p-7 group">
                  <div className="w-12 h-12 rounded-xl bg-brand-dark text-brand-gold flex items-center justify-center mb-5">
                    <Layers size={22} aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold text-brand-ink mb-3 group-hover:text-brand-bronze-text transition-colors">
                    {sol.h1}
                  </h2>
                  <p className="text-brand-muted text-sm leading-relaxed mb-6 flex-1">
                    {sol.intro}
                  </p>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-brand-bronze-text">
                    <span>Explore Solution</span>
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
