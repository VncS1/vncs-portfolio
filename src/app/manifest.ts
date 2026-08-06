import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vinicius Machioni | Front-End Engineer",
    short_name: "Machioni",
    description:
      "Portfólio de Vinicius Machioni, front-end engineer focado em interfaces de alta performance com React, Next.js e TypeScript.",
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
