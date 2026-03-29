import { ShippingContent } from "@/components/ShippingContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "配送",
  description: "日本向け配送の初期送料テーブルと発送方針です。",
  path: "/shipping",
  language: "ja"
});

export default function JapaneseShippingPage() {
  return <ShippingContent language="ja" />;
}
