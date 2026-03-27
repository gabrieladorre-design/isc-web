import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import "./Navbar.scss";
import iscLogo from "../../assets/logos/ISC.png";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  /* --- ESTRUCTURA DEL MENÚ ACTUALIZADA --- */
  const menuItems = [
    {
      label: "Inicio",
      path: "/formula",
      subItems: null 
    },
    {
      label: "Equipo",
      path: null, 
      subItems: [
        { label: "Historia", path: "/history" }, // Antes: Nuestra Historia
        { label: "Garaje", path: "/garaje" },   // Antes: El Garaje
        { label: "Equipo", path: "/team" },    // Antes: Quiénes Somos
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
                <span className={`nav-link dropdown-trigger ${dropdownOpen === index ? "active" : ""}`}>
                  {item.label} <small>▾</small>
                </span>
                
                {dropdownOpen === index && (
                  <ul className="dropdown-menu">
                    {item.subItems.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link to={sub.path} className="dropdown-link">
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
                className={`nav-link ${location.pathname === item.path ? "active-link" : ""}`}
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