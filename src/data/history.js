// src/data/history.js
// ───────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE DATOS — Historia / Evolución (Coche + Moto).
//
//   timeline: { year, model, subtitle, text, stats, imgCar, imgTeam }
//             imgCar = imagen del vehículo (monoplaza / prototipo)
//             imgTeam = foto del equipo de esa temporada
//
// Los textos van en los dos idiomas: { es: "...", en: "..." }.
// La web elige automáticamente el que corresponda al idioma activo.
// ───────────────────────────────────────────────────────────────────────────

// Fotos reales de los modelos de moto (imgCar)
import moto01 from "@/assets/fotos-y-videos/ModelosMoto/im01.jpg";
import moto02 from "@/assets/fotos-y-videos/ModelosMoto/im02.jpg";
import moto03 from "@/assets/fotos-y-videos/ModelosMoto/im03.jpg";
import moto04 from "@/assets/fotos-y-videos/ModelosMoto/im04.jpg";

// Fotos de equipo/competición de moto (imgTeam) — MotoStudentMedia
import motoTeam01 from "@/assets/fotos-y-videos/pruebas/moto/ms-01.jpeg";
import motoTeam02 from "@/assets/fotos-y-videos/pruebas/moto/ms-05.jpg";
import motoTeam03 from "@/assets/fotos-y-videos/pruebas/moto/ms-03.jpeg";
import motoTeam04 from "@/assets/fotos-y-videos/pruebas/moto/ms-11.jpeg";

// Fotos reales de los modelos de coche (imgCar)
import car01 from "@/assets/fotos-y-videos/ModelosCoche/ifs01.jpg";
import car02 from "@/assets/fotos-y-videos/ModelosCoche/ifs02.jpg";
import car03 from "@/assets/fotos-y-videos/ModelosCoche/ifs03.jpg";
import car04 from "@/assets/fotos-y-videos/ModelosCoche/ifs04.jpg";
import car05 from "@/assets/fotos-y-videos/ModelosCoche/ifs05.jpg";
import car06 from "@/assets/fotos-y-videos/ModelosCoche/ifs06.jpg";
import car07 from "@/assets/fotos-y-videos/ModelosCoche/ifs07.jpg";

// Fotos de equipo/competición de coche (imgTeam) — CocheStudentMedia
import carTeam01 from "@/assets/fotos-y-videos/CocheMedia/cm-01.jpg";
import carTeam02 from "@/assets/fotos-y-videos/CocheMedia/cm-02.jpg";
import carTeam03 from "@/assets/fotos-y-videos/CocheMedia/cm-03.jpg";
import carTeam04 from "@/assets/fotos-y-videos/CocheMedia/cm-04.jpg";
import carTeam05 from "@/assets/fotos-y-videos/CocheMedia/cm-05.jpg";
import carTeam06 from "@/assets/fotos-y-videos/CocheMedia/cm-06.jpg";
import carTeam07 from "@/assets/fotos-y-videos/CocheMedia/cm-07.jpg";
import carTeam08 from "@/assets/fotos-y-videos/CocheMedia/cm-08.jpg";
import carTeam09 from "@/assets/fotos-y-videos/CocheMedia/cm-09.jpg";

