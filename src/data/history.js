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
import car08 from "@/assets/fotos-y-videos/ModelosCoche/ifs08-historia-01.jpg";
// Segunda foto del IFS-08 en la línea del tiempo (no es foto de equipo:
// es el coche en el autocross de Barcelona).
import car08b from "@/assets/fotos-y-videos/ModelosCoche/ifs08-historia-02.jpg";

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

/* ===== FORMULA STUDENT (COCHE) — 2026 → 2017 =====
   Textos revisados en septiembre de 2026 con las correcciones del equipo y
   contrastados con el histórico oficial en la FS World Ranking List
   (https://www.fs-world.org/university/1169/ev/ev).

   ⚠️ FOTOS PENDIENTES: varias `imgTeam` de esta lista son en realidad de la
   temporada del IFS-06. Están señaladas con el comentario "FOTO A CAMBIAR".
   ===================================================================== */
export const formulaTimeline = [
  {
    year: "2026",
    model: "IFS-08",
    subtitle: {
      es: "El Coche Más Fiable",
      en: "Our Most Reliable Car",
    },
    text: {
      es: "Octava generación y prototipo actual del equipo. Debutamos en Formula Student Austria, en el Red Bull Ring, y completamos por primera vez en nuestra historia todas las pruebas dinámicas en dos competiciones internacionales distintas, sumando además en Barcelona el mayor tiempo de testing de cualquier temporada. Implementamos también por primera vez el proyecto Driverless en testing.",
      en: "The eighth generation and the team's current prototype. We made our debut at Formula Student Austria, at the Red Bull Ring, and for the first time in our history completed every dynamic event at two different international competitions, while logging more testing time in Barcelona than in any previous season. We also ran the Driverless project in testing for the first time.",
    },
    stats: {
      es: "Debut en Austria",
      en: "Austria Debut",
    },
    imgCar: car08,
    imgTeam: car08b,
    imgTeamAlt: {
      es: "IFS-08 en el Circuit de Barcelona-Catalunya",
      en: "IFS-08 at the Circuit de Barcelona-Catalunya",
    }
  },
  {
    year: "2025",
    model: "IFS-07",
    subtitle: {
      es: "Aerodinámica y Ligereza",
      en: "Aerodynamics and Lightness",
    },
    text: {
      es: "El coche más rápido y ligero hasta la fecha. Incorpora por primera vez un paquete aerodinámico completo junto a una optimización general de todos los componentes. Superamos todas las inspecciones técnicas por cuarta vez consecutiva en Formula Student Spain, la única competición a la que acudimos esa temporada.",
      en: "The fastest and lightest car to date. It features a full aerodynamic package for the first time, together with an overall optimisation of every component. We passed all technical inspections for the fourth consecutive year at Formula Student Spain, the only competition we attended that season.",
    },
    stats: {
      es: "El Más Ligero",
      en: "The Lightest",
    },
    imgCar: car07,
    imgTeam: carTeam02 // FOTO A CAMBIAR: la del Business Plan y la de empujar el coche son del IFS-06
  },
  {
    year: "2024",
    model: "IFS-06",
    subtitle: {
      es: "Primeras Victorias",
      en: "First Wins",
    },
    text: {
      es: "Debut en Formula Student Germany (Hockenheimring), la cita de referencia. Ganamos la prueba de Business Plan tanto en Formula Student Spain como en Formula ATA Italy —las primeras victorias y los primeros trofeos del equipo— y completamos en Italia nuestra primera prueba de Endurance, disputada bajo la lluvia.",
      en: "Debut at Formula Student Germany (Hockenheimring), the benchmark event. We won the Business Plan event at both Formula Student Spain and Formula ATA Italy — the team's first wins and first trophies — and completed our first ever Endurance race in Italy, in the rain.",
    },
    stats: {
      es: "1.º Business Plan × 2",
      en: "1st Business Plan × 2",
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
      es: "Quinta generación, desarrollada bajo una filosofía de diseño orientada a la fiabilidad y marcada por el mayor relevo generacional del equipo. En Formula Student Spain participamos por primera vez en todas las pruebas dinámicas y firmamos una histórica 7.ª posición en la general; en Formula ATA Italy duplicamos la puntuación en estáticas, con un 2.º puesto en Business Plan y un 3.º en Efficiency.",
      en: "The fifth generation, developed under a reliability-focused design philosophy and marked by the biggest generational handover in the team's history. At Formula Student Spain we took part in every dynamic event for the first time and secured a historic 7th place overall; at Formula ATA Italy we doubled our static scores, with 2nd in Business Plan and 3rd in Efficiency.",
    },
    stats: {
      es: "P7 General FS Spain",
      en: "P7 Overall FS Spain",
    },
    imgCar: car05,
    imgTeam: carTeam03 // FOTO A CAMBIAR: la de Italia es del IFS-06
  },
  {
    year: "2022",
    model: "IFS-04",
    subtitle: {
      es: "El Primero en Pista",
      en: "The First on Track",
    },
    text: {
      es: "El primer monoplaza del ISC que llegó a correr en pista. Superamos por primera vez las inspecciones técnicas tanto en Formula ATA Italy como en Formula Student Spain, participando en las pruebas dinámicas de ambas competiciones. Fue también el año en que pasamos a llamarnos ISC FS Racing Team y competimos por primera vez fuera de España.",
      en: "The first ISC car to actually race on track. For the first time we passed technical inspections at both Formula ATA Italy and Formula Student Spain, taking part in the dynamic events of both competitions. It was also the year we became the ISC FS Racing Team and raced outside Spain for the first time.",
    },
    stats: {
      es: "Primeras Dinámicas",
      en: "First Dynamic Events",
    },
    imgCar: car04,
    imgTeam: carTeam04 // FOTO A CAMBIAR: la del podio es del IFS-06
  },
  {
    year: "2020-2021",
    model: "IFS-03",
    subtitle: {
      es: "El Primero que Arrancó",
      en: "The First One to Run",
    },
    text: {
      es: "El proyecto que superó la pandemia: dos temporadas de desarrollo por culpa del covid y un equipo que creció hasta más de 60 miembros. En agosto de 2021 se convirtió en el primer coche de nuestra historia en arrancar y funcionar plenamente, aunque nunca llegó a rodar en competición. Con él firmamos el primer podio del equipo: un 2.º puesto en Business Plan.",
      en: "The project that got us through the pandemic: two seasons of development because of covid, and a team that grew to more than 60 members. In August 2021 it became the first car in our history to start up and run fully, although it never raced. With it we took the team's first podium: 2nd place in Business Plan.",
    },
    stats: {
      es: "Primer Podio",
      en: "First Podium",
    },
    imgCar: car03,
    imgTeam: carTeam05
  },
  {
    year: "2019",
    model: "IFS-02",
    subtitle: {
      es: "La Primera Estructura",
      en: "The First Structure",
    },
    text: {
      es: "Con la llegada de nuevos miembros se planteó la primera estructura organizada de nuestra historia, con departamentos de gestión propios. En lo técnico introdujo una nueva arquitectura de batería basada en celdas cilíndricas que sigue siendo la base del acumulador que montamos hoy, y sentó las bases que permitieron llegar al IFS-03.",
      en: "With new members joining, we set up the first organised structure in our history, with its own management departments. Technically it introduced a new battery architecture based on cylindrical cells that is still the basis of the accumulator we run today, and it laid the groundwork that made the IFS-03 possible.",
    },
    stats: {
      es: "Base del Acumulador Actual",
      en: "Basis of Today's Accumulator",
    },
    imgCar: car02,
    imgTeam: carTeam09 // FOTO A CAMBIAR: es del IFS-06
  },
  {
    year: "2017-2018",
    model: "IFS-01",
    subtitle: {
      es: "El Origen",
      en: "The Origin",
    },
    text: {
      es: "En tan solo un año, los miembros fundadores desarrollaron el primer prototipo de nuestra historia. Con él participamos en nuestra primera competición, Formula Student Spain (Montmeló), sentando las bases del proyecto. Varios de aquellos fundadores trabajan hoy en la Fórmula 1.",
      en: "In just one year the founding members developed the first prototype in our history. With it we took part in our first competition, Formula Student Spain (Montmeló), laying the foundations of the project. Several of those founders work in Formula 1 today.",
    },
    stats: {
      es: "Primer Prototipo",
      en: "First Prototype",
    },
    imgCar: car01,
    imgTeam: carTeam07 // FOTO A CAMBIAR: una de las dos es del IFS-06
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
