import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/pages";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description: "VG Consultancy Cookie Policy explaining essential browser storage and preference controls.",
  path: "/cookie-policy/",
  noindex: true,
});

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main id="main-content" className="flex-1">
        <section className="bg-gradient-dark text-white py-14 lg:py-20">
          <div className="container">
            <div className="mb-6">
              <Breadcrumbs items={[{ label: "Cookie Policy", href: "/cookie-policy/" }]} dark />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Cookie Policy</h1>
            <p className="text-brand-dark-muted text-sm">Last updated: November 2026</p>
          </div>
        </section>

        <section className="section bg-white">
          <article className="container max-w-3xl space-y-6 text-brand-muted leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-brand-ink mb-2">1. What Are Cookies</h2>
              <p>
                Cookies and local storage entries are small data items stored by your browser to preserve essential site state and user preferences.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-brand-ink mb-2">2. How We Use Cookies</h2>
              <p>
                We use essential storage to remember your cookie consent selection and maintain secure form interactions. We do not deploy invasive third-party advertising trackers.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-brand-ink mb-2">3. Managing Preferences</h2>
              <p>
                You can adjust cookie settings at any time in your browser preferences or select &ldquo;Essential Only&rdquo; in our site preference prompt.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-brand-ink mb-2">4. Contact</h2>
              <p>
                For questions about this Cookie Policy, contact{" "}
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
