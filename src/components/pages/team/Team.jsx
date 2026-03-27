import { useState, useEffect, useRef } from "react";
import "./Team.scss";
import linkedinIcon from "../../../assets/redes/linkedin.png";

/* --- IMPORTACIÓN DE FOTOS --- */
// Management
import carvajalImg from "../../../assets/ORLA_JEFES_WEB/Carvajal.jpg";
import selinaImg from "../../../assets/ORLA_JEFES_WEB/Selina.jpg";

// Mecánica
import medinaImg from "../../../assets/ORLA_JEFES_WEB/Medina.jpg";
import fernandoImg from "../../../assets/ORLA_JEFES_WEB/Fernando Tobar.jpg"; 
import romeroImg from "../../../assets/ORLA_JEFES_WEB/Romero.jpg";
import manuImg from "../../../assets/ORLA_JEFES_WEB/Manu.jpg";
import sandraImg from "../../../assets/ORLA_JEFES_WEB/Sandra.jpg";
import nachoImg from "../../../assets/ORLA_JEFES_WEB/Nacho ramos.jpg"; 
import dieguezImg from "../../../assets/ORLA_JEFES_WEB/Dieguez.jpg";
import aparicioImg from "../../../assets/ORLA_JEFES_WEB/Aparicio.jpg";

// Electrónica & Driverless
import nicoImg from "../../../assets/ORLA_JEFES_WEB/Nico.jpg";
import marioImg from "../../../assets/ORLA_JEFES_WEB/Mario.jpg";
import landaImg from "../../../assets/ORLA_JEFES_WEB/Landa.jpg";
import alvaroImg from "../../../assets/ORLA_JEFES_WEB/Alvaro.jpg"; 
import jaimePerezImg from "../../../assets/ORLA_JEFES_WEB/Jaime Perez.jpg"; 
import sergioImg from "../../../assets/ORLA_JEFES_WEB/Sergio.jpg";
import andresImg from "../../../assets/ORLA_JEFES_WEB/Andres.jpg"; 

// Statics
import lauraImg from "../../../assets/ORLA_JEFES_WEB/Laura.jpg";

/* --- DATOS DEL EQUIPO --- */
const teamMembers = [
  // --- TEAM LEADER ---
  { name: "Jaime de Carvajal", role: "Team Leader", photo: carvajalImg, linkedin: "https://www.linkedin.com/in/jaime-de-carvajal-torres-6728752a1/", tier: "tl", category: "management" },

  // --- DIRECTORES TÉCNICOS ---
  { name: "Miguel Ángel Medina", role: "Mechanical Technical Director", photo: medinaImg, linkedin: "https://www.linkedin.com/in/miguel-angel-medina-lazcano-13389b245/", tier: "dt", category: "mechanical" },
  { name: "Fernando Mª Tobar", role: "Mechanical Technical Director", photo: fernandoImg, linkedin: "https://www.linkedin.com/in/fernando-tobar-pérez/", tier: "dt", category: "mechanical" },
  { name: "Nicolás Huertas", role: "Tractive System Director", photo: nicoImg, linkedin: "https://www.linkedin.com/in/nhuertasromero/", tier: "dt", category: "electronics" },
  { name: "Jaime Landa", role: "Electronics Technical Director", photo: landaImg, linkedin: "https://www.linkedin.com/in/jaime-landa-cereceda/", tier: "dt", category: "electronics" },
  { name: "Álvaro González", role: "Driverless Director", photo: alvaroImg, linkedin: "https://www.linkedin.com/in/alvaro-gonzalez-tabernero/", tier: "dt", category: "driverless" },
  { name: "Laura Valero", role: "Statics Director", photo: lauraImg, linkedin: "https://linkedin.com/", tier: "dt", category: "statics" },

  // --- JEFES DE DEPARTAMENTO ---
  // Management
  { name: "Selina Oliver", role: "Head of Media & Marketing", photo: selinaImg, linkedin: "https://www.linkedin.com/in/selina-oliver-de-bustamante-9961a42b3/", tier: "head", category: "management" },
  
  // Mechanical
  { name: "Alejandro Romero", role: "Head of Chassis & Structural", photo: romeroImg, linkedin: "https://www.linkedin.com/in/alejandro-romero-fontán-0a449132b/", tier: "head", category: "mechanical" },
  { name: "Manuel Mª Cantón", role: "Head of Powertrain", photo: manuImg, linkedin: "https://www.linkedin.com/in/mmcantonbarat/", tier: "head", category: "mechanical" },
  { name: "Sandra Rodríguez", role: "Head of Braking & Steering", photo: sandraImg, linkedin: "https://www.linkedin.com/in/sandra-rodríguez-juliani-305810286/", tier: "head", category: "mechanical" },
  { name: "Ignacio Ramos", role: "Head of Suspension & Dynamics", photo: nachoImg, linkedin: "https://www.linkedin.com/in/ignacio-ramos-villar-80a38a2b6/", tier: "head", category: "mechanical" },
  { name: "Rodrigo García", role: "Head of Suspension & Dynamics", photo: dieguezImg, linkedin: "https://www.linkedin.com/in/rodrigo-garcia-dieguez/", tier: "head", category: "mechanical" },
  { name: "Pablo Aparicio", role: "Head of Aero & Cooling", photo: aparicioImg, linkedin: "https://www.linkedin.com/in/pablo-aparicio-de-la-vega-50748039a/", tier: "head", category: "mechanical" },
  
  // Electronics
  { name: "Mario Rodríguez", role: "Head of Batteries", photo: marioImg, linkedin: "https://www.linkedin.com/in/mario-rodríguez-criado-10157b332/", tier: "head", category: "electronics" },
  { name: "Andrés Sánchez", role: "Head of Telemetry", photo: andresImg, linkedin: "https://www.linkedin.com/in/andrés-sánchez-de-ágreda-77ab93206/", tier: "head", category: "electronics" },
  
  // Driverless
  { name: "Jaime Pérez", role: "Head of Integration", photo: jaimePerezImg, linkedin: "https://linkedin.com/", tier: "head", category: "driverless" },
  { name: "Sergio Jiménez", role: "Head of Software", photo: sergioImg, linkedin: "https://linkedin.com/", tier: "head", category: "driverless" }
];

