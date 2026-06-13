import { Link } from "react-router-dom";
import {
  SPONSOR_TIERS,
  TIER_LABELS,
  sponsorsByTier,
} from "@/data/sponsors";
import "./SponsorsSection.scss";

/**
 * Sección de "Patrocinadores" reutilizable para Coche y Moto.
 * El diseño (verde/amarillo ISC, tiers, tarjetas) es idéntico; solo cambian
 * el texto de introducción, la ruta de "Patrocínanos" y el texto del CTA final.
 *
 * Los datos (logos, urls, tiers, estilos) salen de src/data/sponsors.js, que es
 * la fuente única para ambas disciplinas.
 *
 * Props:
 *  - introText:     contenido JSX del párrafo de introducción
 *  - sponsorUsPath: ruta del botón "Patrocínanos" (p.ej. "/sponsor-us" o "/moto/sponsor-us")
 *  - ctaText:       texto del párrafo de la llamada a la acción final
 */

// Configuración de clases CSS por nivel de patrocinio.
const TIER_CONFIG = {
  title: { gridClass: "title-grid", cardClass: "sponsor-card title-card" },
  main: { gridClass: "main-grid", cardClass: "sponsor-card" },
  official: { gridClass: "official-grid", cardClass: "sponsor-card" },
  associate: { gridClass: "associate-grid", cardClass: "sponsor-card small" },
  institutional: { gridClass: "main-grid", cardClass: "sponsor-card title-card" },
};

export default function SponsorsSection({
  introText,
  sponsorUsPath = "/sponsor-us",
  ctaText = "Únete a nuestro equipo e impulsa la innovación.",
}) {
  return (
    <div className="sponsors-page">
      {/* 1. INTRODUCCIÓN (Verde) */}
      <section className="sponsors-intro">
        <div className="intro-content">
          <h1 className="intro-title">Nuestros Patrocinadores</h1>
          <div className="intro-divider"></div>
          <p className="intro-text">{introText}</p>

          {/* BOTÓN EN LA CABECERA */}
          <Link to={sponsorUsPath} className="sponsor-btn-top">
            PATROCÍNANOS
          </Link>
        </div>
      </section>

      {/* 2-6. NIVELES DE PATROCINIO */}
      {SPONSOR_TIERS.map((tier) => {
        const config = TIER_CONFIG[tier];
        const tierSponsors = sponsorsByTier(tier);
        if (tierSponsors.length === 0) return null;

        return (
          <section className={`sponsor-tier ${tier}-tier`} key={tier}>
            <div className="container">
              <h2 className="tier-title">{TIER_LABELS[tier]}</h2>
              <div className={`logo-grid ${config.gridClass}`}>
                {tierSponsors.map((sponsor) => (
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noreferrer"
                    className={config.cardClass}
                    key={sponsor.id}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      style={sponsor.style || {}}
                    />
                  </a>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* 7. LLAMADA A LA ACCIÓN FINAL */}
      <section className="join-sponsors-cta">
        <h2>¿Quieres ver tu marca aquí?</h2>
        <p>{ctaText}</p>
        <Link to={sponsorUsPath} className="sponsor-cta-btn">
          PATROCÍNANOS
        </Link>
      </section>
    </div>
  );
}
