import { Link } from "react-router-dom";
import "./LandingSplit.scss";

// --- LOGO E IMÁGENES LOCALES ---
import iscLogo from "../../../assets/logos/ISC.png";  
import motoBg from "../../../assets/Fotos y videos/Landing/moto.jpg";
import formulaBg from "../../../assets/Fotos y videos/Landing/coche.jpg";


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
          style={{ backgroundImage: `url(${motoBg})` }} /* <--- FOTO DE LA MOTO */
        >
          <div className="overlay"></div>
          <div className="content">
            <div className="circle-logo">
              <img src={iscLogo} alt="Moto Icon" />
              <span>MOTO STUDENT<br/>RACING TEAM</span>
            </div>
          </div>
        </Link>

        {/* OPCIÓN 2: FORMULA STUDENT */}
        <Link 
          to="/formula" 
          className="split-side formula-side"
          style={{ backgroundImage: `url(${formulaBg})` }} /* <--- FOTO DEL COCHE */
        >
          <div className="overlay"></div>
          <div className="content">
            <div className="circle-logo">
              <img src={iscLogo} alt="Formula Icon" />
              <span>FORMULA STUDENT<br/>RACING TEAM</span>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}