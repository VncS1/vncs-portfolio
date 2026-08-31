export interface Project {
  id: number;
  title: string;
  description: { pt: string; en: string };
  /** Máximo de 4 tags — acima disso a lista quebra em 3 linhas e desalinha os títulos dos cards. */
  tags: string[];
  image: string;
  /** Ausente quando não há versão pública navegável. */
  liveUrl?: string;
  /** Ausente quando o repositório é privado — o card exibe o selo "PRIVADO"/"PRIVATE". */
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Gabarita",
    description: {
      pt: "Banco de questões para provas de residência médica: ingestão de provas em PDF, estudo com repetição espaçada e painel de revisão com caderno de erros, além de geração de questões por IA com processamento em background via pg-boss.",
      en: "Question bank for medical residency exams: PDF exam ingestion, spaced-repetition study, and a review dashboard with an error notebook, plus AI-generated questions processed in the background via pg-boss.",
    },
    tags: ["NEXT.JS", "PRISMA", "POSTGRESQL", "PG-BOSS"],
    image: "/projetos/gabarita.webp",
    liveUrl: "https://gabaritamed.com",
  },
  {
    id: 2,
    title: "Ally-AI",
    description: {
      pt: "SaaS de auditoria de acessibilidade: motor sobre Chrome headless com Puppeteer e axe-core aponta falhas de contraste, ARIA e foco de teclado (WCAG 2.1), e o Gemini converte cada violação em correção concreta de código. Monorepo Turborepo, créditos via Stripe e atualizações em tempo real com Socket.io.",
      en: "Accessibility audit SaaS: a headless Chrome engine with Puppeteer and axe-core flags contrast, ARIA, and keyboard focus failures (WCAG 2.1), and Gemini turns each violation into a concrete code fix. Turborepo monorepo, credits via Stripe, and real-time updates with Socket.io.",
    },
    tags: ["NEXT.JS", "NODE.JS", "PUPPETEER", "GEMINI API"],
    image: "/projetos/ally-ai.webp",
    codeUrl: "https://github.com/viniciusmachioni/ally-ai",
  },
  {
    id: 3,
    title: "Flowboard",
    description: {
      pt: "Board colaborativo com sincronização via WebSocket entre usuários editando o mesmo board ao mesmo tempo, e testes end-to-end em Playwright validando a consistência do estado com duas sessões concorrentes.",
      en: "Collaborative board with WebSocket sync between users editing the same board at the same time, with Playwright end-to-end tests validating state consistency across two concurrent sessions.",
    },
    tags: ["NEXT.JS", "FASTIFY", "WEBSOCKET", "PLAYWRIGHT"],
    image: "/projetos/flowboard.webp",
    codeUrl: "https://github.com/viniciusmachioni/flowboard",
  },
  {
    id: 4,
    title: "Slotly",
    description: {
      pt: "Motor de agendamento que calcula a disponibilidade no servidor e impede double booking em tempo real, convertendo o UTC do servidor para o timezone local do usuário. SPA em React com TanStack Router e Query, validação com Zod e componentes acessíveis com Radix UI.",
      en: "Scheduling engine that computes availability server-side and prevents double booking in real time, converting the server's UTC to the user's local timezone. React SPA with TanStack Router and Query, Zod validation, and accessible components with Radix UI.",
    },
    tags: ["REACT", "TANSTACK", "ZOD", "LARAVEL"],
    image: "/projetos/slotly.webp",
    codeUrl: "https://github.com/viniciusmachioni/slotly",
  },
  {
    id: 5,
    title: "PUC Minas Poços",
    description: {
      pt: "Reestruturação do portal institucional da universidade, hoje no ar e em uso por alunos, professores e candidatos: LCP das páginas principais abaixo de 2s com lazy loading e revisão da estratégia de renderização, sobre uma base de componentes reutilizáveis adotada pelo time.",
      en: "Rebuild of the university's institutional portal, now live and used by students, faculty, and applicants: main pages' LCP under 2s through lazy loading and a rendering strategy overhaul, built on a reusable component base adopted by the team.",
    },
    tags: ["REACT", "TYPESCRIPT", "TAILWIND", "GITLAB CI/CD"],
    image: "/projetos/puc.webp",
    liveUrl: "https://www.pucpcaldas.br",
  },
  {
    id: 6,
    title: "Viaja + Chris Dashboard",
    description: {
      pt: "CRM em produção para agência de viagens, construído e entregue para cliente pagante: gestão de leads, controle de status e painel de métricas.",
      en: "Production CRM for a travel agency, built and delivered for a paying client: lead management, status tracking, and a metrics dashboard.",
    },
    tags: ["NEXT.JS", "PRISMA", "TAILWIND"],
    image: "/projetos/viaja-chris.webp",
    liveUrl: "https://viajamaiscomchris.com.br",
  },
];
