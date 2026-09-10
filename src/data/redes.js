// src/data/redes.js
// ───────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE DATOS — Perfiles del equipo en redes sociales.
//
// Aquí viven los enlaces oficiales de las dos divisiones. Si algún día cambia
// una cuenta, se cambia SOLO en este archivo y se actualiza en toda la web.
//
// ⚠️ LINKEDIN
// Hoy el ISC tiene una única página de empresa en LinkedIn, compartida por las
// dos divisiones, así que las dos constantes apuntan al mismo sitio. El día
// que ISC FS o ISC MS abran página propia, basta con cambiar la constante que
// corresponda: no hay que tocar ningún otro archivo.
//
// Dónde se usan:
//  - src/data/team.js y src/data/moto/team.js — respaldo para los jefes que
//    todavía no tienen perfil personal publicado.
//  - src/components/layout/Footer.jsx y ContactSection.jsx — iconos de redes.
// ───────────────────────────────────────────────────────────────────────────

/* --- LINKEDIN --- */
export const ISC_LINKEDIN_FS = "https://www.linkedin.com/company/iscracingteam/";
export const ISC_LINKEDIN_MS = "https://www.linkedin.com/company/iscracingteam/";

/* --- INSTAGRAM --- */
export const ISC_INSTAGRAM_FS = "https://www.instagram.com/iscfsracingteam/";
export const ISC_INSTAGRAM_MS = "https://www.instagram.com/iscmsracingteam/";
