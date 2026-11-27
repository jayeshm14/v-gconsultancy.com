import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { InsightsExplorer } from "@/components/sections/InsightsExplorer";
import { insightArticles } from "@/content/insights";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Insights, Technology Guides & AI Briefings",
  description:
    "Explore VG Consultancy's blog articles, enterprise technology guides, and practical AI implementation insights.",
  path: "/insights/",
});

export default function InsightsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main id="main-content" className="flex-1">
        <section className="bg-gradient-dark text-white py-16 lg:py-24 border-b border-white/10">
          <div className="container">
            <div className="mb-8">
              <Breadcrumbs items={[{ label: "Insights", href: "/insights/" }]} dark />
            </div>
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-brand-gold/35 bg-brand-gold/10 text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-4">
                KNOWLEDGE &amp; RESEARCH
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
                Insights &amp; Technology Guides
              </h1>
              <p className="text-brand-dark-muted text-lg leading-relaxed">
                Engineering-led articles, AI architecture briefings, and modernization guides from the VG Consultancy practice.
              </p>
            </div>
          </div>
        </section>

        {/* Category shortcuts */}
        <section className="section bg-brand-light border-b border-slate-200">
          <div className="container grid md:grid-cols-4 gap-5">
            {[
              { title: "Blog", desc: "Practice perspectives & digital transformation commentary.", href: "/insights/blog/" },
              { title: "Technology Guides", desc: "Architecture, API integration, and modernization blueprints.", href: "/insights/technology-guides/" },
              { title: "AI Insights", desc: "Enterprise AI agents, RAG pipelines, and workflow automation.", href: "/insights/ai-insights/" },
              { title: "Case Studies", desc: "Capability tracks & client confidentiality standards.", href: "/case-studies/" },
            ].map((cat) => (
              <Link key={cat.href} href={cat.href} className="card p-6 group">
                <h2 className="text-lg font-bold text-brand-ink mb-2 group-hover:text-brand-bronze-text">
                  {cat.title}
                </h2>
                <p className="text-brand-muted text-sm mb-4 flex-1">{cat.desc}</p>
                <span className="text-xs font-extrabold text-brand-bronze-text inline-flex items-center gap-1">
                  Browse <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Searchable Explorer */}
        <section className="section bg-white">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-ink mb-8">
              Explore All Publications
            </h2>
            <InsightsExplorer articles={insightArticles} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
