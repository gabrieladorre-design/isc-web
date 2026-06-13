import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./GarageGrid.scss";

/**
 * Cuadrícula de "garaje" reutilizable para Coche y Moto.
 * El diseño (verde/amarillo ISC) es idéntico; solo cambian los textos,
 * la ruta de detalle y qué tarjetas se resaltan como "activas".
 *
 * Props:
 *  - items:     array de vehículos desde src/data/... (coches o motos)
 *  - subtitle:  texto del subtítulo de la cabecera
 *  - basePath:  ruta base del detalle, p.ej. "/garaje" o "/moto/garaje"
 *  - itemNoun:  palabra para el texto alternativo ("Monoplaza" / "Prototipo")
 *  - ctaPrefix: prefijo del botón ("SABER MÁS DEL" / "SABER MÁS DE LA")
 *  - activeIds: ids cuyo badge de estado se resalta en amarillo
 *  - title:     título de la cabecera (por defecto "EL GARAJE")
 */
export default function GarageGrid({
  items = [],
  subtitle = "",
  basePath = "",
  itemNoun = "Prototipo",
  ctaPrefix = "SABER MÁS DEL",
  activeIds = [],
  title = "EL GARAJE",
}) {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="garage-page">
      {/* CABECERA REDUCIDA */}
      <header className="garage-header">
        <h1 className="slide-up">{title}</h1>
        <p className="slide-up delay-1">{subtitle}</p>
      </header>

      {/* CUADRÍCULA DEL GARAJE */}
      <div className="showroom-grid-container">
        {items.map((item) => (
          <div className="car-card" key={item.id} ref={addToRefs}>
            <div className="card-visual">
              <img src={item.image} alt={`${itemNoun} ${item.name}`} />

              {item.status && (
                <div
                  className={`status-badge ${
                    activeIds.includes(item.id) ? "active" : ""
                  }`}
                >
                  {item.status}
                </div>
              )}
            </div>

            <div className="card-details">
              <h2>{item.name}</h2>
              <span className="season-tag">{item.season}</span>

              <Link to={`${basePath}/${item.id}`} className="btn-know-more">
                {ctaPrefix} {item.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
