import type { NextConfig } from "next";

const repoName = "brazil-japan-store-product";
const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  assetPrefix: isProduction ? `/${repoName}/` : undefined,
  basePath: isProduction ? `/${repoName}` : "",
  images: {
    unoptimized: true
  },
  output: "export",
  reactStrictMode: true,
  trailingSlash: true
};

export default nextConfig;
