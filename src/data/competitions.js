// src/data/competitions.js
// ───────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE DATOS — Competiciones y Palmarés (Coche + Moto).
//
//   events:  marcadores del mapa. { id, name, venue, coords:[lat,lng], attended, highlight? }
//            attended=true → marcador ISC (amarillo) con "highlight"; false → objetivo futuro.
//   results: tarjetas del palmarés histórico. { year, title, highlight, details }
//
// Los textos que cambian de idioma van como { es: "...", en: "..." }.
// Los nombres propios de competiciones y circuitos se mantienen igual en ambos.
// ───────────────────────────────────────────────────────────────────────────

/* ===== FORMULA STUDENT (COCHE) ===== */
export const formulaEvents = [
  // --- COMPETICIONES DEL ISC ---
  {
    id: "spain",
    name: "Formula Student Spain",
    venue: {
      es: "Circuit de Barcelona-Catalunya (Montmeló)",
      en: "Circuit de Barcelona-Catalunya (Montmeló)",
    },
    coords: [41.57, 2.26],
    attended: true,
    highlight: {
      es: "P7 Overall (IFS-05) / 1st Design (IFS-07)",
      en: "P7 Overall (IFS-05) / 1st Design (IFS-07)",
    },
  },
  {
    id: "germany",
    name: "Formula Student Germany",
    venue: { es: "Hockenheimring", en: "Hockenheimring" },
    coords: [49.327, 8.565],
    attended: true,
    highlight: {
      es: "Top 10 Overall (IFS-07)",
      en: "Top 10 Overall (IFS-07)",
    },
  },
  {
    id: "italy",
    name: "Formula ATA Italy",
    venue: { es: "Autodromo Riccardo Paletti", en: "Autodromo Riccardo Paletti" },
    coords: [44.683, 10.023],
    attended: true,
    highlight: {
      es: "Podio Business Plan (IFS-05, IFS-06)",
      en: "Business Plan Podium (IFS-05, IFS-06)",
    },
  },
  {
    id: "austria",
    name: "Formula Student Austria",
    venue: { es: "Red Bull Ring", en: "Red Bull Ring" },
    coords: [47.219, 14.764],
    attended: true,
    highlight: {
      es: "Finisher (IFS-03)",
      en: "Finisher (IFS-03)",
    },
  },

  // --- OTRAS COMPETICIONES EUROPEAS ---
  {
    id: "uk",
    name: "Formula Student UK",
    venue: { es: "Silverstone", en: "Silverstone" },
    coords: [52.073, -1.014],
    attended: false,
  },
  {
    id: "east",
    name: "Formula Student East",
    venue: { es: "Zalaegerszeg (Hungría)", en: "Zalaegerszeg (Hungary)" },
    coords: [46.89, 16.84],
    attended: false,
  },
  {
    id: "portugal",
    name: "Formula Student Portugal",
    venue: { es: "Castelo Branco", en: "Castelo Branco" },
    coords: [39.822, -7.491],
    attended: false,
  },
  {
    id: "czech",
    name: "Formula Student Czech",
    venue: { es: "Autodrom Most", en: "Autodrom Most" },
    coords: [50.519, 13.648],
    attended: false,
  },
];

export const formulaResults = [
  {
    year: "2024 / 2025",
    title: "FS Spain",
    highlight: {
      es: "1st Position in Design Event",
      en: "1st Position in Design Event",
    },
    details: {
      es: "Un hito histórico. La mejor justificación de diseño de toda la parrilla nacional con el monoplaza IFS-07.",
      en: "A historic milestone. The best design justification of the entire national grid with the IFS-07 car.",
    },
  },
  {
    year: "2024 / 2025",
    title: "FS Germany",
    highlight: {
      es: "TOP 10 Overall",
      en: "TOP 10 Overall",
    },
    details: {
      es: "Excelente actuación global en Hockenheimring, demostrando la fiabilidad del paquete aerodinámico.",
      en: "An excellent overall performance at Hockenheimring, proving the reliability of the aerodynamic package.",
    },
  },
  {
    year: "2023 / 2024",
    title: "FS Italy",
    highlight: {
      es: "Podio en Business Plan",
      en: "Business Plan Podium",
    },
    details: {
      es: "Consolidación del departamento de Statics con una presentación de negocio brillante (IFS-06).",
      en: "Consolidation of the Statics department with a brilliant business presentation (IFS-06).",
    },
  },
  {
    year: "2022 / 2023",
    title: "FS Spain",
    highlight: {
      es: "7ª Posición General",
      en: "7th Overall",
    },
    details: {
      es: "El IFS-05 completa todas las pruebas dinámicas, marcando un antes y un después en Montmeló.",
      en: "The IFS-05 completed every dynamic event, marking a turning point at Montmeló.",
    },
  },
];

