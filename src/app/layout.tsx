import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ridgway Networks | Full-Stack Development & Digital Infrastructure",
  description:
    "Professional web development, full-stack applications, and DevOps infrastructure services by Michael Ridgway. Portfolio of production projects built with Next.js, TypeScript, Kubernetes, and modern tech.",
  keywords: [
    "web development",
    "full-stack developer",
    "Next.js",
    "TypeScript",
    "Kubernetes",
    "DevOps",
    "portfolio",
    "software engineer",
    "freelance developer",
  ],
  openGraph: {
    title: "Ridgway Networks",
    description: "Full-Stack Development & Digital Infrastructure",
    url: "https://ridgwaynetworks.com",
    siteName: "Ridgway Networks",
    type: "website",
    locale: "en_AU",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-[family-name:var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
