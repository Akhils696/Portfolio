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
  title: "Akhil Senthil | AI/ML Developer Portfolio",
  description:
    "Modern futuristic portfolio for Akhil Senthil, a Computer Science student focused on AI/ML engineering and scalable software development.",
  keywords: [
    "Akhil Senthil",
    "AI/ML Developer",
    "Software Engineer",
    "Computer Science Student",
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
