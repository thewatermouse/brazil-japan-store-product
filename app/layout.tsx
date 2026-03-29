import type { Metadata, Viewport } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import { siteOrigin, siteUrl } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  applicationName: "Nippon Brasil Select",
  title: {
    default: "Nippon Brasil Select",
    template: "%s | Nippon Brasil Select"
  },
  description:
    "Client-facing bilingual storefront for Brazilian propolis, coffee, and acai products sold to customers in Japan.",
  keywords: [
    "Brazilian products Japan",
    "Brazilian coffee Japan",
    "Brazilian propolis Japan",
    "acai powder Japan",
    "imported Brazilian foods Japan"
  ],
  category: "food",
  manifest: `${siteUrl}/manifest.webmanifest`,
  appleWebApp: {
    capable: true,
    title: "Nippon Brasil Select",
    statusBarStyle: "default"
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: "website",
    siteName: "Nippon Brasil Select",
    url: siteUrl,
    title: "Nippon Brasil Select",
    description:
      "Bilingual storefront for Brazilian coffee, propolis, and acai shipped to customers in Japan.",
    images: [
      {
        url: `${siteUrl}/og/storefront-og.svg`,
        width: 1200,
        height: 630,
        alt: "Nippon Brasil Select"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Brasil Select",
    description:
      "Bilingual storefront for Brazilian coffee, propolis, and acai shipped to customers in Japan.",
    images: [`${siteUrl}/og/storefront-og.svg`]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#efe5d3"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
