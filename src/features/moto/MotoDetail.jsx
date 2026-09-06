import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom"; 
import { motosData } from "@/data/moto/motos";
import Icon from "@/components/data-display/Icon";
import { useI18n } from "@/i18n";
import "./MotoDetail.scss";

export default function MotoDetail() {
  const { motoId } = useParams(); 
  const revealRefs = useRef([]);
  const { t, tx } = useI18n();
  
  const moto = motosData.find((m) => m.id === motoId);

  useEffect(() => {
    window.scrollTo(0, 0); 

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [motoId]);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  if (!moto) {
    return (
      <div className="error-page">
        <h1>404</h1>
        <p>{t("detail.notFoundMoto")}</p>
        <Link to="/moto/garaje">{t("detail.back")}</Link>
      </div>
    );
  }

  return (
    <div className="car-detail-page">
      <header className="car-hero" style={{ backgroundImage: `url(${moto.image})` }}>
        <div className="overlay"></div>
        <Link to="/moto/garaje" className="btn-back"><Icon name="arrow-left" /> {t("detail.back")}</Link>
      </header>

      {/* Bloque de información sobre fondo blanco para máxima legibilidad */}
      <section className="model-intro">
        {moto.status && <span className="model-status">{tx(moto.status)}</span>}
        <h1>{moto.name}</h1>
        <p className="summary">{tx(moto.description)}</p>
      </section>

      <div className="main-content-container">
        <section className="specs-section" ref={addToRefs}>
          <h2>{t("detail.specsTitle")}</h2>
          <div className="specs-grid">
            <div className="spec-card"><Icon name="bolt" className="spec-icon" /> <small>{t("detail.specs.powertrain")}</small> <br/> {tx(moto.specs.powertrain)}</div>
            <div className="spec-card"><Icon name="weight" className="spec-icon" /> <small>{t("detail.specs.weight")}</small> <br/> {tx(moto.specs.weight)}</div>
            <div className="spec-card"><Icon name="tools" className="spec-icon" /> <small>{t("detail.specs.chassis")}</small> <br/> {tx(moto.specs.chassis)}</div>
            <div className="spec-card"><Icon name="stopwatch" className="spec-icon" /> <small>{t("detail.specs.acceleration")}</small> <br/> {tx(moto.specs.acceleration)}</div>
          </div>
        </section>

        {moto.video && (
          <section className="model-video-section" ref={addToRefs}>
            <h2>{t("detail.videoTitle")}</h2>
            <div className="model-video-wrapper">
              <video
                src={moto.video}
                autoPlay
                loop
                muted
                playsInline
                controls
              ></video>
            </div>
          </section>
        )}

        <section className="competitions-section" ref={addToRefs}>
          <h2>{t("detail.competitionsTitle")}</h2>
          {moto.competitions.length > 0 ? (
            <div className="comp-grid">
              {moto.competitions.map((comp, index) => (
                <div key={index} className="comp-card">
                  <h4>{comp.name}</h4>
                  <p><Icon name="pin" /> {tx(comp.venue)}</p>
                  <p className="result"><Icon name="trophy" /> {tx(comp.result)}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-data">{t("detail.noCompetitions")}</p>
          )}
        </section>
      </div>
    </div>
  );
}