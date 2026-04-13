import Image from "next/image";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Slotly",
      description:
        "Plataforma completa de agendamento com gestão de horários e painel administrativo.",
      tags: ["REACT", "LARAVEL", "TAILWIND", "FULL-STACK"],
      image: "/projetos/slotly.png",
      isOnWeb: "",
      liveUrl: "#",
      isPrivate: false,
      codeUrl: "https://github.com/VncS1/slotly",
    },
    {
      id: 2,
      title: "Viaja + Chris Dashboard",
      description:
        "CRM customizado para agência de viagens com gestão de leads, status e métricas.",
      tags: ["NEXT.JS", "TAILWIND 4", "PRISMA"],
      image: "/projetos/viaja-chris.jpeg",
      isOnWeb: "",
      liveUrl: "#",
      isPrivate: true,
      codeUrl: "#",
    },
    {
      id: 3,
      title: "PUC Minas Poços",
      description:
        "Desenvolvimento do novo website institucional da universidade com foco em performance.",
      tags: ["FRONT-END", "UI/UX", "WEB"],
      image: "/projetos/puc.png",
      isOnWeb: true,
      liveUrl: "www.pucpcaldas.br",
      isPrivate: true,
      codeUrl: "#",
    },
    {
      id: 4,
      title: "Accessible Web",
      description:
        "Extensão para Google Chrome focada em avaliar e garantir a acessibilidade de websites.",
      tags: ["REACT", "CHROME EXT", "AXE-CORE", "JAVASCRIPT"],
      image: "/projetos/accessible-web.png",
      isOnWeb: "",
      liveUrl: "#",
      isPrivate: false,
      codeUrl: "https://github.com/VncS1/accessible-web",
    },
    {
      id: 5,
      title: "Formulário com Testes Automatizados",
      description:
        "Desenvolvimento de um formulário para estudos em testes automatizados com Vitest e React Testing Library",
      tags: ["REACT", "VITEST", "REACT TESTING LIBRARY"],
      image: "/projetos/vitest.png",
      isOnWeb: false,
      liveUrl: "",
      isPrivate: false,
      codeUrl: "https://github.com/VncS1/vitest-form",
    },
  ];

  return (
    <section id="work" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter mb-2 text-text-main">
              Featured Creations
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl bg-surface border border-white/5 hover:border-primary/40 transition-all duration-300 group shadow-lg shadow-black/50 flex flex-col overflow-hidden"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-background/50 border-b border-white/5">
                <div className="absolute inset-0 flex items-center justify-center text-text-muted/20 font-headline font-bold text-xl">
                  {project.title}
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded bg-primary/10 border border-primary/30 text-primary text-[10px] font-bold tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-headline font-bold mb-3 text-text-main group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-text-muted font-body text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  <div className="flex gap-4">
                    {project.isOnWeb ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        className="text-primary hover:scale-110 transition-transform flex items-center gap-2 text-xs font-bold"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        LIVE
                      </a>
                    ) : (
                      <></>
                    )}

                    {project.isPrivate ? (
                      <div
                        className="flex items-center gap-2 text-text-muted/40 cursor-not-allowed text-xs font-bold"
                        title="Este repositório é privado"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                        PRIVADO
                      </div>
                    ) : (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        className="text-text-muted hover:text-text-main hover:scale-110 transition-transform flex items-center gap-2 text-xs font-bold"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                        Código
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
