import Link from "next/link";
import { Mail, Globe, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/forms/ContactForm";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/pages";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact VG Consultancy for AI automation, custom software engineering, enterprise systems, IT consulting, and staffing solutions.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main id="main-content" className="flex-1">
        <section className="bg-gradient-dark text-white py-16 lg:py-24 border-b border-white/10">
          <div className="container">
            <div className="mb-8">
              <Breadcrumbs items={[{ label: "Contact", href: "/contact/" }]} dark />
            </div>
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-brand-gold/35 bg-brand-gold/10 text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-4">
                CONTACT VG CONSULTANCY
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
                Get in Touch
              </h1>
              <p className="text-brand-dark-muted text-lg leading-relaxed">
                Have a business challenge or a new technology initiative? Reach out to discuss how VG Consultancy can support your goals.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-brand-light">
          <div className="container grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 space-y-5">
                <h2 className="text-xl font-extrabold text-brand-ink">Direct Channels</h2>

                <div className="flex items-start gap-3.5">
                  <Mail size={20} className="text-brand-bronze-text mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-brand-ink text-sm">General &amp; Project Inquiries</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-brand-bronze-text font-semibold text-sm hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                  <Globe size={20} className="text-brand-teal mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-brand-ink text-sm">Markets Served</p>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      Working with organizations across India and global markets since 2016.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-brand-dark text-white p-7 border border-brand-gold/30">
                <h2 className="text-lg font-bold text-white mb-2">
                  Book a Free Initial Consultation
                </h2>
                <p className="text-brand-dark-muted text-sm leading-relaxed mb-5">
                  Initial consultation is complimentary. Customized solution demonstrations are subject to suitability and availability.
                </p>
                <Button asChild className="w-full">
                  <Link href="/free-consultation/">
                    Request Consultation
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
