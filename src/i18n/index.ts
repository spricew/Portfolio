import en from "./en";
import es from "./es";

export type Lang = "en" | "es";
export type TranslationKey = keyof typeof en;

const translations = { en, es } as const;

const STORAGE_KEY = "lang";

function getStoredLang(): Lang {
  if (typeof localStorage === "undefined") return "en";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "es" || stored === "en") return stored;
  return "en";
}

let currentLang: Lang = "en";

export function t(key: TranslationKey): string {
  return translations[currentLang][key] ?? key;
}

export function getLang(): Lang {
  return currentLang;
}

export function setLang(lang: Lang) {
  currentLang = lang;
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(STORAGE_KEY, lang);
  }
  document.documentElement.lang = lang;
  window.dispatchEvent(new CustomEvent("lang-change", { detail: { lang } }));
}

export function initLang() {
  currentLang = getStoredLang();
  document.documentElement.lang = currentLang;
}

export { translations };
