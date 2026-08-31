"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  return (
    <div
      role="group"
      aria-label={t.languageToggle.groupLabel}
      className={`inline-flex items-center rounded-md border border-white/10 bg-surface/50 p-0.5 text-xs font-body font-bold ${className}`}
    >
      <button
        type="button"
        onClick={() => setLang("pt")}
        aria-pressed={lang === "pt"}
        className={`px-2.5 py-1.5 rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
          lang === "pt"
            ? "bg-primary text-text-main"
            : "text-text-muted hover:text-text-main"
        }`}
      >
        PT-BR
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-2.5 py-1.5 rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
          lang === "en"
            ? "bg-primary text-text-main"
            : "text-text-muted hover:text-text-main"
        }`}
      >
        EN-US
      </button>
    </div>
  );
}