/* ===== MOTOSTUDENT (MOTO) ===== */
export const motoEvents = [
  // --- COMPETICIÓN PRINCIPAL DEL ISC MOTO ---
  {
    id: "aragon",
    name: "MotoStudent International Competition",
    venue: {
      es: "MotorLand Aragón (España)",
      en: "MotorLand Aragón (Spain)",
    },
    coords: [41.076, -0.204],
    attended: true,
    highlight: {
      es: "Top 10 Dinámicas (IM-05) / Mejor Aceleración (IM-04)",
      en: "Top 10 Dynamics (IM-05) / Best Acceleration (IM-04)",
    },
  },

  // --- OTROS CIRCUITOS EUROPEOS (Expansión) ---
  {
    id: "imola",
    name: "MotoEngineering Italy",
    venue: {
      es: "Autodromo Enzo e Dino Ferrari",
      en: "Autodromo Enzo e Dino Ferrari",
    },
    coords: [44.343, 11.710],
    attended: false,
  },
  {
    id: "portimao",
    name: "Iberian Moto-Test",
    venue: {
      es: "Autódromo Internacional do Algarve",
      en: "Autódromo Internacional do Algarve",
    },
    coords: [37.227, -8.628],
    attended: false,
  },
  {
    id: "assen",
    name: "University TT Race",
    venue: {
      es: "TT Circuit Assen (Países Bajos)",
      en: "TT Circuit Assen (Netherlands)",
    },
    coords: [52.962, 6.524],
    attended: false,
  },
];

export const motoResults = [
  {
    year: "2024 / 2025",
    title: "MotoStudent Aragón",
    highlight: {
      es: "Top 10 en Pruebas Dinámicas",
      en: "Top 10 in Dynamic Events",
    },
    details: {
      es: "El IM-05 superó las exigentes inspecciones técnicas a la primera y demostró una agilidad sobresaliente en la Gymkhana.",
      en: "The IM-05 passed the demanding technical inspections at the first attempt and showed outstanding agility in the Gymkhana.",
    },
  },
  {
    year: "2023 / 2024",
    title: "MotoStudent Aragón",
    highlight: {
      es: "Mejor Aceleración (Rookies)",
      en: "Best Acceleration (Rookies)",
    },
    details: {
      es: "Dimos la sorpresa en la recta de MotorLand marcando el mejor registro de aceleración gracias al rediseño del tren de potencia.",
      en: "We caused a surprise on the MotorLand straight by setting the best acceleration time thanks to the redesign of the powertrain.",
    },
  },
  {
    year: "2021 / 2022",
    title: { es: "Fase de Diseño MS", en: "MS Design Phase" },
    highlight: {
      es: "Innovación en Electrónica",
      en: "Electronics Innovation",
    },
    details: {
      es: "Obtuvimos una calificación excelente en la fase teórica por el desarrollo de nuestra propia telemetría para el IM-02.",
      en: "We earned an excellent score in the theoretical phase for developing our own telemetry system for the IM-02.",
    },
  },
  {
    year: "2018 / 2020",
    title: "MotoStudent Aragón",
    highlight: {
      es: "El Debut Oficial",
      en: "The Official Debut",
    },
    details: {
      es: "El equipo hace historia llevando por primera vez el prototipo IM-01 al paddock del circuito internacional.",
      en: "The team made history by taking the IM-01 prototype to the paddock of the international circuit for the first time.",
    },
  },
];
