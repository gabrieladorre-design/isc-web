// src/data/formula/coches.js
// ───────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE DATOS — Monoplazas Formula Student (ISC Racing).
// Imágenes reales de cada modelo en assets/fotos-y-videos/ModelosCoche/.
//
// Para añadir un coche nuevo: copia un bloque { ... } completo y edítalo.
//
// Los textos que cambian de idioma van como { es: "...", en: "..." }:
// status, description, specs y los resultados de competición.
// Los nombres de modelo, temporadas, cifras y nombres de circuito no cambian.
// ───────────────────────────────────────────────────────────────────────────

import ifs01Img from "@/assets/fotos-y-videos/ModelosCoche/ifs01.jpg";
import ifs02Img from "@/assets/fotos-y-videos/ModelosCoche/ifs02.jpg";
import ifs03Img from "@/assets/fotos-y-videos/ModelosCoche/ifs03.jpg";
import ifs04Img from "@/assets/fotos-y-videos/ModelosCoche/ifs04.jpg";
import ifs05Img from "@/assets/fotos-y-videos/ModelosCoche/ifs05.jpg";
import ifs06Img from "@/assets/fotos-y-videos/ModelosCoche/ifs06.jpg";
import ifs07Img from "@/assets/fotos-y-videos/ModelosCoche/ifs07.jpg";
import ifs08Img from "@/assets/fotos-y-videos/ModelosCoche/ifs08.jpg";

