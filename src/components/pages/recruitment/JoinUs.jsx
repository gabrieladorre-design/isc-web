import { useEffect } from "react";
import "./JoinUs.scss";

export default function JoinUs() {
  
  /* =========================================================
     ⚙️ CONTROLADOR DE ESTADO DE RECRUITMENT ⚙️
     Cambia a 'false' cuando acabe el plazo de inscripción.
     Cambia a 'true' cuando queráis abrir el formulario.
  ===========================================================*/
  const isRecruitmentOpen = false; 
  
  // Enlace oficial de Microsoft Forms. 
  // NOTA: Para que se vea directo sin botón, debe estar configurado como "Cualquier persona puede responder" en MS Forms.
  const formsUrl = "https://forms.office.com/e/aa59hp5KtL?embed=true";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="join-us-page">
      
      {/* CABECERA VERDE */}
      <header className="join-header">
        <div className="header-content">
          <h1>ÚNETE AL DESAFÍO</h1>
          <p>Buscamos mentes inquietas, apasionadas por el motorsport y con ganas de aprender trabajando en equipo.</p>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="join-main">
        <div className="join-container">
          
          {/* COLUMNA IZQUIERDA: Textos informativos basados en el Dossier */}
          <div className="join-info">
            <h2>¿Qué buscamos?</h2>
            <p>
              El <strong>ISC FS Racing Team</strong> está formado por más de 80 estudiantes de grado y máster. Buscamos talento joven y multidisciplinar procedente de todas las facultades de la universidad (<strong>ICAI</strong>, <strong>ICADE</strong> y <strong>CIHS</strong>):
            </p>
            
            <ul style={{ marginBottom: "1.5rem" }}>
              <li><strong>ICAI:</strong> Ingeniería en Tecnologías Industriales, Ingeniería de Telecomunicación, Ingeniería Matemática e Inteligencia Artificial, y sus respectivos másteres.</li>
              <li><strong>ICADE:</strong> Administración y Dirección de Empresas (ADE), Business Analytics, Derecho, y todos sus programas de dobles grados.</li>
              <li><strong>CIHS (Ciencias Humanas y Sociales):</strong> Comunicación Global, Relaciones Internacionales, Traducción, y otros perfiles estratégicos que aportan un gran valor a la gestión corporativa y comunicación del equipo.</li>
            </ul>

            <p>
              Entrar al proyecto supone vivir una experiencia única, asumiendo responsabilidades en un entorno similar al mundo laboral, e innovando de primera mano en <strong>movilidad eléctrica y autónoma</strong>.
            </p>
            
            <h3>Nuestros Departamentos</h3>
            <ul>
              <li><strong>Mecánica:</strong> Chassis & Structural, Powertrain, Braking & Steering, Suspension & Dynamics, Aero & Cooling.</li>
              <li><strong>Electrónica:</strong> Tractive System, Batteries, Control Electronics, Electronic Subsystems, Telemetry, Integration.</li>
              <li><strong>Driverless:</strong> Desarrollo de software, algoritmos, percepción e implementación en el mundo real.</li>
              <li><strong>Management & Statics:</strong> Operations, Alliances, Media & Marketing, Business Plan, Cost Report, Engineering Design.</li>
            </ul>
          </div>

          {/* COLUMNA DERECHA: Tarjeta del Formulario */}
          <div className="join-form-wrapper">
            <div className="form-card">
              
              {isRecruitmentOpen ? (
                <>
                  <div className="form-card-header">
                    <h3>Formulario de Inscripción</h3>
                    <p>Completa el formulario oficial para iniciar tu proceso de selección con nosotros.</p>
                  </div>
                  
                  {/* El Microsoft Forms incrustado */}
                  <div className="iframe-container">
                    <iframe 
                      src={formsUrl} 
                      width="100%" 
                      height="650px" 
                      frameBorder="0" 
                      allowFullScreen
                      title="Formulario Recruitment ISC"
                    ></iframe>
                  </div>
                  
                  <div className="form-fallback">
                    <p>¿No puedes visualizar bien el formulario?</p>
                    <a href="https://forms.office.com/e/aa59hp5KtL" target="_blank" rel="noreferrer" className="btn-external">
                      ABRIR EN UNA PESTAÑA NUEVA
                    </a>
                  </div>
                </>

              ) : (

                <div className="closed-state">
                  <div className="icon-closed">🏁</div>
                  <h3>Proceso Cerrado</h3>
                  <p>Actualmente no tenemos ningún proceso de selección abierto para el equipo.</p>
                  <p className="closed-sub">Síguenos en nuestras redes sociales para ser la primera persona en enterarte de la próxima convocatoria.</p>
                  <a href="https://www.instagram.com/iscfsracingteam/" target="_blank" rel="noreferrer" className="btn-external">
                    IR A INSTAGRAM
                  </a>
                </div>
              )}

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}