/* ===== FORMULA STUDENT (COCHE) — 2025 → 2017 ===== */
export const formulaTimeline = [
  {
    year: "2025",
    model: "IFS-07",
    subtitle: {
      es: "Aerodinámica y Velocidad",
      en: "Aerodynamics and Speed",
    },
    text: {
      es: "El coche más rápido y ligero hasta la fecha. Incorpora por primera vez un paquete aerodinámico completo. Superamos todas las inspecciones técnicas por cuarta vez consecutiva.",
      en: "The fastest and lightest car to date. It features a full aerodynamic package for the first time. We passed all technical inspections for the fourth consecutive year.",
    },
    stats: {
      es: "Revolución Aerodinámica",
      en: "Aerodynamic Revolution",
    },
    imgCar: car07,
    imgTeam: carTeam02
  },
  {
    year: "2024",
    model: "IFS-06",
    subtitle: {
      es: "Alemania y Lluvia",
      en: "Germany and Rain",
    },
    text: {
      es: "Debut en Formula Student Germany, la cita de referencia. Logramos nuestro primer podio en Business Plan (Italia) y completamos una carrera de Endurance bajo la lluvia.",
      en: "Debut at Formula Student Germany, the benchmark event. We took our first Business Plan podium (Italy) and completed an Endurance race in the rain.",
    },
    stats: {
      es: "Podio Business Plan",
      en: "Business Plan Podium",
    },
    imgCar: car06,
    imgTeam: carTeam06
  },
  {
    year: "2023",
    model: "IFS-05",
    subtitle: {
      es: "Madurez y Fiabilidad",
      en: "Maturity and Reliability",
    },
    text: {
      es: "Quinta generación del monoplaza, desarrollada bajo una filosofía de diseño orientada a la fiabilidad. La consolidación de los procesos de validación y la madurez alcanzada por la ingeniería del equipo se tradujeron en un vehículo notablemente más robusto y consistente, capaz de mantener un rendimiento estable a lo largo de toda la competición.",
      en: "The fifth generation of the car, developed under a reliability-focused design philosophy. The consolidation of our validation processes and the engineering maturity reached by the team resulted in a noticeably more robust and consistent vehicle, able to sustain stable performance throughout the whole competition.",
    },
    stats: {
      es: "P7 General FS Spain",
      en: "P7 Overall FS Spain",
    },
    imgCar: car05,
    imgTeam: carTeam03
  },
  {
    year: "2022",
    model: "IFS-04",
    subtitle: {
      es: "Fiabilidad en Pista",
      en: "Reliability on Track",
    },
    text: {
      es: "Por primera vez, el equipo superó con éxito las inspecciones técnicas tanto en Formula ATA Italy como en FS Spain, participando en las pruebas dinámicas de ambas competiciones.",
      en: "For the first time, the team successfully passed technical inspections at both Formula ATA Italy and FS Spain, taking part in the dynamic events of both competitions.",
    },
    stats: {
      es: "Inspecciones Superadas",
      en: "Inspections Passed",
    },
    imgCar: car04,
    imgTeam: carTeam04
  },
  {
    year: "2020-2021",
    model: "IFS-03",
    subtitle: {
      es: "Hito Operativo",
      en: "Operational Milestone",
    },
    text: {
      es: "A pesar de la pandemia, logramos finalizar el primer coche plenamente operativo. Conseguimos un 2º puesto en Business Plan y un excelente feedback en diseño mecánico y eléctrico.",
      en: "Despite the pandemic, we managed to finish our first fully operational car. We achieved 2nd place in Business Plan and excellent feedback on mechanical and electrical design.",
    },
    stats: {
      es: "2º Business Plan",
      en: "2nd Business Plan",
    },
    imgCar: car03,
    imgTeam: carTeam05
  },
  {
    year: "2019",
    model: "IFS-02",
    subtitle: {
      es: "Crecimiento Técnico",
      en: "Technical Growth",
    },
    text: {
      es: "Con un equipo más grande, se desarrolló el IFS-02. Se introdujo una nueva arquitectura de batería basada en celdas cilíndricas, mejorando notablemente la tecnología anterior.",
      en: "With a larger team, the IFS-02 was developed. A new battery architecture based on cylindrical cells was introduced, significantly improving on the previous technology.",
    },
    stats: {
      es: "Nueva Batería",
      en: "New Battery",
    },
    imgCar: car02,
    imgTeam: carTeam09
  },
  {
    year: "2017-2018",
    model: "IFS-01",
    subtitle: {
      es: "El Origen",
      en: "The Origin",
    },
    text: {
      es: "En tan solo un año, desarrollamos el primer prototipo de nuestra historia. Con él, participamos en nuestra primera competición, Formula Student Spain (Montmeló), sentando las bases del proyecto.",
      en: "In just one year we developed the first prototype in our history. With it we took part in our first competition, Formula Student Spain (Montmeló), laying the foundations of the project.",
    },
    stats: {
      es: "Primer Prototipo",
      en: "First Prototype",
    },
    imgCar: car01,
    imgTeam: carTeam07
  }
];

/* ===== MOTOSTUDENT (MOTO) — 2024 → 2018 =====
   La competición MotoStudent se disputa cada dos años. El equipo debutó en
   2018, por lo que la trayectoria abarca cuatro ediciones bienales
   (2018, 2020, 2022 y 2024) y, por tanto, cuatro prototipos: IM-01 a IM-04. */
export const motoTimeline = [
  {
    year: "2024",
    model: "IM-04",
    subtitle: {
      es: "Revolución Eléctrica",
      en: "Electric Revolution",
    },
    text: {
      es: "Dimos un salto cualitativo con nuestro nuevo paquete de baterías customizado y un basculante de fabricación propia. Logramos nuestro mejor tiempo en la prueba de aceleración.",
      en: "We took a qualitative leap with our new custom battery pack and an in-house manufactured swingarm. We recorded our best ever time in the acceleration event.",
    },
    stats: {
      es: "Mejor Aceleración",
      en: "Best Acceleration",
    },
    imgCar: moto04,
    imgTeam: motoTeam01
  },
  {
    year: "2022",
    model: "IM-03",
    subtitle: {
      es: "Fiabilidad en Pista",
      en: "Reliability on Track",
    },
    text: {
      es: "Completamos la carrera principal en el circuito de MotorLand Aragón demostrando una fiabilidad térmica excelente en nuestro motor eléctrico bajo condiciones de calor extremo.",
      en: "We completed the main race at the MotorLand Aragón circuit, demonstrating excellent thermal reliability of our electric motor under extreme heat conditions.",
    },
    stats: {
      es: "Carrera Completada",
      en: "Race Completed",
    },
    imgCar: moto03,
    imgTeam: motoTeam02
  },
  {
    year: "2020",
    model: "IM-02",
    subtitle: {
      es: "Desarrollo y Retorno",
      en: "Development and Comeback",
    },
    text: {
      es: "Tras los retos operativos de la pandemia, el equipo se reestructuró para diseñar un sistema de control electrónico totalmente nuevo, obteniendo una gran puntuación en la fase de Diseño.",
      en: "After the operational challenges of the pandemic, the team restructured to design a completely new electronic control system, earning a great score in the Design phase.",
    },
    stats: {
      es: "Innovación Electrónica",
      en: "Electronics Innovation",
    },
    imgCar: moto02,
    imgTeam: motoTeam03
  },
  {
    year: "2018",
    model: "IM-01",
    subtitle: {
      es: "El Origen sobre Dos Ruedas",
      en: "The Origin on Two Wheels",
    },
    text: {
      es: "Nace la división de motos del ISC Racing Team. En un tiempo récord, conseguimos fabricar nuestra primera moto eléctrica y presentarnos en la competición internacional MotoStudent.",
      en: "The motorbike division of ISC Racing Team was born. In record time we managed to build our first electric bike and take part in the international MotoStudent competition.",
    },
    stats: {
      es: "El Primer Prototipo",
      en: "The First Prototype",
    },
    imgCar: moto01,
    imgTeam: motoTeam04
  }
];
