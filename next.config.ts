import type { NextConfig } from "next";

const repoName = "brazil-japan-store-product";
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  assetPrefix: isStaticExport ? `/${repoName}/` : undefined,
  basePath: isStaticExport ? `/${repoName}` : "",
  images: {
    unoptimized: isStaticExport
  },
  output: isStaticExport ? "export" : undefined,
  reactStrictMode: true,
  trailingSlash: true
};

export default nextConfig;
