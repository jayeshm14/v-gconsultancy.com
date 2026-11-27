import { InsightCategoryTemplate } from "@/components/sections/InsightTemplates";
import { insightCategoryMeta } from "@/content/insights";
import { buildMetadata } from "@/lib/seo";

const meta = insightCategoryMeta["blog"];

export const metadata = buildMetadata({
  title: meta.title,
  description: meta.description,
  path: "/insights/blog/",
});

export default function BlogPage() {
  return <InsightCategoryTemplate category="blog" />;
}
