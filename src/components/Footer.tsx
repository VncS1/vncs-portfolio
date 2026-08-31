"use client";

import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/data/nav";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

export function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const currentYear = new Date().getFullYear();

  const socials = [
    { href: CONTACT.github, label: "Github", external: true },
    { href: CONTACT.linkedin, label: "LinkedIn", external: true },
    { href: `mailto:${CONTACT.email}`, label: "Email", external: false },
  ];

  return (
    <footer className="bg-background border-t border-white/5 py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link
          href="/"
          aria-label={t.footer.logoAriaLabel}
          className="flex items-center hover:opacity-80 transition-opacity rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <Image
            src="/logo.png"
            alt="Vinicius Machioni"
            width={120}
            height={40}
            className="max-h-10 w-auto"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        <nav aria-label={t.footer.navAriaLabel}>
          <ul className="flex items-center gap-6 text-sm font-body font-medium text-text-muted">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  {...(social.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="hover:text-primary transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs font-body text-text-muted/80 text-center md:text-right">
          © {currentYear} Vinicius Machioni. Built with precision.
        </p>
      </div>
    </footer>
  );
}
