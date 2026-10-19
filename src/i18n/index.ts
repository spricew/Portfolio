import en from "./en";
import es from "./es";

export type Lang = "en" | "es";
export type TranslationKey = keyof typeof en;

const translations = { en, es } as const;

export { translations };
