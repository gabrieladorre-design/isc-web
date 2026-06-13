// src/data/articles.js
// ───────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE DATOS — Newsletters / Actualidad (Coche + Moto).
// Cada disciplina tiene su propia lista. Para añadir una newsletter, importa
// su portada y su PDF arriba y añade un objeto al array correspondiente.
//
// Campos: { id, year, month, cover, file }
// ───────────────────────────────────────────────────────────────────────────

import coverDic from "@/assets/articulos/cover-dic.png";
import pdfDic from "@/assets/articulos/newsletter-dic.pdf";

export const formulaNewsletters = [
  {
    id: 1,
    year: "2024-2025",
    month: "DICIEMBRE",
    cover: coverDic,
    file: pdfDic,
  },
  // Puedes ir añadiendo más aquí copiando el bloque de arriba
];

export const motoNewsletters = [
  {
    id: 1,
    year: "Temporada 2025-2026",
    month: "DICIEMBRE",
    cover: coverDic, // Puedes poner una foto de una moto en el futuro
    file: pdfDic,
  },
  // Puedes ir añadiendo más meses aquí
];
