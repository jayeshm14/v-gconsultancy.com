import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { SITE_URL } from "@/lib/seo";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

const manrope = localFont({
  src: "./fonts/manrope-latin.woff2",
  weight: "200 800",
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | VG Consultancy",
    default: "VG Consultancy | Technology, AI & Digital Engineering",
  },
  description:
    "VG Consultancy helps organizations transform business operations through intelligent technology, software engineering, AI-powered automation and enterprise solutions. Established in 2016.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    siteName: "VG Consultancy",
    title: "VG Consultancy | Technology, AI & Digital Engineering",
    description:
      "VG Consultancy helps organizations transform business operations through intelligent technology, software engineering, AI-powered automation and enterprise solutions. Established in 2016.",
    url: `${SITE_URL}/`,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "VG Consultancy | Technology, AI & Digital Engineering",
    description:
      "An AI-enabled technology and digital engineering partner helping businesses innovate, modernize and scale. Established in 2016.",
  },
  robots: {
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VG Consultancy",
  legalName: "Virtual Growth Private Limited",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  foundingDate: "2016",
  email: "info@v-gconsultancy.com",
  description:
    "An AI-enabled technology and digital engineering partner helping businesses innovate, modernize and scale.",
  slogan: "Engineering Intelligence. Enabling Growth.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "VG Consultancy",
  url: SITE_URL,
  publisher: {
    "@type": "Organization",
    name: "VG Consultancy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="bg-white text-brand-ink antialiased selection:bg-brand-gold selection:text-brand-dark">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-brand-dark focus:px-4 focus:py-2 focus:text-white focus:font-semibold"
        >
          Skip to main content
        </a>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
