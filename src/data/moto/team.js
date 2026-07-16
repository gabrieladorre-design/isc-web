// src/data/moto/team.js
// ───────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE DATOS — Equipo / Organigrama de la MOTO (ISC MS Racing Team).
//
//   motoTeamMembers: { name, role, photo, linkedin, tier, category }
//     tier:     "tl" (Team Leader) | "dt" (Directores) | "head" (Jefe de Dpto.)
//     category: "management" | "design" | "powertrain" | "media"
//   motoCategories:  botones de filtro del organigrama { id, label }
// ───────────────────────────────────────────────────────────────────────────

/* --- IMPORTACIÓN DE FOTOS --- */
import miguelLuqueImg from "@/assets/MIEMBROS_MOTO/Miguel-Luque.jpg";
import angelSantesmasesImg from "@/assets/MIEMBROS_MOTO/Angel-Santesmases.jpg";
import javierMartinImg from "@/assets/MIEMBROS_MOTO/Javier-Martin.jpg";
import pauJuanAracilImg from "@/assets/MIEMBROS_MOTO/Pau-Juan-Aracil.jpg";
import javierToimilImg from "@/assets/MIEMBROS_MOTO/Javier-Toimil.jpg";

export const motoTeamMembers = [
  // --- TEAM LEADER ---
  { name: "Miguel Luque Camello", role: "Team Leader 2025-2027", photo: miguelLuqueImg, linkedin: "https://linkedin.com/", tier: "tl", category: "management" },

  // --- DIRECTORES ---
  { name: "Ángel Santesmases Montero", role: "Technical Director", photo: angelSantesmasesImg, linkedin: "https://linkedin.com/", tier: "dt", category: "management" },
  { name: "Javier Martín López", role: "Media Team Director", photo: javierMartinImg, linkedin: "https://linkedin.com/", tier: "dt", category: "media" },

  // --- JEFES DE DEPARTAMENTO ---
  { name: "Pau Juan-Aracil Ruiz", role: "Head of Design & Aerodynamics", photo: pauJuanAracilImg, linkedin: "https://linkedin.com/", tier: "head", category: "design" },
  { name: "Javier Toimil Suárez", role: "Head of Powertrain", photo: javierToimilImg, linkedin: "https://linkedin.com/", tier: "head", category: "powertrain" }
];

export const motoCategories = [
  { id: "all", label: "Ver Todo el Organigrama" },
  { id: "management", label: "Management" },
  { id: "design", label: "Diseño y Aerodinámica" },
  { id: "powertrain", label: "Power Train" },
  { id: "media", label: "Media" }
];
