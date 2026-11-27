import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/pages";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "VG Consultancy Privacy Policy explaining how we collect, use, and protect personal information submitted through v-gconsultancy.com.",
  path: "/privacy-policy/",
  noindex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main id="main-content" className="flex-1">
        <section className="bg-gradient-dark text-white py-14 lg:py-20">
          <div className="container">
            <div className="mb-6">
              <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy/" }]} dark />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
            <p className="text-brand-dark-muted text-sm">Last updated: November 2026</p>
          </div>
        </section>

        <section className="section bg-white">
          <article className="container max-w-3xl space-y-6 text-brand-muted leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-brand-ink mb-2">1. Introduction</h2>
              <p>
                VG Consultancy (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) respects your privacy. This Privacy Policy explains how we collect, process, and safeguard personal information provided via v-gconsultancy.com.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-brand-ink mb-2">2. Information We Collect</h2>
              <p>
                We collect information you voluntarily submit through our contact, consultation, and careers inquiry forms, including your name, business email, organization, and inquiry details.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-brand-ink mb-2">3. How We Use Information</h2>
              <p>
                Submitted information is used strictly to respond to your inquiry, evaluate requested consultations or careers profiles, and deliver requested services. We do not sell personal data to third parties.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-brand-ink mb-2">4. Data Security &amp; Retention</h2>
              <p>
                We apply transport encryption, server-side input validation, and access controls to protect submitted data and retain it only as long as necessary to fulfill business or legal obligations.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-brand-ink mb-2">5. Contact</h2>
              <p>
                For privacy requests or questions, email{" "}
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
