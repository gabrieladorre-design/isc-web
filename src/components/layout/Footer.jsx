import "./Footer.scss";

// Redes
import instagramIcon from "@/assets/redes/instagram.png";
import linkedinIcon from "@/assets/redes/linkedin.png";
import youtubeIcon from "@/assets/redes/youtube.png";

// Logos Generales
import icaiLogo from "@/assets/logos/icai-logo.svg";

// Logos Patrocinadores (Iberdrola sale en el footer)
import iberdrolaLogo from "@/assets/logospatros/iberdrola-logo.png";

/**
 * Pie de página reutilizable para Coche y Moto.
 * El diseño es idéntico; solo cambian el lema, el Instagram y el email,
 * que llegan por props (los valores por defecto son los de Formula Student).
 *
 * Props:
 *  - tagline:      lema bajo la marca ("ICAI Formula Student Team" / "ICAI Moto Student Team")
 *  - instagramUrl: enlace al Instagram de la disciplina
 *  - email:        correo de contacto
 */
export default function Footer({
  tagline = "ICAI Formula Student Team",
  instagramUrl = "https://www.instagram.com/iscfsracingteam/",
  email = "formulastudent@iscracingteam.com",
}) {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* COLUMNA IZQUIERDA */}
        <div className="footer__left">
          <h3 className="footer__brand">ISC Racing Team</h3>
          <p className="footer__tagline">{tagline}</p>

          <div className="footer__socials">
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/iscracingteam/?originalSubdomain=es" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://www.youtube.com/@iscfsracingteam" target="_blank" rel="noreferrer">
              <img src={youtubeIcon} alt="YouTube" />
            </a>
          </div>
        </div>

        {/* COLUMNA CENTRO */}
        <div className="footer__center">
          <a href="https://www.icai.comillas.edu/" target="_blank" rel="noreferrer">
             <img src={icaiLogo} alt="ICAI" className="logo-partner" />
          </a>
          <a href="https://www.iberdrola.com/" target="_blank" rel="noreferrer">
             <img src={iberdrolaLogo} alt="Iberdrola" className="logo-partner" />
          </a>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="footer__right">
          <p className="footer__uni">ICAI · Universidad Pontificia Comillas</p>
          <div className="footer__address-lines">
            <p>C/ Alberto Aguilera 25</p>
            <p>28015 Madrid</p>
          </div>
          <a href={`mailto:${email}`} className="footer__contact-link">
            Contact Us
          </a>
        </div>

      </div>
    </footer>
  );
}
