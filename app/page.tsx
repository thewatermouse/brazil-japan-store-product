import { HomeContent } from "@/components/HomeContent";
import { StructuredData } from "@/components/StructuredData";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/metadata";
import { localizedSiteUrl, siteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Produtos brasileiros para clientes no Japao",
  description:
    "Loja em portugues com cafe brasileiro, propolis verde e acai em po para consumidores no Japao.",
  path: "/",
  language: "pt"
});

export default function HomePage() {
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
            url: siteUrl,
            inLanguage: "pt-BR",
            potentialAction: {
              "@type": "ViewAction",
              target: localizedSiteUrl("/products", "pt")
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: "Produtos brasileiros para o Japao",
            itemListElement: products.map((product) => ({
              "@type": "Offer",
              priceCurrency: "JPY",
              price: product.priceYen,
              url: localizedSiteUrl(`/products/${product.slug}`, "pt"),
              itemOffered: {
                "@type": "Product",
                name: product.name.pt,
                description: product.shortDescription.pt
              }
            }))
          }
        ]}
      />
      <HomeContent />
    </>
  );
}
