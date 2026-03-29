import { ProductsContent } from "@/components/ProductsContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Produtos brasileiros",
  description:
    "Catalogo com cafe especial, propolis verde e acai em po para consumidores no Japao.",
  path: "/products",
  language: "pt"
});

export default function ProductsPage() {
  return <ProductsContent />;
}
