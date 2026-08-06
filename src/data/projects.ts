export interface Project {
  id: number;
  title: string;
  description: string;
  /** Máximo de 4 tags — acima disso a lista quebra em 3 linhas e desalinha os títulos dos cards. */
  tags: string[];
  image: string;
  /** Ausente quando não há versão pública navegável. */
  liveUrl?: string;
  /** Ausente quando o repositório é privado — o card exibe o selo "PRIVADO". */
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Gabarita",
    description:
      "Banco de questões para provas de residência médica: ingestão de provas em PDF, estudo com repetição espaçada e painel de revisão com caderno de erros e geração de questões por IA.",
    tags: ["NEXT.JS", "PRISMA", "PG-BOSS", "IA"],
    image: "/projetos/gabarita.webp",
  },
  {
    id: 2,
    title: "Ally-AI",
    description:
      "Plataforma SaaS de auditoria que usa inteligência artificial para converter violações de acessibilidade em sugestões de código práticas e acionáveis em tempo real.",
    tags: ["NEXT.JS", "NODE.JS", "TAILWIND", "FULL-STACK"],
    image: "/projetos/ally-ai.webp",
    liveUrl: "https://ally-ai-web.vercel.app",
  },
  {
    id: 3,
    title: "Flowboard",
    description:
      "Board colaborativo em tempo real via WebSocket, com testes end-to-end validando a sincronização entre dois usuários simultâneos.",
    tags: ["NEXT.JS", "FASTIFY", "WEBSOCKET", "PLAYWRIGHT"],
    image: "/projetos/flowboard.webp",
    codeUrl: "https://github.com/VncS1/flowboard",
  },
  {
    id: 4,
    title: "Slotly",
    description:
      "Plataforma completa de agendamento com gestão de horários e painel administrativo.",
    tags: ["REACT", "LARAVEL", "TAILWIND", "FULL-STACK"],
    image: "/projetos/slotly.webp",
    codeUrl: "https://github.com/VncS1/slotly",
  },
  {
    id: 5,
    title: "PUC Minas Poços",
    description:
      "Desenvolvimento do novo website institucional da universidade com foco em performance.",
    tags: ["FRONT-END", "UI/UX", "WEB"],
    image: "/projetos/puc.webp",
    liveUrl: "https://www.pucpcaldas.br",
  },
  {
    id: 6,
    title: "Viaja + Chris Dashboard",
    description:
      "CRM customizado para agência de viagens com gestão de leads, status e métricas.",
    tags: ["NEXT.JS", "TAILWIND 4", "PRISMA"],
    image: "/projetos/viaja-chris.webp",
    liveUrl: "https://viajamaiscomchris.com.br",
  },
];
