import { InsightCategoryTemplate } from "@/components/sections/InsightTemplates";
import { insightCategoryMeta } from "@/content/insights";
import { buildMetadata } from "@/lib/seo";

const meta = insightCategoryMeta["technology-guides"];

export const metadata = buildMetadata({
  title: meta.title,
  description: meta.description,
  path: "/insights/technology-guides/",
});

export default function TechGuidesPage() {
  return <InsightCategoryTemplate category="technology-guides" />;
}
