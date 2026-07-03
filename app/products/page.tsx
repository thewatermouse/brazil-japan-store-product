import { ProductsContent } from "@/components/ProductsContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Produtos brasileiros",
  description:
    "Catálogo com café especial, própolis verde e açaí em pó para consumidores no Japão.",
  path: "/products",
  language: "pt"
});

export default function ProductsPage() {
  return <ProductsContent />;
}
