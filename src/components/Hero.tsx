import Image from "next/image";
import { CV_PATH } from "@/data/nav";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-32 lg:pt-20 lg:pb-0">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_70%)] pointer-events-none"
      ></div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <div className="order-2 md:order-1">
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4 block font-bold">
            Front-End Engineer
          </span>

          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-6 leading-tight text-text-main">
            Vinicius <br />
            <span className="text-primary typewriter-cursor">Machioni</span>
          </h1>

          <p className="text-text-muted font-body text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Construindo interfaces de alta performance: a união entre a
            estrutura brutalista e a precisão de alta tecnologia.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={CV_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-text-main px-8 py-4 font-body font-bold rounded-lg shadow-[0_0_32px_rgba(139,92,246,0.2)] hover:scale-105 transition-transform flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download CV
              <span className="sr-only"> em PDF (abre em nova aba)</span>
            </a>
            <a
              href="#work"
              className="bg-surface text-text-muted px-8 py-4 font-body font-bold rounded-lg border border-white/10 hover:bg-white/5 hover:text-text-main transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Ver Projetos
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl bg-primary/20 blur-3xl scale-110"
            ></div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-white/10 p-1.5 bg-surface/50 backdrop-blur-sm">
              <Image
                src="/vinicius-machioni.jpg"
                alt="Vinicius Machioni, Front-End Engineer"
                width={320}
                height={320}
                className="w-full h-full object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
