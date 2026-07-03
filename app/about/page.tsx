import { AboutContent } from "@/components/AboutContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Marca e curadoria",
  description:
    "Entenda a curadoria da loja e como os produtos brasileiros são selecionados para venda ao consumidor no Japão.",
  path: "/about",
  language: "pt"
});

export default function AboutPage() {
  return <AboutContent />;
}
