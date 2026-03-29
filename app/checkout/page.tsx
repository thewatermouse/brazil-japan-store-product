import { CheckoutContent } from "@/components/CheckoutContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Pedido",
  description: "Monte seu pedido com varios produtos e envie os dados por email.",
  path: "/checkout",
  language: "pt",
  noIndex: true
});

export default function CheckoutPage() {
  return <CheckoutContent />;
}
