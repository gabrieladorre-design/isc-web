import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Competitions.scss";

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

/* --- DATOS DE COMPETICIONES FS --- */
const fsEvents = [
  // --- COMPETICIONES DEL ISC ---
  { id: "spain", name: "Formula Student Spain", venue: "Circuit de Barcelona-Catalunya (Montmeló)", coords: [41.57, 2.26], attended: true, highlight: "P7 Overall (IFS-05) / 1st Design (IFS-07)" },
  { id: "germany", name: "Formula Student Germany", venue: "Hockenheimring", coords: [49.327, 8.565], attended: true, highlight: "Top 10 Overall (IFS-07)" },
  { id: "italy", name: "Formula ATA Italy", venue: "Autodromo Riccardo Paletti", coords: [44.683, 10.023], attended: true, highlight: "Podio Business Plan (IFS-05, IFS-06)" },
  { id: "austria", name: "Formula Student Austria", venue: "Red Bull Ring", coords: [47.219, 14.764], attended: true, highlight: "Finisher (IFS-03)" },
  
  // --- OTRAS COMPETICIONES EUROPEAS ---
  { id: "uk", name: "Formula Student UK", venue: "Silverstone", coords: [52.073, -1.014], attended: false },
  { id: "east", name: "Formula Student East", venue: "Zalaegerszeg (Hungría)", coords: [46.89, 16.84], attended: false },
  { id: "portugal", name: "Formula Student Portugal", venue: "Castelo Branco", coords: [39.822, -7.491], attended: false },
  { id: "czech", name: "Formula Student Czech", venue: "Autodrom Most", coords: [50.519, 13.648], attended: false },
];

export default function Competitions() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="competitions-page">
      
      {/* CABECERA */}
      <header className="comp-header">
        <h1>Competición y Resultados</h1>
        <p>El terreno donde la ingeniería se pone a prueba contra el cronómetro.</p>
      </header>

      {/* SECCIÓN DEL MAPA DINÁMICO */}
      <section className="map-section">
        <div className="map-info">
          <h2>Mapa del Tour Europeo</h2>
          <div className="legend">
            <span className="legend-item"><div className="dot isc"></div> Participación ISC</span>
            <span className="legend-item"><div className="dot"></div> Eventos Oficiales FS</span>
          </div>
        </div>

        <div className="map-wrapper">
          <MapContainer 
            center={[47.0, 8.0]} 
            zoom={5} 
            scrollWheelZoom={false} 
            style={{ height: "600px", width: "100%", zIndex: 1 }} 
            className="leaflet-map"
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png"
            />
            
            {fsEvents.map((event) => (
              <Marker 
                key={event.id} 
                position={event.coords} 
                icon={event.attended ? iscIcon : defaultIcon}
              >
                {/* SOLUCIÓN MAPA: forzamos el minWidth para que Leaflet no corte el diseño */}
                <Popup className="custom-popup-container" minWidth={340}>
                  <div className="custom-popup">
                    <h3>{event.name}</h3>
                    <p className="venue">📍 {event.venue}</p>
                    {event.attended ? (
                      <div className="isc-highlight">
                        <strong>🏆 Hito ISC:</strong>
                        {event.highlight}
                      </div>
                    ) : (
                      <span className="future-goal">Próximo objetivo</span>
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
            <h3>FS Spain</h3>
            <p className="highlight">1st Position in Design Event</p>
            <p className="details">Un hito histórico. La mejor justificación de diseño de toda la parrilla nacional con el monoplaza IFS-07.</p>
          </div>

          <div className="result-card">
            <span className="year">2024 / 2025</span>
            <h3>FS Germany</h3>
            <p className="highlight">TOP 10 Overall</p>
            <p className="details">Excelente actuación global en Hockenheimring, demostrando la fiabilidad del paquete aerodinámico.</p>
          </div>

          <div className="result-card">
            <span className="year">2023 / 2024</span>
            <h3>FS Italy</h3>
            <p className="highlight">Podio en Business Plan</p>
            <p className="details">Consolidación del departamento de Statics con una presentación de negocio brillante (IFS-06).</p>
          </div>

          <div className="result-card">
            <span className="year">2022 / 2023</span>
            <h3>FS Spain</h3>
            <p className="highlight">7ª Posición General</p>
            <p className="details">El IFS-05 completa todas las pruebas dinámicas, marcando un antes y un después en Montmeló.</p>
          </div>

        </div>
      </section>
    </div>
  );
}