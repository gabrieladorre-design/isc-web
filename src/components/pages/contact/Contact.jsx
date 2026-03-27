import "./Contact.scss";

// ICONOS REDES
import instagramIcon from "../../../assets/redes/instagram.png";
import linkedinIcon from "../../../assets/redes/linkedin.png";
import youtubeIcon from "../../../assets/redes/youtube.png";

// IMPORTA TUS DOSSIER
import dossierPdfES from "../../../assets/Dossier_ISC/Dossier_ISC_Formula_Student_[ES].pdf"; 
import dossierPdfEN from "../../../assets/Dossier_ISC/Dossier_ISC_Formula_Student_[EN].pdf"; 

export default function Contact() {
  
  return (
    <div className="contact-page">
      
      {/* CABECERA */}
      <header className="contact-header">
        <h1>Contacta con Nosotros</h1>
        <p>¿Tienes alguna duda o propuesta? Estamos aquí para escucharte.</p>
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
              <a href="mailto:formulastudent@iscracingteam.com" className="main-email">
                ✉️ formulastudent@iscracingteam.com
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
            <p>Descarga nuestro dossier oficial con toda la información de la temporada y opciones de colaboración.</p>
            
            <div className="dossier-buttons">
              <a href={dossierPdfES} download="Dossier_ISC_Formula_Student_ES.pdf" className="download-btn">
                VERSIÓN ESPAÑOL
              </a>
              <a href={dossierPdfEN} download="Dossier_ISC_Formula_Student_EN.pdf" className="download-btn">
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

        {/* --- COLUMNA DERECHA: MAPAS MÁS GRANDES Y CON PIN ROJO --- */}
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
                title="Mapa Taller"
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
                title="Mapa ICAI"
              ></iframe>
            </div>
          </div>

        </div>

      </div>

      {/* SECCIÓN FAQ */}
      <section className="faq-section">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>¿Cómo puedo unirme al equipo?</h4>
            <p>El proceso de selección suele abrirse en septiembre y enero. Visita la sección <a href="/recruitment">Recruitment</a> para ver si el plazo está abierto.</p>
          </div>
          <div className="faq-item">
            <h4>¿Buscáis patrocinadores?</h4>
            <p>¡Siempre! Si representas a una empresa interesada en apoyar el talento joven, descarga nuestro <strong>Dossier</strong> o llámanos.</p>
          </div>
          <div className="faq-item">
            <h4>¿Organizan visitas?</h4>
            <p>Sí, organizamos jornadas de puertas abiertas puntuales. Anunciamos las fechas en nuestro Instagram.</p>
          </div>
        </div>
      </section>

    </div>
  );
}