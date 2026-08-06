import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vinicius Machioni | Desenvolvedor Full-Stack",
    short_name: "Machioni",
    description:
      "Portfólio de Vinicius Machioni, desenvolvedor full-stack focado em React, Next.js, Node.js e Laravel.",
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
