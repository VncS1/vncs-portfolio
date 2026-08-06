export function About() {
  const highlights = [
    {
      title: "Front-end com raiz na stack",
      body: "React, Next.js e TypeScript no dia a dia — e Node.js/Fastify, Laravel, PostgreSQL e tempo real via WebSocket quando a interface precisa que o back-end exista.",
    },
    {
      title: "Produção, não protótipo",
      body: "Website institucional da PUC Minas Poços e o CRM da Viaja + Chris estão no ar e em uso hoje.",
    },
    {
      title: "Testes onde o risco justifica",
      body: "No Flowboard, testes end-to-end com Playwright validam a sincronização entre dois usuários simultâneos.",
    },
    {
      title: "IA como ferramenta, não enfeite",
      body: "Geração e revisão de questões no Gabarita e conversão de violações de acessibilidade em código no Ally-AI.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter mb-2 text-text-main">
            Sobre
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 text-text-muted font-body text-base md:text-lg leading-relaxed">
            <p>
              Sou front-end engineer e desde 2023 trabalho
              profissionalmente construindo interfaces web — com foco em
              performance, acessibilidade e código que outra pessoa consegue
              manter depois de mim.
            </p>
            <p>
              Não paro na borda do front-end: quando a interface precisa de uma
              API, de tempo real ou de um modelo de dados que faça sentido, eu
              construo. É por isso que meus projetos vão de site institucional de
              universidade a plataforma SaaS com IA e board colaborativo em tempo
              real.
            </p>
            <p>
              Me preocupo com acessibilidade não como checklist de auditoria, mas
              porque interface que exclui usuário é interface quebrada — foi daí
              que nasceu o Ally-AI.
            </p>
            <p className="text-text-main font-medium">
              Atualmente aberto a oportunidades full-time e projetos freelance.
            </p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:content-start">
            {highlights.map((item) => (
              <li
                key={item.title}
                className="p-6 rounded-xl bg-surface border border-white/5 hover:border-primary/40 transition-colors duration-300"
              >
                <h3 className="font-headline font-bold text-text-main mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted font-body text-sm leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
