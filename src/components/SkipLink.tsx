"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

export function SkipLink() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:font-bold focus:text-text-main"
    >
      {t.skipLink}
    </a>
  );
}
