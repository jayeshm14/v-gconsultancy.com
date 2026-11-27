import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Approach",
  description:
    "VG Consultancy's five-step delivery methodology: Discover, Strategize, Design & Build, Integrate & Validate, and Deploy & Evolve.",
  path: "/about/our-approach/",
});

export default function OurApproachPage() {
  const phases = [
    {
      num: "01",
      title: "Discover",
      desc: "We align on business objectives, map operational workflows, audit existing software and data landscapes, and surface security or compliance constraints early.",
      outputs: ["Stakeholder & workflow audit", "System & integration inventory", "Prioritized problem definition"],
    },
    {
      num: "02",
      title: "Strategize",
      desc: "We define the target technical architecture, vendor-neutral stack choices, AI guardrails, delivery milestones, and risk mitigation plan.",
      outputs: ["Solution architecture blueprint", "Delivery roadmap & phasing", "Security & governance design"],
    },
    {
      num: "03",
      title: "Design & Build",
      desc: "Our engineers and designers build modular interfaces, backend APIs, AI workflows, and cloud foundations in transparent, reviewable iterations.",
      outputs: ["Accessible UI/UX & prototypes", "Modular application & AI code", "Sprint demos & code reviews"],
    },
    {
      num: "04",
      title: "Integrate & Validate",
      desc: "We connect cleanly with existing CRM, ERP, and third-party platforms and run functional, security, responsive, and performance validation.",
      outputs: ["API & data-sync verification", "Accessibility & cross-viewport QA", "User acceptance validation"],
    },
    {
      num: "05",
      title: "Deploy & Evolve",
      desc: "We manage controlled production cutover with observability, operational documentation, team handover, and ongoing iterative enhancement.",
      outputs: ["Controlled production launch", "Runbooks & documentation", "Continuous optimization"],
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
                  { label: "Our Approach", href: "/about/our-approach/" },
                ]}
                dark
              />
            </div>
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-brand-gold/35 bg-brand-gold/10 text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-4">
                DELIVERY METHODOLOGY
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
                Our Delivery Approach
              </h1>
              <p className="text-brand-dark-muted text-lg leading-relaxed">
                A structured five-phase engineering lifecycle designed to reduce delivery risk, preserve architectural quality, and achieve measurable business outcomes.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container space-y-6">
            {phases.map((p) => (
              <article
                key={p.num}
                className="rounded-2xl border border-slate-200 bg-brand-light p-6 sm:p-8 grid lg:grid-cols-12 gap-6 items-center"
              >
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-3 mb-3">
                    <span className="w-9 h-9 rounded-full bg-brand-dark text-brand-gold flex items-center justify-center font-extrabold text-sm">
                      {p.num}
                    </span>
                    <h2 className="text-2xl font-extrabold text-brand-ink">{p.title}</h2>
                  </div>
                  <p className="text-brand-muted leading-relaxed">{p.desc}</p>
                </div>
                <div className="lg:col-span-5 rounded-xl bg-white border border-slate-200 p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-brand-bronze-text mb-3">
                    Key Outputs
                  </p>
                  <ul className="space-y-2">
                    {p.outputs.map((out) => (
                      <li key={out} className="flex items-center gap-2 text-sm text-brand-ink font-medium">
                        <CheckCircle2 size={16} className="text-brand-teal shrink-0" aria-hidden="true" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}

            <div className="pt-6 text-center">
              <Button asChild size="lg">
                <Link href="/free-consultation/">
                  Discuss Your Project Roadmap
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
