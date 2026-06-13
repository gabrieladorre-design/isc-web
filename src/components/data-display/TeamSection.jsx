import { useState, useEffect, useRef } from "react";
import { teamMembers, categories } from "@/data/team";
import linkedinIcon from "@/assets/redes/linkedin.png";
import "./TeamSection.scss";

/**
 * Sección de "Nuestro Equipo" reutilizable para Coche y Moto.
 * El organigrama (datos del equipo) es idéntico; solo cambian el subtítulo,
 * las cifras de las estadísticas y el texto de la descripción.
 *
 * Los datos del equipo viven en src/data/team.js.
 *
 * Props:
 *  - subtitle:    subtítulo de la cabecera
 *  - stats:       array de tarjetas de estadísticas { target, label }
 *  - description: contenido JSX del bloque de descripción del equipo
 */

/* Contador numérico animado al entrar en viewport */
const AnimatedNumber = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let startTime = null;
        const duration = 500;

        const step = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const currentCount = Math.floor(easeOut * target);

          setCount(currentCount);

          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setCount(target);
          }
        };

        window.requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return <h2 ref={ref}>{count}</h2>;
};

export default function TeamSection({
  subtitle = "",
  stats = [],
  description = null,
}) {
  const [activeFilter, setActiveFilter] = useState("all");

  // Tarjeta de miembro
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
        <p>{subtitle}</p>
      </header>

      {/* ESTADÍSTICAS Y DESCRIPCIÓN */}
      <section className="team-stats-section">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div className="stat-item" key={i}>
              <AnimatedNumber target={stat.target} />
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="team-description">
          {description}
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
