const repoBasePath =
  process.env.NODE_ENV === "production" ? "/brazil-japan-store-product" : "";

export function assetPath(path: string) {
  return `${repoBasePath}${path}`;
}
