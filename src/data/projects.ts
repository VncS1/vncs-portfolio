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
      "Banco de questões para provas de residência médica: ingestão de provas em PDF, estudo com repetição espaçada e painel de revisão com caderno de erros, além de geração de questões por IA com processamento em background via pg-boss.",
    tags: ["NEXT.JS", "PRISMA", "POSTGRESQL", "PG-BOSS"],
    image: "/projetos/gabarita.webp",
    liveUrl: "https://gabaritamed.com",
  },
  {
    id: 2,
    title: "Ally-AI",
    description:
      "SaaS de auditoria de acessibilidade: motor sobre Chrome headless com Puppeteer e axe-core aponta falhas de contraste, ARIA e foco de teclado (WCAG 2.1), e o Gemini converte cada violação em correção concreta de código. Monorepo Turborepo, créditos via Stripe e atualizações em tempo real com Socket.io.",
    tags: ["NEXT.JS", "NODE.JS", "PUPPETEER", "GEMINI API"],
    image: "/projetos/ally-ai.webp",
    codeUrl: "https://github.com/viniciusmachioni/ally-ai",
  },
  {
    id: 3,
    title: "Flowboard",
    description:
      "Board colaborativo com sincronização via WebSocket entre usuários editando o mesmo board ao mesmo tempo, e testes end-to-end em Playwright validando a consistência do estado com duas sessões concorrentes.",
    tags: ["NEXT.JS", "FASTIFY", "WEBSOCKET", "PLAYWRIGHT"],
    image: "/projetos/flowboard.webp",
    codeUrl: "https://github.com/viniciusmachioni/flowboard",
  },
  {
    id: 4,
    title: "Slotly",
    description:
      "Motor de agendamento que calcula a disponibilidade no servidor e impede double booking em tempo real, convertendo o UTC do servidor para o timezone local do usuário. SPA em React com TanStack Router e Query, validação com Zod e componentes acessíveis com Radix UI.",
    tags: ["REACT", "TANSTACK", "ZOD", "LARAVEL"],
    image: "/projetos/slotly.webp",
    codeUrl: "https://github.com/viniciusmachioni/slotly",
  },
  {
    id: 5,
    title: "PUC Minas Poços",
    description:
      "Reestruturação do portal institucional da universidade, hoje no ar e em uso por alunos, professores e candidatos: LCP das páginas principais abaixo de 2s com lazy loading e revisão da estratégia de renderização, sobre uma base de componentes reutilizáveis adotada pelo time.",
    tags: ["REACT", "TYPESCRIPT", "TAILWIND", "GITLAB CI/CD"],
    image: "/projetos/puc.webp",
    liveUrl: "https://www.pucpcaldas.br",
  },
  {
    id: 6,
    title: "Viaja + Chris Dashboard",
    description:
      "CRM em produção para agência de viagens, construído e entregue para cliente pagante: gestão de leads, controle de status e painel de métricas.",
    tags: ["NEXT.JS", "PRISMA", "TAILWIND"],
    image: "/projetos/viaja-chris.webp",
    liveUrl: "https://viajamaiscomchris.com.br",
  },
];
