import { useEffect } from "react";
import "./SponsorUsSection.scss";

/**
 * Página de "Conviértase en Patrocinador" reutilizable para Coche y Moto.
 * La maqueta (cabecera + intro/beneficios + categorías + CTA email) es idéntica;
 * todo el contenido se pasa por props.
 *
 * Props:
 *  - headerSubtitle: subtítulo de la cabecera
 *  - introTitle:     título de la sección de introducción
 *  - introParagraphs: JSX con los párrafos de la introducción
 *  - benefits:       array de { icon, label } de la rejilla de beneficios
 *  - tiers:          array de { name, premium?, items:[...], note? } de categorías
 *  - ctaTitle / ctaText: cabecera del CTA final
 *  - ctaEmailHref:   mailto completo del botón de contacto
 */
export default function SponsorUsSection({
  headerSubtitle = "",
  introTitle = "",
  introParagraphs = null,
  benefits = [],
  tiers = [],
  ctaTitle = "",
  ctaText = "",
  ctaEmailHref = "#",
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sponsor-us-page">

      {/* CABECERA */}
      <header className="su-header">
        <div className="header-content">
          <h1>Conviértase en Patrocinador</h1>
          <p>{headerSubtitle}</p>
        </div>
      </header>

      {/* INTRODUCCIÓN Y BENEFICIOS */}
      <section className="su-intro">
        <div className="container">
          <div className="intro-text">
            <h2>{introTitle}</h2>
            {introParagraphs}
          </div>

          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div className="benefit-item" key={i}>
                <h3>{b.label}</h3>
                {b.text && <p className="benefit-text">{b.text}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORÍAS DE PATROCINIO */}
      <section className="su-tiers">
        <div className="container">
          <h2 className="section-title">Categorías de Patrocinio</h2>

          <div className="tiers-grid">
            {tiers.map((tier, i) => (
              <div className={`tier-card${tier.premium ? " premium" : ""}`} key={i}>
                <div className="tier-header">
                  <h3>{tier.name}</h3>
                </div>
                <div className="tier-body">
                  <ul>
                    {tier.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                  {tier.note && <p className="tier-note">{tier.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - CONTACTO POR EMAIL */}
      <section className="su-cta">
        <div className="container">
          <h2>{ctaTitle}</h2>
          <p>{ctaText}</p>

          <a href={ctaEmailHref} className="btn-email">
            CONTACTAR POR EMAIL
          </a>
        </div>
      </section>

    </div>
  );
}
