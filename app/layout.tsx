import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HtmlProvider } from "lexical-rich-text-editor/src/htmlContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HtmlProvider>{children}</HtmlProvider>
      </body>
    </html>
  );
}
