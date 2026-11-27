import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/pages";

export const metadata = buildMetadata({
  title: "Terms and Conditions",
  description: "VG Consultancy Terms and Conditions governing access to and use of v-gconsultancy.com.",
  path: "/terms-and-conditions/",
  noindex: true,
});

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main id="main-content" className="flex-1">
        <section className="bg-gradient-dark text-white py-14 lg:py-20">
          <div className="container">
            <div className="mb-6">
              <Breadcrumbs
                items={[{ label: "Terms and Conditions", href: "/terms-and-conditions/" }]}
                dark
              />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
              Terms and Conditions
            </h1>
            <p className="text-brand-dark-muted text-sm">Last updated: November 2026</p>
          </div>
        </section>

        <section className="section bg-white">
          <article className="container max-w-3xl space-y-6 text-brand-muted leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-brand-ink mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing v-gconsultancy.com, you agree to comply with these Terms and Conditions and applicable laws.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-brand-ink mb-2">2. Informational Purpose &amp; Consultations</h2>
              <p>
                Website materials describe VG Consultancy&apos;s services and capabilities. Complimentary initial consultations and customized demonstrations are offered subject to suitability, mutual scheduling availability, and formal engagement terms where applicable.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-brand-ink mb-2">3. Intellectual Property</h2>
              <p>
                All trademarks, logos, editorial content, and code assets presented on this website remain the property of VG Consultancy or respective rights holders.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-brand-ink mb-2">4. Limitation of Liability</h2>
              <p>
                Materials on this website are provided on an &ldquo;as-is&rdquo; informational basis without implied warranties. Client engineering engagements are governed separately by executed Master Services Agreements or Statements of Work.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-brand-ink mb-2">5. Contact</h2>
              <p>
                Questions regarding these terms may be sent to{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-brand-bronze-text font-semibold underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}
