// src/data/articles.js
// ───────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE DATOS — Newsletters / Actualidad (Coche + Moto).
// Cada disciplina tiene su propia lista con su portada (PNG, 1ª página del
// boletín) y su PDF descargable, en assets/articulos/<coche|moto>/.
//
// Para añadir una newsletter: coloca el PDF y su portada en la carpeta de la
// disciplina, impórtalos arriba y añade un objeto al array correspondiente.
//
// Campos: { id, year, monthIndex, month: { es, en }, cover, file }
//   monthIndex → número del mes (1-12). Se usa para ordenar cronológicamente
//                independientemente del idioma en el que se esté viendo la web.
// ───────────────────────────────────────────────────────────────────────────

/* ===== PORTADAS Y PDFs — COCHE ===== */
import cCover202412 from "@/assets/articulos/coche/2024-12.png";
import cFile202412  from "@/assets/articulos/coche/2024-12.pdf";
import cCover202411 from "@/assets/articulos/coche/2024-11.png";
import cFile202411  from "@/assets/articulos/coche/2024-11.pdf";
import cCover202407 from "@/assets/articulos/coche/2024-07.png";
import cFile202407  from "@/assets/articulos/coche/2024-07.pdf";
import cCover202403 from "@/assets/articulos/coche/2024-03.png";
import cFile202403  from "@/assets/articulos/coche/2024-03.pdf";
import cCover202401 from "@/assets/articulos/coche/2024-01.png";
import cFile202401  from "@/assets/articulos/coche/2024-01.pdf";
import cCover202305 from "@/assets/articulos/coche/2023-05.png";
import cFile202305  from "@/assets/articulos/coche/2023-05.pdf";
import cCover202304 from "@/assets/articulos/coche/2023-04.png";
import cFile202304  from "@/assets/articulos/coche/2023-04.pdf";
import cCover202303 from "@/assets/articulos/coche/2023-03.png";
import cFile202303  from "@/assets/articulos/coche/2023-03.pdf";
import cCover202302 from "@/assets/articulos/coche/2023-02.png";
import cFile202302  from "@/assets/articulos/coche/2023-02.pdf";

/* ===== PORTADAS Y PDFs — MOTO ===== */
import mCover202412 from "@/assets/articulos/moto/2024-12.png";
import mFile202412  from "@/assets/articulos/moto/2024-12.pdf";
import mCover202411 from "@/assets/articulos/moto/2024-11.png";
import mFile202411  from "@/assets/articulos/moto/2024-11.pdf";
import mCover202407 from "@/assets/articulos/moto/2024-07.png";
import mFile202407  from "@/assets/articulos/moto/2024-07.pdf";
import mCover202403 from "@/assets/articulos/moto/2024-03.png";
import mFile202403  from "@/assets/articulos/moto/2024-03.pdf";
import mCover202401 from "@/assets/articulos/moto/2024-01.png";
import mFile202401  from "@/assets/articulos/moto/2024-01.pdf";
import mCover202305 from "@/assets/articulos/moto/2023-05.png";
import mFile202305  from "@/assets/articulos/moto/2023-05.pdf";
import mCover202304 from "@/assets/articulos/moto/2023-04.png";
import mFile202304  from "@/assets/articulos/moto/2023-04.pdf";
import mCover202303 from "@/assets/articulos/moto/2023-03.png";
import mFile202303  from "@/assets/articulos/moto/2023-03.pdf";
import mCover202302 from "@/assets/articulos/moto/2023-02.png";
import mFile202302  from "@/assets/articulos/moto/2023-02.pdf";

export const formulaNewsletters = [
  { id: 1, year: "2024", monthIndex: 12, month: { es: "DICIEMBRE", en: "DECEMBER" }, cover: cCover202412, file: cFile202412 },
  { id: 2, year: "2024", monthIndex: 11, month: { es: "NOVIEMBRE", en: "NOVEMBER" }, cover: cCover202411, file: cFile202411 },
  { id: 3, year: "2024", monthIndex: 7, month: { es: "JULIO", en: "JULY" }, cover: cCover202407, file: cFile202407 },
  { id: 4, year: "2024", monthIndex: 3, month: { es: "MARZO", en: "MARCH" }, cover: cCover202403, file: cFile202403 },
  { id: 5, year: "2024", monthIndex: 1, month: { es: "ENERO", en: "JANUARY" }, cover: cCover202401, file: cFile202401 },
  { id: 6, year: "2023", monthIndex: 5, month: { es: "MAYO", en: "MAY" }, cover: cCover202305, file: cFile202305 },
  { id: 7, year: "2023", monthIndex: 4, month: { es: "ABRIL", en: "APRIL" }, cover: cCover202304, file: cFile202304 },
  { id: 8, year: "2023", monthIndex: 3, month: { es: "MARZO", en: "MARCH" }, cover: cCover202303, file: cFile202303 },
  { id: 9, year: "2023", monthIndex: 2, month: { es: "FEBRERO", en: "FEBRUARY" }, cover: cCover202302, file: cFile202302 },
];

export const motoNewsletters = [
  { id: 1, year: "2024", monthIndex: 12, month: { es: "DICIEMBRE", en: "DECEMBER" }, cover: mCover202412, file: mFile202412 },
  { id: 2, year: "2024", monthIndex: 11, month: { es: "NOVIEMBRE", en: "NOVEMBER" }, cover: mCover202411, file: mFile202411 },
  { id: 3, year: "2024", monthIndex: 7, month: { es: "JULIO", en: "JULY" }, cover: mCover202407, file: mFile202407 },
  { id: 4, year: "2024", monthIndex: 3, month: { es: "MARZO", en: "MARCH" }, cover: mCover202403, file: mFile202403 },
  { id: 5, year: "2024", monthIndex: 1, month: { es: "ENERO", en: "JANUARY" }, cover: mCover202401, file: mFile202401 },
  { id: 6, year: "2023", monthIndex: 5, month: { es: "MAYO", en: "MAY" }, cover: mCover202305, file: mFile202305 },
  { id: 7, year: "2023", monthIndex: 4, month: { es: "ABRIL", en: "APRIL" }, cover: mCover202304, file: mFile202304 },
  { id: 8, year: "2023", monthIndex: 3, month: { es: "MARZO", en: "MARCH" }, cover: mCover202303, file: mFile202303 },
  { id: 9, year: "2023", monthIndex: 2, month: { es: "FEBRERO", en: "FEBRUARY" }, cover: mCover202302, file: mFile202302 },
];
