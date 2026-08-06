"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/nav";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        className="flex items-center justify-center w-11 h-11 -mr-2 rounded-md text-text-muted hover:text-text-main transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <svg
          aria-hidden="true"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/*
        Posicionamento absoluto (não fixed) de propósito: o <header> pai usa
        backdrop-blur, e backdrop-filter torna o elemento containing block dos
        descendentes fixed — um painel fixed resolveria top/bottom contra o
        header de 80px e colapsaria para altura zero.
      */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute top-full inset-x-0 h-[calc(100dvh-5rem)] overflow-y-auto bg-background border-t border-white/5"
      >
        <nav aria-label="Navegação principal" className="px-6 py-8">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-lg font-body font-medium text-text-muted hover:text-primary transition-colors border-b border-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
