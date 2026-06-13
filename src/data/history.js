// src/data/history.js
// ───────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE DATOS — Historia / Evolución (Coche + Moto).
//
//   timeline: { year, model, subtitle, text, stats, imgCar, imgTeam }
//             imgCar = imagen del vehículo (monoplaza / prototipo)
//             imgTeam = foto del equipo de esa temporada
// ───────────────────────────────────────────────────────────────────────────

import placeholderVehicle from "@/assets/slider1.jpg";
import placeholderTeam from "@/assets/team-photo.jpg";

/* ===== FORMULA STUDENT (COCHE) — 2025 → 2017 ===== */
export const formulaTimeline = [
  {
    year: "2025",
    model: "IFS-07",
    subtitle: "Aerodinámica y Velocidad",
    text: "El coche más rápido y ligero hasta la fecha. Incorpora por primera vez un paquete aerodinámico completo. Superamos todas las inspecciones técnicas por cuarta vez consecutiva.",
    stats: "Revolución Aerodinámica",
    imgCar: placeholderVehicle,
    imgTeam: placeholderTeam
  },
  {
    year: "2024",
    model: "IFS-06",
    subtitle: "Alemania y Lluvia",
    text: "Debut en Formula Student Germany, la cita de referencia. Logramos nuestro primer podio en Business Plan (Italia) y completamos una carrera de Endurance bajo la lluvia.",
    stats: "Podio Business Plan",
    imgCar: placeholderVehicle,
    imgTeam: placeholderTeam
  },
  {
    year: "2023",
    model: "IFS-05",
    subtitle: "Madurez y Fiabilidad",
    text: "Quinta generación del monoplaza, desarrollada bajo una filosofía de diseño orientada a la fiabilidad. La consolidación de los procesos de validación y la madurez alcanzada por la ingeniería del equipo se tradujeron en un vehículo notablemente más robusto y consistente, capaz de mantener un rendimiento estable a lo largo de toda la competición.",
    stats: "P7 General FS Spain",
    imgCar: placeholderVehicle,
    imgTeam: placeholderTeam
  },
  {
    year: "2022",
    model: "IFS-04",
    subtitle: "Fiabilidad en Pista",
    text: "Por primera vez, el equipo superó con éxito las inspecciones técnicas tanto en Formula ATA Italy como en FS Spain, participando en las pruebas dinámicas de ambas competiciones.",
    stats: "Inspecciones Superadas",
    imgCar: placeholderVehicle,
    imgTeam: placeholderTeam
  },
  {
    year: "2020-2021",
    model: "IFS-03",
    subtitle: "Hito Operativo",
    text: "A pesar de la pandemia, logramos finalizar el primer coche plenamente operativo. Conseguimos un 2º puesto en Business Plan y un excelente feedback en diseño mecánico y eléctrico.",
    stats: "2º Business Plan",
    imgCar: placeholderVehicle,
    imgTeam: placeholderTeam
  },
  {
    year: "2019",
    model: "IFS-02",
    subtitle: "Crecimiento Técnico",
    text: "Con un equipo más grande, se desarrolló el IFS-02. Se introdujo una nueva arquitectura de batería basada en celdas cilíndricas, mejorando notablemente la tecnología anterior.",
    stats: "Nueva Batería",
    imgCar: placeholderVehicle,
    imgTeam: placeholderTeam
  },
  {
    year: "2017-2018",
    model: "IFS-01",
    subtitle: "El Origen",
    text: "En tan solo un año, desarrollamos el primer prototipo de nuestra historia. Con él, participamos en nuestra primera competición, Formula Student Spain (Montmeló), sentando las bases del proyecto.",
    stats: "Primer Prototipo",
    imgCar: placeholderVehicle,
    imgTeam: placeholderTeam
  }
];

/* ===== MOTOSTUDENT (MOTO) — 2025 → 2018 ===== */
export const motoTimeline = [
  {
    year: "2025",
    model: "IM-05",
    subtitle: "Aerodinámica y Ligereza",
    text: "El prototipo más ágil hasta la fecha. Redujimos un 15% el peso del chasis tubular y optimizamos el centro de gravedad. Superamos las exigentes inspecciones técnicas de MotorLand sin fallos.",
    stats: "Top 10 Dinámicas",
    imgCar: placeholderVehicle,
    imgTeam: placeholderTeam
  },
  {
    year: "2024",
    model: "IM-04",
    subtitle: "Revolución Eléctrica",
    text: "Dimos un salto cualitativo con nuestro nuevo paquete de baterías customizado y un basculante de fabricación propia. Logramos nuestro mejor tiempo en la prueba de aceleración.",
    stats: "Mejor Aceleración",
    imgCar: placeholderVehicle,
    imgTeam: placeholderTeam
  },
  {
    year: "2023",
    model: "IM-03",
    subtitle: "Fiabilidad en Pista",
    text: "Completamos la carrera principal en el circuito de Aragón demostrando una fiabilidad térmica excelente en nuestro motor eléctrico bajo condiciones de calor extremo.",
    stats: "Carrera Completada",
    imgCar: placeholderVehicle,
    imgTeam: placeholderTeam
  },
  {
    year: "2021-2022",
    model: "IM-02",
    subtitle: "Desarrollo Virtual y Retorno",
    text: "Tras los retos operativos de la pandemia, el equipo se reestructuró para diseñar un sistema de control electrónico totalmente nuevo. Gran puntuación en la fase de Diseño.",
    stats: "Innovación Electrónica",
    imgCar: placeholderVehicle,
    imgTeam: placeholderTeam
  },
  {
    year: "2018-2020",
    model: "IM-01",
    subtitle: "El Origen sobre Dos Ruedas",
    text: "Nace la división de motos del ISC Racing Team. En un tiempo récord, conseguimos fabricar nuestra primera moto eléctrica y presentarnos en la competición internacional MotoStudent.",
    stats: "El Primer Prototipo",
    imgCar: placeholderVehicle,
    imgTeam: placeholderTeam
  }
];
