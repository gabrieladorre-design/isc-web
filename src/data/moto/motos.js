// src/data/moto/motos.js
// ───────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE DATOS — Prototipos MotoStudent (ISC MS Racing).
//
// La competición MotoStudent se disputa cada dos años y el equipo debutó en
// 2018. Por tanto, la trayectoria se compone de cuatro ediciones bienales
// (2018, 2020, 2022 y 2024) y cuatro prototipos: IM-01 → IM-04.
//
// (Imágenes: URLs de stock temporales, a sustituir por material real.
//  Specs no disponibles de los prototipos antiguos marcadas como "N/D".)
// ───────────────────────────────────────────────────────────────────────────

export const motosData = [
  {
    id: "im04",
    name: "IM-04",
    season: "2024",
    status: "PROTOTIPO ACTUAL",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80",
    description: "Cuarta generación y prototipo más reciente del equipo, correspondiente a la edición 2024. Supuso un salto cualitativo en ingeniería propia: estrenamos un paquete de baterías customizado y un basculante de fabricación íntegramente interna. Con estas mejoras logramos nuestro mejor tiempo en la prueba de aceleración.",
    specs: {
      powertrain: "Motor Eléctrico 25kW",
      weight: "155 kg",
      chassis: "Multitubular de Acero / Basculante de Aluminio",
      acceleration: "3.5s (0-100 km/h)",
    },
    competitions: [
      { name: "MotoStudent International", venue: "MotorLand Aragón", result: "Mejor Aceleración" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: "im03",
    name: "IM-03",
    season: "2022",
    status: "",
    image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1000&q=80",
    description: "Tercera generación, centrada en la fiabilidad. Completó la carrera principal en el circuito de MotorLand Aragón demostrando una excelente fiabilidad térmica del motor eléctrico bajo condiciones de calor extremo.",
    specs: {
      powertrain: "Motor Eléctrico",
      weight: "N/D",
      chassis: "Multitubular de Acero",
      acceleration: "N/D",
    },
    competitions: [
      { name: "MotoStudent International", venue: "MotorLand Aragón", result: "Carrera completada" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: "im02",
    name: "IM-02",
    season: "2020",
    status: "",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80",
    description: "Segunda generación. Tras los retos operativos de la pandemia, el equipo se reestructuró y diseñó un sistema de control electrónico totalmente nuevo, obteniendo una gran puntuación en la fase de Diseño.",
    specs: {
      powertrain: "Motor Eléctrico",
      weight: "N/D",
      chassis: "Multitubular de Acero",
      acceleration: "N/D",
    },
    competitions: [
      { name: "MotoStudent International", venue: "MotorLand Aragón", result: "Destacados en fase de Diseño" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: "im01",
    name: "IM-01",
    season: "2018",
    status: "",
    image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1000&q=80",
    description: "Primera generación y origen de la división de motos del ISC Racing Team. En un tiempo récord fabricamos nuestra primera motocicleta eléctrica y debutamos en la competición internacional MotoStudent, sentando las bases del proyecto sobre dos ruedas.",
    specs: {
      powertrain: "Motor Eléctrico",
      weight: "N/D",
      chassis: "Multitubular de Acero",
      acceleration: "N/D",
    },
    competitions: [
      { name: "MotoStudent International", venue: "MotorLand Aragón", result: "Participación debut" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=600&q=80",
    ],
  },
];

// Ayudante para encontrar una moto por su id (lo usará MotoDetail.jsx)
export const getMotoById = (id) => motosData.find((moto) => moto.id === id);
