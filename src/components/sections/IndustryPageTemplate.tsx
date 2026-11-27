import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Layers, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Breadcrumbs, BreadcrumbItem } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { IndustryRouteData } from "@/content/pages";

interface IndustryPageProps {
  data: IndustryRouteData;
  breadcrumb: BreadcrumbItem[];
}

export function IndustryPage({ data, breadcrumb }: IndustryPageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <JsonLd data={faqSchema} />
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-dark text-white py-16 lg:py-24 border-b border-white/10">
          <div className="container">
            <div className="mb-8">
              <Breadcrumbs items={breadcrumb} dark />
            </div>
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-brand-gold/35 bg-brand-gold/10 text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-4">
                INDUSTRY EXPERTISE
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                {data.h1}
              </h1>
              <p className="text-brand-dark-muted text-lg leading-relaxed mb-8">{data.intro}</p>
              <Button asChild size="lg">
                <Link href="/free-consultation/">
                  {data.cta}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="section bg-white">
          <div className="container grid lg:grid-cols-2 gap-10">
            <div className="rounded-2xl border border-slate-200 bg-brand-light p-8">
              <h2 className="text-2xl font-extrabold text-brand-ink mb-6">
                Industry-Specific Challenges
              </h2>
              <ul className="space-y-4">
                {data.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-bronze-text shrink-0" aria-hidden="true" />
                    <span className="text-brand-muted text-sm sm:text-base leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-brand-ink mb-6">
                Relevant Technology Solutions
              </h2>
              <ul className="space-y-4">
                {data.solutions.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-brand-teal mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-brand-ink text-sm sm:text-base font-medium leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Practical Use Cases */}
        <section className="section bg-brand-light">
          <div className="container">
            <span className="section-kicker">ILLUSTRATIVE SCENARIOS</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-ink mb-8">
              Practical Industry Use Cases
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.useCases.map((uc, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <Layers size={20} className="text-brand-blue mb-3" aria-hidden="true" />
                  <p className="text-brand-ink text-sm font-medium leading-relaxed">{uc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Relevant Services */}
        <section className="section bg-white">
          <div className="container grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-extrabold text-brand-ink mb-6">
                Expected Business Benefits
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.benefits.map((b, i) => (
                  <div key={i} className="rounded-xl border border-slate-200 bg-brand-light p-5 flex items-start gap-3">
                    <ShieldCheck size={20} className="text-brand-teal mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-brand-ink text-sm font-semibold leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <h2 className="text-2xl font-extrabold text-brand-ink mb-6">
                Relevant Services
              </h2>
              <div className="space-y-3">
                {data.relatedServices.map((rs) => (
                  <Link
                    key={rs.href}
                    href={rs.href}
                    className="card p-5 flex-row items-center justify-between group"
                  >
                    <span className="font-bold text-brand-ink group-hover:text-brand-bronze-text transition-colors">
                      {rs.label}
                    </span>
                    <ArrowRight size={18} className="text-brand-bronze-text shrink-0" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section bg-brand-light">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-extrabold text-brand-ink mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-base font-bold text-brand-ink mb-2">{faq.q}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="section bg-white">
          <div className="container">
            <div className="rounded-3xl bg-gradient-dark text-white p-8 sm:p-12 lg:p-16 text-center border border-brand-gold/30">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Transform Your {data.h1} Operations
              </h2>
              <p className="text-brand-dark-muted text-base sm:text-lg max-w-2xl mx-auto mb-8">
                Schedule a complimentary initial consultation to discuss your sector requirements, technical architecture, and modernization priorities.
              </p>
              <Button asChild size="lg">
                <Link href="/free-consultation/">
                  {data.cta}
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

export default IndustryPage;
