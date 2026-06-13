// src/data/formula/coches.js
// ───────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE DATOS — Monoplazas Formula Student (ISC Racing).
// NOTA sobre imágenes: los campos "image" y "gallery" usan URLs temporales
// (fotos de stock de Unsplash que ya venían en el proyecto). Se sustituirán
// por las fotos reales cuando llegue el material de Marketing. Para usar una
// foto local en el futuro, colócala en /public/img/... y pon la ruta empezando
// por "/", por ejemplo: "/img/formula/coches/ifs07/portada.jpg".
//
// Para añadir un coche nuevo: copia un bloque { ... } completo y edítalo.
// ───────────────────────────────────────────────────────────────────────────

export const carsData = [
  {
    id: "ifs08",
    name: "IFS-08",
    season: "2025 / 2026",
    status: "PROTOTIPO ACTUAL",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80",
    description: "Preparando la nueva temporada para competir en los mejores eventos de Europa, optimizando la fiabilidad y aplicando las lecciones aprendidas de nuestro primer paquete aerodinámico.",
    specs: {
      powertrain: "100% Eléctrico",
      weight: "En desarrollo",
      chassis: "Monocasco Fibra de Carbono",
      acceleration: "TBD",
    },
    competitions: [],
    gallery: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: "ifs07",
    name: "IFS-07",
    season: "2024 / 2025",
    status: "",
    image: "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?auto=format&fit=crop&w=1000&q=80",
    description: "Supone un nuevo comienzo. Un prototipo que incorpora por primera vez un paquete aerodinámico, dando lugar al coche más rápido y ligero de nuestra historia.",
    specs: {
      powertrain: "100% Eléctrico (AWD)",
      weight: "210 kg",
      chassis: "Monocasco Fibra de Carbono",
      acceleration: "2.7s (0-100 km/h)",
    },
    competitions: [
      { name: "Formula Student Germany", venue: "Hockenheimring", result: "TOP 10 overall" },
      { name: "Formula Student Spain", venue: "Circuit de Barcelona-Catalunya", result: "1st in Design" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: "ifs06",
    name: "IFS-06",
    season: "2023 / 2024",
    status: "",
    image: "https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&w=1000&q=80",
    description: "Consolidó nuestra presencia internacional compitiendo por primera vez en FS Germany. Logramos nuestro primer podio en Business Plan en Italia y completamos la primera endurance bajo la lluvia.",
    specs: {
      powertrain: "100% Eléctrico (RWD)",
      weight: "235 kg",
      chassis: "Tubular de Acero optimizado",
      acceleration: "3.1s (0-100 km/h)",
    },
    competitions: [
      { name: "Formula Student Italy", venue: "Autodromo Riccardo Paletti", result: "Podio Business Plan" },
      { name: "Formula Student Germany", venue: "Hockenheimring", result: "Participación histórica" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: "ifs05",
    name: "IFS-05",
    season: "2022 / 2023",
    status: "",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1000&q=80",
    description: "Marcó un antes y un después con el mayor relevo generacional. Participamos por primera vez en todas las pruebas dinámicas en FS Spain y finalizamos en una histórica 7ª posición en el ranking general.",
    specs: {
      powertrain: "100% Eléctrico (RWD)",
      weight: "245 kg",
      chassis: "Tubular de Acero",
      acceleration: "3.2s (0-100 km/h)",
    },
    competitions: [
      { name: "Formula Student Spain", venue: "Circuit de Barcelona-Catalunya", result: "P7 Overall" },
      { name: "Formula ATA Italy", venue: "Autodromo Riccardo Paletti", result: "P2 Business Plan" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: "ifs04",
    name: "IFS-04",
    season: "2021 / 2022",
    status: "",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=80",
    description: "Una evolución clave que permitió centrarnos en el detalle. Por primera vez, el equipo superó con éxito las inspecciones técnicas en ambas competiciones del verano y participó en sus pruebas dinámicas.",
    specs: {
      powertrain: "100% Eléctrico",
      weight: "255 kg",
      chassis: "Tubular de Acero",
      acceleration: "3.5s (0-100 km/h)",
    },
    competitions: [
      { name: "Formula Student Spain", venue: "Montmeló", result: "Inspecciones superadas" },
      { name: "Formula ATA Italy", venue: "Autodromo Riccardo Paletti", result: "Inspecciones superadas" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: "ifs03",
    name: "IFS-03",
    season: "2019 / 2021",
    status: "",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=80",
    description: "El proyecto que superó una pandemia. El equipo creció a más de 60 miembros y en agosto de 2021 marcó un hito al ser nuestro primer coche plenamente operativo en arrancar en pista.",
    specs: {
      powertrain: "100% Eléctrico",
      weight: "265 kg",
      chassis: "Tubular de Acero",
      acceleration: "3.8s (0-100 km/h)",
    },
    competitions: [
      { name: "Formula Student Europe", venue: "Varios", result: "P2 Business Plan" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: "ifs02",
    name: "IFS-02",
    season: "2018 / 2019",
    status: "",
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=1000&q=80",
    description: "Fruto de un gran cambio organizativo y la creación de departamentos de gestión. Introdujo avances técnicos notables, destacando una nueva arquitectura de batería con celdas cilíndricas.",
    specs: {
      powertrain: "100% Eléctrico",
      weight: "275 kg",
      chassis: "Tubular de Acero",
      acceleration: "4.2s (0-100 km/h)",
    },
    competitions: [],
    gallery: [
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: "ifs01",
    name: "IFS-01",
    season: "2017 / 2018",
    status: "",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1000&q=80",
    description: "El origen de todo. Desarrollado en tan solo un año por los miembros fundadores, fue el primer prototipo de nuestra historia. Sentó las bases sobre las que evolucionaría el proyecto.",
    specs: {
      powertrain: "100% Eléctrico",
      weight: "290 kg",
      chassis: "Tubular de Acero",
      acceleration: "4.5s (0-100 km/h)",
    },
    competitions: [
      { name: "Formula Student Spain", venue: "Montmeló", result: "Participación debut" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=600&q=80",
    ],
  },
];

// Ayudante para encontrar un coche por su id (lo usará CarDetail.jsx)
export const getCarById = (id) => carsData.find((car) => car.id === id);