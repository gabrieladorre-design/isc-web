import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import "./App.scss";

// --- LAYOUTS ---
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import ScrollToTopButton from "./components/layout/ScrollToTopButton";

// Layouts específicos de Moto
import NavbarMoto from './components/layout/motostudent/NavbarMoto';
import FooterMoto from './components/layout/motostudent/FooterMoto';

// --- PÁGINAS ---
import LandingSplit from './components/pages/landing/LandingSplit';
import Home from './components/pages/home/Home'; 
import FormulaStudent from './components/pages/formulastudent/FormulaStudent';
import Sponsors from './components/pages/sponsors/Sponsors';
import JoinUs from './components/pages/recruitment/JoinUs';
import Contact from './components/pages/contact/Contact';
import Team from './components/pages/team/Team';
import SponsorUs from './components/pages/sponsors/SponsorUs';
import History from './components/pages/history/History';
import Articles from './components/pages/articles/Articles'; 
import Garage from "./components/pages/garaje/Garage";
import CarDetail from './components/pages/garaje/CarDetail';
import Competitions from './components/pages/competitions/Competitions';

// --- PÁGINAS DE MOTOSTUDENT ---
import MotoHome from './components/pages/motostudent/home/Home';
import MotoHistory from './components/pages/motostudent/history/History'; // <-- ¡Aquí está!
import MotoGarage from './components/pages/motostudent/garaje/Garage';
import MotoDetail from './components/pages/motostudent/garaje/MotoDetail';
import MotoTeam from './components/pages/motostudent/team/Team';
import MotoStudentComp from './components/pages/motostudent/motostudentexplain/MotoStudent';
import MotoCompetitions from './components/pages/motostudent/competitions/MotoCompetitions';
import MotoSponsors from './components/pages/motostudent/sponsors/Sponsors';
import MotoSponsorUs from './components/pages/motostudent/sponsors/SponsorUs';
import MotoArticles from './components/pages/motostudent/articles/MotoArticles';
import MotoJoinUs from './components/pages/motostudent/recruitment/MotoJoinUs';
import MotoContact from './components/pages/motostudent/contact/MotoContact';

function AppContent() {
  const location = useLocation();
  
  // Detectamos dónde está el usuario
  const isLandingPage = location.pathname === "/";
  const isMotoPage = location.pathname.startsWith("/moto");

  return (
    <div className="app">
      <ScrollToTop />
      
      {!isLandingPage && (isMotoPage ? <NavbarMoto /> : <Navbar />)}

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

      {!isLandingPage && (isMotoPage ? <FooterMoto /> : <Footer />)}
      
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