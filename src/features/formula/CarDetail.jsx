import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { carsData } from "@/data/formula/coches";
import Icon from "@/components/data-display/Icon";
import "./CarDetail.scss";

export default function CarDetail() {
  const { carId } = useParams();
  const revealRefs = useRef([]);
  
  const car = carsData.find((c) => c.id === carId);

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
  }, [carId]);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  // Fallback 404
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
      
     {/* Hero */}
      <header className="car-hero" style={{ backgroundImage: `url(${car.image})` }}>
        <div className="overlay"></div>
        <Link to="/garaje" className="btn-back"><Icon name="arrow-left" /> Volver al Garaje</Link>
      </header>

      {/* Bloque de información sobre fondo blanco para máxima legibilidad */}
      <section className="model-intro">
        {car.status && <span className="model-status">{car.status}</span>}
        <h1>{car.name}</h1>
        <p className="summary">{car.description}</p>
      </section>

      <div className="main-content-container">
        
        {/* Especificaciones técnicas */}
        <section className="specs-section" ref={addToRefs}>
          <h2>ESPECIFICACIONES TÉCNICAS</h2>
          <div className="specs-grid">
            <div className="spec-card"><Icon name="bolt" className="spec-icon" /> <small>Powertrain</small> <br/> {car.specs.powertrain}</div>
            <div className="spec-card"><Icon name="weight" className="spec-icon" /> <small>Peso Total</small> <br/> {car.specs.weight}</div>
            <div className="spec-card"><Icon name="tools" className="spec-icon" /> <small>Chasis</small> <br/> {car.specs.chassis}</div>
            <div className="spec-card"><Icon name="stopwatch" className="spec-icon" /> <small>0-100 km/h</small> <br/> {car.specs.acceleration}</div>
          </div>
        </section>

        {/* Historial de competición */}
        <section className="competitions-section" ref={addToRefs}>
          <h2>HISTORIAL DE COMPETICIÓN</h2>
          {car.competitions.length > 0 ? (
            <div className="comp-grid">
              {car.competitions.map((comp, index) => (
                <div key={index} className="comp-card">
                  <h4>{comp.name}</h4>
                  <p><Icon name="pin" /> {comp.venue}</p>
                  <p className="result"><Icon name="trophy" /> {comp.result}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-data">No hay datos de competición registrados para este modelo.</p>
          )}
        </section>

        {/* Galería */}
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