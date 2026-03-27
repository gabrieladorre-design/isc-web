import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.scss"; 

// --- IMPORTACIÓN DE ASSETS TEMPORALES (VERSIÓN MOTO) ---
const heroBg = "https://videos.pexels.com/video-files/4384110/4384110-uhd_2560_1440_30fps.mp4"; 
const presentationVideo = "https://videos.pexels.com/video-files/5001713/5001713-uhd_2560_1440_30fps.mp4";
const motoCad = "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1000"; 

export default function Home() {
  const revealRefs = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.15 });

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="home-page">
      
      {/* 1. HERO SECTION (PORTADA) */}
      <section className="hero-section">
        <div className="video-overlay"></div>
        <video className="hero-video" src={heroBg} autoPlay loop muted playsInline />

        <div className="hero-content">
          <h1 className="slide-up">ISC RACING TEAM</h1>
          <p className="slide-up delay-1">COMPROMISO. TALENTO. PASIÓN.</p>
          <div className="hero-buttons slide-up delay-2">
            <Link to="/moto/team" className="btn-primary">NUESTRO EQUIPO</Link>
            <Link to="/moto/sponsors" className="btn-primary">PATROCÍNANOS</Link>
          </div>
        </div>
      </section>

      {/* 2. VÍDEO DE PRESENTACIÓN */}
      <section className="presentation-section" ref={addToRefs}>
        <div className="presentation-container">
          <div className="video-wrapper">
            <video src={presentationVideo} controls poster="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80"></video>
          </div>
        </div>
      </section>

      {/* 3. QUIÉNES SOMOS + CAD */}
      <section className="who-we-are-section" ref={addToRefs}>
        <div className="who-container">
          
          <div className="who-text">
            <h2>QUIÉNES SOMOS</h2>
            <div className="divider-left"></div>
            <p className="intro-text">
              El <strong>ISC MS Racing Team</strong> es el equipo de MotoStudent de la Universidad Pontificia Comillas.
            </p>
            <p>
              Está formado por <strong>20 estudiantes</strong>, mayoritariamente de la Escuela de Ingeniería ICAI, contando también con miembros de ICADE. Nuestro objetivo principal es claro: concebir, diseñar, fabricar y competir al más alto nivel con una motocicleta 100% eléctrica.
            </p>
            
            <div className="specs-highlights">
              <div className="highlight">
                <span className="icon">⚡</span>
                <span>Motocicleta 100% Eléctrica</span>
              </div>
              <div className="highlight">
                <span className="icon">🛠️</span>
                <span>Fabricación propia en ICAI</span>
              </div>
              <div className="highlight">
                <span className="icon">🏁</span>
                <span>Competición Internacional</span>
              </div>
            </div>
          </div>

          <div className="who-visual">
            <div className="cad-frame">
              <img src={motoCad} alt="Modelo CAD de la motocicleta" />
              <div className="tech-overlay">
                <span>IM-01 // EV POWERTRAIN</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. MISIÓN Y VISIÓN (RESTABLECIDO) */}
      <section className="mission-vision-section" ref={addToRefs}>
        <div className="mv-container">
          <div className="mv-card">
            <div className="icon-wrapper">🚀</div>
            <h3>NUESTRA MISIÓN</h3>
            <p>
              Formar a los ingenieros del futuro enfrentándolos a desafíos reales del sector de la automoción. 
              Fomentamos el talento, el trabajo en equipo y la excelencia técnica 
              a través de la competición universitaria de motociclismo más exigente del mundo.
            </p>
          </div>
          <div className="mv-card">
            <div className="icon-wrapper">🌍</div>
            <h3>NUESTRA VISIÓN</h3>
            <p>
              Consolidarnos como un equipo referente en el paddock de <strong>MotoStudent</strong>. 
              Diseñar prototipos eléctricos cada vez más eficientes y competir al más alto nivel.
            </p>
          </div>
        </div>
      </section>

      {/* 5. GALERÍA DESLIZANTE */}
      <section className="gallery-section">
        <h2>NUESTRA PASIÓN EN IMÁGENES</h2>
        <div className="gallery-slider">
          <div className="slider-track">
            {[1,2,3,4,5,6,1,2,3,4,5,6].map((num, i) => (
              <div key={i} className="slide">
                <img src={`https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80&ixid=${num}`} alt="Gallery Moto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION FINAL */}
      <section className="cta-section" ref={addToRefs}>
        <div className="cta-content">
          <h2>¿QUIERES FORMAR PARTE DEL PROYECTO?</h2>
          <p>Tanto si eres estudiante buscando un reto, como si eres una empresa apostando por la innovación en dos ruedas.</p>
          <div className="cta-buttons">
            <Link to="/moto/recruitment" className="btn-primary">ÚNETE COMO ALUMNO</Link>
            <Link to="/moto/sponsors" className="btn-white">COLABORA COMO EMPRESA</Link>
          </div>
        </div>
      </section>

    </div>
  );
}