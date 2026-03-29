import { ContactContent } from "@/components/ContactContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "お問い合わせ",
  description: "注文、ギフト、まとめ買いについての問い合わせ窓口です。",
  path: "/contact",
  language: "ja"
});

export default function JapaneseContactPage() {
  return <ContactContent language="ja" />;
}
