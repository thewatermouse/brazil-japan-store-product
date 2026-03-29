import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Nippon Brasil Select",
  description:
    "Loja bilingue para vender produtos brasileiros premium ao consumidor final no Japao."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
