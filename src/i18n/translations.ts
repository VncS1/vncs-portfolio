import type { Lang } from "@/i18n/LanguageContext";

export interface NavLink {
  href: string;
  label: string;
}

export interface Dictionary {
  skipLink: string;
  languageToggle: {
    groupLabel: string;
  };
  nav: {
    logoAriaLabel: string;
    navAriaLabel: string;
    links: NavLink[];
    cvLabel: string;
    cvSrSuffix: string;
  };
  mobileMenu: {
    openLabel: string;
    closeLabel: string;
    navAriaLabel: string;
  };
  hero: {
    eyebrow: string;
    intro: string;
    cvLabel: string;
    cvSrSuffix: string;
    viewProjects: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
    availability: string;
    highlights: { title: string; body: string }[];
  };
  tech: {
    heading: string;
    arsenals: { category: string; skills: string[] }[];
  };
  projects: {
    heading: string;
    imageAlt: (title: string) => string;
    viewWebsite: string;
    viewWebsiteSrSuffix: (title: string) => string;
    code: string;
    codeSrSuffix: (title: string) => string;
    private: string;
    privateSrSuffix: string;
  };
  contact: {
    headingLines: [string, string];
    availability: string;
    whatsappMessage: string;
    whatsappCta: string;
    whatsappSrSuffix: string;
    emailCta: string;
  };
  footer: {
    navAriaLabel: string;
    logoAriaLabel: string;
  };
  cvPath: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    twitterDescription: string;
    ogLocale: "pt_BR" | "en_US";
  };
}

const availabilityPt =
  "Disponível para vagas 100% remotas, em CLT, PJ ou como contractor.";
const availabilityEn =
  "Available for fully remote positions, as a full-time employee, contractor, or freelancer.";

