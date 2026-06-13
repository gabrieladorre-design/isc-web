import { Link } from "react-router-dom";
import "./LandingSplit.scss";

import iscLogo from "@/assets/logos/ISC.png";  
import motoBg from "@/assets/fotos-y-videos/Landing/moto.jpg";
import formulaBg from "@/assets/fotos-y-videos/Landing/coche.jpg";


export default function LandingSplit() {
  return (
    <div className="landing-split-page">
      
      {/* CABECERA */}
      <header className="landing-header">
        <img src={iscLogo} alt="ISC Logo" className="header-logo" />
        <h1>ISC RACING TEAM</h1>
        <p>Ingeniería, pasión y velocidad.<br/>Elige tu disciplina.</p>
      </header>

      {/* CONTENEDOR DIVIDIDO */}
      <div className="split-container">
        
        {/* OPCIÓN 1: MOTO STUDENT */}
        <Link 
          to="/moto" 
          className="split-side moto-side"
          style={{ backgroundImage: `url(${motoBg})` }}
        >
          <div className="overlay"></div>
          <div className="content">
            <div className="circle-logo">
               <span>MOTO STUDENT</span> 
            </div>
          </div>
        </Link>

        {/* OPCIÓN 2: FORMULA STUDENT */}
        <Link 
          to="/formula" 
          className="split-side formula-side"
          style={{ backgroundImage: `url(${formulaBg})` }}
        >
          <div className="overlay"></div>
          <div className="content">
            <div className="circle-logo">
              <span>FORMULA STUDENT</span>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}