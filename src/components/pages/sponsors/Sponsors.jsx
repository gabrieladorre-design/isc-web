import { Link } from "react-router-dom";
import "./Sponsors.scss";

/* --- 1. LOGOS GENERALES (Institucional) --- */
import icaiLogo from "../../../assets/logos/icai-logo5.png"; 

/* --- 2. LOGOS PATROCINADORES (Carpeta logospatros) --- */
// Title & Main
import iberdrolaLogo from "../../../assets/logospatros/iberdrola-logo.png";
import gestampLogo from "../../../assets/logospatros/Fundaciongestamp.png"; 

// Official
import altairLogo from "../../../assets/logospatros/Altair.png";
import ansysLogo from "../../../assets/logospatros/ANSYS.png";
import dassaultLogo from "../../../assets/logospatros/DassaultSystèmes.png"; 
import foxgloveLogo from "../../../assets/logospatros/Foxglove.svg";
import keyshotLogo from "../../../assets/logospatros/keyshot.jpg";
import marpleLogo from "../../../assets/logospatros/marple.png"; 
import mobiosLogo from "../../../assets/logospatros/MOBIOS.png";
import rapidHarnessLogo from "../../../assets/logospatros/RapidHarness.png";
import siemensLogo from "../../../assets/logospatros/Siemens.png";
import teydeLogo from "../../../assets/logospatros/Teyde.png";
import valmoldesLogo from "../../../assets/logospatros/valmoldes.png";
import vectorLogo from "../../../assets/logospatros/Vector.svg";

// Associate
import alunidLogo from "../../../assets/logospatros/alunid.png";
import atesLogo from "../../../assets/logospatros/ates.png";
import cesvimapLogo from "../../../assets/logospatros/cesvimap.png";
import coiiLogo from "../../../assets/logospatros/ColegioDeIngenierosDeICAI.png"; 
import doroteoLogo from "../../../assets/logospatros/DoroteoOlmedo.png";
import festoLogo from "../../../assets/logospatros/Festo.png";
import feyjosaLogo from "../../../assets/logospatros/Feyjosa.png";
import cocheleLogo from "../../../assets/logospatros/GrupoCochele.png";
import huberLogo from "../../../assets/logospatros/Hubersuhner.png";
import ntnLogo from "../../../assets/logospatros/NTN.png";
import trimLogo from "../../../assets/logospatros/TrimComposites.png";
import wurthLogo from "../../../assets/logospatros/WurthElektronik.png";