export const carsData = [
  {
    id: "ifs08",
    name: "IFS-08",
    season: "2025 / 2026",
    status: { es: "PROTOTIPO ACTUAL", en: "CURRENT PROTOTYPE" },
    image: ifs08Img,
    description: {
      es: "Octava generación del monoplaza y prototipo actual del equipo para la temporada 2025/2026. Concebido para consolidar el salto aerodinámico iniciado con el IFS-07, su desarrollo se centra en maximizar la fiabilidad y exprimir las lecciones aprendidas del primer paquete aerodinámico completo del equipo, con el objetivo de competir al más alto nivel en los principales eventos europeos de Formula Student.",
      en: "The eighth generation of the car and the team's current prototype for the 2025/2026 season. Conceived to consolidate the aerodynamic leap started with the IFS-07, its development focuses on maximising reliability and making the most of the lessons learned from the team's first full aerodynamic package, with the goal of competing at the highest level in the main European Formula Student events.",
    },
    specs: {
      powertrain: { es: "100% Eléctrico", en: "100% Electric" },
      weight: { es: "En desarrollo", en: "In development" },
      chassis: { es: "Tubular de Acero", en: "Steel Tubular Frame" },
      acceleration: { es: "Por determinar", en: "TBD" },
    },
    competitions: [],
  },
  {
    id: "ifs07",
    name: "IFS-07",
    season: "2024 / 2025",
    status: null,
    image: ifs07Img,
    description: {
      es: "Séptima generación y punto de inflexión en el rendimiento del equipo: el monoplaza más rápido y ligero de nuestra historia. Incorpora por primera vez un paquete aerodinámico completo, que redefine la carga aerodinámica y el comportamiento dinámico en curva. Con él superamos las inspecciones técnicas por cuarta vez consecutiva, firmamos un 1.º puesto en Diseño en Formula Student Spain y logramos un Top 10 en la clasificación general de Formula Student Germany.",
      en: "The seventh generation and a turning point in the team's performance: the fastest and lightest car in our history. It features a full aerodynamic package for the first time, redefining downforce and dynamic behaviour through corners. With it we passed technical inspections for the fourth consecutive year, took 1st place in Design at Formula Student Spain and achieved a Top 10 in the overall classification at Formula Student Germany.",
    },
    specs: {
      powertrain: { es: "100% Eléctrico (AWD)", en: "100% Electric (AWD)" },
      weight: { es: "210 kg", en: "210 kg" },
      chassis: { es: "Monocasco Fibra de Carbono", en: "Carbon Fibre Monocoque" },
      acceleration: { es: "2.7s (0-100 km/h)", en: "2.7s (0-100 km/h)" },
    },
    competitions: [
      {
        name: "Formula Student Germany",
        venue: { es: "Hockenheimring", en: "Hockenheimring" },
        result: { es: "TOP 10 overall", en: "TOP 10 overall" },
      },
      {
        name: "Formula Student Spain",
        venue: { es: "Circuit de Barcelona-Catalunya", en: "Circuit de Barcelona-Catalunya" },
        result: { es: "1st in Design", en: "1st in Design" },
      },
    ],
  },
  {
    id: "ifs06",
    name: "IFS-06",
    season: "2023 / 2024",
    status: null,
    image: ifs06Img,
    description: {
      es: "Sexta generación que consolidó nuestra proyección internacional. Marcó el debut del equipo en Formula Student Germany (Hockenheimring), la cita de referencia del campeonato, y nos dio nuestro primer podio en Business Plan en Italia. Con él completamos, además, nuestra primera prueba de Endurance disputada bajo lluvia, todo un hito de fiabilidad para el proyecto.",
      en: "The sixth generation, which consolidated our international profile. It marked the team's debut at Formula Student Germany (Hockenheimring), the benchmark event of the championship, and gave us our first Business Plan podium in Italy. With it we also completed our first Endurance event held in the rain, a real reliability milestone for the project.",
    },
    specs: {
      powertrain: { es: "100% Eléctrico (RWD)", en: "100% Electric (RWD)" },
      weight: { es: "235 kg", en: "235 kg" },
      chassis: { es: "Tubular de Acero optimizado", en: "Optimised Steel Tubular Frame" },
      acceleration: { es: "3.1s (0-100 km/h)", en: "3.1s (0-100 km/h)" },
    },
    competitions: [
      {
        name: "Formula Student Italy",
        venue: { es: "Autodromo Riccardo Paletti", en: "Autodromo Riccardo Paletti" },
        result: { es: "Podio Business Plan", en: "Business Plan Podium" },
      },
      {
        name: "Formula Student Germany",
        venue: { es: "Hockenheimring", en: "Hockenheimring" },
        result: { es: "Participación histórica", en: "Historic participation" },
      },
    ],
  },
  {
    id: "ifs05",
    name: "IFS-05",
    season: "2022 / 2023",
    status: null,
    image: ifs05Img,
    description: {
      es: "Quinta generación, desarrollada bajo una filosofía de diseño orientada a la fiabilidad y marcada por el mayor relevo generacional del equipo. La consolidación de los procesos de validación y la madurez alcanzada por la ingeniería se tradujeron en un vehículo notablemente más robusto y consistente: por primera vez participamos en todas las pruebas dinámicas de Formula Student Spain y firmamos una histórica 7.ª posición en la clasificación general.",
      en: "The fifth generation, developed under a reliability-focused design philosophy and marked by the biggest generational handover in the team's history. The consolidation of our validation processes and our engineering maturity resulted in a noticeably more robust and consistent vehicle: for the first time we took part in every dynamic event at Formula Student Spain and secured a historic 7th place in the overall classification.",
    },
    specs: {
      powertrain: { es: "100% Eléctrico (RWD)", en: "100% Electric (RWD)" },
      weight: { es: "245 kg", en: "245 kg" },
      chassis: { es: "Tubular de Acero", en: "Steel Tubular Frame" },
      acceleration: { es: "3.2s (0-100 km/h)", en: "3.2s (0-100 km/h)" },
    },
    competitions: [
      {
        name: "Formula Student Spain",
        venue: { es: "Circuit de Barcelona-Catalunya", en: "Circuit de Barcelona-Catalunya" },
        result: { es: "P7 Overall", en: "P7 Overall" },
      },
      {
        name: "Formula ATA Italy",
        venue: { es: "Autodromo Riccardo Paletti", en: "Autodromo Riccardo Paletti" },
        result: { es: "P2 Business Plan", en: "P2 Business Plan" },
      },
    ],
  },
  {
    id: "ifs04",
    name: "IFS-04",
    season: "2021 / 2022",
    status: null,
    image: ifs04Img,
    description: {
      es: "Cuarta generación, centrada en el detalle y la puesta a punto. Supuso un salto decisivo en fiabilidad: por primera vez el equipo superó con éxito las inspecciones técnicas tanto en Formula ATA Italy como en Formula Student Spain, participando en las pruebas dinámicas de ambas competiciones en un mismo verano.",
      en: "The fourth generation, focused on detail and fine-tuning. It brought a decisive leap in reliability: for the first time the team successfully passed technical inspections at both Formula ATA Italy and Formula Student Spain, taking part in the dynamic events of both competitions in the same summer.",
    },
    specs: {
      powertrain: { es: "100% Eléctrico", en: "100% Electric" },
      weight: { es: "255 kg", en: "255 kg" },
      chassis: { es: "Tubular de Acero", en: "Steel Tubular Frame" },
      acceleration: { es: "3.5s (0-100 km/h)", en: "3.5s (0-100 km/h)" },
    },
    competitions: [
      {
        name: "Formula Student Spain",
        venue: { es: "Montmeló", en: "Montmeló" },
        result: { es: "Inspecciones superadas", en: "Inspections passed" },
      },
      {
        name: "Formula ATA Italy",
        venue: { es: "Autodromo Riccardo Paletti", en: "Autodromo Riccardo Paletti" },
        result: { es: "Inspecciones superadas", en: "Inspections passed" },
      },
    ],
  },
  {
    id: "ifs03",
    name: "IFS-03",
    season: "2019 / 2021",
    status: null,
    image: ifs03Img,
    description: {
      es: "Tercera generación y el proyecto que superó la pandemia. Con un equipo que creció hasta más de 60 miembros, en agosto de 2021 alcanzamos un hito decisivo al poner en pista nuestro primer coche plenamente operativo. Logramos un 2.º puesto en Business Plan y un excelente feedback en diseño mecánico y eléctrico.",
      en: "The third generation and the project that got us through the pandemic. With a team that grew to more than 60 members, in August 2021 we reached a decisive milestone by putting our first fully operational car on track. We achieved 2nd place in Business Plan and excellent feedback on mechanical and electrical design.",
    },
    specs: {
      powertrain: { es: "100% Eléctrico", en: "100% Electric" },
      weight: { es: "265 kg", en: "265 kg" },
      chassis: { es: "Tubular de Acero", en: "Steel Tubular Frame" },
      acceleration: { es: "3.8s (0-100 km/h)", en: "3.8s (0-100 km/h)" },
    },
    competitions: [
      {
        name: "Formula Student Europe",
        venue: { es: "Varios", en: "Various" },
        result: { es: "P2 Business Plan", en: "P2 Business Plan" },
      },
    ],
  },
  {
    id: "ifs02",
    name: "IFS-02",
    season: "2018 / 2019",
    status: null,
    image: ifs02Img,
    description: {
      es: "Segunda generación, fruto de una profunda reestructuración organizativa y de la creación de los departamentos de gestión. Introdujo avances técnicos notables, destacando una nueva arquitectura de batería basada en celdas cilíndricas que mejoró sensiblemente la tecnología anterior.",
      en: "The second generation, the result of a deep organisational restructuring and the creation of the management departments. It introduced notable technical advances, most importantly a new battery architecture based on cylindrical cells that significantly improved on the previous technology.",
    },
    specs: {
      powertrain: { es: "100% Eléctrico", en: "100% Electric" },
      weight: { es: "275 kg", en: "275 kg" },
      chassis: { es: "Tubular de Acero", en: "Steel Tubular Frame" },
      acceleration: { es: "4.2s (0-100 km/h)", en: "4.2s (0-100 km/h)" },
    },
    competitions: [],
  },
  {
    id: "ifs01",
    name: "IFS-01",
    season: "2017 / 2018",
    status: null,
    image: ifs01Img,
    description: {
      es: "El origen de todo. Desarrollado en apenas un año por los miembros fundadores, fue el primer prototipo de nuestra historia. Con él debutamos en Formula Student Spain (Montmeló), sentando las bases técnicas y humanas sobre las que evolucionaría todo el proyecto.",
      en: "The origin of everything. Developed in barely a year by the founding members, it was the first prototype in our history. With it we made our debut at Formula Student Spain (Montmeló), laying the technical and human foundations on which the whole project would grow.",
    },
    specs: {
      powertrain: { es: "100% Eléctrico", en: "100% Electric" },
      weight: { es: "290 kg", en: "290 kg" },
      chassis: { es: "Tubular de Acero", en: "Steel Tubular Frame" },
      acceleration: { es: "4.5s (0-100 km/h)", en: "4.5s (0-100 km/h)" },
    },
    competitions: [
      {
        name: "Formula Student Spain",
        venue: { es: "Montmeló", en: "Montmeló" },
        result: { es: "Participación debut", en: "Debut participation" },
      },
    ],
  },
];

// Ayudante para encontrar un coche por su id (lo usará CarDetail.jsx)
export const getCarById = (id) => carsData.find((car) => car.id === id);
