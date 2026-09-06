// src/i18n/config.js
// ───────────────────────────────────────────────────────────────────────────
// Configuración del sistema de idiomas de la web.
//
// - El idioma por defecto es el del navegador de quien visita la web.
// - Si el navegador está en español  → la web se muestra en español.
// - Si el navegador está en inglés   → la web se muestra en inglés.
// - Si el navegador está en cualquier otro idioma → inglés (idioma internacional).
// - Si la persona elige un idioma con el botón, esa elección se guarda en el
//   navegador (localStorage) y tiene prioridad sobre la detección automática.
//
// Para añadir un idioma nuevo en el futuro:
//   1. Añádelo a SUPPORTED_LANGUAGES y a LANGUAGE_LABELS (aquí abajo).
//   2. Crea src/i18n/dictionaries/<código>.jsx copiando es.jsx y traduciéndolo.
//   3. Regístralo en src/i18n/dictionaries/index.js.
//   4. Añade el campo del idioma en los textos de src/data/*.js.
// ───────────────────────────────────────────────────────────────────────────

/* Idiomas disponibles en la web (el primero es el de referencia). */
export const SUPPORTED_LANGUAGES = ["es", "en"];

/* Idioma de reserva si un texto no estuviera traducido. */
export const FALLBACK_LANGUAGE = "es";

/* Idioma que se usa cuando el navegador no está en ninguno de los soportados. */
export const INTERNATIONAL_LANGUAGE = "en";

/* Cómo se muestra cada idioma en el botón selector. */
export const LANGUAGE_LABELS = {
  es: { short: "ES", long: "Español", flag: "🇪🇸" },
  en: { short: "EN", long: "English", flag: "🇬🇧" },
};

/* Clave con la que se guarda la elección de idioma en el navegador. */
export const STORAGE_KEY = "isc-lang";

/**
 * Comprueba si un código de idioma está soportado.
 */
export function isSupported(lang) {
  return SUPPORTED_LANGUAGES.includes(lang);
}

/**
 * Detecta el idioma del navegador de quien visita la web.
 * Recorre navigator.languages (por orden de preferencia del usuario) y se queda
 * con el primer idioma que tengamos traducido. Ejemplos:
 *   "es-ES", "es-419", "es" → "es"
 *   "en-GB", "en-US", "en"  → "en"
 *   "fr-FR", "de", "pt-BR"  → "en" (idioma internacional)
 */
export function detectBrowserLanguage() {
  if (typeof navigator === "undefined") return FALLBACK_LANGUAGE;

  const candidates = [
    ...(Array.isArray(navigator.languages) ? navigator.languages : []),
    navigator.language,
    navigator.userLanguage,
  ].filter(Boolean);

  for (const candidate of candidates) {
    const base = String(candidate).toLowerCase().split("-")[0];
    if (isSupported(base)) return base;
  }

  return INTERNATIONAL_LANGUAGE;
}

/**
 * Lee el idioma que la persona eligió a mano en una visita anterior.
 * Devuelve null si no hay nada guardado (o si el navegador bloquea el almacenamiento).
 */
export function readStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isSupported(stored) ? stored : null;
  } catch {
    return null;
  }
}

/**
 * Guarda la elección de idioma para las próximas visitas.
 */
export function storeLanguage(lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* Navegación privada o cookies bloqueadas: seguimos sin guardar. */
  }
}

/**
 * Idioma con el que arranca la web: primero la elección guardada, si no la
 * detección automática del navegador.
 */
export function getInitialLanguage() {
  return readStoredLanguage() ?? detectBrowserLanguage();
}
