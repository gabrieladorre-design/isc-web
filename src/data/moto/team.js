// src/data/moto/team.js
// ───────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE DATOS — Equipo / Organigrama de la MOTO (ISC MS Racing Team).
//
//   motoTeamMembers: { name, role, photo, linkedin, tier, category }
//     tier:     "tl" (Team Leader) | "dt" (Directores) | "head" (Jefe de Dpto.)
//     category: "management" | "design" | "powertrain" | "media"
//   motoCategories:  botones de filtro del organigrama { id, label: { es, en } }
//
// Los cargos (role) están en inglés, que es como los usa el equipo en las dos
// versiones de la web. Las etiquetas de los filtros sí van en los dos idiomas.
//
// ⚠️ LINKEDIN
// Quien todavía no tiene perfil personal publicado apunta a `ISC_LINKEDIN_MS`,
// la página del equipo en LinkedIn (src/data/redes.js). Cuando alguien pase su
// perfil, se sustituye ahí su valor por la URL personal.
// ───────────────────────────────────────────────────────────────────────────

import { ISC_LINKEDIN_MS } from "@/data/redes";

/* --- IMPORTACIÓN DE FOTOS --- */
import miguelLuqueImg from "@/assets/MIEMBROS_MOTO/Miguel-Luque.jpg";
import angelSantesmasesImg from "@/assets/MIEMBROS_MOTO/Angel-Santesmases.jpg";
import javierMartinImg from "@/assets/MIEMBROS_MOTO/Javier-Martin.jpg";
import pauJuanAracilImg from "@/assets/MIEMBROS_MOTO/Pau-Juan-Aracil.jpg";
import javierToimilImg from "@/assets/MIEMBROS_MOTO/Javier-Toimil.jpg";

export const motoTeamMembers = [
  // --- TEAM LEADER ---
  { name: "Miguel Luque Camello", role: "Team Leader 2025-2027", photo: miguelLuqueImg, linkedin: ISC_LINKEDIN_MS, tier: "tl", category: "management" },

  // --- DIRECTORES ---
  { name: "Ángel Santesmases Montero", role: "Technical Director", photo: angelSantesmasesImg, linkedin: ISC_LINKEDIN_MS, tier: "dt", category: "management" },
  { name: "Javier Martín López", role: "Media Team Director", photo: javierMartinImg, linkedin: ISC_LINKEDIN_MS, tier: "dt", category: "media" },

  // --- JEFES DE DEPARTAMENTO ---
  { name: "Pau Juan-Aracil Ruiz", role: "Head of Design & Aerodynamics", photo: pauJuanAracilImg, linkedin: ISC_LINKEDIN_MS, tier: "head", category: "design" },
  { name: "Javier Toimil Suárez", role: "Head of Powertrain", photo: javierToimilImg, linkedin: ISC_LINKEDIN_MS, tier: "head", category: "powertrain" }
];

export const motoCategories = [
  { id: "all", label: { es: "Ver Todo el Organigrama", en: "See the Full Org Chart" } },
  { id: "management", label: { es: "Management", en: "Management" } },
  { id: "design", label: { es: "Diseño y Aerodinámica", en: "Design & Aerodynamics" } },
  { id: "powertrain", label: { es: "Power Train", en: "Power Train" } },
  { id: "media", label: { es: "Media", en: "Media" } }
];
