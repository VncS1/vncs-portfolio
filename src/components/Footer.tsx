import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 py-8 md:py-12 md:px-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
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

        <div className="flex items-center gap-6 text-sm font-body font-medium text-text-muted">
          <a
            href="https://github.com/VncS1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Github
          </a>
          <a
            href="https://linkedin.com/in/viniciusmachioni"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="mailto:machioni.dev@gmail.com"
            className="hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>

        <p className="text-xs font-body text-text-muted/60 text-center md:text-right">
          © {currentYear} Vinicius Machioni. Built with precision.
        </p>
      </div>
    </footer>
  );
}
