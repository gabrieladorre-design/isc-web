import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MotoCompetitions.scss";

/* --- ICONOS PERSONALIZADOS PARA EL MAPA --- */
const iscIcon = new L.divIcon({
  className: "custom-marker isc-marker",
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

const defaultIcon = new L.divIcon({
  className: "custom-marker default-marker",
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

/* --- DATOS DE COMPETICIONES MOTOSTUDENT --- */
const msEvents = [
  // --- COMPETICIÓN PRINCIPAL DEL ISC MOTO ---
  { id: "aragon", name: "MotoStudent International Competition", venue: "MotorLand Aragón (España)", coords: [41.076, -0.204], attended: true, highlight: "Top 10 Dinámicas (IM-05) / Mejor Aceleración (IM-04)" },
  
  // --- OTROS CIRCUITOS EUROPEOS (Expansión) ---
  { id: "imola", name: "MotoEngineering Italy", venue: "Autodromo Enzo e Dino Ferrari", coords: [44.343, 11.710], attended: false },
  { id: "portimao", name: "Iberian Moto-Test", venue: "Autódromo Internacional do Algarve", coords: [37.227, -8.628], attended: false },
  { id: "assen", name: "University TT Race", venue: "TT Circuit Assen (Países Bajos)", coords: [52.962, 6.524], attended: false },
];

export default function MotoCompetitions() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ms-competitions-page">
      
      {/* CABECERA */}
      <header className="comp-header">
        <h1>Competición y Resultados</h1>
        <p>El terreno donde la ingeniería eléctrica se pone a prueba sobre dos ruedas.</p>
      </header>

      {/* SECCIÓN DEL MAPA DINÁMICO */}
      <section className="map-section">
        <div className="map-info">
          <h2>Mapa de Competición</h2>
          <div className="legend">
            <span className="legend-item"><div className="dot isc"></div> Sede Principal ISC</span>
            <span className="legend-item"><div className="dot"></div> Circuitos en Evaluación</span>
          </div>
        </div>

        <div className="map-wrapper">
          <MapContainer 
            center={[44.0, 4.0]} 
            zoom={5} 
            scrollWheelZoom={false} 
            style={{ height: "600px", width: "100%", zIndex: 1 }} 
            className="leaflet-map"
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png"
            />
            
            {msEvents.map((event) => (
              <Marker 
                key={event.id} 
                position={event.coords} 
                icon={event.attended ? iscIcon : defaultIcon}
              >
                <Popup className="custom-popup-container" minWidth={340}>
                  <div className="custom-popup">
                    <h3>{event.name}</h3>
                    <p className="venue">📍 {event.venue}</p>
                    {event.attended ? (
                      <div className="isc-highlight">
                        <strong>🏆 Hito ISC Moto:</strong>
                        {event.highlight}
                      </div>
                    ) : (
                      <span className="future-goal">Próximo objetivo / Test</span>
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </section>

      {/* HISTORIAL DE RESULTADOS */}
      <section className="results-section">
        <h2>Nuestro Palmarés Histórico</h2>
        <div className="timeline-grid">
          
          <div className="result-card">
            <span className="year">2024 / 2025</span>
            <h3>MotoStudent Aragón</h3>
            <p className="highlight">Top 10 en Pruebas Dinámicas</p>
            <p className="details">El IM-05 superó las exigentes inspecciones técnicas a la primera y demostró una agilidad sobresaliente en la Gymkhana.</p>
          </div>

          <div className="result-card">
            <span className="year">2023 / 2024</span>
            <h3>MotoStudent Aragón</h3>
            <p className="highlight">Mejor Aceleración (Rookies)</p>
            <p className="details">Dimos la sorpresa en la recta de MotorLand marcando el mejor registro de aceleración gracias al rediseño del tren de potencia.</p>
          </div>

          <div className="result-card">
            <span className="year">2021 / 2022</span>
            <h3>Fase de Diseño MS</h3>
            <p className="highlight">Innovación en Electrónica</p>
            <p className="details">Obtuvimos una calificación excelente en la fase teórica por el desarrollo de nuestra propia telemetría para el IM-02.</p>
          </div>

          <div className="result-card">
            <span className="year">2018 / 2020</span>
            <h3>MotoStudent Aragón</h3>
            <p className="highlight">El Debut Oficial</p>
            <p className="details">El equipo hace historia llevando por primera vez el prototipo IM-01 al paddock del circuito internacional.</p>
          </div>

        </div>
      </section>
    </div>
  );
}