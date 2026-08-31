"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Lang = "pt" | "en";

const STORAGE_KEY = "lang";

/**
 * Store externo mínimo em cima do localStorage, consumido via
 * useSyncExternalStore — evita setState síncrono dentro de efeito (proibido
 * pelo React Compiler) e mantém o snapshot do servidor ("pt") consistente
 * com o lang="pt-BR" renderizado no HTML inicial, sem gerar mismatch de
 * hidratação.
 */
let cachedLang: Lang | null = null;
const listeners = new Set<() => void>();

function readStoredLang(): Lang {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "pt" || stored === "en" ? stored : "pt";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): Lang {
  if (cachedLang === null) {
    cachedLang = readStoredLang();
  }
  return cachedLang;
}

function getServerSnapshot(): Lang {
  return "pt";
}

function writeLang(next: Lang) {
  cachedLang = next;
  window.localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((listener) => listener());
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en-US";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    writeLang(next);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de LanguageProvider");
  }
  return context;
}
