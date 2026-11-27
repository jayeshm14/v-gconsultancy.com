import { ServicePage } from "@/components/sections/ServicePageTemplate";
import { serviceRoutes } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";

const data = serviceRoutes.find((service) => service.id === "quality-assurance")!;

export const metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: data.path,
});

export default function Page() {
  return (
    <ServicePage
      data={data}
      breadcrumb={[
        { label: "Services", href: "/services/" },
        { label: data.h1, href: data.path },
      ]}
    />
  );
}
