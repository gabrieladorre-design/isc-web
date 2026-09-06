// src/components/layout/LanguageSwitcher.jsx
// ───────────────────────────────────────────────────────────────────────────
// Selector de idioma (ES / EN).
//
// Aparece arriba a la derecha del navbar en todas las páginas y, en la página
// de entrada (que no tiene navbar), flotando en la esquina superior derecha.
//
// El idioma inicial lo decide el navegador de quien visita la web; al pulsar
// aquí, la elección se guarda y se respeta en las siguientes visitas.
//
// Props:
//  - variant: "navbar" (por defecto) | "floating"
// ───────────────────────────────────────────────────────────────────────────
import { useI18n, LANGUAGE_LABELS, SUPPORTED_LANGUAGES } from "@/i18n";
import "./LanguageSwitcher.scss";

export default function LanguageSwitcher({ variant = "navbar" }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      className={`lang-switcher lang-switcher--${variant}`}
      role="group"
      aria-label={t("common.changeLanguage")}
    >
      {SUPPORTED_LANGUAGES.map((code) => {
        const label = LANGUAGE_LABELS[code];
        const isActive = code === lang;

        return (
          <button
            key={code}
            type="button"
            className={`lang-switcher__btn ${isActive ? "is-active" : ""}`}
            onClick={() => setLang(code)}
            aria-pressed={isActive}
            aria-label={label.long}
            title={label.long}
            lang={code}
          >
            {label.short}
          </button>
        );
      })}
    </div>
  );
}
