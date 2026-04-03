import { CheckoutContent } from "@/components/CheckoutContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Pedido",
  description: "Monte seu pedido com varios produtos e finalize pelo checkout da loja ou por PayPal.",
  path: "/checkout",
  language: "pt",
  noIndex: true
});

export default function CheckoutPage() {
  return <CheckoutContent />;
}
