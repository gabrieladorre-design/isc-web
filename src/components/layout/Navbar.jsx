import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import iscLogo from "@/assets/logos/ISC.png";

/**
 * Barra de navegación reutilizable para Coche y Moto.
 * Funciona en escritorio (hover) y en móvil (menú hamburguesa + desplegables
 * que se abren al pulsar). El diseño es idéntico; solo cambia la estructura
 * del menú, que llega por la prop `menuItems` (src/data/navigation.js).
 *
 * Props:
 *  - menuItems: array de elementos del menú { label, path, subItems, aliases }
 */
export default function Navbar({ menuItems = [] }) {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  /* Cierra el menú móvil y cualquier desplegable al cambiar de ruta */
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(null);
  }, [location.pathname]);

  /* Cierra el desplegable al pulsar fuera de su elemento del menú */
  useEffect(() => {
    if (dropdownOpen === null) return;
    const handleOutside = (e) => {
      if (!e.target.closest(".navbar__item")) setDropdownOpen(null);
    };
    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, [dropdownOpen]);

  const isLinkActive = (item) => {
    if (location.pathname === item.path) return true;
    if (item.aliases && item.aliases.includes(location.pathname)) return true;
    return false;
  };

  const isDropdownActive = (item) => {
    if (!item.subItems) return false;
    return item.subItems.some((sub) => location.pathname === sub.path);
  };

  const toggleDropdown = (index) =>
    setDropdownOpen((cur) => (cur === index ? null : index));

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={iscLogo} alt="ISC Racing Team" />
        </Link>
      </div>

      {/* Botón hamburguesa (solo visible en móvil) */}
      <button
        className={`navbar__burger ${menuOpen ? "open" : ""}`}
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar__links ${menuOpen ? "open" : ""}`}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="navbar__item"
          >
            {item.subItems ? (
              /* --- SI TIENE SUBMENÚ (DROPDOWN) --- */
              <div className="dropdown-wrapper">
                <span
                  className={`nav-link dropdown-trigger ${
                    dropdownOpen === index ? "active" : ""
                  } ${isDropdownActive(item) ? "active-link" : ""}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleDropdown(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleDropdown(index);
                    }
                  }}
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
                          onClick={() => {
                            setDropdownOpen(null);
                            setMenuOpen(false);
                          }}
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
                onClick={() => setMenuOpen(false)}
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
