import { PoliciesContent } from "@/components/PoliciesContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Políticas",
  description: "Regras da loja para confirmação de pedido, envio, devolução e dados do cliente.",
  path: "/policies",
  language: "pt"
});

export default function PoliciesPage() {
  return <PoliciesContent />;
}
