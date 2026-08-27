import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),

  title: "Vinicius Machioni | Front-End Engineer",
  description:
    "Front-End Engineer com React, Next.js e TypeScript desde 2023, focado em acessibilidade WCAG 2.1 e Core Web Vitals — e full-stack quando a funcionalidade exige.",
  keywords: [
    "Front-End Engineer",
    "Desenvolvedor Front-End",
    "Engenheiro de Software",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Acessibilidade Web",
    "WCAG 2.1",
    "Core Web Vitals",
    "Desenvolvedor Full-Stack",
    "Vinicius Machioni",
  ],
  authors: [{ name: "Vinicius Machioni" }],
  creator: "Vinicius Machioni",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://machioni.dev.br",
    title: "Vinicius Machioni | Front-End Engineer",
    description:
      "Front-End Engineer com React, Next.js e TypeScript desde 2023, focado em acessibilidade WCAG 2.1 e Core Web Vitals — e full-stack quando a funcionalidade exige.",
    siteName: "Vinicius Machioni Portfolio",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vinicius Machioni - Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vinicius Machioni | Front-End Engineer",
    description:
      "Front-End Engineer com React, Next.js e TypeScript, focado em acessibilidade WCAG 2.1 e performance com Core Web Vitals.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text-main font-body">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:font-bold focus:text-text-main"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
