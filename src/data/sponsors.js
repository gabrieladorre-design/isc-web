// src/data/sponsors.js
// ───────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE DATOS — Patrocinadores (compartido Coche + Moto).
// Campos:
//   tier:        "title" | "main" | "official" | "associate" | "institutional"
//   disciplina:  "formula" | "moto" | "ambas"  (hoy todos "ambas")
//   style:       opcional, estilos en línea heredados del diseño original
// ───────────────────────────────────────────────────────────────────────────

/* --- Institucional --- */
import icaiLogo from "../assets/logos/icai-logo5.png";

/* --- Title & Main --- */
import iberdrolaLogo from "../assets/logospatros/iberdrola-logo.png";
import gestampLogo from "../assets/logospatros/Fundaciongestamp.png";

/* --- Official --- */
import altairLogo from "../assets/logospatros/Altair.png";
import ansysLogo from "../assets/logospatros/ANSYS.png";
import dassaultLogo from "../assets/logospatros/DassaultSystèmes.png";
import foxgloveLogo from "../assets/logospatros/Foxglove.svg";
import keyshotLogo from "../assets/logospatros/keyshot.jpg";
import marpleLogo from "../assets/logospatros/marple.png";
import mobiosLogo from "../assets/logospatros/MOBIOS.png";
import rapidHarnessLogo from "../assets/logospatros/RapidHarness.png";
import siemensLogo from "../assets/logospatros/Siemens.png";
import teydeLogo from "../assets/logospatros/Teyde.png";
import valmoldesLogo from "../assets/logospatros/valmoldes.png";
import vectorLogo from "../assets/logospatros/Vector.svg";

/* --- Associate --- */
import alunidLogo from "../assets/logospatros/alunid.png";
import atesLogo from "../assets/logospatros/ates.png";
import cesvimapLogo from "../assets/logospatros/cesvimap.png";
import coiiLogo from "../assets/logospatros/ColegioDeIngenierosDeICAI.png";
import doroteoLogo from "../assets/logospatros/DoroteoOlmedo.png";
import festoLogo from "../assets/logospatros/Festo.png";
import feyjosaLogo from "../assets/logospatros/Feyjosa.png";
import cocheleLogo from "../assets/logospatros/GrupoCochele.png";
import huberLogo from "../assets/logospatros/Hubersuhner.png";
import ntnLogo from "../assets/logospatros/NTN.png";
import trimLogo from "../assets/logospatros/TrimComposites.png";
import wurthLogo from "../assets/logospatros/WurthElektronik.png";

