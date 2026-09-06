import "./FormulaStudent.scss";
import AnimatedCounter from "@/components/data-display/AnimatedCounter";
import PhotoGallery from "@/components/data-display/PhotoGallery";
import { useI18n } from "@/i18n";

// Fondo del hero (FormulaStudentMedia)
import introBg from "@/assets/fotos-y-videos/pruebas/coche/fs-2024.jpg";

// Galería de fotos de competición (FormulaStudentMedia) — carga automática
const fsMediaMap = import.meta.glob(
  "../../assets/fotos-y-videos/pruebas/coche/*.{jpg,jpeg,png}",
  { eager: true, import: "default" }
);
const fsMedia = Object.keys(fsMediaMap).sort().map((k) => fsMediaMap[k]);
// Pruebas Dinámicas: exactamente 8 fotos; el resto van a Estáticas.
const DYNAMIC_COUNT = 8;
const staticPhotos = fsMedia.slice(0, Math.max(0, fsMedia.length - DYNAMIC_COUNT));
const dynamicPhotos = fsMedia.slice(Math.max(0, fsMedia.length - DYNAMIC_COUNT));

function FormulaStudent() {
  const { t } = useI18n();

  const staticCards = t("disciplines.formula.staticCards");
  const dynamicCards = t("disciplines.formula.dynamicCards");
  const stats = t("disciplines.formula.stats");

  return (
    <div className="fs-page">

      {/* 1. INTRODUCCIÓN */}
      <section className="fs-intro" style={{ backgroundImage: `url(${introBg})` }}>
        <div className="fs-intro__overlay" />
        <div className="fs-intro__content">
          <h1 className="fs-title">{t("disciplines.formula.title")}</h1>
          <p className="fs-description">
            {t("disciplines.formula.description")}
          </p>
        </div>
      </section>

      {/* 2. PRUEBAS ESTÁTICAS */}
      <section className="fs-section static">
        <div className="container">
          <h2 className="section-title">{t("disciplines.staticTitle")}</h2>
          <p className="section-subtitle">
            {t("disciplines.formula.staticSubtitle")}
          </p>

          <div className="cards-grid">
            {staticCards.map((card, i) => (
              <div className="fs-card" key={i}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>

          <PhotoGallery images={staticPhotos} alt={t("disciplines.formula.galleryStaticAlt")} />
        </div>
      </section>

      {/* 3. PRUEBAS DINÁMICAS */}
      <section className="fs-section dynamic">
        <div className="container">
          <h2 className="section-title">{t("disciplines.dynamicTitle")}</h2>
          <p className="section-subtitle">
            {t("disciplines.formula.dynamicSubtitle")}
          </p>

          <div className="cards-grid">
            {dynamicCards.map((card, i) => (
              <div className="fs-card" key={i}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>

          <PhotoGallery images={dynamicPhotos} alt={t("disciplines.formula.galleryDynamicAlt")} />
        </div>
      </section>

      {/* 4. DATOS OFICIALES (Stats) */}
      <section className="fs-stats">
        <div className="container stats-grid">
          {stats.map((stat, i) => (
            <AnimatedCounter key={i} end={stat.end} label={stat.label} />
          ))}
        </div>
      </section>

      {/* Vídeo */}
      <section className="fs-video">
        <div className="video-fullscreen">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/M4aC_-sxTPc?autoplay=1&mute=1&loop=1&playlist=M4aC_-sxTPc&controls=1&showinfo=0" 
            title={t("disciplines.formula.videoTitle")}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

    </div>
  );
}

export default FormulaStudent;
