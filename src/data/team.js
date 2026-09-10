// src/data/team.js
// ───────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE DATOS — Equipo / Organigrama.
//
//   teamMembers: { name, role, photo, linkedin, tier, category }
//     tier:     "tl" (Team Leader) | "dt" (Director Técnico) | "head" (Jefe de
//               Departamento y Co-Lead)
//     category: "management" | "mechanical" | "electronics" | "driverless" | "statics"
//   categories:  botones de filtro del organigrama { id, label: { es, en } }
//
// Los cargos (role) están en inglés, que es como los usa el equipo en las dos
// versiones de la web. Las etiquetas de los filtros sí van en los dos idiomas.
//
// ⚠️ AQUÍ SOLO VAN LOS JEFES
// Team Leader, Directores Técnicos, Co-Leads y Jefes de Departamento. Los
// miembros de cada departamento NO se publican en la web.
//
// ⚠️ FOTOS PENDIENTES
// Quien todavía no tiene foto lleva `sinFoto`, un marcador verde ISC con una
// silueta sin rostro. Para poner la foto real: guárdala en
// assets/ORLA_JEFES_WEB/, impórtala arriba y cambia el campo `photo`.
//
// ⚠️ LINKEDIN
// Quien todavía no tiene perfil personal publicado apunta a `ISC_LINKEDIN_FS`,
// la página del equipo en LinkedIn (src/data/redes.js). Cuando alguien pase su
// perfil, se sustituye ahí su valor por la URL personal.
//
// Actualizado en septiembre de 2026 con el listado oficial del equipo.
// ───────────────────────────────────────────────────────────────────────────

import { ISC_LINKEDIN_FS } from "@/data/redes";

/* --- MARCADOR PARA QUIEN NO TIENE FOTO TODAVÍA --- */
import sinFoto from "@/assets/ORLA_JEFES_WEB/persona-sin-foto.svg";

/* --- FOTOS DISPONIBLES --- */
import carvajalImg from "@/assets/ORLA_JEFES_WEB/Carvajal.jpg";
import sandraImg from "@/assets/ORLA_JEFES_WEB/Sandra.jpg";
import marioImg from "@/assets/ORLA_JEFES_WEB/Mario.jpg";
import andresImg from "@/assets/ORLA_JEFES_WEB/Andres.jpg";
import alvaroImg from "@/assets/ORLA_JEFES_WEB/Alvaro.jpg";
import romeroImg from "@/assets/ORLA_JEFES_WEB/Romero.jpg";
import aparicioImg from "@/assets/ORLA_JEFES_WEB/Aparicio.jpg";
import sergioImg from "@/assets/ORLA_JEFES_WEB/Sergio.jpg";
import lauraImg from "@/assets/ORLA_JEFES_WEB/Laura.jpg";

