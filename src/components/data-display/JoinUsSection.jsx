import { useEffect } from "react";
import Icon from "./Icon";
import "./JoinUsSection.scss";

/**
 * Página de "Recruitment / Únete" reutilizable para Coche y Moto.
 * La maqueta (cabecera + columna info + tarjeta de formulario con estado
 * abierto/cerrado) es idéntica; cambian los textos y el estado del proceso.
 *
 * Props:
 *  - isOpen:         si el proceso de selección está abierto (muestra el formulario)
 *  - formsUrl:       URL del Microsoft Forms (con ?embed=true)
 *  - headerTitle:    título de la cabecera
 *  - headerSubtitle: subtítulo de la cabecera
 *  - info:           JSX con el contenido de la columna izquierda (¿Qué buscamos? + departamentos)
 *  - formIntro:      texto bajo el título del formulario
 *  - iframeTitle:    atributo title del iframe del formulario
 *  - closedText:     primer párrafo del estado "Proceso Cerrado"
 *  - instagramUrl:   enlace de Instagram del estado cerrado
 */
export default function JoinUsSection({
  isOpen = false,
  formsUrl = "",
  headerTitle = "",
  headerSubtitle = "",
  info = null,
  formIntro = "",
  iframeTitle = "Formulario Recruitment",
  closedText = "",
  instagramUrl = "https://www.instagram.com/iscfsracingteam/",
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="join-us-page">

      {/* CABECERA VERDE */}
      <header className="join-header">
        <div className="header-content">
          <h1>{headerTitle}</h1>
          <p>{headerSubtitle}</p>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="join-main">
        <div className="join-container">

          {/* COLUMNA IZQUIERDA: Textos informativos */}
          <div className="join-info">
            {info}
          </div>

          {/* COLUMNA DERECHA: Tarjeta del Formulario */}
          <div className="join-form-wrapper">
            <div className="form-card">

              {isOpen ? (
                <>
                  <div className="form-card-header">
                    <h3>Formulario de Inscripción</h3>
                    <p>{formIntro}</p>
                  </div>

                  {/* El Microsoft Forms incrustado */}
                  <div className="iframe-container">
                    <iframe
                      src={formsUrl}
                      width="100%"
                      height="650px"
                      frameBorder="0"
                      allowFullScreen
                      title={iframeTitle}
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
                  <div className="icon-closed"><Icon name="flag" /></div>
                  <h3>Proceso Cerrado</h3>
                  <p>{closedText}</p>
                  <p className="closed-sub">Síguenos en nuestras redes sociales para ser la primera persona en enterarte de la próxima convocatoria.</p>
                  <a href={instagramUrl} target="_blank" rel="noreferrer" className="btn-external">
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
