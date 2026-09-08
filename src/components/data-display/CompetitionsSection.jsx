import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Icon from "./Icon";
import { useI18n } from "@/i18n";
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
 *  - bestSeason:      bloque destacado sobre el palmarés (opcional)
 *                     { tag, title, text, stats: [{ value, label }] }
 *                     Si no se pasa, no se pinta nada.
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
  mapTitle = "",
  legendIsc = "",
  legendOther = "",
  mapCenter = [47.0, 8.0],
  highlightLabel = "",
  futureGoalLabel = "",
  bestSeason = null,
}) {
  const { t, tx } = useI18n();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="competitions-page">
      {/* CABECERA */}
      <header className="comp-header">
        <h1>{t("competitions.title")}</h1>
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
            {/* Teselas de OpenStreetMap: libres y SIN clave de API.
                Las de CartoDB que había antes ahora exigen una clave de pago y
                por eso el mapa salía cubierto con la marca de agua
                "API key required". El aspecto oscuro del mapa se consigue
                ahora con un filtro CSS sobre las teselas
                (ver .leaflet-map en CompetitionsSection.scss). */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              maxZoom={19}
            />

            {events.map((event) => (
              <Marker
                key={event.id}
                position={event.coords}
                icon={event.attended ? iscIcon : defaultIcon}
              >
                {/* minWidth evita que Leaflet recorte el popup */}
                <Popup className="custom-popup-container" minWidth={720} maxWidth={780}>
                  <div className={`custom-popup ${event.attended ? "is-isc" : "is-future"}`}>
                    <div className="popup-header">
                      <h3>{event.name}</h3>
                      <p className="venue"><Icon name="pin" /> {tx(event.venue)}</p>
                    </div>
                    <div className="popup-body">
                      {event.attended ? (
                        <div className="isc-highlight">
                          <strong><Icon name="trophy" /> {highlightLabel}</strong>
                          <span>{tx(event.highlight)}</span>
                        </div>
                      ) : (
                        <span className="future-goal">{futureGoalLabel}</span>
                      )}
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </section>

      {/* BLOQUE DESTACADO: LA MEJOR TEMPORADA (solo si se le pasa contenido) */}
      {bestSeason && (
        <section className="best-season">
          <div className="best-season__inner">
            {bestSeason.tag && (
              <span className="best-season__tag">{tx(bestSeason.tag)}</span>
            )}
            <h2 className="best-season__title">{tx(bestSeason.title)}</h2>
            <p className="best-season__text">{tx(bestSeason.text)}</p>

            {bestSeason.stats && bestSeason.stats.length > 0 && (
              <div className="best-season__stats">
                {bestSeason.stats.map((stat, index) => (
                  <div className="best-season__stat" key={index}>
                    <span className="best-season__value">{tx(stat.value)}</span>
                    <span className="best-season__label">{tx(stat.label)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* HISTORIAL DE RESULTADOS */}
      <section className="results-section">
        <h2>{t("competitions.resultsTitle")}</h2>
        <div className="timeline-grid">
          {results.map((result, index) => (
            <div className="result-card" key={index} tabIndex={0}>
              <span className="year">{result.year}</span>
              <h3>{tx(result.title)}</h3>
              <p className="highlight">{tx(result.highlight)}</p>
              <div className="details"><p>{tx(result.details)}</p></div>
              <span className="reveal-hint">{t("competitions.revealHint")} <Icon name="chevron" /></span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
