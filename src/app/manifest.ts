import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vinicius Machioni | Front-End Engineer",
    short_name: "Machioni",
    description:
      "Portfólio de Vinicius Machioni, front-end engineer com React, Next.js e TypeScript, focado em acessibilidade WCAG 2.1 e performance.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
