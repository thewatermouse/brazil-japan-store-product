import { ContactContent } from "@/components/ContactContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contato",
  description: "Canais de contato para pedidos, kits, atacado leve e dúvidas sobre a loja.",
  path: "/contact",
  language: "pt"
});

export default function ContactPage() {
  return <ContactContent />;
}
