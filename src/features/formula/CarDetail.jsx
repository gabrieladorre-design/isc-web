import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { carsData } from "@/data/formula/coches";
import Icon from "@/components/data-display/Icon";
import { useI18n } from "@/i18n";
import "./CarDetail.scss";

export default function CarDetail() {
  const { carId } = useParams();
  const revealRefs = useRef([]);
  const { t, tx } = useI18n();
  
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
        <p>{t("detail.notFoundCar")}</p>
        <Link to="/garaje">{t("detail.back")}</Link>
      </div>
    );
  }

  return (
    <div className="car-detail-page">
      
     {/* Hero */}
      <header className="car-hero" style={{ backgroundImage: `url(${car.image})` }}>
        <div className="overlay"></div>
        <Link to="/garaje" className="btn-back"><Icon name="arrow-left" /> {t("detail.back")}</Link>
      </header>

      {/* Bloque de información sobre fondo blanco para máxima legibilidad */}
      <section className="model-intro">
        {car.status && <span className="model-status">{tx(car.status)}</span>}
        <h1>{car.name}</h1>
        <p className="summary">{tx(car.description)}</p>
      </section>

      <div className="main-content-container">
        
        {/* Especificaciones técnicas */}
        <section className="specs-section" ref={addToRefs}>
          <h2>{t("detail.specsTitle")}</h2>
          <div className="specs-grid">
            <div className="spec-card"><Icon name="bolt" className="spec-icon" /> <small>{t("detail.specs.powertrain")}</small> <br/> {tx(car.specs.powertrain)}</div>
            <div className="spec-card"><Icon name="weight" className="spec-icon" /> <small>{t("detail.specs.weight")}</small> <br/> {tx(car.specs.weight)}</div>
            <div className="spec-card"><Icon name="tools" className="spec-icon" /> <small>{t("detail.specs.chassis")}</small> <br/> {tx(car.specs.chassis)}</div>
            {/* La aceleración solo se pinta si el coche tiene el dato medido
                (ver la nota de src/data/formula/coches.js) */}
            {car.specs.acceleration && (
              <div className="spec-card"><Icon name="stopwatch" className="spec-icon" /> <small>{t("detail.specs.acceleration")}</small> <br/> {tx(car.specs.acceleration)}</div>
            )}
          </div>
        </section>

        {/* Historial de competición */}
        <section className="competitions-section" ref={addToRefs}>
          <h2>{t("detail.competitionsTitle")}</h2>
          {car.competitions.length > 0 ? (
            <div className="comp-grid">
              {car.competitions.map((comp, index) => (
                <div key={index} className="comp-card">
                  <h4>{comp.name}</h4>
                  <p><Icon name="pin" /> {tx(comp.venue)}</p>
                  <p className="result"><Icon name="trophy" /> {tx(comp.result)}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-data">{t("detail.noCompetitions")}</p>
          )}
        </section>

      </div>
    </div>
  );
}