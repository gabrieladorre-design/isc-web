import { useEffect, useRef, useState } from "react";
import "./HistorySection.scss";

/**
 * Sección de "Nuestra Evolución" (timeline histórico) reutilizable para Coche y Moto.
 * El diseño y la lógica (timeline animado + lightbox) son idénticos; solo cambian
 * los datos del timeline, el subtítulo, la tarjeta de futuro y las etiquetas del vehículo.
 *
 * Los datos viven en src/data/history.js.
 *
 * Props:
 *  - subtitle:      subtítulo de la cabecera
 *  - timeline:      array de hitos { year, model, subtitle, text, stats, imgCar, imgTeam }
 *  - futureTitle:   título de la tarjeta "TEMPORADA 2026"
 *  - futureBody:    contenido JSX de la tarjeta de futuro
 *  - vehicleAlt:    palabra para el alt del vehículo ("Coche" / "Moto")
 *  - vehicleLabel:  etiqueta visible sobre la foto del vehículo ("Monoplaza" / "Prototipo")
 */

function TimelineItem({ data, index, onImageClick, vehicleAlt, vehicleLabel }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`timeline-row ${index % 2 === 0 ? "left" : "right"} ${isVisible ? "visible" : ""}`}
    >
      <div className="timeline-content">
        <span className="year-badge">{data.year}</span>
        <h2 className="model-title">{data.model}</h2>
        <h3 className="model-subtitle">{data.subtitle}</h3>
        <p className="model-desc">{data.text}</p>
        <span className="stat-badge">{data.stats}</span>
      </div>
      <div className="timeline-images">
        <div className="img-wrapper car" onClick={() => onImageClick(data.imgCar)}>
          <img src={data.imgCar} alt={`${vehicleAlt} ${data.model}`} />
        </div>
        <div className="img-wrapper team" onClick={() => onImageClick(data.imgTeam)}>
          <img src={data.imgTeam} alt={`Equipo ${data.year}`} />
        </div>
      </div>
      <div className="timeline-dot"></div>
    </div>
  );
}

export default function HistorySection({
  subtitle = "",
  timeline = [],
  futureTitle = "",
  futureBody = null,
  vehicleAlt = "Coche",
  vehicleLabel = "Monoplaza",
}) {
  // Estado para controlar qué imagen está ampliada
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <div className="history-page">
      <header className="history-header">
        <h1>Nuestra Evolución</h1>
        <p>{subtitle}</p>
      </header>

      <div className="timeline-container">
        {/* LÍNEA CENTRAL */}
        <div className="timeline-line"></div>

        {/* --- SECCIÓN FUTURO (2026) --- */}
        <div className="future-section">
          <div className="arrow-container">
            <div className="arrow-up"></div>
          </div>

          <div className="future-card">
            <div className="future-header">
              <span className="future-year">TEMPORADA 2026</span>
              <span className="future-tag">EN DESARROLLO</span>
            </div>
            <h2>{futureTitle}</h2>
            {futureBody}
          </div>
        </div>

        {/* RESTO DE LA HISTORIA */}
        {timeline.map((item, index) => (
          <TimelineItem
            key={index}
            data={item}
            index={index}
            onImageClick={setZoomedImage}
            vehicleAlt={vehicleAlt}
            vehicleLabel={vehicleLabel}
          />
        ))}
      </div>

      {/* MODAL LIGHTBOX: Se muestra solo si hay una imagen seleccionada */}
      {zoomedImage && (
        <div className="lightbox-overlay" onClick={() => setZoomedImage(null)}>
          <span className="close-btn">&times;</span>
          <img src={zoomedImage} alt="Ampliación" className="lightbox-img" />
        </div>
      )}
    </div>
  );
}
