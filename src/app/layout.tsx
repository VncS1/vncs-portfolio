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

  title: "Vinicius Machioni | Desenvolvedor Full-Stack",
  description:
    "Desenvolvedor Full Stack focado em arquitetar ecossistemas escaláveis e interfaces de alta performance utilizando React, Next.js, Node.js e Laravel.",
  keywords: [
    "Desenvolvedor Full Stack",
    "Engenheiro de Software",
    "React",
    "Next.js",
    "Laravel",
    "Node.js",
    "TypeScript",
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
    title: "Vinicius Machioni | Desenvolvedor Full-Stack",
    description:
      "Desenvolvedor Full Stack focado em arquitetar ecossistemas escaláveis e interfaces de alta performance utilizando React, Next.js, Node.js e Laravel.",
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
    title: "Vinicius Machioni | Full-Stack Architect",
    description:
      "Desenvolvedor Full Stack focado em arquitetar ecossistemas escaláveis.",
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
