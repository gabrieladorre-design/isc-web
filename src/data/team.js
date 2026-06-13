// src/data/team.js
// ───────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE DATOS — Equipo / Organigrama.
//
//   teamMembers: { name, role, photo, linkedin, tier, category }
//     tier:     "tl" (Team Leader) | "dt" (Director Técnico) | "head" (Jefe de Dpto.)
//     category: "management" | "mechanical" | "electronics" | "driverless" | "statics"
//   categories:  botones de filtro del organigrama { id, label }
// ───────────────────────────────────────────────────────────────────────────

/* --- IMPORTACIÓN DE FOTOS --- */
// Management
import carvajalImg from "@/assets/ORLA_JEFES_WEB/Carvajal.jpg";
import selinaImg from "@/assets/ORLA_JEFES_WEB/Selina.jpg";

// Mecánica
import medinaImg from "@/assets/ORLA_JEFES_WEB/Medina.jpg";
import fernandoImg from "@/assets/ORLA_JEFES_WEB/Fernando-Tobar.jpg";
import romeroImg from "@/assets/ORLA_JEFES_WEB/Romero.jpg";
import manuImg from "@/assets/ORLA_JEFES_WEB/Manu.jpg";
import sandraImg from "@/assets/ORLA_JEFES_WEB/Sandra.jpg";
import nachoImg from "@/assets/ORLA_JEFES_WEB/Nacho-Ramos.jpg";
import dieguezImg from "@/assets/ORLA_JEFES_WEB/Dieguez.jpg";
import aparicioImg from "@/assets/ORLA_JEFES_WEB/Aparicio.jpg";

// Electrónica & Driverless
import nicoImg from "@/assets/ORLA_JEFES_WEB/Nico.jpg";
import marioImg from "@/assets/ORLA_JEFES_WEB/Mario.jpg";
import landaImg from "@/assets/ORLA_JEFES_WEB/Landa.jpg";
import alvaroImg from "@/assets/ORLA_JEFES_WEB/Alvaro.jpg";
import jaimePerezImg from "@/assets/ORLA_JEFES_WEB/Jaime-Perez.jpg";
import sergioImg from "@/assets/ORLA_JEFES_WEB/Sergio.jpg";
import andresImg from "@/assets/ORLA_JEFES_WEB/Andres.jpg";

// Statics
import lauraImg from "@/assets/ORLA_JEFES_WEB/Laura.jpg";

export const teamMembers = [
  // --- TEAM LEADER ---
  { name: "Jaime de Carvajal", role: "Team Leader", photo: carvajalImg, linkedin: "https://www.linkedin.com/in/jaime-de-carvajal-torres-6728752a1/", tier: "tl", category: "management" },

  // --- DIRECTORES TÉCNICOS ---
  { name: "Miguel Ángel Medina", role: "Mechanical Technical Director", photo: medinaImg, linkedin: "https://www.linkedin.com/in/miguel-angel-medina-lazcano-13389b245/", tier: "dt", category: "mechanical" },
  { name: "Fernando Mª Tobar", role: "Mechanical Technical Director", photo: fernandoImg, linkedin: "https://www.linkedin.com/in/fernando-tobar-pérez/", tier: "dt", category: "mechanical" },
  { name: "Nicolás Huertas", role: "Head of Eléctrica", photo: nicoImg, linkedin: "https://www.linkedin.com/in/nhuertasromero/", tier: "dt", category: "electronics" },
  { name: "Jaime Landa", role: "Electronics Technical Director", photo: landaImg, linkedin: "https://www.linkedin.com/in/jaime-landa-cereceda/", tier: "dt", category: "electronics" },
  { name: "Álvaro González", role: "Driverless Director", photo: alvaroImg, linkedin: "https://www.linkedin.com/in/alvaro-gonzalez-tabernero/", tier: "dt", category: "driverless" },
  { name: "Laura Valero", role: "Statics Director", photo: lauraImg, linkedin: "https://linkedin.com/", tier: "dt", category: "statics" },

  // --- JEFES DE DEPARTAMENTO ---
  // Mechanical
  { name: "Alejandro Romero", role: "Head of Chassis & Structural", photo: romeroImg, linkedin: "https://www.linkedin.com/in/alejandro-romero-fontán-0a449132b/", tier: "head", category: "mechanical" },
  { name: "Manuel Mª Cantón", role: "Head of Eléctrica", photo: manuImg, linkedin: "https://www.linkedin.com/in/mmcantonbarat/", tier: "head", category: "mechanical" },
  { name: "Sandra Rodríguez", role: "Head of Braking & Steering", photo: sandraImg, linkedin: "https://www.linkedin.com/in/sandra-rodríguez-juliani-305810286/", tier: "head", category: "mechanical" },
  { name: "Ignacio Ramos", role: "Head of Suspension & Dynamics", photo: nachoImg, linkedin: "https://www.linkedin.com/in/ignacio-ramos-villar-80a38a2b6/", tier: "head", category: "mechanical" },
  { name: "Rodrigo García", role: "Head of Suspension & Dynamics", photo: dieguezImg, linkedin: "https://www.linkedin.com/in/rodrigo-garcia-dieguez/", tier: "head", category: "mechanical" },
  { name: "Pablo Aparicio", role: "Head of Aero & Cooling", photo: aparicioImg, linkedin: "https://www.linkedin.com/in/pablo-aparicio-de-la-vega-50748039a/", tier: "head", category: "mechanical" },

  // Electronics
  { name: "Mario Rodríguez", role: "Head of Eléctrica", photo: marioImg, linkedin: "https://www.linkedin.com/in/mario-rodríguez-criado-10157b332/", tier: "head", category: "electronics" },
  { name: "Andrés Sánchez", role: "Head of Telemetry", photo: andresImg, linkedin: "https://www.linkedin.com/in/andrés-sánchez-de-ágreda-77ab93206/", tier: "head", category: "electronics" },

  // Driverless
  { name: "Jaime Pérez", role: "Head of Driverless", photo: jaimePerezImg, linkedin: "https://linkedin.com/", tier: "head", category: "driverless" },
  { name: "Selina Oliver", role: "Head of Media & Marketing", photo: selinaImg, linkedin: "https://www.linkedin.com/in/selina-oliver-de-bustamante-9961a42b3/", tier: "head", category: "management" },
  { name: "Sergio Jiménez", role: "Head of Driverless", photo: sergioImg, linkedin: "https://linkedin.com/", tier: "head", category: "driverless" }
];

export const categories = [
  { id: "all", label: "Ver Todo el Organigrama" },
  { id: "management", label: "Management" },
  { id: "mechanical", label: "Mecánica" },
  { id: "electronics", label: "Electrónica" },
  { id: "driverless", label: "Driverless" },
  { id: "statics", label: "Statics" }
];
