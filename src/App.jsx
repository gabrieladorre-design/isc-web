import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import "./App.scss";


// --- LAYOUTS (compartidos Coche + Moto vía props) ---
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import ScrollToTopButton from "./components/layout/ScrollToTopButton";

// Menús de navegación (datos)
import { formulaNav, motoNav } from './data/navigation';

// --- PÁGINAS ---
import LandingSplit from './features/landing/LandingSplit';
import Home from './features/formula/Home'; 
import FormulaStudent from './features/formula/FormulaStudent';
import Sponsors from './features/formula/Sponsors';
import JoinUs from './features/formula/JoinUs';
import Contact from './features/formula/Contact';
import Team from './features/formula/Team';
import SponsorUs from './features/formula/SponsorUs';
import History from './features/formula/History';
import Articles from './features/formula/Articles'; 
import Garage from "./features/formula/Garage";
import CarDetail from './features/formula/CarDetail';
import Competitions from './features/formula/Competitions';

// --- PÁGINAS DE MOTOSTUDENT ---
import MotoHome from './features/moto/Home';
import MotoHistory from './features/moto/History';
import MotoGarage from './features/moto/Garage';
import MotoDetail from './features/moto/MotoDetail';
import MotoTeam from './features/moto/Team';
import MotoStudentComp from './features/moto/MotoStudent';
import MotoCompetitions from './features/moto/MotoCompetitions';
import MotoSponsors from './features/moto/Sponsors';
import MotoSponsorUs from './features/moto/SponsorUs';
import MotoArticles from './features/moto/MotoArticles';
import MotoJoinUs from './features/moto/MotoJoinUs';
import MotoContact from './features/moto/MotoContact';

function AppContent() {
  const location = useLocation();
  
  // Detectamos dónde está el usuario
  const isLandingPage = location.pathname === "/";
  const isMotoPage = location.pathname.startsWith("/moto");

  return (
    <div className="app">
      <ScrollToTop />
      
      {!isLandingPage &&
        (isMotoPage ? (
          <Navbar menuItems={motoNav} />
        ) : (
          <Navbar menuItems={formulaNav} />
        ))}

      <Routes>

        <Route path="/" element={<LandingSplit />} />
        
        {/* =========================================
            RUTAS FORMULA STUDENT (EL COCHE)
        ============================================= */}
        <Route path="/formula" element={<Home />} />
        <Route path="/formula-student" element={<FormulaStudent />} />
        <Route path="/resultados" element={<Competitions />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/sponsor-us" element={<SponsorUs />} />
        <Route path="/recruitment" element={<JoinUs />} />
        <Route path="/history" element={<History />} /> 
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/garaje" element={<Garage />} />
        <Route path="/garaje/:carId" element={<CarDetail />} />

        {/* =========================================
            RUTAS MOTO STUDENT (LA MOTO)
        ============================================= */}
        <Route path="/moto" element={<MotoHome />} />
        <Route path="/moto/history" element={<MotoHistory />} /> 
        <Route path="/moto/garaje" element={<MotoGarage />} />
        <Route path="/moto/garaje/:motoId" element={<MotoDetail />} />
        <Route path="/moto/team" element={<MotoTeam />} />
        <Route path="/moto/motostudent" element={<MotoStudentComp />} />
        <Route path="/moto/resultados" element={<MotoCompetitions />} />
        <Route path="/moto/sponsors" element={<MotoSponsors />} />
        <Route path="/moto/sponsor-us" element={<MotoSponsorUs />} />
        <Route path="/moto/articles" element={<MotoArticles />} />
        <Route path="/moto/recruitment" element={<MotoJoinUs />} />
        <Route path="/moto/contact" element={<MotoContact />} />

      </Routes>

      {!isLandingPage &&
        (isMotoPage ? (
          <Footer
            tagline="ICAI Moto Student Team"
            instagramUrl="https://www.instagram.com/iscmsracingteam/"
            email="motostudent@iscracingteam.com"
          />
        ) : (
          <Footer />
        ))}
      
      <ScrollToTopButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;