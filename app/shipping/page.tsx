import { ShippingContent } from "@/components/ShippingContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Frete e entrega",
  description: "Tabela inicial de frete estimado por peso para envios ao Japao.",
  path: "/shipping",
  language: "pt"
});

export default function ShippingPage() {
  return <ShippingContent />;
}
