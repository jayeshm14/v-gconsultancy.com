"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight, Clock } from "lucide-react";
import { InsightArticle, InsightCategory } from "@/content/insights";

export function InsightsExplorer({ articles }: { articles: InsightArticle[] }) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | InsightCategory>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      const catMatch = selectedCategory === "all" || a.category === selectedCategory;
      if (!catMatch) return false;
      if (!q) return true;
      return (
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [articles, query, selectedCategory]);

  const categories: { id: "all" | InsightCategory; label: string }[] = [
    { id: "all", label: "All Insights" },
    { id: "ai-insights", label: "AI Insights" },
    { id: "technology-guides", label: "Technology Guides" },
    { id: "blog", label: "Blog" },
  ];

  return (
    <div>
      {/* Search and filter controls */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-10">
        <div className="relative flex-1 max-w-md">
          <label htmlFor="insights-search" className="sr-only">
            Search articles and technology guides
          </label>
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted pointer-events-none"
            aria-hidden="true"
          />
          <input
            id="insights-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search AI, modernization, integrations..."
            className="w-full min-h-[44px] pl-11 pr-4 py-2.5 rounded-full border border-slate-300 bg-white text-sm text-brand-ink placeholder:text-brand-muted"
          />
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter insights by category">
          {categories.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`min-h-[40px] px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                  active
                    ? "bg-brand-dark text-white"
                    : "bg-brand-light text-brand-ink border border-slate-200 hover:border-brand-bronze"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results grid */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-brand-light p-10 text-center">
          <p className="text-brand-ink font-semibold mb-2">No matching articles found</p>
          <p className="text-brand-muted text-sm mb-4">
            Try clearing your search filter or exploring all categories.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setSelectedCategory("all");
            }}
            className="text-sm font-bold text-brand-bronze-text underline"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <article key={article.slug} className="card p-7">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="badge badge-gold">{article.categoryLabel}</span>
                <span className="inline-flex items-center gap-1 text-xs text-brand-muted font-medium">
                  <Clock size={13} aria-hidden="true" />
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-lg font-bold text-brand-ink mb-3 leading-snug">
                <Link
                  href={`/insights/${article.category}/${article.slug}/`}
                  className="hover:text-brand-bronze-text transition-colors"
                >
                  {article.title}
                </Link>
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-5 flex-1">
                {article.summary}
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <time dateTime={article.publishedAt} className="text-xs text-brand-muted">
                  {article.publishedAt}
                </time>
                <Link
                  href={`/insights/${article.category}/${article.slug}/`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-bronze-text hover:underline"
                >
                  Read Article
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
