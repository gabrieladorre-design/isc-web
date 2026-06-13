import "./ContactSection.scss";

// Iconos de redes sociales
import instagramIcon from "@/assets/redes/instagram.png";
import linkedinIcon from "@/assets/redes/linkedin.png";
import youtubeIcon from "@/assets/redes/youtube.png";

/**
 * Página de "Contacto" reutilizable para Coche y Moto.
 * Teléfono, sedes, redes y mapas son idénticos; solo cambian el subtítulo,
 * el email, el texto/descargas del dossier, los títulos de los mapas y las FAQ.
 *
 * Props:
 *  - headerSubtitle: subtítulo de la cabecera
 *  - email:          correo de contacto directo
 *  - dossierText:    descripción de la tarjeta de dossier
 *  - dossierEsHref / dossierEnHref: PDFs del dossier (ES / EN)
 *  - dossierFileES / dossierFileEN: nombre de archivo al descargar
 *  - mapTallerTitle / mapIcaiTitle: atributo title de los iframes de mapa
 *  - faqs:           array de { q, a } (a es JSX, puede contener enlaces)
 */
export default function ContactSection({
  headerSubtitle = "",
  email = "",
  dossierText = "",
  dossierEsHref = "#",
  dossierEnHref = "#",
  dossierFileES = "Dossier_ES.pdf",
  dossierFileEN = "Dossier_EN.pdf",
  mapTallerTitle = "Mapa Taller",
  mapIcaiTitle = "Mapa ICAI",
  faqs = [],
}) {
  return (
    <div className="contact-page">

      {/* CABECERA */}
      <header className="contact-header">
        <h1>Contacta con Nosotros</h1>
        <p>{headerSubtitle}</p>
      </header>

      <div className="contact-container">

        {/* --- COLUMNA IZQUIERDA: INFORMACIÓN --- */}
        <div className="info-column">

          <div className="contact-card highlight-border">
            <h3>💬 Contacto Directo</h3>
            <div className="contact-item">
              <span className="label">Teléfono (WhatsApp/Llamadas):</span>
              <a href="tel:+34609838646" className="phone-link">
                📞 +34 609 83 86 46
              </a>
            </div>
            <hr className="divider-soft"/>
            <div className="contact-item">
              <span className="label">Correo Electrónico:</span>
              <a href={`mailto:${email}`} className="main-email">
                ✉️ {email}
              </a>
            </div>
          </div>

          <div className="contact-card">
            <h3>📍 Nuestras Sedes</h3>
            <div className="location-block">
              <strong>🛠️ Taller & Garage (Trabajo Técnico)</strong>
              <p className="address">
                C/ Labradores, 7<br/>
                28660 Boadilla del Monte, Madrid
              </p>
            </div>
            <hr className="divider"/>
            <div className="location-block">
              <strong>🏛️ Sede Institucional (ICAI)</strong>
              <p className="address">
                C/ Alberto Aguilera 25<br/>
                28015, Madrid
              </p>
            </div>
          </div>

          <div className="contact-card highlight-card">
            <h3>📂 Dossier de Patrocinio</h3>
            <p>{dossierText}</p>

            <div className="dossier-buttons">
              <a href={dossierEsHref} download={dossierFileES} className="download-btn">
                VERSIÓN ESPAÑOL
              </a>
              <a href={dossierEnHref} download={dossierFileEN} className="download-btn">
                ENGLISH VERSION
              </a>
            </div>
          </div>

          <div className="contact-card social-card">
            <h3>🌐 Síguenos</h3>
            <div className="social-icons">
               <a href="https://www.instagram.com/iscfsracingteam/" target="_blank" rel="noreferrer">
                 <img src={instagramIcon} alt="Instagram" />
               </a>
               <a href="https://www.linkedin.com/company/iscracingteam/" target="_blank" rel="noreferrer">
                 <img src={linkedinIcon} alt="LinkedIn" />
               </a>
               <a href="https://www.youtube.com/@iscfsracingteam" target="_blank" rel="noreferrer">
                 <img src={youtubeIcon} alt="YouTube" />
               </a>
            </div>
          </div>

        </div>

        {/* --- COLUMNA DERECHA: MAPAS --- */}
        <div className="map-column">

          {/* MAPA 1: TALLER */}
          <div className="contact-card map-card">
            <h3>🛠️ Ubicación Taller (Boadilla)</h3>
            <div className="map-wrapper">
              <iframe
                src="https://maps.google.com/maps?q=Calle+Labradores,+7,+28660+Boadilla+del+Monte,+Madrid&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={mapTallerTitle}
              ></iframe>
            </div>
          </div>

          {/* MAPA 2: ICAI */}
          <div className="contact-card map-card">
            <h3>🏛️ Ubicación ICAI (Madrid)</h3>
            <div className="map-wrapper">
              <iframe
                src="https://maps.google.com/maps?q=Universidad+Pontificia+Comillas+ICAI,+Calle+de+Alberto+Aguilera,+25,+Madrid&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={mapIcaiTitle}
              ></iframe>
            </div>
          </div>

        </div>

      </div>

      {/* SECCIÓN FAQ */}
      <section className="faq-section">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-grid">
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}>
              <h4>{faq.q}</h4>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
