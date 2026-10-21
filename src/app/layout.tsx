import type { Metadata } from "next";
import { Bricolage_Grotesque, Atkinson_Hyperlegible, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], axes: ["opsz"], variable: "--font-display" });
const body = Atkinson_Hyperlegible({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "George Bemrose",
  description: "Founding engineer at Artifact AI. Chartered accountant turned software engineer, London.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
