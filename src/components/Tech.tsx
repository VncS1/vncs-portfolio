"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { arsenalIcons } from "@/data/tech-icons";

/** Ícone outline 24x24 compartilhado por todos os grupos de habilidades. */
function SkillIcon({ d }: { d: string }) {
  return (
    <svg
      aria-hidden="true"
      className="w-8 h-8 text-primary"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
    </svg>
  );
}

export function Tech() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="tech" className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter mb-2 text-text-main">
            {t.tech.heading}
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.tech.arsenals.map((arsenal, index) => (
            <div
              key={arsenal.category}
              className="p-8 rounded-xl bg-background border border-white/5 hover:border-primary/40 transition-all duration-300 group shadow-lg shadow-black/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <SkillIcon d={arsenalIcons[index]} />
                </div>
                <h3 className="text-xl font-headline font-bold text-text-main">
                  {arsenal.category}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {arsenal.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 rounded bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-wider"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
