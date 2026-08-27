/** Ícone outline 24x24 compartilhado por todos os grupos de habilidades. */
function SkillIcon({ d }: { d: string }) {
  return (
    <svg
      aria-hidden="true"
      className="w-8 h-8 text-primary"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
    </svg>
  );
}

export function Tech() {
  const arsenals = [
    {
      category: "Front-end",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
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
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
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
      icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
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
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
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
      icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
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
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
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
  ];

  return (
    <section id="tech" className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter mb-2 text-text-main">
            Habilidades
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {arsenals.map((arsenal) => (
            <div
              key={arsenal.category}
              className="p-8 rounded-xl bg-background border border-white/5 hover:border-primary/40 transition-all duration-300 group shadow-lg shadow-black/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <SkillIcon d={arsenal.icon} />
                </div>
                <h3 className="text-xl font-headline font-bold text-text-main">
                  {arsenal.category}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {arsenal.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 rounded bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-wider"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
