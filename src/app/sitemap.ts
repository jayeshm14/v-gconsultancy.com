import { MetadataRoute } from "next";
import { serviceRoutes, solutionRoutes, industryRoutes } from "@/content/pages";
import { insightArticles } from "@/content/insights";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticIndexablePaths = [
    "/",
    "/about/",
    "/about/our-journey/",
    "/about/leadership-team/",
    "/about/our-approach/",
    "/careers/",
    "/contact/",
    "/free-consultation/",
    "/services/",
    "/solutions/",
    "/industries/",
    "/case-studies/",
    "/insights/",
    "/insights/blog/",
    "/insights/technology-guides/",
    "/insights/ai-insights/",
  ];

  const dynamicPaths = [
    ...serviceRoutes.map((s) => s.path),
    ...solutionRoutes.map((s) => s.path),
    ...industryRoutes.map((i) => i.path),
    ...insightArticles.map((a) => `/insights/${a.category}/${a.slug}/`),
  ];

  const allPaths = Array.from(new Set([...staticIndexablePaths, ...dynamicPaths]));

  return allPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : path.split("/").filter(Boolean).length === 1 ? 0.9 : 0.8,
  }));
}