function Sponsors() {
  
  /* --- CONFIGURACIÓN DE DATOS CON URLS --- */
  const officialSponsors = [
    { name: "ALTAIR", src: altairLogo, url: "https://www.altair.com" },
    { name: "ANSYS", src: ansysLogo, url: "https://www.ansys.com" },
    { name: "DASSAULT SYSTÈMES", src: dassaultLogo, url: "https://www.3ds.com" },
    { name: "FOXGLOVE", src: foxgloveLogo, url: "https://foxglove.dev" },
    { name: "KEYSHOT", src: keyshotLogo, url: "https://www.keyshot.com" },
    { name: "MARPLE", src: marpleLogo, url: "https://www.marpledata.com" },
    { name: "MOBIOS", src: mobiosLogo, url: "https://www.comillas.edu/en/mobios/" },
    { name: "RAPIDHARNESS", src: rapidHarnessLogo, url: "https://rapidharness.com" },
    { name: "SIEMENS", src: siemensLogo, url: "https://www.sw.siemens.com" },
    { name: "TEYDE", src: teydeLogo, url: "https://www.teydeingenieria.com/" }, 
    // AQUÍ EL ARREGLO: Añadimos un style para rotarlo 90 grados
    { name: "VALMOLDES", src: valmoldesLogo, url: "http://valmoldes.com/", style: { transform: "rotate(90deg)" } },
    { name: "VECTOR", src: vectorLogo, url: "https://www.vector.com" },
  ];

  const associateSponsors = [
    { name: "ALUNID", src: alunidLogo, url: "https://alunid.com/es/" },
    { name: "ATES 2003", src: atesLogo, url: "https://soldaduratecnica.com/en/" },
    { name: "CESVIMAP", src: cesvimapLogo, url: "https://www.cesvimap.com" },
    { name: "COLEGIO ING. ICAI", src: coiiLogo, url: "https://www.icai.es" },
    { name: "DOROTEO OLMEDO", src: doroteoLogo, url: "http://www.doroteoolmedo.com/" }, 
    { name: "FESTO", src: festoLogo, url: "https://www.festo.com" },
    { name: "FEYJOSA", src: feyjosaLogo, url: "https://feyjosa.es/" },
    { name: "GRUPO COCHELE", src: cocheleLogo, url: "https://grupocochele.com" },
    { name: "HUBER+SUHNER", src: huberLogo, url: "https://www.hubersuhner.com" },
    { name: "NTN-SNR", src: ntnLogo, url: "https://www.ntn-snr.com/es" },
    { name: "TRIM COMPOSITES", src: trimLogo, url: "https://trimcomposites.com" },
    { name: "WURTH ELEKTRONIK", src: wurthLogo, url: "https://www.we-online.com" },
  ];

  return (
    <div className="sponsors-page">
      
      {/* 1. INTRODUCCIÓN (Verde) */}
      <section className="sponsors-intro">
        <div className="intro-content">
          <h1 className="intro-title">Nuestros Patrocinadores</h1>
          <div className="intro-divider"></div>
          <p className="intro-text">
            El proyecto <strong>ISC Racing Team</strong> es una realidad gracias al apoyo de empresas líderes que apuestan por el talento joven y la innovación.
            <br /><br />
            Su colaboración técnica y económica nos permite diseñar, fabricar y competir al más alto nivel internacional.
            <br />
            <strong>¡Gracias por acompañarnos en cada curva!</strong>
          </p>
          
          {/* BOTÓN EN LA CABECERA */}
          <Link to="/sponsor-us" className="sponsor-btn-top">
            PATROCÍNANOS
          </Link>
        </div>
      </section>

      {/* 2. TITLE SPONSOR */}
      <section className="sponsor-tier title-tier">
        <div className="container">
          <h2 className="tier-title">Title Sponsor</h2>
          <div className="logo-grid title-grid">
            <a href="https://www.iberdrola.com" target="_blank" rel="noreferrer" className="sponsor-card title-card">
              <img src={iberdrolaLogo} alt="Iberdrola" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. MAIN SPONSOR */}
      <section className="sponsor-tier main-tier">
        <div className="container">
          <h2 className="tier-title">Main Sponsor</h2>
          <div className="logo-grid main-grid">
            <a href="https://www.fundaciongestamp.com" target="_blank" rel="noreferrer" className="sponsor-card">
              <img src={gestampLogo} alt="Fundación Gestamp" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. OFFICIAL SPONSORS */}
      <section className="sponsor-tier official-tier">
        <div className="container">
          <h2 className="tier-title">Official Sponsors</h2>
          <div className="logo-grid official-grid">
            {officialSponsors.map((sponsor, index) => (
              <a href={sponsor.url} target="_blank" rel="noreferrer" className="sponsor-card" key={index}>
                 {/* Aplicamos el estilo personalizado si existe (para rotar Valmoldes) */}
                 <img src={sponsor.src} alt={sponsor.name} style={sponsor.style || {}} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ASSOCIATE SPONSORS */}
      <section className="sponsor-tier associate-tier">
        <div className="container">
          <h2 className="tier-title">Associate Sponsors</h2>
          <div className="logo-grid associate-grid">
            {associateSponsors.map((sponsor, index) => (
              <a href={sponsor.url} target="_blank" rel="noreferrer" className="sponsor-card small" key={index}>
                 <img src={sponsor.src} alt={sponsor.name} style={sponsor.style || {}} />
              </a>
            ))}
          </div>
        </div>
      </section>

       {/* 6. APOYO INSTITUCIONAL */}
       <section className="sponsor-tier institutional-tier">
        <div className="container">
          <h2 className="tier-title">Institutional Support</h2>
          <div className="logo-grid main-grid">
            <a href="https://www.comillas.edu" target="_blank" rel="noreferrer" className="sponsor-card title-card">
               <img src={icaiLogo} alt="ICAI" style={{maxWidth: "200px"}} />
            </a>
          </div>
        </div>
      </section>

      {/* 7. LLAMADA A LA ACCIÓN FINAL */}
      <section className="join-sponsors-cta">
        <h2>¿Quieres ver tu marca aquí?</h2>
        <p>Únete a nuestro equipo e impulsa la innovación.</p>
        <Link to="/sponsor-us" className="sponsor-cta-btn">
          PATROCÍNANOS
        </Link>
      </section>

    </div>
  );
}

export default Sponsors;