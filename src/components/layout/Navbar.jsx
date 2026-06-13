import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import iscLogo from "@/assets/logos/ISC.png";

/**
 * Barra de navegación reutilizable para Coche y Moto.
 * El diseño (verde/amarillo ISC, desplegables, línea amarilla activa) es idéntico;
 * solo cambia la estructura del menú, que llega por la prop `menuItems`.
 *
 * Los menús de cada disciplina viven en src/data/navigation.js.
 *
 * Props:
 *  - menuItems: array de elementos del menú { label, path, subItems, aliases }
 */
export default function Navbar({ menuItems = [] }) {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  /* Detecta enlaces normales activos (incluye rutas "alias", p.ej. sponsor-us) */
  const isLinkActive = (item) => {
    if (location.pathname === item.path) return true;
    if (item.aliases && item.aliases.includes(location.pathname)) return true;
    return false;
  };

  /* Detecta si un menú desplegable debe estar activo */
  const isDropdownActive = (item) => {
    if (!item.subItems) return false;
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
                <span
                  className={`nav-link dropdown-trigger ${
                    dropdownOpen === index ? "active" : ""
                  } ${isDropdownActive(item) ? "active-link" : ""}`}
                >
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
