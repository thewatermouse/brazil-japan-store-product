import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GuideDetailContent } from "@/components/GuideDetailContent";
import { StructuredData } from "@/components/StructuredData";
import { getGuideBySlug, guides } from "@/data/guides";
import { buildMetadata } from "@/lib/metadata";
import { localizedSiteUrl, siteUrl } from "@/lib/site";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return buildMetadata({
    title: guide.title.ja,
    description: guide.description.ja,
    path: `/guides/${guide.slug}`,
    language: "ja"
  });
}

export default async function JapaneseGuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <>
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guide.title.ja,
            description: guide.description.ja,
            datePublished: guide.date,
            dateModified: guide.date,
            inLanguage: "ja-JP",
            image: `${siteUrl}/og/storefront-og.svg`,
            mainEntityOfPage: localizedSiteUrl(`/guides/${guide.slug}`, "ja"),
            author: { "@type": "Organization", name: "Nippon Brasil Select" },
            publisher: {
              "@type": "Organization",
              name: "Nippon Brasil Select",
              logo: { "@type": "ImageObject", url: `${siteUrl}/icons/store-icon.svg` }
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "ホーム", item: localizedSiteUrl("/", "ja") },
              { "@type": "ListItem", position: 2, name: "ガイド", item: localizedSiteUrl("/guides", "ja") },
              {
                "@type": "ListItem",
                position: 3,
                name: guide.title.ja,
                item: localizedSiteUrl(`/guides/${guide.slug}`, "ja")
              }
            ]
          }
        ]}
      />
      <GuideDetailContent guide={guide} language="ja" />
    </>
  );
}
