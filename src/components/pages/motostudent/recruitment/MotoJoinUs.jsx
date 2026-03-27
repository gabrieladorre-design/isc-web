import { useEffect } from "react";
import "./MotoJoinUs.scss";

export default function MotoJoinUs() {
  
  /* =========================================================
     ⚙️ CONTROLADOR DE ESTADO DE RECRUITMENT ⚙️
     Cambia a 'false' cuando acabe el plazo de inscripción.
     Cambia a 'true' cuando queráis abrir el formulario.
  ===========================================================*/
  const isRecruitmentOpen = true; 
  
  // Enlace del formulario (Puedes poner uno específico para Moto)
  const formsUrl = "https://forms.office.com/e/aa59hp5KtL?embed=true";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="moto-join-us-page">
      
      {/* CABECERA VERDE */}
      <header className="join-header">
        <div className="header-content">
          <h1>ÚNETE A MOTOSTUDENT</h1>
          <p>Buscamos mentes inquietas, apasionadas por el motociclismo y listas para diseñar el futuro de las dos ruedas.</p>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="join-main">
        <div className="join-container">
          
          {/* COLUMNA IZQUIERDA: Textos informativos de Moto */}
          <div className="join-info">
            <h2>¿Qué buscamos?</h2>
            <p>
              El <strong>ISC MS Racing Team</strong> está formado por una selección de 20 estudiantes de grado y máster. Buscamos talento multidisciplinar procedente principalmente de <strong>ICAI</strong> e <strong>ICADE</strong>:
            </p>
            
            <ul style={{ marginBottom: "1.5rem" }}>
              <li><strong>ICAI:</strong> Ingeniería Mecánica, Eléctrica, Telecomunicaciones, Tecnologías Industriales y sus respectivos másteres.</li>
              <li><strong>ICADE:</strong> Administración y Dirección de Empresas (ADE), Business Analytics y programas de dobles grados.</li>
            </ul>

            <p>
              Entrar al proyecto supone asumir la responsabilidad de concebir desde cero un prototipo real, innovando en el exigente campo de la <strong>movilidad eléctrica sobre dos ruedas</strong> para competir en MotorLand.
            </p>
            
            <h3>Nuestros Departamentos</h3>
            <ul>
              <li><strong>Estructura y Parte Ciclo:</strong> Diseño del chasis multitubular, optimización del basculante, suspensión, frenos y dirección.</li>
              <li><strong>Powertrain:</strong> Integración del motor eléctrico, transmisión, refrigeración térmica y cálculo de potencia.</li>
              <li><strong>Electrónica y Baterías:</strong> Diseño del pack de baterías, gestión del BMS, cableado, telemetría y sensores.</li>
              <li><strong>Management:</strong> Búsqueda de patrocinadores, operaciones logísticas, Business Plan corporativo y Media & Marketing.</li>
            </ul>
          </div>

          {/* COLUMNA DERECHA: Tarjeta del Formulario */}
          <div className="join-form-wrapper">
            <div className="form-card">
              
              {isRecruitmentOpen ? (
                <>
                  <div className="form-card-header">
                    <h3>Formulario de Inscripción</h3>
                    <p>Completa el formulario para iniciar tu proceso de selección con el equipo de MotoStudent.</p>
                  </div>
                  
                  {/* El Microsoft Forms incrustado */}
                  <div className="iframe-container">
                    <iframe 
                      src={formsUrl} 
                      width="100%" 
                      height="650px" 
                      frameBorder="0" 
                      allowFullScreen
                      title="Formulario Recruitment ISC Moto"
                    ></iframe>
                  </div>
                  
                  <div className="form-fallback">
                    <p>¿No puedes visualizar bien el formulario?</p>
                    <a href={formsUrl.replace("?embed=true", "")} target="_blank" rel="noreferrer" className="btn-external">
                      ABRIR EN UNA PESTAÑA NUEVA
                    </a>
                  </div>
                </>

              ) : (

                <div className="closed-state">
                  <div className="icon-closed">🏁</div>
                  <h3>Proceso Cerrado</h3>
                  <p>Actualmente no tenemos ningún proceso de selección abierto para el equipo de motos.</p>
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