import { HomeContent } from "@/components/HomeContent";
import { StructuredData } from "@/components/StructuredData";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/metadata";
import { localizedSiteUrl, siteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "ブラジル産食品を日本へ",
  description:
    "日本のお客様向けに、ブラジル産コーヒー、グリーンプロポリス、アサイーパウダーを紹介するストアです。",
  path: "/",
  language: "ja"
});

export default function JapaneseHomePage() {
  return (
    <>
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Nippon Brasil Select",
            url: siteUrl,
            email: "rodrigokato@gmail.com",
            areaServed: "JP",
            knowsAbout: ["Brazilian coffee", "Brazilian propolis", "Acai powder"]
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Nippon Brasil Select",
            url: localizedSiteUrl("/", "ja"),
            inLanguage: "ja-JP",
            potentialAction: {
              "@type": "ViewAction",
              target: localizedSiteUrl("/products", "ja")
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: "ブラジル産食品カタログ",
            itemListElement: products.map((product) => ({
              "@type": "Offer",
              priceCurrency: "JPY",
              price: product.priceYen,
              url: localizedSiteUrl(`/products/${product.slug}`, "ja"),
              itemOffered: {
                "@type": "Product",
                name: product.name.ja,
                description: product.shortDescription.ja
              }
            }))
          }
        ]}
      />
      <HomeContent language="ja" />
    </>
  );
}
