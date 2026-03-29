import { CheckoutContent } from "@/components/CheckoutContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "注文",
  description: "複数商品をまとめて注文できる簡易チェックアウトです。",
  path: "/checkout",
  language: "ja",
  noIndex: true
});

export default function JapaneseCheckoutPage() {
  return <CheckoutContent language="ja" />;
}
