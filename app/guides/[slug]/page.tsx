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
    title: guide.title.pt,
    description: guide.description.pt,
    path: `/guides/${guide.slug}`,
    language: "pt"
  });
}

export default async function GuidePage({ params }: GuidePageProps) {
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
            headline: guide.title.pt,
            description: guide.description.pt,
            datePublished: guide.date,
            dateModified: guide.date,
            inLanguage: "pt-BR",
            image: `${siteUrl}/og/storefront-og.svg`,
            mainEntityOfPage: `${siteUrl}/guides/${guide.slug}/`,
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
              { "@type": "ListItem", position: 1, name: "Início", item: localizedSiteUrl("/", "pt") },
              { "@type": "ListItem", position: 2, name: "Guias", item: localizedSiteUrl("/guides", "pt") },
              {
                "@type": "ListItem",
                position: 3,
                name: guide.title.pt,
                item: localizedSiteUrl(`/guides/${guide.slug}`, "pt")
              }
            ]
          }
        ]}
      />
      <GuideDetailContent guide={guide} />
    </>
  );
}
