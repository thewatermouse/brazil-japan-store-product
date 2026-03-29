import type { Metadata } from "next";

import type { Language } from "@/data/products";
import { localizedPath, localizedSiteUrl, siteOrigin, siteUrl } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  language?: Language;
  imagePath?: string;
  noIndex?: boolean;
};

const languageMeta = {
  pt: {
    locale: "pt_BR",
    languageTag: "pt-BR"
  },
  ja: {
    locale: "ja_JP",
    languageTag: "ja-JP"
  }
} as const;

export function buildMetadata({
  title,
  description,
  path = "/",
  language = "pt",
  imagePath = "/og/storefront-og.svg",
  noIndex = false
}: MetadataInput): Metadata {
  const canonical = localizedSiteUrl(path, language);
  const imageUrl = `${siteUrl}${imagePath}`;

  return {
    metadataBase: new URL(siteOrigin),
    title,
    description,
    alternates: {
      canonical,
      languages: {
        "pt-BR": localizedSiteUrl(path, "pt"),
        "ja-JP": localizedSiteUrl(path, "ja"),
        "x-default": localizedSiteUrl(path, "pt")
      }
    },
    openGraph: {
      type: "website",
      title: `${title} | Nippon Brasil Select`,
      description,
      url: canonical,
      siteName: "Nippon Brasil Select",
      locale: languageMeta[language].locale,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} | Nippon Brasil Select`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Nippon Brasil Select`,
      description,
      images: [imageUrl]
    },
    robots: noIndex
      ? {
          index: false,
          follow: true
        }
      : {
          index: true,
          follow: true
        },
    other: {
      "content-language": languageMeta[language].languageTag
    }
  };
}
