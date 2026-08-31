import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { SkipLink } from "@/components/SkipLink";
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

// Metadados estáticos, em português (idioma padrão do site): quem compartilha
// o link — WhatsApp, Twitter, um crawler na primeira visita — nunca carrega
// o localStorage/cookie do visitante, então não há "idioma certo" para servir
// dinamicamente aqui; qualquer estratégia por-request atenderia só a aba do
// próprio visitante recorrente, ao custo de tirar a rota da geração estática.
// Ver [[cv-en-metadata-static]] para o porquê dessa escolha.
const seoPt = translations.pt.seo;
const keywords = Array.from(
  new Set([...seoPt.keywords, ...translations.en.seo.keywords]),
);

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),

  title: seoPt.title,
  description: seoPt.description,
  keywords,
  authors: [{ name: "Vinicius Machioni" }],
  creator: "Vinicius Machioni",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: "https://machioni.dev.br",
    title: seoPt.title,
    description: seoPt.description,
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
    title: seoPt.title,
    description: seoPt.twitterDescription,
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
        <LanguageProvider>
          <SkipLink />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
