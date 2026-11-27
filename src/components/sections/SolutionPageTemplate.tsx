import React from "react";
import Link from "next/link";
import { CheckCircle2, Shield, ArrowRight, Cpu } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Breadcrumbs, BreadcrumbItem } from "@/components/seo/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { SolutionRouteData } from "@/content/pages";

interface SolutionPageProps {
  data: SolutionRouteData;
  breadcrumb: BreadcrumbItem[];
}

export function SolutionPage({ data, breadcrumb }: SolutionPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-dark text-white py-16 lg:py-24 border-b border-white/10">
          <div className="container">
            <div className="mb-8">
              <Breadcrumbs items={breadcrumb} dark />
            </div>
            <div className="max-w-3xl mb-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-brand-gold/35 bg-brand-gold/10 text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-4">
                ENTERPRISE SOLUTION
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                {data.h1}
              </h1>
              <p className="text-brand-dark-muted text-lg leading-relaxed">{data.intro}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
                <h2 className="text-lg font-bold text-brand-gold mb-2">The Business Problem</h2>
                <p className="text-brand-dark-muted text-sm sm:text-base leading-relaxed">
                  {data.problem}
                </p>
              </div>
              <div className="rounded-2xl border border-brand-gold/40 bg-brand-gold/10 p-6 sm:p-8">
                <h2 className="text-lg font-bold text-white mb-2">Proposed Solution</h2>
                <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
                  {data.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Functional Capabilities */}
        <section className="section bg-white">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-ink mb-8">
              Functional Capabilities
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.capabilities.map((cap, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-brand-light p-6">
                  <CheckCircle2 size={20} className="text-brand-teal mb-3" aria-hidden="true" />
                  <p className="text-brand-ink text-sm font-semibold leading-relaxed">{cap}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture & Integrations */}
        <section className="section bg-brand-light">
          <div className="container grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-8">
              <div className="inline-flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-wider mb-3">
                <Cpu size={16} aria-hidden="true" /> Architecture Blueprint
              </div>
              <h2 className="text-2xl font-extrabold text-brand-ink mb-4">
                Architecture Considerations
              </h2>
              <p className="text-brand-muted leading-relaxed text-base">{data.architecture}</p>
            </div>

            <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-8">
              <h2 className="text-2xl font-extrabold text-brand-ink mb-4">
                Integration Possibilities
              </h2>
              <p className="text-brand-muted text-sm mb-5">
                Designed to connect cleanly with your existing core business ecosystem:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {data.integrations.map((item, i) => (
                  <span key={i} className="badge badge-blue">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Security & Implementation */}
        <section className="section bg-white">
          <div className="container grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-extrabold text-brand-ink mb-6">
                Security Considerations
              </h2>
              <div className="space-y-4">
                {data.security.map((s, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-brand-light p-4">
                    <Shield size={18} className="text-brand-teal mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-brand-ink text-sm leading-relaxed font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-brand-ink mb-6">
                Implementation Approach
              </h2>
              <div className="space-y-4">
                {data.implementation.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <span className="w-7 h-7 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center font-extrabold text-xs shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-brand-ink text-sm leading-relaxed font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Expected Benefits & Related Services */}
        <section className="section bg-brand-light">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-ink mb-8">
              Expected Business Benefits
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {data.benefits.map((b, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-brand-bronze-text block mb-2">
                    Outcome 0{i + 1}
                  </span>
                  <p className="text-brand-ink text-sm font-semibold leading-relaxed">{b}</p>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-200">
              <h3 className="text-lg font-bold text-brand-ink mb-4">Supporting Engineering Services</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {data.relatedServices.map((rs) => (
                  <Link
                    key={rs.href}
                    href={rs.href}
                    className="card p-5 flex-row items-center justify-between group"
                  >
                    <span className="font-semibold text-brand-ink group-hover:text-brand-bronze-text">
                      {rs.label}
                    </span>
                    <ArrowRight size={16} className="text-brand-bronze-text shrink-0" aria-hidden="true" />
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
                Ready to Modernize Your Operations?
              </h2>
              <p className="text-brand-dark-muted text-base sm:text-lg max-w-2xl mx-auto mb-8">
                Speak with our engineering team about your systems, integration boundaries, and business goals. Initial consultation is complimentary.
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

export default SolutionPage;
