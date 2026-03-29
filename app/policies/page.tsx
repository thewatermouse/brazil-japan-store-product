import { PoliciesContent } from "@/components/PoliciesContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Politicas",
  description: "Regras da loja para confirmacao de pedido, atendimento e dados do cliente.",
  path: "/policies",
  language: "pt"
});

export default function PoliciesPage() {
  return <PoliciesContent />;
}
