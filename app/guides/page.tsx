import { GuidesContent } from "@/components/GuidesContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Guias",
  description:
    "Guias sobre origem, uso e escolha de produtos brasileiros — própolis verde, café, castanhas e mais — para clientes no Japão.",
  path: "/guides",
  language: "pt"
});

export default function GuidesPage() {
  return <GuidesContent />;
}
