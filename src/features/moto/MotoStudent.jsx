import "./MotoStudent.scss";
import AnimatedCounter from "@/components/data-display/AnimatedCounter";
import PhotoGallery from "@/components/data-display/PhotoGallery";

// Fondo del hero
import introBg from "@/assets/fotos-y-videos/HomeMoto/HomeMoto.JPG";

// Galería de fotos de competición (MotoStudentMedia) — carga automática
const msMediaMap = import.meta.glob(
  "../../assets/fotos-y-videos/pruebas/moto/*.{jpg,jpeg,png}",
  { eager: true, import: "default" }
);
const msMedia = Object.keys(msMediaMap).sort().map((k) => msMediaMap[k]);
const half = Math.ceil(msMedia.length / 2);
const staticPhotos = msMedia.slice(0, half);
const dynamicPhotos = msMedia.slice(half);

function MotoStudent() {
  return (
    <div className="ms-page">

      {/* 1. INTRODUCCIÓN */}
      <section className="ms-intro" style={{ backgroundImage: `url(${introBg})` }}>
        <div className="ms-intro__overlay" />
        <div className="ms-intro__content">
          <h1 className="ms-title">MotoStudent</h1>
          <p className="ms-description">
            MotoStudent es la competición internacional de motociclismo más desafiante a nivel universitario. 
            Equipos de todo el mundo diseñan, fabrican y ponen a prueba prototipos de competición. Nosotros competimos en la categoría 100% Eléctrica.
          </p>
        </div>
      </section>

      {/* 2. PRUEBAS ESTÁTICAS */}
      <section className="ms-section static">
        <div className="container">
          <h2 className="section-title">Pruebas Estáticas</h2>
          <p className="section-subtitle">
            Se evalúa la viabilidad del proyecto como si fuéramos una empresa real del sector de las dos ruedas.
          </p>

          <div className="cards-grid">
            <div className="ms-card">
              <h3>Engineering Design</h3>
              <p>Evaluación exhaustiva del diseño estructural, tren de potencia eléctrico y decisiones técnicas de la motocicleta.</p>
            </div>
            <div className="ms-card">
              <h3>Innovation</h3>
              <p>Análisis de las soluciones tecnológicas más vanguardistas y únicas desarrolladas por el equipo para marcar la diferencia.</p>
            </div>
            <div className="ms-card">
              <h3>Business Plan</h3>
              <p>Presentación de un modelo de negocio viable para la fabricación en serie y comercialización del prototipo.</p>
            </div>
          </div>

          <PhotoGallery images={staticPhotos} alt="ISC MotoStudent" />
        </div>
      </section>

      {/* 3. PRUEBAS DINÁMICAS */}
      <section className="ms-section dynamic">
        <div className="container">
          <h2 className="section-title">Pruebas Dinámicas</h2>
          <p className="section-subtitle">
            El prototipo demuestra su rendimiento en el asfalto de MotorLand.
          </p>

          <div className="cards-grid">
            <div className="ms-card"><h3>Brake Test</h3><p>Prueba de frenada crítica para certificar la seguridad antes de salir a pista.</p></div>
            <div className="ms-card"><h3>Acceleration</h3><p>Aceleración máxima en línea recta para medir la entrega de potencia eléctrica.</p></div>
            <div className="ms-card"><h3>Gymkhana</h3><p>Circuito de agilidad que pone a prueba la manejabilidad y la destreza del piloto.</p></div>
            <div className="ms-card"><h3>Qualifying</h3><p>Clasificación cronometrada para definir la parrilla de salida del evento final.</p></div>
            <div className="ms-card"><h3>Main Race</h3><p>El evento estrella: una carrera real rueda a rueda contra el resto de universidades.</p></div>
          </div>

          <PhotoGallery images={dynamicPhotos} alt="ISC MotoStudent en pista" />
        </div>
      </section>

      {/* 4. DATOS OFICIALES (Stats MotoStudent) */}
      <section className="ms-stats">
        <div className="container stats-grid">
          <AnimatedCounter end={7} label="EDITIONS" className="ms-stat-item" />
          <AnimatedCounter end={80} label="UNIVERSITIES" className="ms-stat-item" />
          <AnimatedCounter end={20} label="COUNTRIES" className="ms-stat-item" />
        </div>
      </section>

      {/* Vídeo */}
      <section className="ms-video">
        <div className="video-fullscreen">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/-DMNowF84Dc?autoplay=1&mute=1&loop=1&playlist=-DMNowF84Dc&controls=1&showinfo=0"
            title="MotoStudent Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

    </div>
  );
}

export default MotoStudent;