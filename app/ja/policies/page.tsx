import { PoliciesContent } from "@/components/PoliciesContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "ポリシー",
  description: "注文確定、配送、問い合わせ対応に関するストアポリシーです。",
  path: "/policies",
  language: "ja"
});

export default function JapanesePoliciesPage() {
  return <PoliciesContent language="ja" />;
}
