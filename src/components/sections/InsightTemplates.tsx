import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import {
  InsightArticle,
  InsightCategory,
  getInsightsByCategory,
  insightCategoryMeta,
} from "@/content/insights";
import { SITE_URL } from "@/lib/seo";

export function InsightCategoryTemplate({ category }: { category: InsightCategory }) {
  const meta = insightCategoryMeta[category];
  const articles = getInsightsByCategory(category);
  const path = `/insights/${category}/`;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main id="main-content" className="flex-1">
        <section className="bg-gradient-dark text-white py-16 lg:py-24 border-b border-white/10">
          <div className="container">
            <div className="mb-8">
              <Breadcrumbs
                items={[
                  { label: "Insights", href: "/insights/" },
                  { label: meta.heading, href: path },
                ]}
                dark
              />
            </div>
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-brand-gold/35 bg-brand-gold/10 text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-4">
                INSIGHTS • {meta.heading.toUpperCase()}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
                {meta.title}
              </h1>
              <p className="text-brand-dark-muted text-lg leading-relaxed">{meta.intro}</p>
            </div>
          </div>
        </section>

        <section className="section bg-brand-light">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <article key={article.slug} className="card p-8">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="badge badge-gold">{article.categoryLabel}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-brand-muted font-medium">
                      <Clock size={14} aria-hidden="true" />
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-brand-ink mb-3 leading-snug">
                    <Link
                      href={`/insights/${article.category}/${article.slug}/`}
                      className="hover:text-brand-bronze-text transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-brand-muted leading-relaxed mb-6 flex-1">{article.summary}</p>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <time dateTime={article.publishedAt} className="text-xs text-brand-muted">
                      Published {article.publishedAt}
                    </time>
                    <Link
                      href={`/insights/${article.category}/${article.slug}/`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-bronze-text hover:underline"
                    >
                      Read Full Article <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export function InsightArticleTemplate({ article }: { article: InsightArticle }) {
  const path = `/insights/${article.category}/${article.slug}/`;
  const schema = {
    "@context": "https://schema.org",
    "@type": article.category === "blog" ? "BlogPosting" : "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    url: `${SITE_URL}${path}`,
    author: {
      "@type": "Organization",
      name: "VG Consultancy",
    },
    publisher: {
      "@type": "Organization",
      name: "VG Consultancy",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <JsonLd data={schema} />
      <Navbar />

      <main id="main-content" className="flex-1">
        <section className="bg-gradient-dark text-white py-14 lg:py-20 border-b border-white/10">
          <div className="container max-w-4xl">
            <div className="mb-8">
              <Breadcrumbs
                items={[
                  { label: "Insights", href: "/insights/" },
                  { label: article.categoryLabel, href: `/insights/${article.category}/` },
                  { label: article.title, href: path },
                ]}
                dark
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold font-extrabold uppercase tracking-wider">
                {article.categoryLabel}
              </span>
              <time dateTime={article.publishedAt} className="text-brand-dark-muted">
                {article.publishedAt}
              </time>
              <span className="text-brand-dark-muted">• {article.readTime}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              {article.title}
            </h1>
            <p className="text-brand-dark-muted text-lg leading-relaxed">{article.summary}</p>
          </div>
        </section>

        <article className="section bg-white">
          <div className="container max-w-3xl space-y-8">
            {article.sections.map((sec) => (
              <section key={sec.heading}>
                <h2 className="text-2xl font-extrabold text-brand-ink mb-3">{sec.heading}</h2>
                <div className="space-y-4 text-brand-muted leading-relaxed">
                  {sec.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                {sec.bullets && (
                  <ul className="mt-4 space-y-2.5 rounded-2xl border border-slate-200 bg-brand-light p-6">
                    {sec.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-brand-ink font-medium">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-teal shrink-0" aria-hidden="true" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-brand-bronze-text mb-1">
                  RELATED CAPABILITY
                </p>
                <Link
                  href={article.relatedServiceHref}
                  className="text-lg font-bold text-brand-ink hover:text-brand-bronze-text transition-colors"
                >
                  {article.relatedServiceLabel} &rarr;
                </Link>
              </div>
              <Button asChild>
                <Link href="/free-consultation/">Request a Consultation</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
