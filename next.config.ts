import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "1";
// Per-deploy base path: "/brazil-japan-store-product" on GitHub Pages,
// empty on Vercel (served from root). Drives routing AND asset URLs
// (via lib/asset-path) so they always match the deploy.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  assetPrefix: basePath ? `${basePath}/` : undefined,
  basePath: basePath || undefined,
  images: {
    unoptimized: isStaticExport
  },
  output: isStaticExport ? "export" : undefined,
  reactStrictMode: true,
  trailingSlash: true
};

export default nextConfig;
