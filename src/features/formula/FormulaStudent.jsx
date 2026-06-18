import "./FormulaStudent.scss";
import AnimatedCounter from "@/components/data-display/AnimatedCounter";

// Imagen real de competición (Fotos WEB/Coche → assets del proyecto)
import introBg from "@/assets/fotos-y-videos/HomeCoche/HomeCoche.JPG";
import testStaticImg from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/Coche-03.jpg";
import testDynamicImg from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/Coche-05.jpg";

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

          <div className="section-banner">
            <img src={testStaticImg} alt="Equipo ISC en las pruebas estáticas" loading="lazy" />
          </div>

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
        </div>
      </section>

      {/* 3. PRUEBAS DINÁMICAS */}
      <section className="fs-section dynamic">
        <div className="container">
          <h2 className="section-title">Pruebas Dinámicas</h2>
          <p className="section-subtitle">
            El monoplaza demuestra su rendimiento real en pista.
          </p>

          <div className="section-banner">
            <img src={testDynamicImg} alt="Monoplaza ISC en las pruebas dinámicas" loading="lazy" />
          </div>

          <div className="cards-grid">
            <div className="fs-card"><h3>Acceleration</h3><p>75 metros en línea recta desde parado.</p></div>
            <div className="fs-card"><h3>Skidpad</h3><p>Circuito en 8 para medir aceleración lateral.</p></div>
            <div className="fs-card"><h3>Autocross</h3><p>Vuelta cronometrada para calificar.</p></div>
            <div className="fs-card"><h3>Endurance</h3><p>22 km de resistencia y fiabilidad.</p></div>
            <div className="fs-card"><h3>Efficiency</h3><p>Consumo energético durante el Endurance.</p></div>
          </div>
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