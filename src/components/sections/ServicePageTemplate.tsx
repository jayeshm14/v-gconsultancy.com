import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Layers } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Breadcrumbs, BreadcrumbItem } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { ServiceRouteData } from "@/content/pages";
import { SITE_URL } from "@/lib/seo";

interface ServicePageProps {
  data: ServiceRouteData;
  breadcrumb: BreadcrumbItem[];
}

export function ServicePage({ data, breadcrumb }: ServicePageProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.h1,
    description: data.description,
    serviceType: data.h1,
    url: `${SITE_URL}${data.path}`,
    provider: {
      "@type": "Organization",
      name: "VG Consultancy",
      url: SITE_URL,
    },
  };

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
      <JsonLd data={[serviceSchema, faqSchema]} />
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
                SERVICE CAPABILITY
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                {data.h1}
              </h1>
              <p className="text-brand-dark-muted text-lg leading-relaxed mb-8">
                {data.intro}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-consultation/">
                    {data.cta}
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact/">Contact Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges & Capabilities */}
        <section className="section bg-white">
          <div className="container grid lg:grid-cols-2 gap-10">
            <div className="rounded-2xl border border-slate-200 bg-brand-light p-8">
              <h2 className="text-2xl font-extrabold text-brand-ink mb-6">
                Business Challenges We Address
              </h2>
              <ul className="space-y-4">
                {data.challenges.map((ch, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-bronze-text shrink-0" aria-hidden="true" />
                    <span className="text-brand-muted text-sm sm:text-base leading-relaxed">{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-brand-ink mb-6">
                Our Capabilities
              </h2>
              <ul className="space-y-4">
                {data.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-brand-teal mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-brand-ink text-sm sm:text-base leading-relaxed font-medium">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Detailed Descriptions */}
        <section className="section bg-brand-light">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-ink mb-8">
              How We Deliver {data.h1}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {data.descriptions.map((desc, i) => (
                <article key={i} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-brand-dark text-brand-gold flex items-center justify-center font-extrabold text-sm mb-5">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-brand-ink mb-3">{desc.title}</h3>
                  <p className="text-brand-muted leading-relaxed">{desc.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Practical Use Cases */}
        <section className="section bg-white">
          <div className="container">
            <div className="max-w-2xl mb-10">
              <span className="section-kicker">ILLUSTRATIVE SCENARIOS</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-ink">
                Practical Use Cases
              </h2>
              <p className="text-brand-muted mt-2">
                Representative operational scenarios demonstrating how this capability supports enterprise teams.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.useCases.map((uc, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-brand-light p-6">
                  <Layers size={20} className="text-brand-blue mb-3" aria-hidden="true" />
                  <p className="text-brand-ink text-sm leading-relaxed font-medium">{uc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Approach & Delivery Methodology */}
        <section className="section bg-brand-light">
          <div className="container grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-extrabold text-brand-ink mb-4">Technology Approach</h2>
              <p className="text-brand-muted text-sm leading-relaxed mb-6">
                Architecture patterns and engineering standards applied to keep solutions maintainable, observable, and secure.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {data.techApproach.map((t, i) => (
                  <span key={i} className="badge badge-blue">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <h2 className="text-2xl font-extrabold text-brand-ink mb-6">Delivery Methodology</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.methodology.map((m, i) => (
                  <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center font-extrabold text-xs shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-brand-ink text-sm leading-relaxed font-medium">{m}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Business Benefits */}
        <section className="section bg-white">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-ink mb-8">
              Business Benefits
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.benefits.map((b, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <ShieldCheck size={22} className="text-brand-teal mb-3" aria-hidden="true" />
                  <p className="text-brand-ink text-sm font-semibold leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services & FAQs */}
        <section className="section bg-brand-light">
          <div className="container grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
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

            <div className="lg:col-span-5">
              <h2 className="text-2xl font-extrabold text-brand-ink mb-6">
                Related Services
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

        {/* Final CTA */}
        <section className="section bg-white">
          <div className="container">
            <div className="rounded-3xl bg-gradient-dark text-white p-8 sm:p-12 lg:p-16 text-center border border-brand-gold/30">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Ready to Get Started with {data.h1}?
              </h2>
              <p className="text-brand-dark-muted text-base sm:text-lg max-w-2xl mx-auto mb-8">
                Request a complimentary initial consultation to discuss your architecture, goals, and delivery roadmap. Customized demonstrations are subject to suitability and availability.
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

export default ServicePage;
