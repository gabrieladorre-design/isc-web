import { Link } from "react-router-dom";
import "./LandingSplit.scss";

// --- LOGO TEMPORAL ---
import iscLogo from "../../../assets/logos/ISC.png";  

// --- FOTOS DE FONDO TEMPORALES (De internet para que funcione a la primera) ---
const motoBg = "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1200";
const formulaBg = "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1200";

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
          style={{ backgroundImage: `url(${motoBg})` }} /* <--- AQUÍ SE PONE LA FOTO */
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
          style={{ backgroundImage: `url(${formulaBg})` }} /* <--- AQUÍ SE PONE LA FOTO */
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