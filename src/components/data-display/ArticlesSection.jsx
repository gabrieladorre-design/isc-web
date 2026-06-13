import { useState, useEffect } from "react";
import "./ArticlesSection.scss";

/**
 * Sección de "Newsletters / Actualidad" reutilizable para Coche y Moto.
 * El diseño y la lógica (agrupado por año + visor modal de PDF) son idénticos;
 * solo cambian el subtítulo de la cabecera y la lista de newsletters.
 *
 * Los datos viven en src/data/articles.js.
 *
 * Props:
 *  - newsletters: array de newsletters { id, year, month, cover, file }
 *  - subtitle:    texto del subtítulo de la cabecera
 */
export default function ArticlesSection({ newsletters = [], subtitle = "" }) {
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Al cargar la página, que empiece arriba del todo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Agrupamos las newsletters por año automáticamente (ej: 2024-2025)
  const groupedNewsletters = newsletters.reduce((acc, newsletter) => {
    if (!acc[newsletter.year]) {
      acc[newsletter.year] = [];
    }
    acc[newsletter.year].push(newsletter);
    return acc;
  }, {});

  // Funciones para abrir y cerrar el PDF
  const openViewer = (file) => {
    setSelectedPdf(file);
    document.body.style.overflow = "hidden"; // Evita que el fondo haga scroll
  };

  const closeViewer = () => {
    setSelectedPdf(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="articles-page">
      {/* CABECERA */}
      <header className="articles-header">
        <h1>Newsletters</h1>
        <p>{subtitle}</p>
      </header>

      {/* Newsletters agrupadas por año */}
      <div className="newsletters-container">
        {Object.keys(groupedNewsletters).map((year) => (
          <div key={year} className="year-section">
            <h2 className="year-title">{year}</h2>

            <div className="newsletters-grid">
              {groupedNewsletters[year].map((item) => (
                <div
                  key={item.id}
                  className="newsletter-card"
                  onClick={() => openViewer(item.file)}
                >
                  <h3 className="month-title">{item.month}</h3>

                  <div className="card-image">
                    <img src={item.cover} alt={`Newsletter ${item.month}`} />
                    <div className="overlay">
                      <span>LEER PDF</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* VISOR MODAL DEL PDF REAL */}
      {selectedPdf && (
        <div className="pdf-modal-overlay" onClick={closeViewer}>
          <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeViewer}>
              &times;
            </button>
            {/* Este iframe carga el visor nativo de PDFs del navegador */}
            <iframe
              src={`${selectedPdf}#toolbar=0&view=FitH`}
              title="Visor PDF"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
