import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import "./NavbarMoto.scss";
import iscLogo from "../../../assets/logos/ISC.png";

export default function NavbarMoto() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  /* --- ESTRUCTURA DEL MENÚ MOTOSTUDENT --- */
  const menuItems = [
    { label: "Inicio", path: "/moto", subItems: null },
    {
      label: "Equipo",
      path: null, 
      subItems: [
        { label: "Historia", path: "/moto/history" }, 
        { label: "Garaje", path: "/moto/garaje" },   
        { label: "Equipo", path: "/moto/team" },    
      ]
    },
    {
      label: "Competición",
      path: null,
      subItems: [
        { label: "MotoStudent", path: "/moto/motostudent" },
        { label: "Resultados", path: "/moto/resultados" }
      ]
    },
    { label: "Patrocinadores", path: "/moto/sponsors", subItems: null },
    { label: "Actualidad", path: "/moto/articles", subItems: null },
    {
      label: "Únete",
      path: null,
      subItems: [
        { label: "Recruitment", path: "/moto/recruitment" },
        { label: "Contacto", path: "/moto/contact" } 
      ]
    }
  ];

  /* 🛠️ Función para detectar enlaces normales activos en Moto */
  const isLinkActive = (item) => {
    // 1. Si la ruta es exactamente igual (comportamiento normal)
    if (location.pathname === item.path) return true;
    
    // 2. EXCEPCIÓN: Si entramos en "Patrocínanos" de la moto, mantenemos la pestaña encendida
    if (item.path === "/moto/sponsors" && location.pathname === "/moto/sponsor-us") return true;
    
    return false;
  };

  /* 🛠️ NUEVA FUNCIÓN: Detecta si un menú desplegable debe estar activo */
  const isDropdownActive = (item) => {
    if (!item.subItems) return false;
    return item.subItems.some((sub) => location.pathname === sub.path);
  };

  return (
    <nav className="navbar-moto">
      <div className="navbar-moto__logo">
        <Link to="/">
            <img src={iscLogo} alt="ISC Racing Team" />
        </Link>
      </div>

      <ul className="navbar-moto__links">
        {menuItems.map((item, index) => (
          <li 
            key={index} 
            className="navbar-moto__item"
            onMouseEnter={() => setDropdownOpen(index)}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            {item.subItems ? (
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