export const translations: Record<Lang, Dictionary> = {
  pt: {
    skipLink: "Pular para o conteúdo",
    languageToggle: {
      groupLabel: "Selecionar idioma",
    },
    nav: {
      logoAriaLabel: "Vinicius Machioni — ir para o início",
      navAriaLabel: "Navegação principal",
      links: [
        { href: "#about", label: "Sobre" },
        { href: "#tech", label: "Habilidades" },
        { href: "#work", label: "Projetos" },
        { href: "#contact", label: "Contato" },
      ],
      cvLabel: "Currículo",
      cvSrSuffix: " em PDF (abre em nova aba)",
    },
    mobileMenu: {
      openLabel: "Abrir menu de navegação",
      closeLabel: "Fechar menu de navegação",
      navAriaLabel: "Navegação principal",
    },
    hero: {
      eyebrow: "Front-End Engineer",
      intro:
        "Construo interfaces de alta performance e acessíveis com React, Next.js e TypeScript — e desço até a API, o banco e o deploy quando a funcionalidade exige.",
      cvLabel: "Download CV",
      cvSrSuffix: " em PDF (abre em nova aba)",
      viewProjects: "Ver Projetos",
    },
    about: {
      heading: "Sobre",
      paragraphs: [
        "Sou front-end engineer e construo aplicações web em produção desde 2023 com React, Next.js e TypeScript — com foco em performance, acessibilidade e código que outra pessoa consegue manter depois de mim.",
        "Hoje construo o front-end React do IAtrix, plataforma SaaS de gestão integrada a um back-end em C# e .NET, e antes liderei a reestruturação do portal institucional da PUC Minas Poços de Caldas, hoje no ar em pucpcaldas.br.",
        "Não paro na borda do front-end: quando a interface precisa de uma API, de tempo real ou de um modelo de dados que faça sentido, eu construo. É por isso que meus projetos vão de site institucional de universidade a plataforma SaaS com IA e board colaborativo em tempo real.",
        "Me preocupo com acessibilidade não como checklist de auditoria, mas porque interface que exclui usuário é interface quebrada — foi daí que nasceu o Ally-AI.",
        "Bacharel em Ciência da Computação pela PUC Minas, cursando pós-graduação em Arquitetura de Software, Ciência de Dados e Cybersecurity. Português nativo e inglês avançado.",
      ],
      availability: availabilityPt,
      highlights: [
        {
          title: "Front-end com raiz na stack",
          body: "React, Next.js e TypeScript no dia a dia — e Node.js/Fastify, C# e .NET, Laravel, PostgreSQL e tempo real via WebSocket quando a interface precisa que o back-end exista.",
        },
        {
          title: "Produção, não protótipo",
          body: "O IAtrix, o portal institucional da PUC Minas Poços e o CRM da Viaja + Chris estão no ar e em uso hoje.",
        },
        {
          title: "Acessibilidade não é item opcional",
          body: "WCAG 2.1 com axe-core, ARIA, navegação por teclado, leitores de tela e auditoria de contraste dentro do processo de code review.",
        },
        {
          title: "Performance medida, não sentida",
          body: "Na PUC Minas, o LCP das páginas principais caiu para menos de 2 segundos com lazy loading, code splitting e revisão da estratégia de renderização.",
        },
        {
          title: "Testes onde o risco justifica",
          body: "No Flowboard, testes end-to-end com Playwright validam a consistência do estado entre duas sessões editando o mesmo board ao mesmo tempo.",
        },
        {
          title: "IA como ferramenta, não enfeite",
          body: "Geração de questões no Gabarita, conversão de violações de acessibilidade em código no Ally-AI e validação de serviços por foto no IAtrix.",
        },
      ],
    },
    tech: {
      heading: "Habilidades",
      arsenals: [
        {
          category: "Front-end",
          skills: [
            "REACT",
            "NEXT.JS",
            "APP ROUTER",
            "TYPESCRIPT",
            "JAVASCRIPT",
            "TAILWIND",
            "VUE.JS",
            "VITE",
            "ZUSTAND",
            "RADIX UI",
            "TANSTACK",
            "ZOD",
          ],
        },
        {
          category: "Acessibilidade e performance",
          skills: [
            "WCAG 2.1",
            "AXE-CORE",
            "ARIA",
            "NAVEGAÇÃO POR TECLADO",
            "LEITORES DE TELA",
            "CORE WEB VITALS",
            "LCP",
            "CLS",
            "LAZY LOADING",
            "CODE SPLITTING",
          ],
        },
        {
          category: "Back-end e dados",
          skills: [
            "NODE.JS",
            "EXPRESS",
            "FASTIFY",
            "API REST",
            "WEBSOCKETS",
            "PRISMA",
            "C# / .NET",
            "LARAVEL",
            "RUBY ON RAILS",
            "POSTGRESQL",
            "MYSQL",
            "GRAPHQL",
          ],
        },
        {
          category: "Testes e qualidade",
          skills: [
            "PLAYWRIGHT",
            "VITEST",
            "REACT TESTING LIBRARY",
            "END-TO-END",
            "CODE REVIEW",
            "CLEAN CODE",
            "SOLID",
          ],
        },
        {
          category: "DevOps e ferramentas",
          skills: [
            "DOCKER",
            "DOCKER COMPOSE",
            "GIT",
            "GITHUB ACTIONS",
            "GITLAB CI/CD",
            "AWS",
            "GOOGLE CLOUD",
            "AZURE",
            "TURBOREPO",
            "PNPM",
          ],
        },
        {
          category: "Integrações e IA",
          skills: [
            "GEMINI API",
            "CLAUDE CODE",
            "MCP",
            "PUPPETEER",
            "STRIPE",
            "WHATSAPP BUSINESS API",
            "INSTAGRAM API",
            "OAUTH 2.0",
            "FIREBASE",
          ],
        },
      ],
    },
    projects: {
      heading: "Projetos",
      imageAlt: (title) => `Interface do projeto ${title}`,
      viewWebsite: "Ver Website",
      viewWebsiteSrSuffix: (title) => `do projeto ${title} (abre em nova aba)`,
      code: "Código",
      codeSrSuffix: (title) => `do projeto ${title} no GitHub (abre em nova aba)`,
      private: "PRIVADO",
      privateSrSuffix: "— o repositório deste projeto não é público",
    },
    contact: {
      headingLines: ["Pronto para construir", "O Futuro?"],
      availability: availabilityPt,
      whatsappMessage: "Olá, vim pelo seu website e gostaria de conversar",
      whatsappCta: "Vamos conversar!",
      whatsappSrSuffix: " pelo WhatsApp (abre em nova aba)",
      emailCta: "Enviar email",
    },
    footer: {
      navAriaLabel: "Redes e contato",
      logoAriaLabel: "Vinicius Machioni — ir para o início",
    },
    cvPath: "/CV-Vinicius-Machioni-PT.pdf",
    seo: {
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
      twitterDescription:
        "Front-End Engineer com React, Next.js e TypeScript, focado em acessibilidade WCAG 2.1 e performance com Core Web Vitals.",
      ogLocale: "pt_BR",
    },
  },
  en: {
    skipLink: "Skip to content",
    languageToggle: {
      groupLabel: "Select language",
    },
    nav: {
      logoAriaLabel: "Vinicius Machioni — go to homepage",
      navAriaLabel: "Main navigation",
      links: [
        { href: "#about", label: "About" },
        { href: "#tech", label: "Skills" },
        { href: "#work", label: "Projects" },
        { href: "#contact", label: "Contact" },
      ],
      cvLabel: "Resume",
      cvSrSuffix: " (PDF, opens in a new tab)",
    },
    mobileMenu: {
      openLabel: "Open navigation menu",
      closeLabel: "Close navigation menu",
      navAriaLabel: "Main navigation",
    },
    hero: {
      eyebrow: "Front-End Engineer",
      intro:
        "I build high-performance, accessible interfaces with React, Next.js, and TypeScript — and go down to the API, the database, and deployment whenever the functionality demands it.",
      cvLabel: "Download CV",
      cvSrSuffix: " (PDF, opens in a new tab)",
      viewProjects: "View Projects",
    },
    about: {
      heading: "About",
      paragraphs: [
        "I'm a front-end engineer who has been building production web applications since 2023 with React, Next.js, and TypeScript — focused on performance, accessibility, and code someone else can maintain after me.",
        "Today I build the React front-end for IAtrix, a management SaaS platform integrated with a C# and .NET back-end, and before that I led the rebuild of PUC Minas Poços de Caldas' institutional portal, now live at pucpcaldas.br.",
        "I don't stop at the front-end edge: when the interface needs an API, real-time updates, or a data model that makes sense, I build it. That's why my projects range from a university's institutional site to an AI-powered SaaS platform and a real-time collaborative board.",
        "Accessibility matters to me not as an audit checklist, but because an interface that excludes users is a broken interface — that's where Ally-AI came from.",
        "Bachelor's in Computer Science from PUC Minas, currently pursuing a postgraduate degree in Software Architecture, Data Science, and Cybersecurity. Native Portuguese speaker, advanced English.",
      ],
      availability: availabilityEn,
      highlights: [
        {
          title: "Front-end rooted in the full stack",
          body: "React, Next.js, and TypeScript day to day — plus Node.js/Fastify, C# and .NET, Laravel, PostgreSQL, and real-time via WebSocket whenever the interface needs the back-end to exist.",
        },
        {
          title: "Production, not prototype",
          body: "IAtrix, PUC Minas Poços' institutional portal, and the Viaja + Chris CRM are live and in use today.",
        },
        {
          title: "Accessibility isn't optional",
          body: "WCAG 2.1 with axe-core, ARIA, keyboard navigation, screen readers, and contrast audits built into the code review process.",
        },
        {
          title: "Performance measured, not assumed",
          body: "At PUC Minas, the LCP of the main pages dropped to under 2 seconds with lazy loading, code splitting, and a rendering strategy overhaul.",
        },
        {
          title: "Tests where the risk justifies it",
          body: "In Flowboard, end-to-end tests with Playwright validate state consistency between two sessions editing the same board at the same time.",
        },
        {
          title: "AI as a tool, not a gimmick",
          body: "Question generation in Gabarita, turning accessibility violations into code in Ally-AI, and photo-based service validation in IAtrix.",
        },
      ],
    },
    tech: {
      heading: "Skills",
      arsenals: [
        {
          category: "Front-end",
          skills: [
            "REACT",
            "NEXT.JS",
            "APP ROUTER",
            "TYPESCRIPT",
            "JAVASCRIPT",
            "TAILWIND",
            "VUE.JS",
            "VITE",
            "ZUSTAND",
            "RADIX UI",
            "TANSTACK",
            "ZOD",
          ],
        },
        {
          category: "Accessibility & performance",
          skills: [
            "WCAG 2.1",
            "AXE-CORE",
            "ARIA",
            "KEYBOARD NAVIGATION",
            "SCREEN READERS",
            "CORE WEB VITALS",
            "LCP",
            "CLS",
            "LAZY LOADING",
            "CODE SPLITTING",
          ],
        },
        {
          category: "Back-end & data",
          skills: [
            "NODE.JS",
            "EXPRESS",
            "FASTIFY",
            "REST API",
            "WEBSOCKETS",
            "PRISMA",
            "C# / .NET",
            "LARAVEL",
            "RUBY ON RAILS",
            "POSTGRESQL",
            "MYSQL",
            "GRAPHQL",
          ],
        },
        {
          category: "Testing & quality",
          skills: [
            "PLAYWRIGHT",
            "VITEST",
            "REACT TESTING LIBRARY",
            "END-TO-END",
            "CODE REVIEW",
            "CLEAN CODE",
            "SOLID",
          ],
        },
        {
          category: "DevOps & tooling",
          skills: [
            "DOCKER",
            "DOCKER COMPOSE",
            "GIT",
            "GITHUB ACTIONS",
            "GITLAB CI/CD",
            "AWS",
            "GOOGLE CLOUD",
            "AZURE",
            "TURBOREPO",
            "PNPM",
          ],
        },
        {
          category: "Integrations & AI",
          skills: [
            "GEMINI API",
            "CLAUDE CODE",
            "MCP",
            "PUPPETEER",
            "STRIPE",
            "WHATSAPP BUSINESS API",
            "INSTAGRAM API",
            "OAUTH 2.0",
            "FIREBASE",
          ],
        },
      ],
    },
    projects: {
      heading: "Projects",
      imageAlt: (title) => `${title} project interface`,
      viewWebsite: "View Website",
      viewWebsiteSrSuffix: (title) => `for ${title} project (opens in a new tab)`,
      code: "Code",
      codeSrSuffix: (title) => `for ${title} project on GitHub (opens in a new tab)`,
      private: "PRIVATE",
      privateSrSuffix: "— this project's repository is not public",
    },
    contact: {
      headingLines: ["Ready to build", "The Future?"],
      availability: availabilityEn,
      whatsappMessage: "Hi, I found your website and would like to talk",
      whatsappCta: "Let's talk!",
      whatsappSrSuffix: " on WhatsApp (opens in a new tab)",
      emailCta: "Send email",
    },
    footer: {
      navAriaLabel: "Social links and contact",
      logoAriaLabel: "Vinicius Machioni — go to homepage",
    },
    cvPath: "/CV-Vinicius-Machioni-EN.pdf",
    seo: {
      title: "Vinicius Machioni | Front-End Engineer",
      description:
        "Front-End Engineer with React, Next.js, and TypeScript since 2023, focused on WCAG 2.1 accessibility and Core Web Vitals — and full-stack when the feature demands it.",
      keywords: [
        "Front-End Engineer",
        "Front-End Developer",
        "Software Engineer",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Web Accessibility",
        "WCAG 2.1",
        "Core Web Vitals",
        "Full-Stack Developer",
        "Vinicius Machioni",
      ],
      twitterDescription:
        "Front-End Engineer with React, Next.js, and TypeScript, focused on WCAG 2.1 accessibility and performance with Core Web Vitals.",
      ogLocale: "en_US",
    },
  },
};
