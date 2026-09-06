// src/data/navigation.js
// ───────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE DATOS — Menús de navegación (Navbar) para Coche y Moto.
// La estructura del menú es idéntica; solo cambian las rutas de cada disciplina.
//
// Campos de cada elemento:
//   label:    texto visible, en los dos idiomas: { es: "...", en: "..." }
//   path:     ruta del enlace (null si solo abre un desplegable)
//   subItems: array de subenlaces { label, path } (null si es enlace simple)
//   aliases:  rutas extra que también "encienden" la pestaña como activa
//
// ───────────────────────────────────────────────────────────────────────────
// ⚠️  NEWSLETTERS / ACTUALIDAD OCULTAS TEMPORALMENTE
//
// La pestaña "Actualidad" (Newsletters) está oculta del menú mientras se
// prepara el contenido. NO se ha borrado nada: la página, los PDFs y las rutas
// siguen existiendo y funcionando.
//
// 👉 PARA VOLVER A MOSTRARLA: cambia la línea de abajo a `true` y guarda.
// ───────────────────────────────────────────────────────────────────────────
export const SHOW_NEWSLETTERS = false;

/* Quita del menú los elementos marcados como ocultos. */
const visible = (items) => items.filter((item) => !item.hidden);

const formulaNavAll = [
  { label: { es: "Inicio", en: "Home" }, path: "/formula", subItems: null },
  {
    label: { es: "Equipo", en: "Team" },
    path: null,
    subItems: [
      { label: { es: "Historia", en: "History" }, path: "/history" },
      { label: { es: "Garaje", en: "Garage" }, path: "/garaje" },
      { label: { es: "Equipo", en: "Team" }, path: "/team" },
    ],
  },
  {
    label: { es: "Competición", en: "Competition" },
    path: null,
    subItems: [
      { label: { es: "Formula Student", en: "Formula Student" }, path: "/formula-student" },
      { label: { es: "Resultados", en: "Results" }, path: "/resultados" },
    ],
  },
  { label: { es: "Patrocinadores", en: "Sponsors" }, path: "/sponsors", subItems: null, aliases: ["/sponsor-us"] },
  { label: { es: "Actualidad", en: "News" }, path: "/articles", subItems: null, hidden: !SHOW_NEWSLETTERS },
  {
    label: { es: "Únete", en: "Join Us" },
    path: null,
    subItems: [
      { label: { es: "Recruitment", en: "Recruitment" }, path: "/recruitment" },
      { label: { es: "Contacto", en: "Contact" }, path: "/contact" },
    ],
  },
];

const motoNavAll = [
  { label: { es: "Inicio", en: "Home" }, path: "/moto", subItems: null },
  {
    label: { es: "Equipo", en: "Team" },
    path: null,
    subItems: [
      { label: { es: "Historia", en: "History" }, path: "/moto/history" },
      { label: { es: "Garaje", en: "Garage" }, path: "/moto/garaje" },
      { label: { es: "Equipo", en: "Team" }, path: "/moto/team" },
    ],
  },
  {
    label: { es: "Competición", en: "Competition" },
    path: null,
    subItems: [
      { label: { es: "MotoStudent", en: "MotoStudent" }, path: "/moto/motostudent" },
      { label: { es: "Resultados", en: "Results" }, path: "/moto/resultados" },
    ],
  },
  { label: { es: "Patrocinadores", en: "Sponsors" }, path: "/moto/sponsors", subItems: null, aliases: ["/moto/sponsor-us"] },
  { label: { es: "Actualidad", en: "News" }, path: "/moto/articles", subItems: null, hidden: !SHOW_NEWSLETTERS },
  {
    label: { es: "Únete", en: "Join Us" },
    path: null,
    subItems: [
      { label: { es: "Recruitment", en: "Recruitment" }, path: "/moto/recruitment" },
      { label: { es: "Contacto", en: "Contact" }, path: "/moto/contact" },
    ],
  },
];

export const formulaNav = visible(formulaNavAll);
export const motoNav = visible(motoNavAll);
