import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import ConsultationForm from "@/components/forms/ConsultationForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book a Free Consultation",
  description:
    "Request a complimentary initial technology, AI automation, or software engineering consultation with VG Consultancy.",
  path: "/free-consultation/",
});

export default function FreeConsultationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main id="main-content" className="flex-1">
        <section className="bg-gradient-dark text-white py-16 lg:py-24 border-b border-white/10">
          <div className="container">
            <div className="mb-8">
              <Breadcrumbs
                items={[{ label: "Free Consultation", href: "/free-consultation/" }]}
                dark
              />
            </div>
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-brand-gold/35 bg-brand-gold/10 text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-4">
                COMPLIMENTARY INITIAL CONSULTATION
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
                Book a Free Consultation
              </h1>
              <p className="text-brand-dark-muted text-lg leading-relaxed">
                Explore how AI, custom software engineering, and modern enterprise architecture can transform your operations. Initial consultation is complimentary; customized solution demonstrations are subject to suitability and availability.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-brand-light">
          <div className="container max-w-3xl">
            <ConsultationForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
