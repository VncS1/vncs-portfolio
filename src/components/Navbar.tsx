import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-white/5 shadow-[0_10px_30px_-15px_var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="max-h-10 w-auto"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-body font-medium text-text-muted">
          <Link href="#" className="text-text-main relative group">
            Sobre
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary shadow-[0_0_12px_2px_var(--color-primary)] rounded-full"></span>
          </Link>

          <Link
            href="#tech"
            className="hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_var(--color-primary)]"
          >
            Habilidades
          </Link>
          <Link
            href="#work"
            className="hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_var(--color-primary)]"
          >
            Projetos
          </Link>
          <Link
            href="#contact"
            className="hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_var(--color-primary)]"
          >
            Contato
          </Link>
        </div>

        <a
          href="/CV-Vinicius-Desenvolvedor-Frontend-React.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-text-main px-6 py-2.5 rounded-md text-sm font-body font-medium hover:bg-secondary transition-colors shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_var(--color-primary)]"
        >
          Currículo
        </a>
      </div>
    </nav>
  );
}
