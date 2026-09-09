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
      es: "1.º Business Plan (IFS-06) · P7 general (IFS-05)",
      en: "1st Business Plan (IFS-06) · P7 overall (IFS-05)",
    },
  },
  {
    id: "germany",
    name: "Formula Student Germany",
    venue: { es: "Hockenheimring", en: "Hockenheimring" },
    coords: [49.327, 8.565],
    attended: true,
    highlight: {
      es: "Debut del equipo (IFS-06)",
      en: "Team debut (IFS-06)",
    },
  },
  {
    id: "italy",
    name: "Formula ATA Italy",
    venue: { es: "Autodromo Riccardo Paletti", en: "Autodromo Riccardo Paletti" },
    coords: [44.683, 10.023],
    attended: true,
    highlight: {
      es: "1.º Business Plan (IFS-06) · 2.º BP y 3.º Efficiency (IFS-05) · Primera Endurance",
      en: "1st Business Plan (IFS-06) · 2nd BP and 3rd Efficiency (IFS-05) · First Endurance",
    },
  },
  {
    id: "austria",
    name: "Formula Student Austria",
    venue: { es: "Red Bull Ring", en: "Red Bull Ring" },
    coords: [47.219, 14.764],
    attended: true,
    highlight: {
      es: "Debut y todas las pruebas dinámicas (IFS-08)",
      en: "Debut and every dynamic event (IFS-08)",
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
    year: "2025 / 2026",
    title: "FS Austria",
    highlight: {
      es: "Debut y todas las pruebas dinámicas",
      en: "Debut and every dynamic event",
    },
    details: {
      es: "Primera vez del equipo en el Red Bull Ring de Spielberg. El IFS-08 completó skidpad, aceleración, autocross y resistencia.",
      en: "The team's first time at the Red Bull Ring in Spielberg. The IFS-08 completed skidpad, acceleration, autocross and endurance.",
    },
  },
  {
    year: "2025 / 2026",
    title: "FS Spain",
    highlight: {
      es: "Todas las pruebas dinámicas completadas",
      en: "Every dynamic event completed",
    },
    details: {
      es: "Segunda competición seguida completando el programa dinámico entero, con el mayor tiempo de testing de cualquier temporada y la primera implementación del proyecto Driverless.",
      en: "A second consecutive competition completing the full dynamic programme, with more testing time than any previous season and the first implementation of the Driverless project.",
    },
  },
  {
    year: "2023 / 2024",
    title: "FS Spain · FS Italy",
    highlight: {
      es: "1.º en Business Plan en las dos",
      en: "1st in Business Plan at both",
    },
    details: {
      es: "Las primeras victorias y los primeros trofeos del equipo, con el IFS-06. En Italia completamos además nuestra primera prueba de Endurance, bajo la lluvia.",
      en: "The team's first wins and first trophies, with the IFS-06. In Italy we also completed our first ever Endurance race, in the rain.",
    },
  },
  {
    year: "2022 / 2023",
    title: "FS Spain",
    highlight: {
      es: "7.ª posición general",
      en: "7th overall",
    },
    details: {
      es: "El IFS-05 disputó por primera vez todas las pruebas dinámicas en Montmeló, marcando un antes y un después para el equipo.",
      en: "The IFS-05 took part in every dynamic event at Montmeló for the first time, marking a turning point for the team.",
    },
  },
  {
    year: "2022 / 2023",
    title: "FS Italy",
    highlight: {
      es: "2.º en Business Plan · 3.º en Efficiency",
      en: "2nd in Business Plan · 3rd in Efficiency",
    },
    details: {
      es: "Duplicamos la puntuación en las pruebas estáticas respecto al año anterior y mejoramos tres posiciones en la general.",
      en: "We doubled our static event score compared with the previous year and improved three places overall.",
    },
  },
  {
    year: "2020 / 2021",
    title: "FS Spain",
    highlight: {
      es: "2.º en Business Plan",
      en: "2nd in Business Plan",
    },
    details: {
      es: "El primer podio de la historia del equipo, logrado con el IFS-03 en plena pandemia.",
      en: "The first podium in the team's history, achieved with the IFS-03 in the middle of the pandemic.",
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
