import { AboutContent } from "@/components/AboutContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Marca e curadoria",
  description:
    "Entenda a curadoria da loja e como os produtos brasileiros sao selecionados para venda ao consumidor no Japao.",
  path: "/about",
  language: "pt"
});

export default function AboutPage() {
  return <AboutContent />;
}
