import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Journey",
  description:
    "VG Consultancy's journey since 2016 — evolving across IT consulting, recruitment, custom software engineering, and AI-powered business transformation.",
  path: "/about/our-journey/",
});

export default function OurJourneyPage() {
  const milestones = [
    {
      era: "2016 • Foundation",
      title: "Established in 2016",
      desc: "VG Consultancy was established in 2016 to help organizations address technology, talent, and business execution challenges with practical expertise.",
    },
    {
      era: "Technology & Talent Integration",
      title: "Combining Advisory, Staffing & Delivery",
      desc: "Alongside strategic IT consulting, our practice expanded across technology recruitment, flexible staffing, and dedicated project outsourcing to support growing organizations.",
    },
    {
      era: "Digital & Enterprise Engineering",
      title: "Full-Stack Software, SaaS & Enterprise Systems",
      desc: "Built core software engineering capabilities spanning corporate web platforms, custom SaaS applications, CRM/ERP implementations, cloud solutions, and legacy system modernization.",
    },
    {
      era: "Today • AI-Enabled Partner",
      title: "Technology, AI & Digital Engineering",
      desc: "Today, VG Consultancy leads with AI-powered automation, custom AI agents, and modern software engineering—supporting clients across India and global markets.",
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
                  { label: "Our Journey", href: "/about/our-journey/" },
                ]}
                dark
              />
            </div>
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-brand-gold/35 bg-brand-gold/10 text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-4">
                ESTABLISHED 2016
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
                Our Journey Since 2016
              </h1>
              <p className="text-brand-dark-muted text-lg leading-relaxed">
                From our establishment in 2016 to our current focus on AI-enabled digital engineering, VG Consultancy has evolved around one principle: helping businesses move forward with dependable technology and talent.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container max-w-4xl">
            <div className="space-y-8 border-l-2 border-brand-gold/50 pl-6 sm:pl-8">
              {milestones.map((m) => (
                <article
                  key={m.title}
                  className="relative rounded-2xl border border-slate-200 bg-brand-light p-6 sm:p-8"
                >
                  <span
                    className="absolute -left-[33px] sm:-left-[41px] top-8 w-4 h-4 rounded-full bg-brand-gold border-4 border-white shadow"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-extrabold uppercase tracking-widest text-brand-bronze-text block mb-2">
                    {m.era}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-brand-ink mb-2">
                    {m.title}
                  </h2>
                  <p className="text-brand-muted leading-relaxed">{m.desc}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-brand-dark text-white p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">
                  Want to learn how our team delivers?
                </h2>
                <p className="text-brand-dark-muted text-sm">
                  Explore our five-step engineering and transformation approach.
                </p>
              </div>
              <Button asChild>
                <Link href="/about/our-approach/">
                  Our Approach
                  <ArrowRight size={16} aria-hidden="true" />
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
