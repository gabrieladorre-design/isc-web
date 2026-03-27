import { useEffect, useRef, useState } from "react";
import "./History.scss";

// FOTOS (Placeholder) - OJO: Subimos 4 niveles porque estamos en motostudent/history/
import placeholderMoto from "../../../../assets/slider1.jpg"; 
import placeholderTeam from "../../../../assets/team-photo.jpg";

/* DATOS HISTÓRICOS INVENTADOS (MOTOSTUDENT) */
const timelineData = [
  {
    year: "2025",
    model: "IM-05",
    subtitle: "Aerodinámica y Ligereza",
    text: "El prototipo más ágil hasta la fecha. Redujimos un 15% el peso del chasis tubular y optimizamos el centro de gravedad. Superamos las exigentes inspecciones técnicas de MotorLand sin fallos.",
    stats: "Top 10 Dinámicas",
    imgCar: placeholderMoto,
    imgTeam: placeholderTeam
  },
  {
    year: "2024",
    model: "IM-04",
    subtitle: "Revolución Eléctrica",
    text: "Dimos un salto cualitativo con nuestro nuevo paquete de baterías customizado y un basculante de fabricación propia. Logramos nuestro mejor tiempo en la prueba de aceleración.",
    stats: "Mejor Aceleración",
    imgCar: placeholderMoto,
    imgTeam: placeholderTeam
  },
  {
    year: "2023",
    model: "IM-03",
    subtitle: "Fiabilidad en Pista",
    text: "Completamos la carrera principal en el circuito de Aragón demostrando una fiabilidad térmica excelente en nuestro motor eléctrico bajo condiciones de calor extremo.",
    stats: "Carrera Completada",
    imgCar: placeholderMoto,
    imgTeam: placeholderTeam
  },
  {
    year: "2021-2022",
    model: "IM-02",
    subtitle: "Desarrollo Virtual y Retorno",
    text: "Tras los retos operativos de la pandemia, el equipo se reestructuró para diseñar un sistema de control electrónico totalmente nuevo. Gran puntuación en la fase de Diseño.",
    stats: "Innovación Electrónica",
    imgCar: placeholderMoto,
    imgTeam: placeholderTeam
  },
  {
    year: "2018-2020",
    model: "IM-01",
    subtitle: "El Origen sobre Dos Ruedas",
    text: "Nace la división de motos del ISC Racing Team. En un tiempo récord, conseguimos fabricar nuestra primera moto eléctrica y presentarnos en la competición internacional MotoStudent.",
    stats: "El Primer Prototipo",
    imgCar: placeholderMoto,
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
        {/* 🛠️ Añadimos el evento onClick a las imágenes de la moto */}
        <div className="img-wrapper car" onClick={() => onImageClick(data.imgCar)}>
          <img src={data.imgCar} alt={`Moto ${data.model}`} />
          <div className="img-label">Prototipo</div>
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

export default function History() {
  // 🛠️ Estado para controlar la imagen ampliada
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <div className="history-page">
      <header className="history-header">
        <h1>Nuestra Evolución</h1>
        <p>Acelerando hacia el futuro en MotoStudent.</p>
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
            <h2>La Siguiente Generación</h2>
            <p>
              El equipo está inmerso en el diseño del <strong>IM-06</strong>. 
              Nuestro objetivo para la próxima edición en MotorLand Aragón es implementar telemetría en tiempo real y reducir drásticamente el peso del conjunto para competir por el podio internacional.
            </p>
          </div>
        </div>
        {/* ----------------------------- */}

        {/* RESTO DE LA HISTORIA */}
        {timelineData.map((item, index) => (
          <TimelineItem 
            key={index} 
            data={item} 
            index={index} 
            onImageClick={setZoomedImage} /* 🛠️ Pasamos la función */
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