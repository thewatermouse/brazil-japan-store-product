import { FaqContent } from "@/components/FaqContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "FAQ",
  description: "Perguntas frequentes sobre pedidos, envio, presentes e operação da loja.",
  path: "/faq",
  language: "pt"
});

export default function FaqPage() {
  return <FaqContent />;
}
