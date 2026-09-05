import { translations, type Lang, type TranslationKey } from "../i18n";

const STORAGE_KEY = "lang";

function getStoredLang(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "es" || stored === "en") return stored;
  return "en";
}

function t(key: TranslationKey, lang: Lang): string {
  return translations[lang][key] ?? key;
}

function applyTranslations(lang: Lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n as TranslationKey;
    const html = t(key, lang);

    if (el.dataset.i18nHtml === "true") {
      el.innerHTML = html.replace(/<highlight>(.*?)<\/highlight>/g, '<span class="highlight">$1</span>');
    } else {
      el.textContent = html;
    }
  });

  document.querySelectorAll<HTMLAnchorElement>("[data-i18n-href]").forEach((el) => {
    const key = el.dataset.i18nHref as TranslationKey;
    el.href = t(key, lang);
  });

  document.querySelectorAll<HTMLMetaElement>('meta[name="description"]').forEach((el) => {
    el.content = t("metaDescription", lang);
  });

  document.title = lang === "es"
    ? "Heyder Medina - Portafolio"
    : "Heyder Medina - Portfolio";

  document.querySelectorAll<HTMLElement>("[data-lang-active]").forEach((el) => {
    el.dataset.langActive = el.dataset.langValue === lang ? "true" : "false";
  });
}

function setLang(lang: Lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  applyTranslations(lang);
  window.dispatchEvent(new CustomEvent("lang-change", { detail: { lang } }));
}

function initLang() {
  const lang = getStoredLang();
  applyTranslations(lang);

  document.querySelectorAll<HTMLButtonElement>("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const newLang = btn.dataset.langBtn as Lang;
      if (newLang) setLang(newLang);
    });
  });

  document.querySelectorAll<HTMLButtonElement>("[data-lang-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const current = getStoredLang();
      setLang(current === "en" ? "es" : "en");
    });
  });
}

document.addEventListener("DOMContentLoaded", initLang);
