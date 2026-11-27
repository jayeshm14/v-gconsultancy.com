import { notFound } from "next/navigation";
import { InsightArticleTemplate } from "@/components/sections/InsightTemplates";
import { getInsightBySlug, getInsightsByCategory } from "@/content/insights";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getInsightsByCategory("technology-guides").map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getInsightBySlug("technology-guides", params.slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/insights/technology-guides/${article.slug}/`,
    type: "article",
    publishedTime: article.publishedAt,
  });
}

export default function TechGuideArticlePage({ params }: { params: { slug: string } }) {
  const article = getInsightBySlug("technology-guides", params.slug);
  if (!article) notFound();
  return <InsightArticleTemplate article={article} />;
}
