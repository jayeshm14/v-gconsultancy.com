import { SolutionPage } from "@/components/sections/SolutionPageTemplate";
import { solutionRoutes } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";

const data = solutionRoutes.find((s) => s.id === "enterprise-digital-solutions")!;

export const metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: data.path,
});

export default function Page() {
  return (
    <SolutionPage
      data={data}
      breadcrumb={[
        { label: "Solutions", href: "/solutions/" },
        { label: data.h1, href: data.path },
      ]}
    />
  );
}
