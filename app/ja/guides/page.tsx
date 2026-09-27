import { GuidesContent } from "@/components/GuidesContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "ガイド",
  description:
    "ブラジル産品（グリーンプロポリス、コーヒー、ナッツなど）の産地・使い方・選び方を解説する記事です。",
  path: "/guides",
  language: "ja"
});

export default function JapaneseGuidesPage() {
  return <GuidesContent language="ja" />;
}
