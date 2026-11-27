import Link from "next/link";
import { Compass, Eye, ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "VG Consultancy — Engineering Intelligence. Enabling Growth. Established in 2016, delivering technology, AI, software engineering, and talent solutions.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main id="main-content" className="flex-1">
        <section className="bg-gradient-dark text-white py-16 lg:py-24 border-b border-white/10">
          <div className="container">
            <div className="mb-8">
              <Breadcrumbs items={[{ label: "About Us", href: "/about/" }]} dark />
            </div>
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-brand-gold/35 bg-brand-gold/10 text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-4">
                ABOUT VG CONSULTANCY • EST. 2016
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
                About VG Consultancy
              </h1>
              <p className="text-brand-dark-muted text-lg leading-relaxed">
                Engineering Intelligence. Enabling Growth. Established in 2016, VG Consultancy is an AI-enabled technology and digital engineering partner helping businesses across India and global markets innovate, modernize, and scale.
              </p>
            </div>
          </div>
        </section>

        {/* Story & Positioning */}
        <section className="section bg-white">
          <div className="container grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="section-kicker">WHO WE ARE</span>
              <h2 className="text-3xl font-extrabold text-brand-ink mb-5">
                Turning Business Challenges Into Durable Technology Capabilities
              </h2>
              <p className="text-brand-muted leading-relaxed mb-4">
                At VG Consultancy, we combine software engineering, AI-powered automation, enterprise architecture, and specialized technical talent to solve practical operational challenges.
              </p>
              <p className="text-brand-muted leading-relaxed mb-6">
                Our practice spans AI agents and intelligent automation, custom software and SaaS development, enterprise websites and e-commerce, CRM and ERP systems, cloud modernization, strategic IT consulting, recruitment and staffing, and dedicated project outsourcing.
              </p>
              <div className="border-l-4 border-brand-gold bg-brand-light p-5 rounded-r-xl text-brand-ink font-semibold text-sm">
                &ldquo;We believe in innovation, integrity, quality, and building lasting partnerships with every client.&rdquo;
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              {[
                { label: "Our Journey Since 2016", href: "/about/our-journey/" },
                { label: "Leadership & Team", href: "/about/leadership-team/" },
                { label: "Our Delivery Approach", href: "/about/our-approach/" },
                { label: "Careers at VG Consultancy", href: "/careers/" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="card p-5 flex-row items-center justify-between group"
                >
                  <span className="font-bold text-brand-ink group-hover:text-brand-bronze-text">
                    {link.label}
                  </span>
                  <ArrowRight size={18} className="text-brand-bronze-text shrink-0" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section bg-brand-light">
          <div className="container grid md:grid-cols-2 gap-8">
            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-brand-dark text-brand-gold flex items-center justify-center mb-5">
                <Compass size={22} aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-brand-ink mb-3">Our Mission</h2>
              <p className="text-brand-muted leading-relaxed">
                To empower businesses with innovative technology, intelligent solutions, and exceptional talent. We simplify operational challenges through IT consulting, AI-driven automation, custom software engineering, recruitment, and outsourcing services—delivering scalable solutions that improve efficiency and create lasting value.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-brand-dark text-brand-gold flex items-center justify-center mb-5">
                <Eye size={22} aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-brand-ink mb-3">Our Vision</h2>
              <p className="text-brand-muted leading-relaxed">
                To serve as a trusted international partner for technology, talent, and business transformation—helping organizations navigate digital change through intelligent automation, resilient software architecture, and sustainable engineering partnerships.
              </p>
            </article>
          </div>
        </section>

        {/* Core Values */}
        <section className="section bg-white">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">OUR PRINCIPLES</span>
              <h2 className="section-title">Core Values</h2>
              <p className="section-subtitle">
                The principles guiding our engineering standards, advisory work, and client relationships.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {[
                { title: "Innovation", desc: "Applying modern AI and engineering practices where they deliver real business leverage." },
                { title: "Integrity", desc: "Communicating honestly about scope, risks, timelines, and verified capabilities." },
                { title: "Partnership", desc: "Working collaboratively with client teams toward shared long-term outcomes." },
                { title: "Quality", desc: "Maintaining clean architecture, security discipline, and thorough verification." },
                { title: "Growth", desc: "Designing platforms and talent strategies built to scale sustainably." },
              ].map((val) => (
                <div key={val.title} className="rounded-2xl border border-slate-200 bg-brand-light p-6">
                  <CheckCircle2 size={20} className="text-brand-teal mb-3" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-brand-ink mb-2">{val.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-brand-light">
          <div className="container">
            <div className="rounded-3xl bg-gradient-dark text-white p-8 sm:p-12 lg:p-16 text-center border border-brand-gold/30">
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Let&apos;s Build a Smarter Future Together
              </h2>
              <p className="text-brand-dark-muted text-lg max-w-2xl mx-auto mb-8">
                Have a business challenge or digital transformation initiative? Speak with our team for a complimentary initial consultation.
              </p>
              <Button asChild size="lg">
                <Link href="/free-consultation/">
                  Request a Free Consultation
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
