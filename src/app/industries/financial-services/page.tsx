import { IndustryPage } from "@/components/sections/IndustryPageTemplate";
import { industryRoutes } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";

const data = industryRoutes.find((i) => i.id === "financial-services")!;

export const metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: data.path,
});

export default function Page() {
  return (
    <IndustryPage
      data={data}
      breadcrumb={[
        { label: "Industries", href: "/industries/" },
        { label: data.h1, href: data.path },
      ]}
    />
  );
}
