// src/i18n/LanguageProvider.jsx
// ───────────────────────────────────────────────────────────────────────────
// Envuelve toda la aplicación y le da a cualquier componente:
//   - lang:      el idioma activo ("es" | "en")
//   - setLang:   función para cambiarlo (la usa el botón del navbar)
//   - t(ruta):   texto traducido del diccionario, p. ej. t("home.whoTitle")
//   - tx(valor): texto traducido de los archivos de datos, p. ej. tx(item.text)
// ───────────────────────────────────────────────────────────────────────────
import { useCallback, useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./context";
import { dictionaries } from "./dictionaries";
import {
  FALLBACK_LANGUAGE,
  getInitialLanguage,
  isSupported,
  storeLanguage,
} from "./config";

/**
 * Busca un valor dentro de un objeto usando una ruta con puntos.
 * resolvePath({ home: { title: "Hola" } }, "home.title") → "Hola"
 */
function resolvePath(source, path) {
  return String(path)
    .split(".")
    .reduce((acc, key) => (acc == null ? undefined : acc[key]), source);
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLanguage);

  /* Mantiene sincronizado el atributo lang del <html>: ayuda al SEO, a los
     lectores de pantalla y al traductor automático del navegador. */
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((nextLang) => {
    if (!isSupported(nextLang)) return;
    storeLanguage(nextLang);
    setLangState(nextLang);
  }, []);

  /**
   * t("clave.anidada") → texto del diccionario en el idioma activo.
   * Si falta la traducción, cae al idioma de reserva; si tampoco existe,
   * devuelve la propia clave para que el hueco sea fácil de detectar.
   */
  const t = useCallback(
    (path) => {
      const value = resolvePath(dictionaries[lang], path);
      if (value !== undefined) return value;

      const fallback = resolvePath(dictionaries[FALLBACK_LANGUAGE], path);
      return fallback !== undefined ? fallback : path;
    },
    [lang]
  );

  /**
   * tx(valor) → traduce los textos que viven en los archivos de datos, donde
   * cada texto es un objeto { es: "...", en: "..." }.
   * Si le llega un texto suelto (una cadena normal), lo devuelve tal cual, así
   * que es seguro usarlo con cualquier campo.
   */
  const tx = useCallback(
    (value) => {
      if (value == null) return value;
      if (typeof value !== "object") return value;
      if (Array.isArray(value)) return value;
      if (value.$$typeof) return value; // ya es un elemento JSX

      if (value[lang] !== undefined) return value[lang];
      if (value[FALLBACK_LANGUAGE] !== undefined) return value[FALLBACK_LANGUAGE];
      return value;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t, tx }), [lang, setLang, t, tx]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export default LanguageProvider;
