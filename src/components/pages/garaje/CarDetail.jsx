import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom"; // useParams lee la URL
import { carsData } from "./Garage"; // Importamos los datos detallados
import "./CarDetail.scss";

export default function CarDetail() {
  const { carId } = useParams(); // Cogemos el "carId" de la URL
  const revealRefs = useRef([]);
  
  // BUSCAMOS EL COCHE CORRECTO EN LOS DATOS
  const car = carsData.find((c) => c.id === carId);

  // EFECTO DE SCROLL
  useEffect(() => {
    window.scrollTo(0, 0); // Al cargar, subimos arriba de la página

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [carId]);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  // SI NO EXISTE EL COCHE, MOSTRAR ERROR 404
  if (!car) {
    return (
      <div className="error-page">
        <h1>404</h1>
        <p>Monoplaza no encontrado.</p>
        <Link to="/garaje">Volver al Garaje</Link>
      </div>
    );
  }

  return (
    <div className="car-detail-page">
      
     {/* 1. HERO SECTION (FOTO DE CABECERA ESPECTACULAR) */}
      <header className="car-hero" style={{ backgroundImage: `url(${car.image})` }}>
        <div className="overlay"></div>
        
        {/* HEMOS SACADO EL BOTÓN AQUÍ ARRIBA */}
        <Link to="/garaje" className="btn-back">← Volver al Garaje</Link>

        <div className="hero-content">
          <h1>{car.name}</h1>
          <p className="summary">{car.description}</p>
        </div>
      </header>

      <div className="main-content-container">
        
        {/* 2. CUADRÍCULA DE DATOS TÉCNICOS DETALLADOS */}
        <section className="specs-section" ref={addToRefs}>
          <h2>ESPECIFICACIONES TÉCNICAS</h2>
          <div className="specs-grid">
            <div className="spec-card">⚡ <small>Powertrain</small> <br/> {car.specs.powertrain}</div>
            <div className="spec-card">⚖️ <small>Peso Total</small> <br/> {car.specs.weight}</div>
            <div className="spec-card">🛠️ <small>Chasis</small> <br/> {car.specs.chassis}</div>
            <div className="spec-card">⏱️ <small>0-100 km/h</small> <br/> {car.specs.acceleration}</div>
          </div>
        </section>

        {/* 3. SECCIÓN DE COMPETICIONES Y RESULTADOS IMPORTANTES */}
        <section className="competitions-section" ref={addToRefs}>
          <h2>HISTORIAL DE COMPETICIÓN</h2>
          {car.competitions.length > 0 ? (
            <div className="comp-grid">
              {car.competitions.map((comp, index) => (
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

        {/* 4. GRAN GALERÍA DE FOTOS (EQUIPO Y COCHE EN PISTA) */}
        <section className="gallery-section" ref={addToRefs}>
          <h2>GALERÍA DE IMÁGENES</h2>
          <div className="image-grid">
            {car.gallery.map((imgUrl, index) => (
              <div key={index} className="gallery-item">
                <img src={imgUrl} alt={`${car.name} Gallery ${index}`} />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}