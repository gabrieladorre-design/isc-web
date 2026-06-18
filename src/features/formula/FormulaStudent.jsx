import "./FormulaStudent.scss";
import AnimatedCounter from "@/components/data-display/AnimatedCounter";
import PhotoGallery from "@/components/data-display/PhotoGallery";

// Fondo del hero (FormulaStudentMedia)
import introBg from "@/assets/fotos-y-videos/pruebas/coche/fs-2024.jpg";

// Galería de fotos de competición (FormulaStudentMedia) — carga automática
const fsMediaMap = import.meta.glob(
  "../../assets/fotos-y-videos/pruebas/coche/*.{jpg,jpeg,png}",
  { eager: true, import: "default" }
);
const fsMedia = Object.keys(fsMediaMap).sort().map((k) => fsMediaMap[k]);
// Pruebas Dinámicas: exactamente 8 fotos; el resto van a Estáticas.
const DYNAMIC_COUNT = 8;
const staticPhotos = fsMedia.slice(0, Math.max(0, fsMedia.length - DYNAMIC_COUNT));
const dynamicPhotos = fsMedia.slice(Math.max(0, fsMedia.length - DYNAMIC_COUNT));

function FormulaStudent() {
  return (
    <div className="fs-page">

      {/* 1. INTRODUCCIÓN */}
      <section className="fs-intro" style={{ backgroundImage: `url(${introBg})` }}>
        <div className="fs-intro__overlay" />
        <div className="fs-intro__content">
          <h1 className="fs-title">Formula Student</h1>
          <p className="fs-description">
            Formula Student es la competición de ingeniería automovilística más prestigiosa a nivel universitario.
            Equipos de todo el mundo diseñan, construyen y compiten con sus propios monoplazas, enfrentándose
            a desafíos que evalúan no solo la velocidad, sino la excelencia en ingeniería.
          </p>
        </div>
      </section>

      {/* 2. PRUEBAS ESTÁTICAS */}
      <section className="fs-section static">
        <div className="container">
          <h2 className="section-title">Pruebas Estáticas</h2>
          <p className="section-subtitle">
            Se evalúa la capacidad del equipo para justificar el diseño, gestionar recursos y vender el proyecto.
          </p>

          <div className="cards-grid">
            <div className="fs-card">
              <h3>Engineering Design</h3>
              <p>Análisis de la justificación técnica detrás de cada pieza, validando el diseño con datos reales.</p>
            </div>
            <div className="fs-card">
              <h3>Cost & Manufacturing</h3>
              <p>Desglose detallado del coste de cada componente y optimización de procesos de fabricación.</p>
            </div>
            <div className="fs-card">
              <h3>Business Plan</h3>
              <p>Presentación de un modelo de negocio viable ante inversores para comercializar el prototipo.</p>
            </div>
          </div>

          <PhotoGallery images={staticPhotos} alt="ISC Formula Student" />
        </div>
      </section>

      {/* 3. PRUEBAS DINÁMICAS */}
      <section className="fs-section dynamic">
        <div className="container">
          <h2 className="section-title">Pruebas Dinámicas</h2>
          <p className="section-subtitle">
            El monoplaza demuestra su rendimiento real en pista.
          </p>

          <div className="cards-grid">
            <div className="fs-card"><h3>Acceleration</h3><p>75 metros en línea recta desde parado.</p></div>
            <div className="fs-card"><h3>Skidpad</h3><p>Circuito en 8 para medir aceleración lateral.</p></div>
            <div className="fs-card"><h3>Autocross</h3><p>Vuelta cronometrada para calificar.</p></div>
            <div className="fs-card"><h3>Endurance</h3><p>22 km de resistencia y fiabilidad.</p></div>
            <div className="fs-card"><h3>Efficiency</h3><p>Consumo energético durante el Endurance.</p></div>
          </div>

          <PhotoGallery images={dynamicPhotos} alt="ISC Formula Student en pista" />
        </div>
      </section>

      {/* 4. DATOS OFICIALES (Stats) */}
      <section className="fs-stats">
        <div className="container stats-grid">
          <AnimatedCounter end={16} label="EDITION" />
          <AnimatedCounter end={1650} label="TEAM MEMBERS" />
          <AnimatedCounter end={250} label="VOLUNTEERS" />
        </div>
      </section>

      {/* Vídeo */}
      <section className="fs-video">
        <div className="video-fullscreen">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/M4aC_-sxTPc?autoplay=1&mute=1&loop=1&playlist=M4aC_-sxTPc&controls=1&showinfo=0" 
            title="Formula Student Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

    </div>
  );
}

export default FormulaStudent;