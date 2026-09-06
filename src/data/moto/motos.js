// src/data/moto/motos.js
// ───────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE DATOS — Prototipos MotoStudent (ISC MS Racing).
//
// La competición MotoStudent se disputa cada dos años y el equipo debutó en
// 2018. Por tanto, la trayectoria se compone de cuatro ediciones bienales
// (2018, 2020, 2022 y 2024) y cuatro prototipos: IM-01 → IM-04.
//
// Imágenes reales de cada modelo en assets/fotos-y-videos/ModelosMoto/.
// El prototipo actual (IM-04) incluye además el vídeo de presentación.
// (Specs no disponibles de los prototipos antiguos marcadas como "N/D" / "N/A".)
//
// Los textos que cambian de idioma van como { es: "...", en: "..." }.
// ───────────────────────────────────────────────────────────────────────────

import im01Img from "@/assets/fotos-y-videos/ModelosMoto/im01.jpg";
import im02Img from "@/assets/fotos-y-videos/ModelosMoto/im02.jpg";
import im03Img from "@/assets/fotos-y-videos/ModelosMoto/im03.jpg";
import im04Img from "@/assets/fotos-y-videos/ModelosMoto/im04.jpg";
import motoVideo from "@/assets/fotos-y-videos/HomeMoto/HomeVideoMoto.mp4";

export const motosData = [
  {
    id: "im04",
    name: "IM-04",
    season: "2024",
    status: { es: "PROTOTIPO ACTUAL", en: "CURRENT PROTOTYPE" },
    image: im04Img,
    video: motoVideo,
    description: {
      es: "Cuarta generación y prototipo más reciente del equipo, correspondiente a la edición 2024. Supuso un salto cualitativo en ingeniería propia: estrenamos un paquete de baterías customizado y un basculante de fabricación íntegramente interna. Con estas mejoras logramos nuestro mejor tiempo en la prueba de aceleración.",
      en: "The fourth generation and the team's most recent prototype, built for the 2024 edition. It marked a qualitative leap in in-house engineering: we introduced a custom battery pack and a swingarm manufactured entirely internally. With these improvements we recorded our best ever time in the acceleration event.",
    },
    specs: {
      powertrain: { es: "Motor Eléctrico 25kW", en: "25kW Electric Motor" },
      weight: { es: "155 kg", en: "155 kg" },
      chassis: {
        es: "Multitubular de Acero / Basculante de Aluminio",
        en: "Steel Multitubular Frame / Aluminium Swingarm",
      },
      acceleration: { es: "3.5s (0-100 km/h)", en: "3.5s (0-100 km/h)" },
    },
    competitions: [
      {
        name: "MotoStudent International",
        venue: { es: "MotorLand Aragón", en: "MotorLand Aragón" },
        result: { es: "Mejor Aceleración", en: "Best Acceleration" },
      },
    ],
    gallery: [im04Img],
  },
  {
    id: "im03",
    name: "IM-03",
    season: "2022",
    status: null,
    image: im03Img,
    description: {
      es: "Tercera generación, centrada en la fiabilidad. Completó la carrera principal en el circuito de MotorLand Aragón demostrando una excelente fiabilidad térmica del motor eléctrico bajo condiciones de calor extremo.",
      en: "The third generation, focused on reliability. It completed the main race at the MotorLand Aragón circuit, demonstrating excellent thermal reliability of the electric motor under extreme heat conditions.",
    },
    specs: {
      powertrain: { es: "Motor Eléctrico", en: "Electric Motor" },
      weight: { es: "N/D", en: "N/A" },
      chassis: { es: "Multitubular de Acero", en: "Steel Multitubular Frame" },
      acceleration: { es: "N/D", en: "N/A" },
    },
    competitions: [
      {
        name: "MotoStudent International",
        venue: { es: "MotorLand Aragón", en: "MotorLand Aragón" },
        result: { es: "Carrera completada", en: "Race completed" },
      },
    ],
    gallery: [im03Img],
  },
  {
    id: "im02",
    name: "IM-02",
    season: "2020",
    status: null,
    image: im02Img,
    description: {
      es: "Segunda generación. Tras los retos operativos de la pandemia, el equipo se reestructuró y diseñó un sistema de control electrónico totalmente nuevo, obteniendo una gran puntuación en la fase de Diseño.",
      en: "The second generation. After the operational challenges of the pandemic, the team restructured and designed a completely new electronic control system, earning a great score in the Design phase.",
    },
    specs: {
      powertrain: { es: "Motor Eléctrico", en: "Electric Motor" },
      weight: { es: "N/D", en: "N/A" },
      chassis: { es: "Multitubular de Acero", en: "Steel Multitubular Frame" },
      acceleration: { es: "N/D", en: "N/A" },
    },
    competitions: [
      {
        name: "MotoStudent International",
        venue: { es: "MotorLand Aragón", en: "MotorLand Aragón" },
        result: { es: "Destacados en fase de Diseño", en: "Standout in the Design phase" },
      },
    ],
    gallery: [im02Img],
  },
  {
    id: "im01",
    name: "IM-01",
    season: "2018",
    status: null,
    image: im01Img,
    description: {
      es: "Primera generación y origen de la división de motos del ISC Racing Team. En un tiempo récord fabricamos nuestra primera motocicleta eléctrica y debutamos en la competición internacional MotoStudent, sentando las bases del proyecto sobre dos ruedas.",
      en: "The first generation and the origin of the ISC Racing Team motorbike division. In record time we built our first electric motorbike and made our debut at the international MotoStudent competition, laying the foundations of the two-wheel project.",
    },
    specs: {
      powertrain: { es: "Motor Eléctrico", en: "Electric Motor" },
      weight: { es: "N/D", en: "N/A" },
      chassis: { es: "Multitubular de Acero", en: "Steel Multitubular Frame" },
      acceleration: { es: "N/D", en: "N/A" },
    },
    competitions: [
      {
        name: "MotoStudent International",
        venue: { es: "MotorLand Aragón", en: "MotorLand Aragón" },
        result: { es: "Participación debut", en: "Debut participation" },
      },
    ],
    gallery: [im01Img],
  },
];

// Ayudante para encontrar una moto por su id (lo usará MotoDetail.jsx)
export const getMotoById = (id) => motosData.find((moto) => moto.id === id);
