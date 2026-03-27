import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom"; 
import { motosData } from "./Garage"; // Importamos los datos de las motos
import "./MotoDetail.scss"; 

export default function MotoDetail() {
  const { motoId } = useParams(); 
  const revealRefs = useRef([]);
  
  const moto = motosData.find((m) => m.id === motoId);

  useEffect(() => {
    window.scrollTo(0, 0); 

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [motoId]);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  if (!moto) {
    return (
      <div className="error-page">
        <h1>404</h1>
        <p>Prototipo no encontrado.</p>
        <Link to="/moto/garaje">Volver al Garaje</Link>
      </div>
    );
  }

  return (
    <div className="car-detail-page">
      <header className="car-hero" style={{ backgroundImage: `url(${moto.image})` }}>
        <div className="overlay"></div>
        <Link to="/moto/garaje" className="btn-back">← Volver al Garaje</Link>
        <div className="hero-content">
          <h1>{moto.name}</h1>
          <p className="summary">{moto.description}</p>
        </div>
      </header>

      <div className="main-content-container">
        <section className="specs-section" ref={addToRefs}>
          <h2>ESPECIFICACIONES TÉCNICAS</h2>
          <div className="specs-grid">
            <div className="spec-card">⚡ <small>Powertrain</small> <br/> {moto.specs.powertrain}</div>
            <div className="spec-card">⚖️ <small>Peso Total</small> <br/> {moto.specs.weight}</div>
            <div className="spec-card">🛠️ <small>Chasis</small> <br/> {moto.specs.chassis}</div>
            <div className="spec-card">⏱️ <small>0-100 km/h</small> <br/> {moto.specs.acceleration}</div>
          </div>
        </section>

        <section className="competitions-section" ref={addToRefs}>
          <h2>HISTORIAL DE COMPETICIÓN</h2>
          {moto.competitions.length > 0 ? (
            <div className="comp-grid">
              {moto.competitions.map((comp, index) => (
                <div key={index} className="comp-card">
                  <h4>{comp.name}</h4>
                  <p>📍 {comp.venue}</p>
                  <p className="result">🏆 {comp.result}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-data">No hay datos de competición registrados para este modelo.</p>
          )}
        </section>

        <section className="gallery-section" ref={addToRefs}>
          <h2>GALERÍA DE IMÁGENES</h2>
          <div className="image-grid">
            {moto.gallery.map((imgUrl, index) => (
              <div key={index} className="gallery-item">
                <img src={imgUrl} alt={`${moto.name} Gallery ${index}`} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}