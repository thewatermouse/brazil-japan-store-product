import { FaqContent } from "@/components/FaqContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "FAQ",
  description: "配送、ギフト注文、最低注文数などのよくある質問です。",
  path: "/faq",
  language: "ja"
});

export default function JapaneseFaqPage() {
  return <FaqContent language="ja" />;
}
