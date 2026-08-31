"use client";

import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

export function Navbar() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-white/5 shadow-[0_10px_30px_-15px_var(--color-primary)]">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 h-20 flex items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={t.nav.logoAriaLabel}
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
          aria-label={t.nav.navAriaLabel}
          className="hidden md:flex items-center gap-8 text-sm font-body font-medium text-text-muted"
        >
          {t.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_var(--color-primary)] rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle className="hidden md:inline-flex" />

          <a
            href={t.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-text-main px-4 sm:px-6 py-2.5 rounded-md text-sm font-body font-medium hover:bg-secondary transition-colors shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_var(--color-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {t.nav.cvLabel}
            <span className="sr-only">{t.nav.cvSrSuffix}</span>
          </a>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
