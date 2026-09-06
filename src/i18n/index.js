// src/i18n/index.js
// Punto de entrada del sistema de idiomas.
export { LanguageProvider } from "./LanguageProvider";
export { useI18n } from "./useI18n";
export { LanguageContext } from "./context";
export {
  SUPPORTED_LANGUAGES,
  FALLBACK_LANGUAGE,
  INTERNATIONAL_LANGUAGE,
  LANGUAGE_LABELS,
  STORAGE_KEY,
  isSupported,
  detectBrowserLanguage,
  readStoredLanguage,
  storeLanguage,
  getInitialLanguage,
} from "./config";
