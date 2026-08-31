"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

export function About() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter mb-2 text-text-main">
            {t.about.heading}
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 text-text-muted font-body text-base md:text-lg leading-relaxed">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="text-text-main font-medium">{t.about.availability}</p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:content-start">
            {t.about.highlights.map((item) => (
              <li
                key={item.title}
                className="p-6 rounded-xl bg-surface border border-white/5 hover:border-primary/40 transition-colors duration-300"
              >
                <h3 className="font-headline font-bold text-text-main mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted font-body text-sm leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
