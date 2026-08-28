import { assetBasePath } from "@/lib/site";

export function assetPath(path: string) {
  return `${assetBasePath}${path}`;
}
