// src/components/layout/LanguageSwitcher.jsx
// ───────────────────────────────────────────────────────────────────────────
// Selector de idioma (ES / EN) — menú desplegable.
//
// Aparece arriba a la derecha del navbar en todas las páginas y, en la página
// de entrada (que no tiene navbar), flotando en la esquina superior derecha.
//
// A diferencia de la versión anterior (dos pastillas ES y EN siempre visibles),
// ahora solo se muestra el idioma activo. Al pulsar se abre una lista con todos
// los idiomas disponibles y se elige uno.
//
// El idioma inicial lo decide el navegador de quien visita la web; al elegir
// aquí, la elección se guarda y se respeta en las siguientes visitas.
//
// El menú se cierra al elegir un idioma, al pulsar fuera y al pulsar Escape.
//
// Props:
//  - variant: "navbar" (por defecto) | "floating"
// ───────────────────────────────────────────────────────────────────────────
import { useEffect, useRef, useState } from "react";
import { useI18n, LANGUAGE_LABELS, SUPPORTED_LANGUAGES } from "@/i18n";
import "./LanguageSwitcher.scss";

export default function LanguageSwitcher({ variant = "navbar" }) {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);

  const activeLabel = LANGUAGE_LABELS[lang];

  /* Cierra el menú al pulsar fuera del selector */
  useEffect(() => {
    if (!open) return;

    const handleOutside = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [open]);

  /* Cierra el menú con la tecla Escape y devuelve el foco al botón */
  useEffect(() => {
    if (!open) return;

    const handleKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  const choose = (code) => {
    setLang(code);
    setOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <div
      ref={rootRef}
      className={`lang-switcher lang-switcher--${variant} ${open ? "is-open" : ""}`}
    >
      <button
        ref={buttonRef}
        type="button"
        className="lang-switcher__toggle"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("common.changeLanguage")}
        title={t("common.changeLanguage")}
      >
        <span className="lang-switcher__flag" aria-hidden="true">
          {activeLabel.flag}
        </span>
        <span className="lang-switcher__code">{activeLabel.short}</span>
        <span className="lang-switcher__caret" aria-hidden="true">
          ▾
        </span>
      </button>

      {open && (
        <ul
          className="lang-switcher__menu"
          role="listbox"
          aria-label={t("common.changeLanguage")}
        >
          {SUPPORTED_LANGUAGES.map((code) => {
            const label = LANGUAGE_LABELS[code];
            const isActive = code === lang;

            return (
              <li key={code} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  className={`lang-switcher__option ${isActive ? "is-active" : ""}`}
                  onClick={() => choose(code)}
                  lang={code}
                >
                  <span className="lang-switcher__flag" aria-hidden="true">
                    {label.flag}
                  </span>
                  <span className="lang-switcher__name">{label.long}</span>
                  <span className="lang-switcher__code">{label.short}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