const categories = [
  { id: "all", label: "Ver Todo el Organigrama" },
  { id: "management", label: "Management" },
  { id: "mechanical", label: "Mecánica" },
  { id: "electronics", label: "Electrónica" },
  { id: "driverless", label: "Driverless" },
  { id: "statics", label: "Statics" }
];

/* --- COMPONENTE DE NÚMEROS ANIMADOS (VERSIÓN RÁPIDA) --- */
const AnimatedNumber = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Si entra en pantalla y no se ha animado aún...
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let startTime = null;
        const duration = 500; // <--- CAMBIO AQUÍ: Bajamos de 2000ms a 500ms (Súper rápido)

        const step = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          
          // Efecto de frenado suave al final
          const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const currentCount = Math.floor(easeOut * target);
          
          setCount(currentCount);

          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setCount(target); // Aseguramos clavar el número final
          }
        };

        window.requestAnimationFrame(step);
      }
    }, { threshold: 0.5 }); // Se activa cuando el elemento está al 50% en pantalla

    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return <h2 ref={ref}>{count}</h2>;
};


export default function Team() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Componente interno para dibujar las tarjetas y no repetir código
  const MemberCard = ({ member }) => (
    <div className="member-card">
      <div className="card-image">
        <img src={member.photo} alt={member.name} />
        <div className="social-overlay">
          <a href={member.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="card-info">
        <h3>{member.name}</h3>
        <span>{member.role}</span>
      </div>
    </div>
  );

  return (
    <div className="team-page">
      
      {/* CABECERA */}
      <header className="team-header">
        <h1>Nuestro Equipo</h1>
        <p>Impulsados por el diseño, unidos por la velocidad.</p>
      </header>

      {/* ESTADÍSTICAS Y DESCRIPCIÓN */}
      <section className="team-stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            {/* HEMOS CAMBIADO EL <h2>1</h2> POR EL CONTADOR ANIMADO */}
            <AnimatedNumber target={1} />
            <p>Team Leader</p>
          </div>
          <div className="stat-item">
            <AnimatedNumber target={5} />
            <p>Directores Técnicos</p>
          </div>
          <div className="stat-item">
            <AnimatedNumber target={12} />
            <p>Jefes de Departamento</p>
          </div>
          <div className="stat-item">
            <AnimatedNumber target={83} />
            <p>Ingenieros</p>
          </div>
        </div>

        <div className="team-description">
          <p>Actualmente, el ISC FS Racing Team está formado por 83 estudiantes.</p>
          <p>A nivel organizativo, cuenta con un <strong>Team Leader</strong>, encargado de definir la estrategia general y los objetivos de la temporada, tanto a nivel técnico, como financiero o de comunicación.</p>
          <p>La figura de los <strong>Directores Técnicos</strong> refleja la búsqueda de la especialización por áreas. Destacan la verificación al detalle de todos los aspectos técnicos como la supervisión del progreso de cada departamento.</p>
          <p>Los <strong>Jefes de Departamento</strong> se encargan del desarrollo de una parcela específica del monoplaza y cuentan con un equipo de ingenieros para llevar todas esas tareas a cabo.</p>
        </div>
      </section>

      {/* FILTROS INTERACTIVOS */}
      <nav className="dept-nav">
        {categories.map((cat) => (
          <button 
            key={cat.id} 
            className={`dept-link ${activeFilter === cat.id ? "active" : ""}`}
            onClick={() => setActiveFilter(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      {/* RENDERIZADO DEL EQUIPO */}
      <div className="team-container">
        
        {/* MODO 1: VER TODO EL ORGANIGRAMA JERÁRQUICO */}
        {activeFilter === "all" && (
          <div className="hierarchy-view">
            
            {/* TIER 1: TEAM LEADER */}
            <div className="hierarchy-tier">
              <div className="members-grid center-grid">
                {teamMembers.filter(m => m.tier === "tl").map((member, i) => (
                  <MemberCard key={`tl-${i}`} member={member} />
                ))}
              </div>
            </div>

            {/* TIER 2: DIRECTORES TÉCNICOS */}
            <div className="hierarchy-tier">
              <div className="members-grid">
                {teamMembers.filter(m => m.tier === "dt").map((member, i) => (
                  <MemberCard key={`dt-${i}`} member={member} />
                ))}
              </div>
            </div>

            {/* TIER 3: JEFES DE DEPARTAMENTO */}
            <div className="hierarchy-tier last-tier">
              <div className="members-grid">
                {teamMembers.filter(m => m.tier === "head").map((member, i) => (
                  <MemberCard key={`head-${i}`} member={member} />
                ))}
              </div>
            </div>

          </div>
        )}

        {/* MODO 2: VER POR DEPARTAMENTO ESPECÍFICO */}
        {activeFilter !== "all" && (
          <div className="filtered-view">
            <div className="members-grid">
              {teamMembers
                .filter(m => m.category === activeFilter)
                .map((member, i) => (
                  <MemberCard key={`filter-${i}`} member={member} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}