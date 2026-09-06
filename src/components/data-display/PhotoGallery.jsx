import { useState, useEffect, useCallback } from "react";
import { useI18n } from "@/i18n";
import "./PhotoGallery.scss";

/**
 * PhotoGallery — galería tipo masonry (CSS multicolumna) con lightbox.
 * Pensada para mostrar muchas fotos de forma elegante y ordenada,
 * adaptándose automáticamente al ancho disponible (responsive).
 *
 * Props:
 *  - images: array de URLs de imágenes (ya importadas / resueltas por Vite)
 *  - alt:    texto alternativo base (se numera por imagen). Si no se indica,
 *            se usa el texto traducido por defecto.
 */
export default function PhotoGallery({ images = [], alt = null }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;
  const { t } = useI18n();
  const altText = alt ?? t("common.galleryPhotoAlt");

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
            aria-label={`${t("common.enlargeImage")} ${i + 1}`}
          >
            <img src={src} alt={`${altText} ${i + 1}`} loading="lazy" />
            <span className="pg-zoom" aria-hidden="true">+</span>
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="pg-lightbox" onClick={close}>
          <button className="pg-close" onClick={close} aria-label={t("common.close")}>&times;</button>
          <button
            className="pg-nav pg-prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label={t("common.previous")}
          >&#8249;</button>
          <img
            src={images[activeIndex]}
            alt={`${altText} ${activeIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="pg-nav pg-next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label={t("common.next")}
          >&#8250;</button>
          <span className="pg-counter">{activeIndex + 1} / {images.length}</span>
        </div>
      )}
    </>
  );
}
