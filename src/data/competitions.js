// src/data/competitions.js
// ───────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE DATOS — Competiciones y Palmarés (Coche + Moto).
//
//   events:  marcadores del mapa. { id, name, venue, coords:[lat,lng], attended, highlight? }
//            attended=true → marcador ISC (amarillo) con "highlight"; false → objetivo futuro.
//   results: tarjetas del palmarés histórico. { year, title, highlight, details }
// ───────────────────────────────────────────────────────────────────────────

/* ===== FORMULA STUDENT (COCHE) ===== */
export const formulaEvents = [
  // --- COMPETICIONES DEL ISC ---
  { id: "spain", name: "Formula Student Spain", venue: "Circuit de Barcelona-Catalunya (Montmeló)", coords: [41.57, 2.26], attended: true, highlight: "P7 Overall (IFS-05) / 1st Design (IFS-07)" },
  { id: "germany", name: "Formula Student Germany", venue: "Hockenheimring", coords: [49.327, 8.565], attended: true, highlight: "Top 10 Overall (IFS-07)" },
  { id: "italy", name: "Formula ATA Italy", venue: "Autodromo Riccardo Paletti", coords: [44.683, 10.023], attended: true, highlight: "Podio Business Plan (IFS-05, IFS-06)" },
  { id: "austria", name: "Formula Student Austria", venue: "Red Bull Ring", coords: [47.219, 14.764], attended: true, highlight: "Finisher (IFS-03)" },

  // --- OTRAS COMPETICIONES EUROPEAS ---
  { id: "uk", name: "Formula Student UK", venue: "Silverstone", coords: [52.073, -1.014], attended: false },
  { id: "east", name: "Formula Student East", venue: "Zalaegerszeg (Hungría)", coords: [46.89, 16.84], attended: false },
  { id: "portugal", name: "Formula Student Portugal", venue: "Castelo Branco", coords: [39.822, -7.491], attended: false },
  { id: "czech", name: "Formula Student Czech", venue: "Autodrom Most", coords: [50.519, 13.648], attended: false },
];

export const formulaResults = [
  { year: "2024 / 2025", title: "FS Spain", highlight: "1st Position in Design Event", details: "Un hito histórico. La mejor justificación de diseño de toda la parrilla nacional con el monoplaza IFS-07." },
  { year: "2024 / 2025", title: "FS Germany", highlight: "TOP 10 Overall", details: "Excelente actuación global en Hockenheimring, demostrando la fiabilidad del paquete aerodinámico." },
  { year: "2023 / 2024", title: "FS Italy", highlight: "Podio en Business Plan", details: "Consolidación del departamento de Statics con una presentación de negocio brillante (IFS-06)." },
  { year: "2022 / 2023", title: "FS Spain", highlight: "7ª Posición General", details: "El IFS-05 completa todas las pruebas dinámicas, marcando un antes y un después en Montmeló." },
];

/* ===== MOTOSTUDENT (MOTO) ===== */
export const motoEvents = [
  // --- COMPETICIÓN PRINCIPAL DEL ISC MOTO ---
  { id: "aragon", name: "MotoStudent International Competition", venue: "MotorLand Aragón (España)", coords: [41.076, -0.204], attended: true, highlight: "Top 10 Dinámicas (IM-05) / Mejor Aceleración (IM-04)" },

  // --- OTROS CIRCUITOS EUROPEOS (Expansión) ---
  { id: "imola", name: "MotoEngineering Italy", venue: "Autodromo Enzo e Dino Ferrari", coords: [44.343, 11.710], attended: false },
  { id: "portimao", name: "Iberian Moto-Test", venue: "Autódromo Internacional do Algarve", coords: [37.227, -8.628], attended: false },
  { id: "assen", name: "University TT Race", venue: "TT Circuit Assen (Países Bajos)", coords: [52.962, 6.524], attended: false },
];

export const motoResults = [
  { year: "2024 / 2025", title: "MotoStudent Aragón", highlight: "Top 10 en Pruebas Dinámicas", details: "El IM-05 superó las exigentes inspecciones técnicas a la primera y demostró una agilidad sobresaliente en la Gymkhana." },
  { year: "2023 / 2024", title: "MotoStudent Aragón", highlight: "Mejor Aceleración (Rookies)", details: "Dimos la sorpresa en la recta de MotorLand marcando el mejor registro de aceleración gracias al rediseño del tren de potencia." },
  { year: "2021 / 2022", title: "Fase de Diseño MS", highlight: "Innovación en Electrónica", details: "Obtuvimos una calificación excelente en la fase teórica por el desarrollo de nuestra propia telemetría para el IM-02." },
  { year: "2018 / 2020", title: "MotoStudent Aragón", highlight: "El Debut Oficial", details: "El equipo hace historia llevando por primera vez el prototipo IM-01 al paddock del circuito internacional." },
];
