import { useEffect } from "react";
import "./SponsorUsSection.scss";

/**
 * Página de "Conviértase en Patrocinador" reutilizable para Coche y Moto.
 * Orientada a ventas B2B: cabecera con imagen de impacto, propuesta de valor,
 * franja visual con fotografías reales y categorías de patrocinio.
 * Todo el contenido se pasa por props.
 *
 * Props:
 *  - headerImage:     imagen de fondo de la cabecera (foto de impacto)
 *  - headerSubtitle:  subtítulo de la cabecera
 *  - introTitle:      título de la sección de introducción
 *  - introParagraphs: JSX con los párrafos de la introducción
 *  - benefits:        array de { label, text } de la rejilla de beneficios
 *  - valueProps:      array de { value, label } de la banda de cifras/argumentos
 *  - pitchTitle / pitchText: titular y texto persuasivo de la franja visual
 *  - showcaseImages:  array de imágenes (foto de impacto) de la franja visual
 *  - tiers:           array de { name, premium?, items:[...], note? } de categorías
 *  - ctaTitle / ctaText: cabecera del CTA final
 *  - ctaEmailHref:    mailto completo del botón de contacto
 */
export default function SponsorUsSection({
  headerImage = null,
  headerSubtitle = "",
  introTitle = "",
  introParagraphs = null,
  benefits = [],
  valueProps = [],
  pitchTitle = "",
  pitchText = "",
  showcaseImages = [],
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

      {/* CABECERA CON IMAGEN DE IMPACTO */}
      <header
        className={`su-header${headerImage ? " has-image" : ""}`}
        style={headerImage ? { backgroundImage: `url(${headerImage})` } : undefined}
      >
        <div className="su-header__overlay" />
        <div className="header-content">
          <h1>Conviértase en Patrocinador</h1>
          <p>{headerSubtitle}</p>
          <a href={ctaEmailHref} className="su-header__cta">Quiero colaborar</a>
        </div>
      </header>

      {/* BANDA DE PROPUESTA DE VALOR (cifras / argumentos) */}
      {valueProps.length > 0 && (
        <section className="su-valueprops">
          <div className="container">
            {valueProps.map((v, i) => (
              <div className="vp-item" key={i}>
                <span className="vp-value">{v.value}</span>
                <span className="vp-label">{v.label}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* INTRODUCCIÓN Y BENEFICIOS (layout asimétrico) */}
      <section className="su-intro">
        <div className="container su-intro__grid">
          <div className="intro-text">
            <h2>{introTitle}</h2>
            {introParagraphs}
          </div>

          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div className="benefit-item" key={i}>
                <span className="benefit-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="benefit-body">
                  <h3>{b.label}</h3>
                  {b.text && <p className="benefit-text">{b.text}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRANJA VISUAL DE IMPACTO (fotografías reales + pitch de ventas) */}
      {(showcaseImages.length > 0 || pitchTitle) && (
        <section className="su-showcase">
          <div className="container">
            {(pitchTitle || pitchText) && (
              <div className="showcase-text">
                {pitchTitle && <h2>{pitchTitle}</h2>}
                {pitchText && <p>{pitchText}</p>}
              </div>
            )}
            {showcaseImages.length > 0 && (
              <div className="showcase-gallery">
                {showcaseImages.map((src, i) => (
                  <div className="showcase-img" key={i}>
                    <img src={src} alt="" loading="lazy" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

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
