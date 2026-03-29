import { SetsContent } from "@/components/SetsContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "セット",
  description: "ギフトやまとめ買い向けのセット提案です。",
  path: "/sets",
  language: "ja"
});

export default function JapaneseSetsPage() {
  return <SetsContent language="ja" />;
}
