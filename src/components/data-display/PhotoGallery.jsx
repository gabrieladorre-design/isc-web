import { useState, useEffect, useCallback } from "react";
import "./PhotoGallery.scss";

/**
 * PhotoGallery — galería tipo masonry (CSS multicolumna) con lightbox.
 * Pensada para mostrar muchas fotos de forma elegante y ordenada,
 * adaptándose automáticamente al ancho disponible (responsive).
 *
 * Props:
 *  - images: array de URLs de imágenes (ya importadas / resueltas por Vite)
 *  - alt:    texto alternativo base (se numera por imagen)
 */
export default function PhotoGallery({ images = [], alt = "Fotografía del equipo ISC" }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % images.length),
    [images.length]
  );
  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  // Navegación por teclado y bloqueo de scroll cuando el lightbox está abierto
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, next, prev]);

  if (!images.length) return null;

  return (
    <>
      <div className="photo-gallery">
        {images.map((src, i) => (
          <button
            type="button"
            className="pg-item"
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Ampliar imagen ${i + 1}`}
          >
            <img src={src} alt={`${alt} ${i + 1}`} loading="lazy" />
            <span className="pg-zoom" aria-hidden="true">+</span>
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="pg-lightbox" onClick={close}>
          <button className="pg-close" onClick={close} aria-label="Cerrar">&times;</button>
          <button
            className="pg-nav pg-prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Anterior"
          >&#8249;</button>
          <img
            src={images[activeIndex]}
            alt={`${alt} ${activeIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="pg-nav pg-next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Siguiente"
          >&#8250;</button>
          <span className="pg-counter">{activeIndex + 1} / {images.length}</span>
        </div>
      )}
    </>
  );
}
