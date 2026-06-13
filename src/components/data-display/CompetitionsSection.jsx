import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./CompetitionsSection.scss";

/**
 * Sección de "Competición y Resultados" reutilizable para Coche y Moto.
 * El diseño y la lógica (mapa Leaflet + palmarés) son idénticos; solo cambian
 * los eventos del mapa, las tarjetas del palmarés y algunas etiquetas.
 *
 * Los datos viven en src/data/competitions.js.
 *
 * Props:
 *  - events:          marcadores del mapa { id, name, venue, coords, attended, highlight }
 *  - results:         tarjetas del palmarés { year, title, highlight, details }
 *  - subtitle:        subtítulo de la cabecera
 *  - mapTitle:        título sobre el mapa
 *  - legendIsc:       etiqueta de la leyenda para marcadores ISC
 *  - legendOther:     etiqueta de la leyenda para el resto
 *  - mapCenter:       centro del mapa [lat, lng]
 *  - highlightLabel:  texto en negrita del hito ISC en el popup
 *  - futureGoalLabel: texto del marcador no asistido
 */

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

export default function CompetitionsSection({
  events = [],
  results = [],
  subtitle = "",
  mapTitle = "Mapa del Tour Europeo",
  legendIsc = "Participación ISC",
  legendOther = "Eventos Oficiales FS",
  mapCenter = [47.0, 8.0],
  highlightLabel = "🏆 Hito ISC:",
  futureGoalLabel = "Próximo objetivo",
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="competitions-page">
      {/* CABECERA */}
      <header className="comp-header">
        <h1>Competición y Resultados</h1>
        <p>{subtitle}</p>
      </header>

      {/* SECCIÓN DEL MAPA DINÁMICO */}
      <section className="map-section">
        <div className="map-info">
          <h2>{mapTitle}</h2>
          <div className="legend">
            <span className="legend-item"><div className="dot isc"></div> {legendIsc}</span>
            <span className="legend-item"><div className="dot"></div> {legendOther}</span>
          </div>
        </div>

        <div className="map-wrapper">
          <MapContainer
            center={mapCenter}
            zoom={5}
            scrollWheelZoom={false}
            style={{ height: "600px", width: "100%", zIndex: 1 }}
            className="leaflet-map"
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png"
            />

            {events.map((event) => (
              <Marker
                key={event.id}
                position={event.coords}
                icon={event.attended ? iscIcon : defaultIcon}
              >
                {/* minWidth evita que Leaflet recorte el popup */}
                <Popup className="custom-popup-container" minWidth={340}>
                  <div className="custom-popup">
                    <h3>{event.name}</h3>
                    <p className="venue">📍 {event.venue}</p>
                    {event.attended ? (
                      <div className="isc-highlight">
                        <strong>{highlightLabel}</strong>
                        {event.highlight}
                      </div>
                    ) : (
                      <span className="future-goal">{futureGoalLabel}</span>
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
          {results.map((result, index) => (
            <div className="result-card" key={index}>
              <span className="year">{result.year}</span>
              <h3>{result.title}</h3>
              <p className="highlight">{result.highlight}</p>
              <p className="details">{result.details}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
