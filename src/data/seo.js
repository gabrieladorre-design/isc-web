// src/data/seo.js
// ───────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE DATOS — Título y descripción de cada página para Google.
//
// La web es una SPA: sin esto, TODAS las rutas comparten el mismo título del
// index.html y Google se inventa los nombres de los enlaces que muestra debajo
// del resultado de búsqueda. Aquí damos a cada sección el nombre EXACTO que
// tiene en el menú, para que lo que sale en Google coincida con la web.
//
// Cada entrada: ruta → { title: { es, en }, description: { es, en } }
// El sufijo de marca ("| ISC Racing Team") se añade solo, no hay que ponerlo.
//
// Si añades una página nueva en App.jsx, añade aquí su entrada.
// ───────────────────────────────────────────────────────────────────────────

/* Nombre del sitio: se añade al final de cada título. */
export const SITE_NAME = "ISC Racing Team";

/* Dominio público, para las URLs canónicas. */
export const SITE_URL = "https://www.iscracingteam.com";

/* Descripción por defecto si una ruta no tuviera la suya. */
export const DEFAULT_DESCRIPTION = {
  es: "Equipo de competición universitario de la Universidad Pontificia Comillas (ICAI). Monoplazas eléctricos de Formula Student y motos eléctricas de MotoStudent.",
  en: "University motorsport team from Universidad Pontificia Comillas (ICAI). Electric Formula Student cars and electric MotoStudent bikes.",
};

