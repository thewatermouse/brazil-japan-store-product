export default function JapaneseLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section lang="ja-JP">{children}</section>;
}
