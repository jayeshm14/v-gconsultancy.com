import NotFound from "@/app/not-found";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Page Not Found (404)",
  description: "The requested page could not be found on VG Consultancy.",
  path: "/404/",
  noindex: true,
});

export default function Explicit404Page() {
  return <NotFound />;
}
