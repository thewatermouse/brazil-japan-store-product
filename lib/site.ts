import type { Language } from "@/data/products";

export const repoName = "brazil-japan-store-product";
export const siteOrigin = "https://thewatermouse.github.io";

// Canonical/SEO base path — always the public GitHub Pages URL, independent
// of which deploy serves the request (used for canonical, sitemap, OG URLs).
export const siteBasePath = `/${repoName}`;
export const siteUrl = `${siteOrigin}${siteBasePath}`;

// Runtime asset base path — must match THIS deploy's basePath: set to
// "/brazil-japan-store-product" on GitHub Pages, empty on Vercel (root).
// Mirrors next.config's basePath so <img> src paths resolve on both.
export const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const defaultLanguage: Language = "pt";
export const supportedLanguages: Language[] = ["pt", "ja"];

function normalizePath(path: string) {
  if (!path || path === "/") {
    return "/";
  }

  return path.endsWith("/") ? path.slice(0, -1) : path;
}

export function getLocaleFromPath(pathname: string): Language {
  return normalizePath(pathname).startsWith("/ja") ? "ja" : "pt";
}

export function stripLocaleFromPath(pathname: string) {
  const normalized = normalizePath(pathname);

  if (normalized === "/ja") {
    return "/";
  }

  return normalized.startsWith("/ja/") ? normalized.slice(3) : normalized;
}

export function localizedPath(path: string, language: Language) {
  const normalized = normalizePath(path);

  if (language === "ja") {
    return normalized === "/" ? "/ja" : `/ja${normalized}`;
  }

  return normalized;
}

export function absoluteSiteUrl(path: string) {
  return `${siteUrl}${localizedPath(path, "pt")}`;
}

export function localizedSiteUrl(path: string, language: Language) {
  return `${siteUrl}${localizedPath(path, language)}`;
}
