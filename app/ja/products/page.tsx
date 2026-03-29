import { ProductsContent } from "@/components/ProductsContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "商品一覧",
  description:
    "ブラジル産コーヒー、グリーンプロポリス、アサイーパウダーの商品一覧です。",
  path: "/products",
  language: "ja"
});

export default function JapaneseProductsPage() {
  return <ProductsContent language="ja" />;
}
