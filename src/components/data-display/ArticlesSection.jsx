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
// Orden de meses (ES) para poder ordenar cronológicamente.
const MONTH_ORDER = {
  ENERO: 1, FEBRERO: 2, MARZO: 3, ABRIL: 4, MAYO: 5, JUNIO: 6,
  JULIO: 7, AGOSTO: 8, SEPTIEMBRE: 9, OCTUBRE: 10, NOVIEMBRE: 11, DICIEMBRE: 12,
};

// Clave numérica comparable a partir de year + month (más reciente = mayor).
const dateKey = (n) => {
  const yearNum = parseInt(String(n.year).match(/\d{4}/)?.[0] ?? "0", 10);
  const monthNum = MONTH_ORDER[String(n.month).toUpperCase()] ?? 0;
  return yearNum * 100 + monthNum;
};

export default function ArticlesSection({ newsletters = [], subtitle = "" }) {
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Al cargar la página, que empiece arriba del todo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Orden cronológico DESCENDENTE estricto (las más recientes primero),
  // independientemente del orden en que vengan en los datos.
  const sortedNewsletters = [...newsletters].sort((a, b) => dateKey(b) - dateKey(a));

  // Agrupamos las newsletters por año (preservando el orden descendente).
  const groupedNewsletters = sortedNewsletters.reduce((acc, newsletter) => {
    if (!acc[newsletter.year]) {
      acc[newsletter.year] = [];
    }
    acc[newsletter.year].push(newsletter);
    return acc;
  }, {});

  // Años ordenados de más reciente a más antiguo.
  const orderedYears = Object.keys(groupedNewsletters).sort(
    (a, b) => parseInt(b.match(/\d{4}/)?.[0] ?? "0", 10) - parseInt(a.match(/\d{4}/)?.[0] ?? "0", 10)
  );

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
        {orderedYears.map((year) => (
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
