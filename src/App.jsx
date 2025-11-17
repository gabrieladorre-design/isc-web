import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      {/* Aquí luego irá tu Home, secciones, etc. */}
      <main className="app__content">
        <h1>Home · ISC Racing Team</h1>
        <p>Luego aquí montamos el hero, fotos del coche, etc.</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;
