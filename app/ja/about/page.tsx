import { AboutContent } from "@/components/AboutContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "ブランドについて",
  description: "日本のお客様向けに、ブラジル産食品をどう選んでいるかを紹介します。",
  path: "/about",
  language: "ja"
});

export default function JapaneseAboutPage() {
  return <AboutContent language="ja" />;
}
