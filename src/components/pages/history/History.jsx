import { useEffect, useRef, useState } from "react";
import "./History.scss";

// FOTOS (Placeholder)
import placeholderCar from "../../../assets/slider1.jpg"; 
import placeholderTeam from "../../../assets/team-photo.jpg";

/* DATOS HISTÓRICOS (2025 -> 2017) */
const timelineData = [
  {
    year: "2025",
    model: "IFS-07",
    subtitle: "Aerodinámica y Velocidad",
    text: "El coche más rápido y ligero hasta la fecha. Incorpora por primera vez un paquete aerodinámico completo. Superamos todas las inspecciones técnicas por cuarta vez consecutiva.",
    stats: "Revolución Aerodinámica",
    imgCar: placeholderCar,
    imgTeam: placeholderTeam
  },
  {
    year: "2024",
    model: "IFS-06",
    subtitle: "Alemania y Lluvia",
    text: "Debut en Formula Student Germany, la cita de referencia. Logramos nuestro primer podio en Business Plan (Italia) y completamos una carrera de Endurance bajo la lluvia.",
    stats: "Podio Business Plan",
    imgCar: placeholderCar,
    imgTeam: placeholderTeam
  },
  {
    year: "2023",
    model: "IFS-05",
    subtitle: "Resultados Históricos",
    text: "Mejores resultados de nuestra historia: P7 ranking general en FS Spain. Completamos todas las pruebas dinámicas por primera vez y duplicamos la puntuación en estáticas en Italia.",
    stats: "P7 General FS Spain",
    imgCar: placeholderCar,
    imgTeam: placeholderTeam
  },
  {
    year: "2022",
    model: "IFS-04",
    subtitle: "Fiabilidad en Pista",
    text: "Por primera vez, el equipo superó con éxito las inspecciones técnicas tanto en Formula ATA Italy como en FS Spain, participando en las pruebas dinámicas de ambas competiciones.",
    stats: "Inspecciones Superadas",
    imgCar: placeholderCar,
    imgTeam: placeholderTeam
  },
  {
    year: "2020-2021",
    model: "IFS-03",
    subtitle: "Hito Operativo",
    text: "A pesar de la pandemia, logramos finalizar el primer coche plenamente operativo. Conseguimos un 2º puesto en Business Plan y un excelente feedback en diseño mecánico y eléctrico.",
    stats: "2º Business Plan",
    imgCar: placeholderCar,
    imgTeam: placeholderTeam
  },
  {
    year: "2019",
    model: "IFS-02",
    subtitle: "Crecimiento Técnico",
    text: "Con un equipo más grande, se desarrolló el IFS-02. Se introdujo una nueva arquitectura de batería basada en celdas cilíndricas (similar a Tesla), mejorando notablemente la tecnología anterior.",
    stats: "Nueva Batería",
    imgCar: placeholderCar,
    imgTeam: placeholderTeam
  },
  {
    year: "2017-2018",
    model: "IFS-01",
    subtitle: "El Origen",
    text: "En tan solo un año, desarrollamos el primer prototipo de nuestra historia. Con él, participamos en nuestra primera competición, Formula Student Spain (Montmeló), sentando las bases del proyecto.",
    stats: "Primer Prototipo",
    imgCar: placeholderCar,
    imgTeam: placeholderTeam
  }
];

function TimelineItem({ data, index, onImageClick }) {
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
        {/* 🛠️ Añadimos el evento onClick a las imágenes */}
        <div className="img-wrapper car" onClick={() => onImageClick(data.imgCar)}>
          <img src={data.imgCar} alt={`Coche ${data.model}`} />
          <div className="img-label">Monoplaza</div>
        </div>
        <div className="img-wrapper team" onClick={() => onImageClick(data.imgTeam)}>
          <img src={data.imgTeam} alt={`Equipo ${data.year}`} />
          <div className="img-label">Equipo</div>
        </div>
      </div>
      <div className="timeline-dot"></div>
    </div>
  );
}

function History() {
  // 🛠️ Estado para controlar qué imagen está ampliada
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <div className="history-page">
      <header className="history-header">
        <h1>Nuestra Evolución</h1>
        <p>Compitiendo en la élite europea desde 2017.</p>
      </header>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        <div className="future-section">
          <div className="arrow-container">
            <div className="arrow-up"></div>
          </div>
          
          <div className="future-card">
            <div className="future-header">
              <span className="future-year">TEMPORADA 2026</span>
              <span className="future-tag">EN DESARROLLO</span>
            </div>
            <h2>Innovación Autónoma</h2>
            <p>
              El ISC Racing Team lidera el camino hacia la <strong>Movilidad Autónoma</strong>. 
              Para 2026, estamos centrando nuestros esfuerzos en la implementación de los primeros 
              sistemas <em>driverless</em> dentro de Formula Student en Madrid, preparando a nuestros 
              ingenieros para los desafíos tecnológicos más exigentes del futuro.
            </p>
          </div>
        </div>

        {timelineData.map((item, index) => (
          <TimelineItem 
            key={index} 
            data={item} 
            index={index} 
            onImageClick={setZoomedImage} /* Pasamos la función al componente hijo */
          />
        ))}
      </div>

      {/* 🛠️ MODAL LIGHTBOX: Se muestra solo si hay una imagen seleccionada */}
      {zoomedImage && (
        <div className="lightbox-overlay" onClick={() => setZoomedImage(null)}>
          <span className="close-btn">&times;</span>
          <img src={zoomedImage} alt="Ampliación" className="lightbox-img" />
        </div>
      )}
    </div>
  );
}

export default History;