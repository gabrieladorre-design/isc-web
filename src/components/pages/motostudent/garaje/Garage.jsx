import { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; 
import "./Garage.scss";

// --- DATOS INVENTADOS PARA MOTOSTUDENT ---
export const motosData = [
  {
    id: "im06",
    name: "IM-06",
    season: "Temporada 2026",
    status: "EN DESARROLLO",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80",
    description: "La siguiente generación de nuestro prototipo eléctrico. Implementando telemetría en tiempo real y una drástica reducción de peso para asaltar el podio en MotorLand.",
    specs: {
      powertrain: "Motor Eléctrico 30kW",
      weight: "Objetivo: < 130 kg",
      chassis: "Multitubular de Acero de Alta Resistencia",
      acceleration: "TBD"
    },
    competitions: [],
    gallery: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "im05", 
    name: "IM-05",
    season: "2024 / 2025",
    status: "PROTOTIPO ACTUAL",
    image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1000&q=80",
    description: "El prototipo más ágil hasta la fecha. Redujimos un 15% el peso del chasis tubular y optimizamos el centro de gravedad. Superamos las exigentes inspecciones técnicas de MotorLand sin fallos.",
    specs: {
      powertrain: "Motor Eléctrico 28kW",
      weight: "145 kg",
      chassis: "Multitubular de Acero",
      acceleration: "3.2s (0-100 km/h)"
    },
    competitions: [
      { name: "MotoStudent International", venue: "MotorLand Aragón", result: "Top 10 Dinámicas" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "im04",
    name: "IM-04",
    season: "2023 / 2024",
    status: "",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80",
    description: "Dimos un salto cualitativo con nuestro nuevo paquete de baterías customizado y un basculante de fabricación propia. Logramos nuestro mejor tiempo en la prueba de aceleración.",
    specs: {
      powertrain: "Motor Eléctrico 25kW",
      weight: "155 kg",
      chassis: "Acero / Basculante Aluminio",
      acceleration: "3.5s (0-100 km/h)"
    },
    competitions: [
      { name: "MotoStudent International", venue: "MotorLand Aragón", result: "Mejor Aceleración Equipo Rookie" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80"
    ]
  }
];

export default function Garage() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="garage-page">
      <header className="garage-header">
        <h1 className="slide-up">EL GARAJE</h1>
        <p className="slide-up delay-1">
          Pura ingeniería sobre dos ruedas. Explora la evolución técnica de nuestros prototipos eléctricos.
        </p>
      </header>

      <div className="showroom-grid-container">
        {motosData.map((moto) => (
          <div className="car-card" key={moto.id} ref={addToRefs}>
            <div className="card-visual">
              <img src={moto.image} alt={`Prototipo ${moto.name}`} />
              {moto.status && (
                <div className={`status-badge ${moto.id === 'im06' || moto.id === 'im05' ? 'active' : ''}`}>
                  {moto.status}
                </div>
              )}
            </div>

            <div className="card-details">
              <h2>{moto.name}</h2>
              <span className="season-tag">{moto.season}</span>

              {/* OJO AQUÍ: Ahora enlaza a /moto/garaje/im05 etc. */}
              <Link to={`/moto/garaje/${moto.id}`} className="btn-know-more">
                SABER MÁS DE LA {moto.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}