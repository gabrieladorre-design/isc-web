import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

// --- IMPORTACIÓN DE ASSETS TEMPORALES ---
// Fondo para la portada (Hero)
const heroBg = "https://videos.pexels.com/video-files/3045237/3045237-uhd_2560_1440_25fps.mp4"; 
// Vídeo de presentación (Con controles)
const presentationVideo = "https://videos.pexels.com/video-files/5192083/5192083-uhd_2560_1440_25fps.mp4";
// Imagen del CAD
const carCad = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"; 

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
          <p className="slide-up delay-1">INNOVACIÓN. VELOCIDAD. FUTURO.</p>
          <div className="hero-buttons slide-up delay-2">
            <Link to="/team" className="btn-primary">CONOCE AL EQUIPO</Link>
            <Link to="/sponsor-us" className="btn-primary">PATROCÍNANOS</Link>
          </div>
        </div>
      </section>

    {/* 2. VÍDEO DE PRESENTACIÓN (SIN TÍTULO) */}
      <section className="presentation-section" ref={addToRefs}>
        <div className="presentation-container">
          <div className="video-wrapper">
            <video src={presentationVideo} controls poster="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80"></video>
          </div>
        </div>
      </section>

      {/* 3. QUIÉNES SOMOS + CAD (COCHE ELÉCTRICO) */}
      <section className="who-we-are-section" ref={addToRefs}>
        <div className="who-container">
          
          <div className="who-text">
            <h2>QUIÉNES SOMOS</h2>
            <div className="divider-left"></div>
            <p className="intro-text">
              Somos más de <strong>80 estudiantes</strong> de la Universidad Pontificia Comillas (ICAI). 
              Un equipo multidisciplinar de ingenieros mecánicos, electrónicos y perfiles de gestión (ADE) unidos por una pasión: ganar en la pista y liderar la innovación tecnológica.
            </p>
            <p>
              Diseñamos y fabricamos desde cero nuestro monoplaza para la Formula Student. Apostamos por el futuro desarrollando un sistema de propulsión <strong>100% Eléctrico</strong> de alto rendimiento, un chasis ultraligero y un paquete aerodinámico de vanguardia.
            </p>
            
            <div className="specs-highlights">
              <div className="highlight">
                <span className="icon">⚡</span>
                <span>Vehículo 100% Eléctrico</span>
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
              <img src={carCad} alt="Modelo CAD del coche" />
              <div className="tech-overlay">
                <span>IFS-07 // EV POWERTRAIN</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. MISIÓN Y VISIÓN */}
      <section className="mission-vision-section" ref={addToRefs}>
        <div className="mv-container">
          <div className="mv-card">
            <div className="icon-wrapper">🚀</div>
            <h3>NUESTRA MISIÓN</h3>
            <p>
              Formar a los ingenieros del futuro enfrentándolos a desafíos reales. 
              Fomentamos el talento, el trabajo en equipo y la excelencia técnica 
              a través de la competición automovilística más exigente a nivel universitario.
            </p>
          </div>
          <div className="mv-card">
            <div className="icon-wrapper">🌍</div>
            <h3>NUESTRA VISIÓN</h3>
            <p>
              Consolidarnos como un equipo referente en <strong>Formula Student Europe</strong>. 
              Diseñar vehículos cada vez más eficientes y competir al más alto nivel en los circuitos más emblemáticos: Montmeló, Hockenheim y Varano.
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
                <img src={`https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80&ixid=${num}`} alt="Gallery" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION FINAL */}
      <section className="cta-section" ref={addToRefs}>
        <div className="cta-content">
          <h2>¿QUIERES FORMAR PARTE DE LA HISTORIA?</h2>
          <p>Tanto si eres estudiante buscando un reto, como si eres una empresa buscando innovación.</p>
          <div className="cta-buttons">
            <Link to="/recruitment" className="btn-primary">ÚNETE COMO ALUMNO</Link>
            <Link to="/sponsor-us" className="btn-white">COLABORA COMO EMPRESA</Link>
          </div>
        </div>
      </section>

    </div>
  );
}