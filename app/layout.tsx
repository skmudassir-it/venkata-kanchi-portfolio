import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Venkata Kanchi — Senior Software Engineer & AI Innovator",
  description:
    "Portfolio of Venkata Kanchi — Senior Software Engineer specializing in Generative AI, cloud-native architectures, and enterprise-scale platforms. Nearly two decades of experience across hospitality, finance, and healthcare.",
  keywords: [
    "Venkata Kanchi",
    "Software Engineer",
    "AI Engineer",
    "Generative AI",
    "LLM",
    "Machine Learning",
    "Python",
    "AWS",
    "Portfolio",
  ],
  openGraph: {
    title: "Venkata Kanchi — Senior Software Engineer & AI Innovator",
    description:
      "Nearly two decades of experience building AI-driven platforms and enterprise applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
