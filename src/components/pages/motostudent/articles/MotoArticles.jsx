import { useState, useEffect } from "react";
import "./MotoArticles.scss";

/* --- IMPORTACIONES --- */
// Subimos 4 niveles porque ahora estamos dentro de motostudent/articles
import coverDic from "../../../../assets/articulos/cover-dic.png"; 
import pdfDic from "../../../../assets/articulos/newsletter-dic.pdf";

/* --- DATOS DE NEWSLETTERS (MOTOSTUDENT) --- */
const newslettersData = [
  {
    id: 1,
    year: "Temporada 2025-2026",
    month: "DICIEMBRE",
    cover: coverDic, // Puedes poner una foto de una moto en el futuro
    file: pdfDic     
  },
  // Puedes ir añadiendo más meses aquí
];

export default function MotoArticles() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const groupedNewsletters = newslettersData.reduce((acc, newsletter) => {
    if (!acc[newsletter.year]) {
      acc[newsletter.year] = [];
    }
    acc[newsletter.year].push(newsletter);
    return acc;
  }, {});

  const openViewer = (file) => {
    setSelectedPdf(file);
    document.body.style.overflow = "hidden"; 
  };

  const closeViewer = () => {
    setSelectedPdf(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="moto-articles-page">
      
      {/* CABECERA */}
      <header className="articles-header">
        <h1>Newsletters</h1>
        <p>Sigue el desarrollo de nuestro prototipo eléctrico mes a mes.</p>
      </header>

      {/* CONTENEDOR AGRUPADO POR AÑOS */}
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
            <button className="close-btn" onClick={closeViewer}>&times;</button>
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