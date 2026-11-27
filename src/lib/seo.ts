import type { Metadata } from "next";

export const SITE_URL = "https://v-gconsultancy.com";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  noindex = false,
  type = "website",
  publishedTime,
}: BuildMetadataOptions): Metadata {
  const normalizedPath = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  const canonicalUrl = `${SITE_URL}${normalizedPath}`;
  const fullTitle = title.includes("VG Consultancy") ? title : `${title} | VG Consultancy`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: "VG Consultancy",
      type,
      locale: "en_US",
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: noindex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}
