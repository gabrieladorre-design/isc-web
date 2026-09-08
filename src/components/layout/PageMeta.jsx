// src/components/layout/PageMeta.jsx
// ───────────────────────────────────────────────────────────────────────────
// Título y descripción de cada página, para Google y para la pestaña del
// navegador.
//
// Esta web es una SPA (una sola página que cambia de contenido sin recargar).
// Sin este componente, todas las rutas comparten el título del index.html, y
// entonces Google se inventa los nombres de los enlaces que enseña debajo del
// resultado de búsqueda. Aquí cada ruta recibe el nombre EXACTO que tiene en
// el menú (src/data/seo.js), en el idioma activo.
//
// No pinta nada: solo actualiza la cabecera del documento.
// ───────────────────────────────────────────────────────────────────────────
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useI18n } from "@/i18n";
import { getPageMeta, SITE_URL } from "@/data/seo";

/* Crea la etiqueta si no existe todavía y devuelve el elemento. */
function ensureTag(selector, create) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
}

function setMetaByName(name, content) {
  const el = ensureTag(`meta[name="${name}"]`, () => {
    const tag = document.createElement("meta");
    tag.setAttribute("name", name);
    return tag;
  });
  el.setAttribute("content", content);
}

function setMetaByProperty(property, content) {
  const el = ensureTag(`meta[property="${property}"]`, () => {
    const tag = document.createElement("meta");
    tag.setAttribute("property", property);
    return tag;
  });
  el.setAttribute("content", content);
}

function setCanonical(url) {
  const el = ensureTag('link[rel="canonical"]', () => {
    const tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    return tag;
  });
  el.setAttribute("href", url);
}

export default function PageMeta() {
  const location = useLocation();
  const { lang } = useI18n();

  useEffect(() => {
    const { title, description } = getPageMeta(location.pathname, lang);
    const url = `${SITE_URL}${location.pathname}`;

    document.title = title;
    setMetaByName("description", description);
    setCanonical(url);

    setMetaByProperty("og:title", title);
    setMetaByProperty("og:description", description);
    setMetaByProperty("og:url", url);
    setMetaByProperty("og:locale", lang === "es" ? "es_ES" : "en_GB");

    setMetaByName("twitter:title", title);
    setMetaByName("twitter:description", description);
  }, [location.pathname, lang]);

  return null;
}