export const PAGE_META = {
  /* ===== PÁGINA DE ENTRADA ===== */
  "/": {
    title: {
      es: "ISC Racing Team | Formula Student y MotoStudent — ICAI Comillas",
      en: "ISC Racing Team | Formula Student and MotoStudent — ICAI Comillas",
    },
    description: {
      es: "Equipo de competición universitario de ICAI Comillas. Elige división: Formula Student (monoplaza eléctrico) o MotoStudent (moto eléctrica).",
      en: "University motorsport team from ICAI Comillas. Choose a division: Formula Student (electric car) or MotoStudent (electric bike).",
    },
    /* La entrada no lleva sufijo: el título ya es el de la marca. */
    brandSuffix: false,
  },

  /* ===== FORMULA STUDENT (COCHE) ===== */
  "/formula": {
    title: { es: "Formula Student", en: "Formula Student" },
    description: {
      es: "División de Formula Student del ISC Racing Team: diseñamos, fabricamos y competimos con monoplazas eléctricos en los principales eventos europeos.",
      en: "The ISC Racing Team Formula Student division: we design, build and race electric cars at the main European events.",
    },
  },
  "/history": {
    title: { es: "Historia", en: "History" },
    description: {
      es: "Nuestra evolución desde 2017: del IFS-01 al IFS-08, monoplaza a monoplaza y temporada a temporada.",
      en: "Our evolution since 2017: from the IFS-01 to the IFS-08, car by car and season by season.",
    },
  },
  "/garaje": {
    title: { es: "Garaje", en: "Garage" },
    description: {
      es: "Todos los monoplazas del ISC Racing Team, del IFS-01 al IFS-08, con sus especificaciones técnicas y su palmarés.",
      en: "Every ISC Racing Team car, from the IFS-01 to the IFS-08, with technical specifications and results.",
    },
  },
  "/team": {
    title: { es: "Equipo", en: "Team" },
    description: {
      es: "Las personas detrás del monoplaza: organigrama, departamentos e ingenieros del ISC FS Racing Team.",
      en: "The people behind the car: structure, departments and engineers of the ISC FS Racing Team.",
    },
  },
  "/formula-student": {
    title: { es: "Qué es Formula Student", en: "What is Formula Student" },
    description: {
      es: "Qué es la competición Formula Student: pruebas estáticas y dinámicas, reglamento y por qué es el mayor evento de ingeniería estudiantil del mundo.",
      en: "What the Formula Student competition is: static and dynamic events, rules, and why it is the world's largest student engineering competition.",
    },
  },
  "/resultados": {
    title: { es: "Resultados", en: "Results" },
    description: {
      es: "Palmarés histórico del ISC Racing Team y mapa de las competiciones europeas de Formula Student en las que participamos.",
      en: "The ISC Racing Team results record and a map of the European Formula Student competitions we take part in.",
    },
  },
  "/sponsors": {
    title: { es: "Patrocinadores", en: "Sponsors" },
    description: {
      es: "Las empresas que hacen posible el proyecto. Conoce a nuestros patrocinadores por niveles de colaboración.",
      en: "The companies that make the project possible. Meet our sponsors by partnership tier.",
    },
  },
  "/sponsor-us": {
    title: { es: "Patrocínanos", en: "Sponsor Us" },
    description: {
      es: "Colabora con el ISC Racing Team: modalidades de patrocinio, contraprestaciones y cómo ponerte en contacto con nosotros.",
      en: "Partner with the ISC Racing Team: sponsorship tiers, benefits and how to get in touch.",
    },
  },
  "/recruitment": {
    title: { es: "Únete al equipo", en: "Join the team" },
    description: {
      es: "Procesos de selección del ISC Racing Team: departamentos abiertos, perfiles que buscamos y cómo inscribirte.",
      en: "ISC Racing Team recruitment: open departments, the profiles we look for and how to apply.",
    },
  },
  "/contact": {
    title: { es: "Contacto", en: "Contact" },
    description: {
      es: "Ponte en contacto con el ISC Racing Team: formulario, correo electrónico y redes sociales.",
      en: "Get in touch with the ISC Racing Team: contact form, email and social media.",
    },
  },
  "/articles": {
    title: { es: "Actualidad", en: "News" },
    description: {
      es: "Newsletters del ISC Racing Team: avances, reportajes y actualidad del equipo temporada a temporada.",
      en: "ISC Racing Team newsletters: progress updates, features and team news season by season.",
    },
  },

  /* ===== MOTOSTUDENT (MOTO) ===== */
  "/moto": {
    title: { es: "MotoStudent", en: "MotoStudent" },
    description: {
      es: "División de MotoStudent del ISC Racing Team: diseñamos y fabricamos motos eléctricas de competición para MotorLand Aragón.",
      en: "The ISC Racing Team MotoStudent division: we design and build electric racing bikes for MotorLand Aragón.",
    },
  },
  "/moto/history": {
    title: { es: "Historia MotoStudent", en: "MotoStudent History" },
    description: {
      es: "La evolución de nuestras motos eléctricas desde 2018, prototipo a prototipo, del IM-01 en adelante.",
      en: "The evolution of our electric bikes since 2018, prototype by prototype, from the IM-01 onwards.",
    },
  },
  "/moto/garaje": {
    title: { es: "Garaje MotoStudent", en: "MotoStudent Garage" },
    description: {
      es: "Todos los prototipos de moto eléctrica del ISC MS Racing Team, con sus especificaciones técnicas y resultados.",
      en: "Every electric bike prototype of the ISC MS Racing Team, with technical specifications and results.",
    },
  },
  "/moto/team": {
    title: { es: "Equipo MotoStudent", en: "MotoStudent Team" },
    description: {
      es: "Las personas detrás del prototipo: organigrama, departamentos e ingenieros del ISC MS Racing Team.",
      en: "The people behind the prototype: structure, departments and engineers of the ISC MS Racing Team.",
    },
  },
  "/moto/motostudent": {
    title: { es: "Qué es MotoStudent", en: "What is MotoStudent" },
    description: {
      es: "Qué es la competición MotoStudent: fases, pruebas en MotorLand Aragón y qué se le exige a un equipo universitario.",
      en: "What the MotoStudent competition is: phases, events at MotorLand Aragón and what is required from a university team.",
    },
  },
  "/moto/resultados": {
    title: { es: "Resultados MotoStudent", en: "MotoStudent Results" },
    description: {
      es: "Palmarés de la división de motos del ISC Racing Team y circuitos donde competimos.",
      en: "The results record of the ISC Racing Team bike division and the circuits where we compete.",
    },
  },
  "/moto/sponsors": {
    title: { es: "Patrocinadores MotoStudent", en: "MotoStudent Sponsors" },
    description: {
      es: "Las empresas que hacen posible nuestra moto eléctrica de competición.",
      en: "The companies that make our electric racing bike possible.",
    },
  },
  "/moto/sponsor-us": {
    title: { es: "Patrocínanos — MotoStudent", en: "Sponsor Us — MotoStudent" },
    description: {
      es: "Colabora con la división de MotoStudent del ISC Racing Team: modalidades de patrocinio y contacto.",
      en: "Partner with the ISC Racing Team MotoStudent division: sponsorship tiers and contact.",
    },
  },
  "/moto/recruitment": {
    title: { es: "Únete a MotoStudent", en: "Join MotoStudent" },
    description: {
      es: "Procesos de selección de la división de motos: departamentos abiertos y cómo inscribirte.",
      en: "Recruitment for the bike division: open departments and how to apply.",
    },
  },
  "/moto/contact": {
    title: { es: "Contacto MotoStudent", en: "MotoStudent Contact" },
    description: {
      es: "Ponte en contacto con la división de MotoStudent del ISC Racing Team.",
      en: "Get in touch with the ISC Racing Team MotoStudent division.",
    },
  },
  "/moto/articles": {
    title: { es: "Actualidad MotoStudent", en: "MotoStudent News" },
    description: {
      es: "Newsletters de la división de motos: desarrollo del prototipo eléctrico mes a mes.",
      en: "Bike division newsletters: the development of our electric prototype month by month.",
    },
  },
};

