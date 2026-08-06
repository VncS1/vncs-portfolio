import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";
import { CV_PATH, navLinks } from "@/data/nav";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-white/5 shadow-[0_10px_30px_-15px_var(--color-primary)]">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 h-20 flex items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Vinicius Machioni — ir para o início"
          className="flex items-center hover:opacity-80 transition-opacity rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <Image
            src="/logo.png"
            alt="Vinicius Machioni"
            width={120}
            height={40}
            className="max-h-10 w-auto"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-8 text-sm font-body font-medium text-text-muted"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_var(--color-primary)] rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CV_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-text-main px-4 sm:px-6 py-2.5 rounded-md text-sm font-body font-medium hover:bg-secondary transition-colors shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_var(--color-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Currículo
            <span className="sr-only"> em PDF (abre em nova aba)</span>
          </a>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
