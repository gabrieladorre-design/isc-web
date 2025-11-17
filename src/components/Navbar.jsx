import "./Navbar.scss";

export default function Navbar() {
  const sections = [
    "Equipo",
    "Formula Student",
    "Competiciones",
    "Patrocinadores",
    "Garaje",
    "Historia",
    "Recruitment",
    "Artículos",
    "Contacto",
  ];

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        {/* Luego puedes cambiar por el logo oficial */}
        <span className="navbar__logo-main">ISC Racing Team</span>
        <span className="navbar__logo-sub">Formula Student</span>
      </div>

      <ul className="navbar__links">
        {sections.map((item) => (
          <li key={item} className="navbar__item">
            {/* Más adelante esto será un Link o un anchor a la sección */}
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
