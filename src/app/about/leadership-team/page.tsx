import Link from "next/link";
import { Users, Code2, Cpu, Briefcase, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Leadership & Team",
  description:
    "Explore the multi-disciplinary leadership, engineering, AI, consulting, and talent delivery practices at VG Consultancy.",
  path: "/about/leadership-team/",
});

export default function LeadershipPage() {
  const practices = [
    {
      icon: Briefcase,
      title: "Executive & Strategy Leadership",
      role: "Governance & Client Alignment",
      desc: "Guides international client partnerships, commercial alignment, engagement governance, and long-term capability investments.",
    },
    {
      icon: Cpu,
      title: "AI & Digital Architecture Practice",
      role: "AI Engineering & Solutions",
      desc: "Architects grounded AI assistants, RAG pipelines, workflow automation, and integration blueprints with security and reliability controls.",
    },
    {
      icon: Code2,
      title: "Software & Platform Engineering",
      role: "Web, SaaS & Enterprise Systems",
      desc: "Delivers full-stack web applications, multi-tenant SaaS platforms, CRM/ERP customizations, cloud migrations, and automated QA.",
    },
    {
      icon: Users,
      title: "IT Consulting & Talent Practice",
      role: "Advisory, Staffing & Outsourcing",
      desc: "Supports client organizations with technology advisory, permanent IT recruitment, contract staffing, and dedicated engineering pods.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main id="main-content" className="flex-1">
        <section className="bg-gradient-dark text-white py-16 lg:py-24 border-b border-white/10">
          <div className="container">
            <div className="mb-8">
              <Breadcrumbs
                items={[
                  { label: "About Us", href: "/about/" },
                  { label: "Leadership & Team", href: "/about/leadership-team/" },
                ]}
                dark
              />
            </div>
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-brand-gold/35 bg-brand-gold/10 text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-4">
                LEADERSHIP &amp; PRACTICE TEAMS
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
                Leadership &amp; Team
              </h1>
              <p className="text-brand-dark-muted text-lg leading-relaxed">
                VG Consultancy brings together multi-disciplinary leadership across software architecture, AI automation, enterprise systems, IT consulting, and talent delivery.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {practices.map((p) => {
                const Icon = p.icon;
                return (
                  <article key={p.title} className="rounded-2xl border border-slate-200 bg-brand-light p-8">
                    <div className="w-12 h-12 rounded-xl bg-brand-dark text-brand-gold flex items-center justify-center mb-5">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-brand-bronze-text block mb-1">
                      {p.role}
                    </span>
                    <h2 className="text-xl font-extrabold text-brand-ink mb-3">{p.title}</h2>
                    <p className="text-brand-muted leading-relaxed">{p.desc}</p>
                  </article>
                );
              })}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
              <div className="max-w-2xl">
                <h2 className="text-xl font-bold text-brand-ink mb-2">
                  Interested in Joining or Working With Our Team?
                </h2>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Individual executive bios are available upon formal engagement or request. Connect with our team to discuss your technology roadmap or explore career opportunities.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Button asChild>
                  <Link href="/contact/">
                    Contact Leadership
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline-dark">
                  <Link href="/careers/">Explore Careers</Link>
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
