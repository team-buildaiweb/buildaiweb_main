import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BuildAIWeb - AI-Powered Mobile app development Platform",
  description:
    "Build AI-generated mobileapps with just one prompt. The fastest way to go from idea to live site — powered entirely by AI.",
  keywords:
    "AI mobileapp builder, mobile app development, artificial intelligence, mobileapp generator, no-code",
  authors: [{ name: "BuildAIWeb Team" }],
  openGraph: {
    title: "BuildAIWeb - AI-Powered Mobile app development Platform",
    description:
      "Build AI-generated mobileapps with just one prompt. The fastest way to go from idea to live site — powered entirely by AI.",
    url: "https://buildaiweb.com",
    siteName: "BuildAIWeb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildAIWeb - AI-Powered Mobile app development Platform",
    description:
      "Build AI-generated mobileapps with just one prompt. The fastest way to go from idea to live site — powered entirely by AI.",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