/* Rutas con parámetro (detalle de un vehículo): se resuelven aparte. */
export const DETAIL_META = {
  car: {
    title: { es: "Monoplaza", en: "Car" },
    description: {
      es: "Ficha técnica y palmarés de este monoplaza del ISC Racing Team.",
      en: "Technical specifications and results for this ISC Racing Team car.",
    },
  },
  moto: {
    title: { es: "Prototipo", en: "Prototype" },
    description: {
      es: "Ficha técnica y palmarés de este prototipo de moto eléctrica del ISC Racing Team.",
      en: "Technical specifications and results for this ISC Racing Team electric bike prototype.",
    },
  },
};

/**
 * Devuelve { title, description } ya resueltos para una ruta y un idioma.
 *
 * @param {string} pathname  ruta actual (location.pathname)
 * @param {string} lang      "es" | "en"
 */
export function getPageMeta(pathname, lang) {
  /* Normaliza la ruta: sin barra final (salvo la raíz). */
  const path =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  const entry = PAGE_META[path];

  if (entry) {
    const base = entry.title[lang] ?? entry.title.es;
    return {
      title:
        entry.brandSuffix === false ? base : `${base} | ${SITE_NAME}`,
      description:
        (entry.description ?? DEFAULT_DESCRIPTION)[lang] ??
        DEFAULT_DESCRIPTION.es,
    };
  }

  /* Detalle de vehículo: /garaje/ifs08 o /moto/garaje/im05 */
  const isMotoDetail = path.startsWith("/moto/garaje/");
  const isCarDetail = path.startsWith("/garaje/");

  if (isCarDetail || isMotoDetail) {
    const kind = isMotoDetail ? DETAIL_META.moto : DETAIL_META.car;
    /* "ifs08" → "IFS-08", "im05" → "IM-05" */
    const id = path
      .split("/")
      .pop()
      .toUpperCase()
      .replace(/^([A-Z]+)(\d+)$/, "$1-$2");
    const label = kind.title[lang] ?? kind.title.es;
    return {
      title: `${label} ${id} | ${SITE_NAME}`,
      description: kind.description[lang] ?? kind.description.es,
    };
  }

  /* Cualquier otra ruta: título y descripción genéricos. */
  return {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION[lang] ?? DEFAULT_DESCRIPTION.es,
  };
}
