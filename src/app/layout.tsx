import type { Metadata } from "next";
import { Archivo, Plus_Jakarta_Sans } from "next/font/google";
import { sfPro, sfMono, newYork } from "@/lib/fonts";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SEO_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${DEFAULT_TITLE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: SEO_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Technology Services",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${DEFAULT_TITLE}`,
    description: DEFAULT_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Backend Solutions, App Dev, Distributed Systems & Paid Ads`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${DEFAULT_TITLE}`,
    description: DEFAULT_DESCRIPTION,
    images: ["/twitter-image.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${archivo.variable} ${sfPro.variable} ${sfMono.variable} ${newYork.variable} h-full antialiased`}
    >
      <body className="min-h-full w-full flex flex-col">{children}</body>
    </html>
  );
}
