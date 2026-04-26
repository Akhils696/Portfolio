import type { Metadata } from "next";
import { JetBrains_Mono, Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";

const headingFont = Orbitron({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akhil Senthil | AI Engineer & Full-Stack Developer",
  description:
    "Professional AI engineering portfolio for Akhil Senthil, a Computer Science undergraduate building computer vision, RAG, LLM, FastAPI, and full-stack systems.",
  keywords: [
    "Akhil Senthil",
    "AI Engineer",
    "AI/ML Researcher",
    "Full-Stack Developer",
    "Software Engineer",
    "Computer Vision",
    "RAG Applications",
    "Next.js Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable} bg-[var(--color-bg)] text-[var(--color-text)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
