import { SetsContent } from "@/components/SetsContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Kits",
  description: "Sugestoes de kits e combinacoes de produtos brasileiros para presente ou recompra.",
  path: "/sets",
  language: "pt"
});

export default function SetsPage() {
  return <SetsContent />;
}
