import { siteBasePath } from "@/lib/site";

export function assetPath(path: string) {
  return `${siteBasePath}${path}`;
}
