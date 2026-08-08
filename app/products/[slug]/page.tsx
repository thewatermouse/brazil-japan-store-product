import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetailContent } from "@/components/ProductDetailContent";
import { StructuredData } from "@/components/StructuredData";
import { getProductBySlug, visibleProducts } from "@/data/products";
import { buildMetadata } from "@/lib/metadata";
import { siteUrl } from "@/lib/site";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return visibleProducts.map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return buildMetadata({
    title: product.name.pt,
    description: product.shortDescription.pt,
    path: `/products/${product.slug}`,
    language: "pt"
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name.pt,
          description: product.shortDescription.pt,
          image: `${siteUrl}${product.image}`,
          sku: product.slug,
          brand: {
            "@type": "Brand",
            name: "Nippon Brasil Select"
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "JPY",
            price: product.priceYen,
            availability: "https://schema.org/InStock",
            url: `${siteUrl}/products/${product.slug}/`
          },
          countryOfOrigin: "BR"
        }}
      />
      <ProductDetailContent product={product} />
    </>
  );
}
