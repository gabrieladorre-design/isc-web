import { useEffect } from "react";
import "./SponsorUs.scss";

export default function SponsorUs() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sponsor-us-page">
      
      {/* CABECERA */}
      <header className="su-header">
        <div className="header-content">
          <h1>Conviértete en Patrocinador</h1>
          <p>Únete al ISC Racing Team e impulsa la innovación y el talento joven.</p>
        </div>
      </header>

      {/* INTRODUCCIÓN Y BENEFICIOS */}
      <section className="su-intro">
        <div className="container">
          <div className="intro-text">
            <h2>¿Qué significa ser parte del ISC?</h2>
            <p>
              El ISC busca socios estratégicos que compartan la inquietud por la innovación y emprendimiento, donde el apoyo al talento joven es el pilar fundamental de la presente colaboración.
            </p>
            <p>
              Se busca crear un acuerdo técnico-corporativo en la que la empresa aporta recursos, ya sean de índole económica o técnica, y el equipo devuelve valor medible en forma de visibilidad y acceso al talento joven.
            </p>
            <p>
              Formula Student es una competición internacional de ingeniería que, dada su exposición al sector industrial y tecnológico mundial, supone el escaparate perfecto para las compañías interesadas en aumentar su visibilidad de marca en automovilismo.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="icon">👁️</span>
              <h3>Visibilidad</h3>
            </div>
            <div className="benefit-item">
              <span className="icon">🎓</span>
              <h3>Acceso a talento</h3>
            </div>
            <div className="benefit-item">
              <span className="icon">💡</span>
              <h3>Innovación</h3>
            </div>
            <div className="benefit-item">
              <span className="icon">✅</span>
              <h3>Validación</h3>
            </div>
            <div className="benefit-item">
              <span className="icon">📸</span>
              <h3>Imagen</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS DE PATROCINIO */}
      <section className="su-tiers">
        <div className="container">
          <h2 className="section-title">Categorías de Patrocinio</h2>
          
          <div className="tiers-grid">
            
            {/* TITLE SPONSOR */}
            <div className="tier-card premium">
              <div className="tier-header">
                <h3>TITLE SPONSOR</h3>
              </div>
              <div className="tier-body">
                <ul>
                  <li>Visibilidad máxima y prioritaria en el monoplaza y equipamiento oficial.</li>
                  <li>Oportunidades exclusivas de branding y personalización del vehículo.</li>
                  <li>Acceso prioritario al talento (CV Book) y a eventos privados del equipo.</li>
                  <li>Difusión premium en todas nuestras campañas y redes sociales.</li>
                </ul>
              </div>
            </div>

            {/* MAIN SPONSOR */}
            <div className="tier-card">
              <div className="tier-header">
                <h3>MAIN SPONSOR</h3>
              </div>
              <div className="tier-body">
                <ul>
                  <li>Alta visibilidad en puntos clave del monoplaza y equipamiento.</li>
                  <li>Contacto directo con nuestros ingenieros y acceso al talento del equipo.</li>
                  <li>Participación destacada en nuestros eventos y exhibiciones.</li>
                  <li>Presencia constante en nuestros canales de comunicación corporativa.</li>
                </ul>
              </div>
            </div>

            {/* OFFICIAL SPONSOR */}
            <div className="tier-card">
              <div className="tier-header">
                <h3>OFFICIAL SPONSOR</h3>
              </div>
              <div className="tier-body">
                <ul>
                  <li>Presencia de marca representativa en el monoplaza y equipamiento.</li>
                  <li>Invitación a eventos clave y exhibiciones del equipo en pista.</li>
                  <li>Difusión regular en nuestras redes sociales y plataformas digitales.</li>
                </ul>
                <p className="tier-note">*El patrocinio de software y herramientas se incluye en esta categoría según su alcance de colaboración.</p>
              </div>
            </div>

            {/* ASSOCIATE SPONSOR */}
            <div className="tier-card">
              <div className="tier-header">
                <h3>ASSOCIATE SPONSOR</h3>
              </div>
              <div className="tier-body">
                <ul>
                  <li>Visibilidad de marca en los activos de competición del equipo.</li>
                  <li>Menciones y presencia en nuestras campañas de comunicación.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA - CONTACTO POR EMAIL */}
      <section className="su-cta">
        <div className="container">
          <h2>¿Listo para subirte al monoplaza?</h2>
          <p>Escríbenos para organizar una reunión y explorar cómo podemos colaborar juntos esta temporada.</p>
          
          {/* BOTÓN CON EL EMAIL CORRECTO */}
          <a href="mailto:formulastudent@iscracingteam.com?subject=Interés%20en%20Patrocinio%20ISC" className="btn-email">
            CONTACTAR POR EMAIL
          </a>
        </div>
      </section>

    </div>
  );
}