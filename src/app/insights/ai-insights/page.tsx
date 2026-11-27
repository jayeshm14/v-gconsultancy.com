import { InsightCategoryTemplate } from "@/components/sections/InsightTemplates";
import { insightCategoryMeta } from "@/content/insights";
import { buildMetadata } from "@/lib/seo";

const meta = insightCategoryMeta["ai-insights"];

export const metadata = buildMetadata({
  title: meta.title,
  description: meta.description,
  path: "/insights/ai-insights/",
});

export default function AIInsightsPage() {
  return <InsightCategoryTemplate category="ai-insights" />;
}
