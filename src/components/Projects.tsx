import Image from "next/image";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter mb-2 text-text-main">
            Projetos
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="rounded-xl bg-surface border border-white/5 hover:border-primary/40 transition-all duration-300 group shadow-lg shadow-black/50 flex flex-col overflow-hidden"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-background/50 border-b border-white/5">
                <Image
                  src={project.image}
                  alt={`Interface do projeto ${project.title}`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </div>

              <div className="p-8 flex flex-col flex-1">
                {/* min-h reserva duas linhas de tags para que os títulos
                    alinhem entre cards com 3 e com 4 tags. */}
                <ul className="flex flex-wrap content-start gap-2 mb-6 min-h-[3.75rem]">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="px-3 py-1 rounded bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-wider"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-headline font-bold mb-3 text-text-main group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-text-muted font-body text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:scale-110 transition-transform flex items-center gap-2 text-xs font-bold rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      <svg
                        aria-hidden="true"
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
                      Ver Website
                      <span className="sr-only">
                        do projeto {project.title} (abre em nova aba)
                      </span>
                    </a>
                  )}

                  {project.codeUrl ? (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-text-main hover:scale-110 transition-transform flex items-center gap-2 text-xs font-bold rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      <svg
                        aria-hidden="true"
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
                      <span className="sr-only">
                        do projeto {project.title} no GitHub (abre em nova aba)
                      </span>
                    </a>
                  ) : (
                    <p className="flex items-center gap-2 text-text-muted text-xs font-bold">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      PRIVADO
                      <span className="sr-only">
                        — o repositório deste projeto não é público
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
