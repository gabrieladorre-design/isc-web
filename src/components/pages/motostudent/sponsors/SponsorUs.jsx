import { useEffect } from "react";
import "./MotoSponsorUs.scss";

export default function MotoSponsorUs() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="moto-sponsor-us-page">
      
      {/* CABECERA */}
      <header className="su-header">
        <div className="header-content">
          <h1>Conviértete en Patrocinador</h1>
          <p>Únete a la división MotoStudent del ISC Racing Team e impulsa la innovación eléctrica.</p>
        </div>
      </header>

      {/* INTRODUCCIÓN Y BENEFICIOS */}
      <section className="su-intro">
        <div className="container">
          <div className="intro-text">
            <h2>¿Qué significa ser parte del ISC MS?</h2>
            <p>
              El ISC busca socios estratégicos que compartan la inquietud por la movilidad eléctrica y el emprendimiento, donde el apoyo al talento joven de ICAI e ICADE es el pilar fundamental.
            </p>
            <p>
              Buscamos crear un acuerdo en el que la empresa aporta recursos técnicos o económicos, y el equipo devuelve valor en forma de visibilidad internacional y acceso a ingenieros altamente cualificados.
            </p>
            <p>
              MotoStudent es la competición perfecta para aumentar la visibilidad de tu marca en un entorno tecnológico puntero como es el circuito de MotorLand Aragón.
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
              <span className="icon">⚡</span>
              <h3>Innovación EV</h3>
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
            
            <div className="tier-card premium">
              <div className="tier-header">
                <h3>TITLE SPONSOR</h3>
              </div>
              <div className="tier-body">
                <ul>
                  <li>Visibilidad máxima y prioritaria en el carenado y equipamiento oficial.</li>
                  <li>Oportunidades exclusivas de branding y personalización del prototipo.</li>
                  <li>Acceso prioritario al talento (CV Book) y a eventos privados del equipo.</li>
                  <li>Difusión premium en todas nuestras campañas y redes sociales.</li>
                </ul>
              </div>
            </div>

            <div className="tier-card">
              <div className="tier-header">
                <h3>MAIN SPONSOR</h3>
              </div>
              <div className="tier-body">
                <ul>
                  <li>Alta visibilidad en puntos clave del prototipo y equipamiento.</li>
                  <li>Contacto directo con nuestros ingenieros y acceso al talento del equipo.</li>
                  <li>Participación destacada en nuestros eventos y exhibiciones.</li>
                  <li>Presencia constante en nuestros canales de comunicación corporativa.</li>
                </ul>
              </div>
            </div>

            <div className="tier-card">
              <div className="tier-header">
                <h3>OFFICIAL SPONSOR</h3>
              </div>
              <div className="tier-body">
                <ul>
                  <li>Presencia de marca representativa en el prototipo y equipamiento.</li>
                  <li>Invitación a eventos clave y exhibiciones del equipo en pista.</li>
                  <li>Difusión regular en nuestras redes sociales y plataformas digitales.</li>
                </ul>
                <p className="tier-note">*El patrocinio de software y componentes técnicos se incluye en esta categoría según su alcance de colaboración.</p>
              </div>
            </div>

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
          <h2>¿Listo para subirte a la moto?</h2>
          <p>Escríbenos para organizar una reunión y explorar cómo podemos colaborar juntos en el desarrollo del próximo prototipo.</p>
          
          <a href="mailto:motostudent@iscracingteam.com?subject=Interés%20en%20Patrocinio%20MotoStudent" className="btn-email">
            CONTACTAR POR EMAIL
          </a>
        </div>
      </section>

    </div>
  );
}