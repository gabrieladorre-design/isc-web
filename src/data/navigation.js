// src/data/navigation.js
// ───────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE DATOS — Menús de navegación (Navbar) para Coche y Moto.
// La estructura del menú es idéntica; solo cambian las rutas de cada disciplina.
//
// Campos de cada elemento:
//   label:    texto visible
//   path:     ruta del enlace (null si solo abre un desplegable)
//   subItems: array de subenlaces { label, path } (null si es enlace simple)
//   aliases:  rutas extra que también "encienden" la pestaña como activa
// ───────────────────────────────────────────────────────────────────────────

export const formulaNav = [
  { label: "Inicio", path: "/formula", subItems: null },
  {
    label: "Equipo",
    path: null,
    subItems: [
      { label: "Historia", path: "/history" },
      { label: "Garaje", path: "/garaje" },
      { label: "Equipo", path: "/team" },
    ],
  },
  {
    label: "Competición",
    path: null,
    subItems: [
      { label: "Formula Student", path: "/formula-student" },
      { label: "Resultados", path: "/resultados" },
    ],
  },
  { label: "Patrocinadores", path: "/sponsors", subItems: null, aliases: ["/sponsor-us"] },
  { label: "Actualidad", path: "/articles", subItems: null },
  {
    label: "Únete",
    path: null,
    subItems: [
      { label: "Recruitment", path: "/recruitment" },
      { label: "Contacto", path: "/contact" },
    ],
  },
];

export const motoNav = [
  { label: "Inicio", path: "/moto", subItems: null },
  {
    label: "Equipo",
    path: null,
    subItems: [
      { label: "Historia", path: "/moto/history" },
      { label: "Garaje", path: "/moto/garaje" },
      { label: "Equipo", path: "/moto/team" },
    ],
  },
  {
    label: "Competición",
    path: null,
    subItems: [
      { label: "MotoStudent", path: "/moto/motostudent" },
      { label: "Resultados", path: "/moto/resultados" },
    ],
  },
  { label: "Patrocinadores", path: "/moto/sponsors", subItems: null, aliases: ["/moto/sponsor-us"] },
  { label: "Actualidad", path: "/moto/articles", subItems: null },
  {
    label: "Únete",
    path: null,
    subItems: [
      { label: "Recruitment", path: "/moto/recruitment" },
      { label: "Contacto", path: "/moto/contact" },
    ],
  },
];
