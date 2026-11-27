import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import CareersForm from "@/components/forms/CareersForm";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/pages";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Explore careers at VG Consultancy across software engineering, AI automation, cloud architecture, IT consulting, and talent delivery.",
  path: "/careers/",
});

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main id="main-content" className="flex-1">
        <section className="bg-gradient-dark text-white py-16 lg:py-24 border-b border-white/10">
          <div className="container">
            <div className="mb-8">
              <Breadcrumbs items={[{ label: "Careers", href: "/careers/" }]} dark />
            </div>
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-brand-gold/35 bg-brand-gold/10 text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-4">
                CAREERS AT VG CONSULTANCY
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
                Build Real Systems With Us
              </h1>
              <p className="text-brand-dark-muted text-lg leading-relaxed">
                We collaborate with software engineers, AI practitioners, cloud architects, and technology consultants who value clean execution and business clarity.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-brand-light">
          <div className="container grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-7">
                <h2 className="text-xl font-extrabold text-brand-ink mb-3">
                  Areas of Ongoing Interest
                </h2>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">
                  Specific project and permanent openings become available across client initiatives. We welcome expressions of interest in:
                </p>
                <ul className="space-y-2.5 text-sm text-brand-ink font-medium">
                  <li>• Full-Stack TypeScript, React &amp; Next.js Engineering</li>
                  <li>• AI Engineering, RAG Pipelines &amp; Workflow Automation</li>
                  <li>• Cloud Architecture, DevOps &amp; Integration Engineering</li>
                  <li>• CRM / ERP Implementation &amp; Business Analysis</li>
                  <li>• Technical Recruitment &amp; Delivery Coordination</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7">
                <h2 className="text-lg font-bold text-brand-ink mb-2">Direct Talent Contact</h2>
                <p className="text-brand-muted text-sm leading-relaxed mb-2">
                  Prefer direct email? Reach our team at:
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-brand-bronze-text font-bold text-sm hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <CareersForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