export const sponsors = [
  // ── TITLE SPONSOR ──────────────────────────────────────────────
  {
    id: "iberdrola",
    name: "Iberdrola",
    logo: iberdrolaLogo,
    url: "https://www.iberdrola.com",
    tier: "title",
    disciplina: "ambas",
  },

  // ── MAIN SPONSOR ───────────────────────────────────────────────
  {
    id: "gestamp",
    name: "Fundación Gestamp",
    logo: gestampLogo,
    url: "https://www.fundaciongestamp.com",
    tier: "main",
    disciplina: "ambas",
  },

  // ── OFFICIAL SPONSORS ──────────────────────────────────────────
  { id: "altair", name: "ALTAIR", logo: altairLogo, url: "https://www.altair.com", tier: "official", disciplina: "ambas" },
  { id: "ansys", name: "ANSYS", logo: ansysLogo, url: "https://www.ansys.com", tier: "official", disciplina: "ambas" },
  { id: "dassault", name: "DASSAULT SYSTÈMES", logo: dassaultLogo, url: "https://www.3ds.com", tier: "official", disciplina: "ambas" },
  { id: "foxglove", name: "FOXGLOVE", logo: foxgloveLogo, url: "https://foxglove.dev", tier: "official", disciplina: "ambas" },
  { id: "keyshot", name: "KEYSHOT", logo: keyshotLogo, url: "https://www.keyshot.com", tier: "official", disciplina: "ambas" },
  { id: "marple", name: "MARPLE", logo: marpleLogo, url: "https://www.marpledata.com", tier: "official", disciplina: "ambas" },
  { id: "mobios", name: "MOBIOS", logo: mobiosLogo, url: "https://www.comillas.edu/en/mobios/", tier: "official", disciplina: "ambas" },
  { id: "rapidharness", name: "RAPIDHARNESS", logo: rapidHarnessLogo, url: "https://rapidharness.com", tier: "official", disciplina: "ambas" },
  { id: "siemens", name: "SIEMENS", logo: siemensLogo, url: "https://www.sw.siemens.com", tier: "official", disciplina: "ambas" },
  { id: "teyde", name: "TEYDE", logo: teydeLogo, url: "https://www.teydeingenieria.com/", tier: "official", disciplina: "ambas" },
  { id: "valmoldes", name: "VALMOLDES", logo: valmoldesLogo, url: "http://valmoldes.com/", tier: "official", disciplina: "ambas", style: { transform: "rotate(90deg)" } },
  { id: "vector", name: "VECTOR", logo: vectorLogo, url: "https://www.vector.com", tier: "official", disciplina: "ambas" },

  // ── ASSOCIATE SPONSORS ─────────────────────────────────────────
  { id: "alunid", name: "ALUNID", logo: alunidLogo, url: "https://alunid.com/es/", tier: "associate", disciplina: "ambas" },
  { id: "ates", name: "ATES 2003", logo: atesLogo, url: "https://soldaduratecnica.com/en/", tier: "associate", disciplina: "ambas" },
  { id: "cesvimap", name: "CESVIMAP", logo: cesvimapLogo, url: "https://www.cesvimap.com", tier: "associate", disciplina: "ambas" },
  { id: "coii", name: "COLEGIO ING. ICAI", logo: coiiLogo, url: "https://www.icai.es", tier: "associate", disciplina: "ambas" },
  { id: "doroteo", name: "DOROTEO OLMEDO", logo: doroteoLogo, url: "http://www.doroteoolmedo.com/", tier: "associate", disciplina: "ambas" },
  { id: "festo", name: "FESTO", logo: festoLogo, url: "https://www.festo.com", tier: "associate", disciplina: "ambas" },
  { id: "feyjosa", name: "FEYJOSA", logo: feyjosaLogo, url: "https://feyjosa.es/", tier: "associate", disciplina: "ambas" },
  { id: "cochele", name: "GRUPO COCHELE", logo: cocheleLogo, url: "https://grupocochele.com", tier: "associate", disciplina: "ambas" },
  { id: "huber", name: "HUBER+SUHNER", logo: huberLogo, url: "https://www.hubersuhner.com", tier: "associate", disciplina: "ambas" },
  { id: "ntn", name: "NTN-SNR", logo: ntnLogo, url: "https://www.ntn-snr.com/es", tier: "associate", disciplina: "ambas" },
  { id: "trim", name: "TRIM COMPOSITES", logo: trimLogo, url: "https://trimcomposites.com", tier: "associate", disciplina: "ambas" },
  { id: "wurth", name: "WURTH ELEKTRONIK", logo: wurthLogo, url: "https://www.we-online.com", tier: "associate", disciplina: "ambas" },

  // ── INSTITUTIONAL SUPPORT ──────────────────────────────────────
  {
    id: "icai",
    name: "ICAI",
    logo: icaiLogo,
    url: "https://www.comillas.edu",
    tier: "institutional",
    disciplina: "ambas",
    style: { maxWidth: "200px" },
  },
];

// Orden y etiquetas de cada nivel (los títulos exactos que muestra la web)
export const SPONSOR_TIERS = ["title", "main", "official", "associate", "institutional"];

export const TIER_LABELS = {
  title: "Title Sponsor",
  main: "Main Sponsor",
  official: "Official Sponsors",
  associate: "Associate Sponsors",
  institutional: "Institutional Support",
};

// Ayudantes para las páginas de sponsors
export const sponsorsByTier = (tier) => sponsors.filter((s) => s.tier === tier);
export const sponsorsByDiscipline = (d) =>
  sponsors.filter((s) => s.disciplina === d || s.disciplina === "ambas");