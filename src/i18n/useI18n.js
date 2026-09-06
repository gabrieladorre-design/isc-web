// src/i18n/useI18n.js
// Atajo para usar el idioma desde cualquier componente:
//   const { lang, setLang, t, tx } = useI18n();
import { useContext } from "react";
import { LanguageContext } from "./context";

export function useI18n() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useI18n() se ha usado fuera de <LanguageProvider>. " +
        "Comprueba que App.jsx envuelve la aplicación con el proveedor de idioma."
    );
  }

  return context;
}

export default useI18n;
