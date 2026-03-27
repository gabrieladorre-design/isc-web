import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import "./Navbar.scss";
import iscLogo from "../../assets/logos/ISC.png";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  /* --- ESTRUCTURA DEL MENÚ --- */
  const menuItems = [
    { label: "Inicio", path: "/formula", subItems: null },
    {
      label: "Equipo",
      path: null, 
      subItems: [
        { label: "Historia", path: "/history" },
        { label: "Garaje", path: "/garaje" },
        { label: "Equipo", path: "/team" },
      ]
    },
    {
      label: "Competición",
      path: null,
      subItems: [
        { label: "Formula Student", path: "/formula-student" },
        { label: "Resultados", path: "/resultados" }
      ]
    },
    {
      label: "Patrocinadores",
      path: "/sponsors",
      subItems: null
    },
    {
      label: "Actualidad",
      path: "/articles",
      subItems: null
    },
    {
      label: "Únete",
      path: null,
      subItems: [
        { label: "Recruitment", path: "/recruitment" },
        { label: "Contacto", path: "/contact" } 
      ]
    }
  ];

  /* 🛠️ Función para detectar enlaces normales activos */
  const isLinkActive = (item) => {
    if (location.pathname === item.path) return true;
    if (item.path === "/sponsors" && location.pathname === "/sponsor-us") return true;
    return false;
  };

  /* 🛠️ NUEVA FUNCIÓN: Detecta si un menú desplegable debe estar activo */
  const isDropdownActive = (item) => {
    if (!item.subItems) return false;
    // Devuelve 'true' si la URL actual coincide con la ruta de ALGÚN sub-elemento
    return item.subItems.some((sub) => location.pathname === sub.path);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
            <img src={iscLogo} alt="ISC Racing Team" />
        </Link>
      </div>

      <ul className="navbar__links">
        {menuItems.map((item, index) => (
          <li 
            key={index} 
            className="navbar__item"
            onMouseEnter={() => setDropdownOpen(index)}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            {item.subItems ? (
              /* --- SI TIENE SUBMENÚ (DROPDOWN) --- */
              <div className="dropdown-wrapper">
                {/* 🛠️ Aplicamos la nueva función para encender la línea amarilla del padre */}
                <span className={`nav-link dropdown-trigger ${dropdownOpen === index ? "active" : ""} ${isDropdownActive(item) ? "active-link" : ""}`}>
                  {item.label} <small>▾</small>
                </span>
                
                {dropdownOpen === index && (
                  <ul className="dropdown-menu">
                    {item.subItems.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link 
                          to={sub.path} 
                          className="dropdown-link"
                          onClick={() => setDropdownOpen(null)}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              /* --- SI ES UN ENLACE NORMAL --- */
              <Link 
                to={item.path} 
                className={`nav-link ${isLinkActive(item) ? "active-link" : ""}`}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}