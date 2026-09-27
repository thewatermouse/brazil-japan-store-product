import type { MetadataRoute } from "next";

import { guides } from "@/data/guides";
import { visibleProducts } from "@/data/products";
import { localizedSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

const staticPaths = ["/", "/about", "/products", "/guides", "/sets", "/shipping", "/faq", "/policies", "/contact"];

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

  const productEntries: MetadataRoute.Sitemap = visibleProducts.flatMap((product) => [
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

  const guideEntries: MetadataRoute.Sitemap = guides.flatMap((guide) => [
    {
      url: localizedSiteUrl(`/guides/${guide.slug}`, "pt"),
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: localizedSiteUrl(`/guides/${guide.slug}`, "ja"),
      changeFrequency: "monthly",
      priority: 0.6
    }
  ]);

  return [...localizedEntries, ...productEntries, ...guideEntries];
}
