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
//
// ⚠️ SOBRE LAS ESPECIFICACIONES
// El campo `acceleration` (0-100 km/h) se retiró en septiembre de 2026: las
// cifras que había no estaban medidas. La ficha de detalle solo pinta la
// tarjeta de aceleración si el coche tiene ese campo, así que basta con
// volver a añadirlo aquí cuando se tengan datos reales de banco o de pista.
//
// ⚠️ SOBRE LOS RESULTADOS
// Las competiciones y posiciones de abajo están contrastadas con el histórico
// oficial del equipo en la FS World Ranking List:
// https://www.fs-world.org/university/1169/ev/ev
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
      es: "Octava generación del monoplaza y prototipo actual del equipo. Consolida el salto aerodinámico iniciado con el IFS-07 y lo convierte en fiabilidad: por primera vez en nuestra historia completamos todas las pruebas dinámicas —skidpad, aceleración, autocross y resistencia— en dos competiciones internacionales distintas, la Formula Student Austria del Red Bull Ring y la Formula Student Spain del Circuit de Barcelona-Catalunya. En Barcelona, además, acumulamos el mayor tiempo de testing de cualquier temporada. El IFS-08 marca también un hito tecnológico: la primera implementación en testing del proyecto Driverless, que sienta las bases del sistema autónomo que el equipo seguirá desarrollando. Es, con diferencia, el coche más fiable de la historia del ISC.",
      en: "The eighth generation of the car and the team's current prototype. It consolidates the aerodynamic leap started with the IFS-07 and turns it into reliability: for the first time in our history we completed every dynamic event — skidpad, acceleration, autocross and endurance — at two different international competitions, Formula Student Austria at the Red Bull Ring and Formula Student Spain at the Circuit de Barcelona-Catalunya. In Barcelona we also logged more testing time than in any previous season. The IFS-08 marks a technological milestone too: the first implementation of the Driverless project in testing, laying the foundations of the autonomous system the team will keep developing. It is by far the most reliable car in ISC's history.",
    },
    specs: {
      powertrain: { es: "100% Eléctrico", en: "100% Electric" },
      weight: { es: "222 kg", en: "222 kg" },
      chassis: { es: "Tubular de Acero", en: "Steel Tubular Frame" },
    },
    competitions: [
      {
        name: "Formula Student Austria",
        venue: { es: "Red Bull Ring (Spielberg)", en: "Red Bull Ring (Spielberg)" },
        result: {
          es: "Debut del equipo · Todas las pruebas dinámicas",
          en: "Team debut · All dynamic events",
        },
      },
      {
        name: "Formula Student Spain",
        venue: {
          es: "Circuit de Barcelona-Catalunya (Montmeló)",
          en: "Circuit de Barcelona-Catalunya (Montmeló)",
        },
        result: {
          es: "Todas las pruebas dinámicas completadas",
          en: "All dynamic events completed",
        },
      },
    ],
  },
  {
    id: "ifs07",
    name: "IFS-07",
    season: "2024 / 2025",
    status: null,
    image: ifs07Img,
    description: {
      es: "Séptima generación y punto de inflexión en el rendimiento del equipo: el monoplaza más ligero y rápido de nuestra historia. Incorpora por primera vez un paquete aerodinámico completo y una optimización general de todos los componentes, que redefinen la carga aerodinámica y el comportamiento dinámico en curva. Con él superamos las inspecciones técnicas por cuarta vez consecutiva en Formula Student Spain, la única competición a la que acudimos esa temporada.",
      en: "The seventh generation and a turning point in the team's performance: the lightest and fastest car in our history. It features a full aerodynamic package for the first time, along with an overall optimisation of every component, redefining downforce and dynamic behaviour through corners. With it we passed technical inspections for the fourth consecutive year at Formula Student Spain, the only competition we attended that season.",
    },
    specs: {
      powertrain: { es: "100% Eléctrico", en: "100% Electric" },
      weight: { es: "210 kg", en: "210 kg" },
      chassis: { es: "Tubular de Acero", en: "Steel Tubular Frame" },
    },
    competitions: [
      {
        name: "Formula Student Spain",
        venue: {
          es: "Circuit de Barcelona-Catalunya (Montmeló)",
          en: "Circuit de Barcelona-Catalunya (Montmeló)",
        },
        result: {
          es: "Cuarta vez superando todas las inspecciones técnicas",
          en: "Fourth year passing every technical inspection",
        },
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
      es: "Sexta generación y la temporada de las primeras victorias. Ganamos la prueba de Business Plan tanto en Formula Student Spain como en Formula ATA Italy, los primeros trofeos que llegaron a la vitrina del equipo. Marcó además nuestro debut en Formula Student Germany (Hockenheimring), la cita de referencia del campeonato eléctrico, y con él completamos en Italia la primera prueba de Endurance de nuestra historia, disputada bajo la lluvia.",
      en: "The sixth generation and the season of our first wins. We won the Business Plan event at both Formula Student Spain and Formula ATA Italy — the first trophies in the team's cabinet. It also marked our debut at Formula Student Germany (Hockenheimring), the benchmark event of the electric championship, and with it we completed the first Endurance race in our history, in Italy and in the rain.",
    },
    specs: {
      powertrain: { es: "100% Eléctrico", en: "100% Electric" },
      weight: { es: "235 kg", en: "235 kg" },
      chassis: { es: "Tubular de Acero optimizado", en: "Optimised Steel Tubular Frame" },
    },
    competitions: [
      {
        name: "Formula Student Spain",
        venue: {
          es: "Circuit de Barcelona-Catalunya (Montmeló)",
          en: "Circuit de Barcelona-Catalunya (Montmeló)",
        },
        result: { es: "1.º en Business Plan", en: "1st in Business Plan" },
      },
      {
        name: "Formula ATA Italy",
        venue: { es: "Autodromo Riccardo Paletti", en: "Autodromo Riccardo Paletti" },
        result: {
          es: "1.º en Business Plan · Primera Endurance del equipo",
          en: "1st in Business Plan · Team's first Endurance",
        },
      },
      {
        name: "Formula Student Germany",
        venue: { es: "Hockenheimring", en: "Hockenheimring" },
        result: { es: "Debut del equipo", en: "Team debut" },
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
      es: "Quinta generación, desarrollada bajo una filosofía de diseño orientada a la fiabilidad y marcada por el mayor relevo generacional del equipo. La consolidación de los procesos de validación y la madurez alcanzada por la ingeniería se tradujeron en un vehículo notablemente más robusto: en Formula Student Spain participamos por primera vez en todas las pruebas dinámicas y firmamos una histórica 7.ª posición en la clasificación general. En Formula ATA Italy duplicamos la puntuación en estáticas, con un 2.º puesto en Business Plan y un 3.º en Efficiency.",
      en: "The fifth generation, developed under a reliability-focused design philosophy and marked by the biggest generational handover in the team's history. The consolidation of our validation processes and our engineering maturity resulted in a noticeably more robust vehicle: at Formula Student Spain we took part in every dynamic event for the first time and secured a historic 7th place overall. At Formula ATA Italy we doubled our static scores, with 2nd place in Business Plan and 3rd in Efficiency.",
    },
    specs: {
      powertrain: { es: "100% Eléctrico", en: "100% Electric" },
      weight: { es: "245 kg", en: "245 kg" },
      chassis: { es: "Tubular de Acero", en: "Steel Tubular Frame" },
    },
    competitions: [
      {
        name: "Formula Student Spain",
        venue: {
          es: "Circuit de Barcelona-Catalunya (Montmeló)",
          en: "Circuit de Barcelona-Catalunya (Montmeló)",
        },
        result: {
          es: "P7 en la general · Todas las pruebas dinámicas",
          en: "P7 overall · Every dynamic event",
        },
      },
      {
        name: "Formula ATA Italy",
        venue: { es: "Autodromo Riccardo Paletti", en: "Autodromo Riccardo Paletti" },
        result: {
          es: "2.º en Business Plan · 3.º en Efficiency",
          en: "2nd in Business Plan · 3rd in Efficiency",
        },
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
      es: "Cuarta generación y el primer monoplaza del ISC que llegó a correr en pista. Planteada como una evolución del IFS-03 y centrada en el detalle y la puesta a punto, supuso un salto decisivo en fiabilidad: por primera vez el equipo superó las inspecciones técnicas tanto en Formula ATA Italy como en Formula Student Spain y participó en las pruebas dinámicas de ambas competiciones en un mismo verano. Fue también la temporada en la que pasamos a llamarnos ISC FS Racing Team y competimos por primera vez en el extranjero.",
      en: "The fourth generation and the first ISC car to actually race on track. Conceived as an evolution of the IFS-03 and focused on detail and fine-tuning, it brought a decisive leap in reliability: for the first time the team passed technical inspections at both Formula ATA Italy and Formula Student Spain and took part in the dynamic events of both competitions in the same summer. It was also the season we became the ISC FS Racing Team and raced abroad for the first time.",
    },
    specs: {
      powertrain: { es: "100% Eléctrico", en: "100% Electric" },
      weight: { es: "255 kg", en: "255 kg" },
      chassis: { es: "Tubular de Acero", en: "Steel Tubular Frame" },
    },
    competitions: [
      {
        name: "Formula Student Spain",
        venue: {
          es: "Circuit de Barcelona-Catalunya (Montmeló)",
          en: "Circuit de Barcelona-Catalunya (Montmeló)",
        },
        result: {
          es: "Primeras pruebas dinámicas del equipo",
          en: "Team's first dynamic events",
        },
      },
      {
        name: "Formula ATA Italy",
        venue: { es: "Autodromo Riccardo Paletti", en: "Autodromo Riccardo Paletti" },
        result: {
          es: "Inspecciones técnicas superadas",
          en: "Technical inspections passed",
        },
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
      es: "Tercera generación y el proyecto que superó la pandemia. Necesitó dos temporadas de desarrollo por culpa del covid, con un equipo que creció hasta más de 60 miembros, y en agosto de 2021 alcanzó un hito decisivo: fue el primer coche de la historia del ISC que llegó a arrancar y a funcionar plenamente, aunque nunca llegó a rodar en competición. Logramos un 2.º puesto en Business Plan —el primer podio del equipo— y un excelente feedback en diseño mecánico y eléctrico.",
      en: "The third generation and the project that got us through the pandemic. It took two seasons of development because of covid, with a team that grew to more than 60 members, and in August 2021 it reached a decisive milestone: it was the first car in ISC's history to start up and run fully, even though it never raced. We achieved 2nd place in Business Plan — the team's first podium — and excellent feedback on mechanical and electrical design.",
    },
    specs: {
      powertrain: { es: "100% Eléctrico", en: "100% Electric" },
      weight: { es: "265 kg", en: "265 kg" },
      chassis: { es: "Tubular de Acero", en: "Steel Tubular Frame" },
    },
    competitions: [
      {
        name: "Formula Student Spain",
        venue: {
          es: "Circuit de Barcelona-Catalunya (Montmeló)",
          en: "Circuit de Barcelona-Catalunya (Montmeló)",
        },
        result: {
          es: "2.º en Business Plan · Primer podio del equipo",
          en: "2nd in Business Plan · Team's first podium",
        },
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
      es: "Segunda generación y el momento en que el ISC dejó de ser un grupo de estudiantes para convertirse en un equipo: con la llegada de nuevos miembros se planteó la primera estructura organizada de nuestra historia, con departamentos de gestión propios. En lo técnico introdujo una nueva arquitectura de batería basada en celdas cilíndricas, inspirada en la que Tesla usa en sus modelos, que sigue siendo la base del acumulador que montamos hoy. El IFS-02 sentó las bases que permitieron llegar al IFS-03.",
      en: "The second generation, and the moment ISC stopped being a group of students and became a team: with new members joining, we set up the first organised structure in our history, with its own management departments. Technically it introduced a new battery architecture based on cylindrical cells, inspired by the one Tesla uses in its cars, which is still the basis of the accumulator we run today. The IFS-02 laid the groundwork that made the IFS-03 possible.",
    },
    specs: {
      powertrain: { es: "100% Eléctrico", en: "100% Electric" },
      weight: { es: "275 kg", en: "275 kg" },
      chassis: { es: "Tubular de Acero", en: "Steel Tubular Frame" },
    },
    competitions: [
      {
        name: "Formula Student Spain",
        venue: {
          es: "Circuit de Barcelona-Catalunya (Montmeló)",
          en: "Circuit de Barcelona-Catalunya (Montmeló)",
        },
        result: { es: "Participación", en: "Participation" },
      },
    ],
  },
  {
    id: "ifs01",
    name: "IFS-01",
    season: "2017 / 2018",
    status: null,
    image: ifs01Img,
    description: {
      es: "El origen de todo. Desarrollado en apenas un año por los miembros fundadores, fue el primer prototipo de nuestra historia. Con él debutamos en Formula Student Spain (Montmeló), sentando las bases técnicas y humanas sobre las que evolucionaría todo el proyecto. Varios de aquellos fundadores trabajan hoy en la Fórmula 1, la mejor prueba de hasta dónde puede llevar el ISC a quien pasa por él.",
      en: "The origin of everything. Developed in barely a year by the founding members, it was the first prototype in our history. With it we made our debut at Formula Student Spain (Montmeló), laying the technical and human foundations on which the whole project would grow. Several of those founders work in Formula 1 today — the best proof of how far ISC can take the people who go through it.",
    },
    specs: {
      powertrain: { es: "100% Eléctrico", en: "100% Electric" },
      weight: { es: "290 kg", en: "290 kg" },
      chassis: { es: "Tubular de Acero", en: "Steel Tubular Frame" },
    },
    competitions: [
      {
        name: "Formula Student Spain",
        venue: {
          es: "Circuit de Barcelona-Catalunya (Montmeló)",
          en: "Circuit de Barcelona-Catalunya (Montmeló)",
        },
        result: {
          es: "Primera competición del equipo",
          en: "Team's first competition",
        },
      },
    ],
  },
];

// Ayudante para encontrar un coche por su id (lo usará CarDetail.jsx)
export const getCarById = (id) => carsData.find((car) => car.id === id);