export const teamMembers = [
  // ═══ TEAM LEADER ═══
  {
    name: "Jaime de Carvajal Torres",
    role: "Team Leader",
    photo: carvajalImg,
    linkedin: "https://www.linkedin.com/in/jaime-de-carvajal-torres-6728752a1/",
    tier: "tl",
    category: "management",
  },

  // ═══ DIRECTORES TÉCNICOS ═══
  {
    name: "Sandra Rodríguez Juliani",
    role: "Mechanical Technical Director",
    photo: sandraImg,
    linkedin: "https://www.linkedin.com/in/sandra-rodríguez-juliani-305810286/",
    tier: "dt",
    category: "mechanical",
  },
  {
    name: "Mario Rodríguez Criado",
    role: "Electrical Technical Director",
    photo: marioImg,
    linkedin: "https://www.linkedin.com/in/mario-rodríguez-criado-10157b332/",
    tier: "dt",
    category: "electronics",
  },
  {
    name: "Andrés Sánchez de Ágreda",
    role: "LV & Electronics Technical Director",
    photo: andresImg,
    linkedin: "https://www.linkedin.com/in/andrés-sánchez-de-ágreda-77ab93206/",
    tier: "dt",
    category: "electronics",
  },
  {
    name: "Álvaro González Tabernero",
    role: "Driverless Technical Director",
    photo: alvaroImg,
    linkedin: "https://www.linkedin.com/in/alvaro-gonzalez-tabernero/",
    tier: "dt",
    category: "driverless",
  },

  // ═══ CO-LEADS (Manufacturing) ═══
  {
    name: "Marta Olmedo Delgado",
    role: "Manufacturing Co-Lead",
    photo: sinFoto,
    linkedin: ISC_LINKEDIN_FS,
    tier: "head",
    category: "mechanical",
  },
  {
    name: "Alejandro Romero Fontán",
    role: "Structural & Ergonomics Co-Lead",
    photo: romeroImg,
    linkedin: "https://www.linkedin.com/in/alejandro-romero-fontán-0a449132b/",
    tier: "head",
    category: "mechanical",
  },
  {
    name: "Pablo de las Cuevas Gómez",
    role: "Composites Co-Lead",
    photo: sinFoto,
    linkedin: "https://www.linkedin.com/in/pablo-de-las-cuevas-gomez-045255298",
    tier: "head",
    category: "mechanical",
  },
  {
    name: "Pablo Aparicio de la Vega",
    role: "Simulation Co-Lead",
    photo: aparicioImg,
    linkedin: "https://www.linkedin.com/in/pablo-aparicio-de-la-vega-50748039a/",
    tier: "head",
    category: "mechanical",
  },

  // ═══ JEFES DE DEPARTAMENTO — MECÁNICA ═══
  {
    name: "Paloma Mazuecos Reillo",
    role: "Head of Chassis",
    photo: sinFoto,
    linkedin: "https://www.linkedin.com/in/paloma-mazuecos-reillo-a9a721286",
    tier: "head",
    category: "mechanical",
  },
  {
    name: "Luis Gonzaga López-Cózar Escobar",
    role: "Head of Suspension & Dynamics",
    photo: sinFoto,
    linkedin: ISC_LINKEDIN_FS,
    tier: "head",
    category: "mechanical",
  },
  {
    name: "Ricardo Tur González",
    role: "Head of Aerodynamics & Cooling",
    photo: sinFoto,
    linkedin: "https://www.linkedin.com/in/ricardo-tur-gonzalez2/",
    tier: "head",
    category: "mechanical",
  },
  {
    name: "Imhotep Criado-Pou Castellanos",
    role: "Head of Tractive System",
    photo: sinFoto,
    linkedin: ISC_LINKEDIN_FS,
    tier: "head",
    category: "mechanical",
  },

  // ═══ JEFES DE DEPARTAMENTO — ELECTRÓNICA ═══
  {
    name: "Inés Pacheco Pérez",
    role: "Head of Control Electronics",
    photo: sinFoto,
    linkedin: "https://www.linkedin.com/in/ines-pacheco-perez",
    tier: "head",
    category: "electronics",
  },
  {
    name: "Carlota María Treviño Mora",
    role: "Head of Electronic Subsystems",
    photo: sinFoto,
    linkedin: ISC_LINKEDIN_FS,
    tier: "head",
    category: "electronics",
  },

  // ═══ JEFES DE DEPARTAMENTO — DRIVERLESS ═══
  {
    name: "Sergio Jiménez Romero",
    role: "Head of DV Software",
    photo: sergioImg,
    linkedin: ISC_LINKEDIN_FS,
    tier: "head",
    category: "driverless",
  },
  {
    name: "Alberto Velasco Rodríguez",
    role: "Head of DV Software",
    photo: sinFoto,
    linkedin: ISC_LINKEDIN_FS,
    tier: "head",
    category: "driverless",
  },
  {
    name: "Carlos Gárate Martín-Ondarza",
    role: "Head of DV Integration",
    photo: sinFoto,
    linkedin: ISC_LINKEDIN_FS,
    tier: "head",
    category: "driverless",
  },

  // ═══ JEFES DE DEPARTAMENTO — STATICS ═══
  {
    name: "Laura Valero González",
    role: "Head of Statics",
    photo: lauraImg,
    linkedin: ISC_LINKEDIN_FS,
    tier: "head",
    category: "statics",
  },

  // ═══ JEFES DE DEPARTAMENTO — MANAGEMENT ═══
  {
    name: "Thomas Arno Callière",
    role: "Head of Media & Marketing",
    photo: sinFoto,
    linkedin: ISC_LINKEDIN_FS,
    tier: "head",
    category: "management",
  },
];

export const categories = [
  { id: "all", label: { es: "Ver Todo el Organigrama", en: "See the Full Org Chart" } },
  { id: "management", label: { es: "Management", en: "Management" } },
  { id: "mechanical", label: { es: "Mecánica", en: "Mechanical" } },
  { id: "electronics", label: { es: "Electrónica", en: "Electronics" } },
  { id: "driverless", label: { es: "Driverless", en: "Driverless" } },
  { id: "statics", label: { es: "Statics", en: "Statics" } }
];
