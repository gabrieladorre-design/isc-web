// src/data/moto/motos.js
// ───────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE DATOS — Prototipos MotoStudent (ISC MS Racing).
// (Imágenes: URLs de stock temporales, a sustituir por material real.)
// ───────────────────────────────────────────────────────────────────────────

export const motosData = [
  {
    id: "im06",
    name: "IM-06",
    season: "Temporada 2026",
    status: "EN DESARROLLO",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80",
    description: "Sexta generación del prototipo eléctrico, actualmente en desarrollo para la temporada 2026. Su diseño incorpora telemetría en tiempo real y una drástica reducción de peso, con el objetivo de dar el salto definitivo en rendimiento y pelear por el podio en MotorLand Aragón.",
    specs: {
      powertrain: "Motor Eléctrico 30kW",
      weight: "Objetivo: < 130 kg",
      chassis: "Multitubular de Acero de Alta Resistencia",
      acceleration: "TBD",
    },
    competitions: [],
    gallery: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: "im05",
    name: "IM-05",
    season: "2024 / 2025",
    status: "PROTOTIPO ACTUAL",
    image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1000&q=80",
    description: "Prototipo actual y el más ágil hasta la fecha. Redujimos un 15 % el peso del chasis multitubular y optimizamos el centro de gravedad para mejorar el paso por curva. Superamos sin fallos las exigentes inspecciones técnicas de MotorLand Aragón y firmamos un Top 10 en las pruebas dinámicas.",
    specs: {
      powertrain: "Motor Eléctrico 28kW",
      weight: "145 kg",
      chassis: "Multitubular de Acero",
      acceleration: "3.2s (0-100 km/h)",
    },
    competitions: [
      { name: "MotoStudent International", venue: "MotorLand Aragón", result: "Top 10 Dinámicas" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: "im04",
    name: "IM-04",
    season: "2023 / 2024",
    status: "",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80",
    description: "Cuarta generación que supuso un salto cualitativo en ingeniería propia: estrenamos un paquete de baterías customizado y un basculante de fabricación íntegramente interna. Con estas mejoras logramos nuestro mejor tiempo en la prueba de aceleración.",
    specs: {
      powertrain: "Motor Eléctrico 25kW",
      weight: "155 kg",
      chassis: "Acero / Basculante Aluminio",
      acceleration: "3.5s (0-100 km/h)",
    },
    competitions: [
      { name: "MotoStudent International", venue: "MotorLand Aragón", result: "Mejor Aceleración Equipo Rookie" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80",
    ],
  },
];

// Ayudante para encontrar una moto por su id (lo usará MotoDetail.jsx)
export const getMotoById = (id) => motosData.find((moto) => moto.id === id);