import { notFound } from "next/navigation";
import { InsightArticleTemplate } from "@/components/sections/InsightTemplates";
import { getInsightBySlug, getInsightsByCategory } from "@/content/insights";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getInsightsByCategory("blog").map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getInsightBySlug("blog", params.slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/insights/blog/${article.slug}/`,
    type: "article",
    publishedTime: article.publishedAt,
  });
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = getInsightBySlug("blog", params.slug);
  if (!article) notFound();
  return <InsightArticleTemplate article={article} />;
}
