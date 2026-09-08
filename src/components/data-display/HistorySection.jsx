import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n";
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
 *  - futureTitle:   título de la tarjeta "TEMPORADA 2026" (opcional)
 *  - futureBody:    contenido JSX de la tarjeta de futuro (opcional)
 *
 * Si no se pasa ni futureTitle ni futureBody, la tarjeta de futuro no se pinta
 * y la línea del tiempo empieza directamente por el hito más reciente. Así lo
 * hace la sección de coche, donde el IFS-08 ya ocupa ese sitio.
 *  - vehicleAlt:    palabra para el alt del vehículo ("Coche" / "Moto")
 *  - vehicleLabel:  etiqueta visible sobre la foto del vehículo ("Monoplaza" / "Prototipo")
 */

function TimelineItem({ data, index, onImageClick, vehicleAlt, vehicleLabel }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const { t, tx } = useI18n();

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
        <h3 className="model-subtitle">{tx(data.subtitle)}</h3>
        <p className="model-desc">{tx(data.text)}</p>
        <span className="stat-badge">{tx(data.stats)}</span>
      </div>
      <div className="timeline-images">
        <div className="img-wrapper car" onClick={() => onImageClick(data.imgCar)}>
          <img src={data.imgCar} alt={`${vehicleAlt} ${data.model}`} />
        </div>
        <div className="img-wrapper team" onClick={() => onImageClick(data.imgTeam)}>
          <img src={data.imgTeam} alt={`${t("history.teamAlt")} ${data.year}`} />
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
  vehicleAlt = "",
  vehicleLabel = "",
}) {
  const { t } = useI18n();
  // Estado para controlar qué imagen está ampliada
  const [zoomedImage, setZoomedImage] = useState(null);

  /* La tarjeta "TEMPORADA 2026 / EN DESARROLLO" solo se pinta si se le pasa
     contenido. En la sección de coche ya no se pasa: ese hueco lo ocupa el
     IFS-08 como primer hito real de la línea del tiempo. */
  const hasFutureCard = Boolean(futureTitle || futureBody);

  return (
    <div className="history-page">
      <header className="history-header">
        <h1>{t("history.title")}</h1>
        <p>{subtitle}</p>
      </header>

      <div className="timeline-container">
        {/* LÍNEA CENTRAL */}
        <div className="timeline-line"></div>

        {/* --- SECCIÓN FUTURO (opcional) --- */}
        {hasFutureCard && (
          <div className="future-section">
            <div className="arrow-container">
              <div className="arrow-up"></div>
            </div>

            <div className="future-card">
              <div className="future-header">
                <span className="future-year">{t("history.futureSeason")}</span>
                <span className="future-tag">{t("history.futureTag")}</span>
              </div>
              <h2>{futureTitle}</h2>
              {futureBody}
            </div>
          </div>
        )}

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
          <img src={zoomedImage} alt={t("common.zoomedImageAlt")} className="lightbox-img" />
        </div>
      )}
    </div>
  );
}
