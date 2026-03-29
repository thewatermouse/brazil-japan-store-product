import type { MetadataRoute } from "next";

import { products } from "@/data/products";
import { localizedSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

const staticPaths = ["/", "/about", "/products", "/sets", "/shipping", "/faq", "/policies", "/contact"];

function getChangeFrequency(path: string): MetadataRoute.Sitemap[number]["changeFrequency"] {
  return path === "/" ? "weekly" : "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedEntries: MetadataRoute.Sitemap = staticPaths.flatMap((path) => [
    {
      url: localizedSiteUrl(path, "pt"),
      changeFrequency: getChangeFrequency(path),
      priority: path === "/" ? 1 : 0.7
    },
    {
      url: localizedSiteUrl(path, "ja"),
      changeFrequency: getChangeFrequency(path),
      priority: path === "/" ? 1 : 0.7
    }
  ]);

  const productEntries: MetadataRoute.Sitemap = products.flatMap((product) => [
    {
      url: localizedSiteUrl(`/products/${product.slug}`, "pt"),
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: localizedSiteUrl(`/products/${product.slug}`, "ja"),
      changeFrequency: "weekly",
      priority: 0.8
    }
  ]);

  return [...localizedEntries, ...productEntries];
}
