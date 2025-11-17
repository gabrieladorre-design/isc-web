import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h3>ISC Racing Team</h3>
          <p>Universidad Pontificia Comillas · Formula Student</p>
        </div>

        <div className="footer__links">
          <a href="#equipo">Equipo</a>
          <a href="#patrocinadores">Patrocinadores</a>
          <a href="#recruitment">Recruitment</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} ISC Racing Team</span>
        <span>Diseño web · Gabriela de Dorremochea</span>
      </div>
    </footer>
  );
}
