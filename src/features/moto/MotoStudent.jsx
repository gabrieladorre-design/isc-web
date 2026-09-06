import "./MotoStudent.scss";
import AnimatedCounter from "@/components/data-display/AnimatedCounter";
import PhotoGallery from "@/components/data-display/PhotoGallery";
import { useI18n } from "@/i18n";

// Fondo del hero
import introBg from "@/assets/fotos-y-videos/HomeMoto/HomeMoto.JPG";

// Galería de fotos de competición (MotoStudentMedia) — carga automática
const msMediaMap = import.meta.glob(
  "../../assets/fotos-y-videos/pruebas/moto/*.{jpg,jpeg,png}",
  { eager: true, import: "default" }
);
const msMedia = Object.keys(msMediaMap).sort().map((k) => msMediaMap[k]);
const half = Math.ceil(msMedia.length / 2);
const staticPhotos = msMedia.slice(0, half);
const dynamicPhotos = msMedia.slice(half);

function MotoStudent() {
  const { t } = useI18n();

  const staticCards = t("disciplines.moto.staticCards");
  const dynamicCards = t("disciplines.moto.dynamicCards");
  const stats = t("disciplines.moto.stats");

  return (
    <div className="ms-page">

      {/* 1. INTRODUCCIÓN */}
      <section className="ms-intro" style={{ backgroundImage: `url(${introBg})` }}>
        <div className="ms-intro__overlay" />
        <div className="ms-intro__content">
          <h1 className="ms-title">{t("disciplines.moto.title")}</h1>
          <p className="ms-description">
            {t("disciplines.moto.description")}
          </p>
        </div>
      </section>

      {/* 2. PRUEBAS ESTÁTICAS */}
      <section className="ms-section static">
        <div className="container">
          <h2 className="section-title">{t("disciplines.staticTitle")}</h2>
          <p className="section-subtitle">
            {t("disciplines.moto.staticSubtitle")}
          </p>

          <div className="cards-grid">
            {staticCards.map((card, i) => (
              <div className="ms-card" key={i}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>

          <PhotoGallery images={staticPhotos} alt={t("disciplines.moto.galleryStaticAlt")} />
        </div>
      </section>

      {/* 3. PRUEBAS DINÁMICAS */}
      <section className="ms-section dynamic">
        <div className="container">
          <h2 className="section-title">{t("disciplines.dynamicTitle")}</h2>
          <p className="section-subtitle">
            {t("disciplines.moto.dynamicSubtitle")}
          </p>

          <div className="cards-grid">
            {dynamicCards.map((card, i) => (
              <div className="ms-card" key={i}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>

          <PhotoGallery images={dynamicPhotos} alt={t("disciplines.moto.galleryDynamicAlt")} />
        </div>
      </section>

      {/* 4. DATOS OFICIALES (Stats MotoStudent) */}
      <section className="ms-stats">
        <div className="container stats-grid">
          {stats.map((stat, i) => (
            <AnimatedCounter key={i} end={stat.end} label={stat.label} className="ms-stat-item" />
          ))}
        </div>
      </section>

      {/* Vídeo */}
      <section className="ms-video">
        <div className="video-fullscreen">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/-DMNowF84Dc?autoplay=1&mute=1&loop=1&playlist=-DMNowF84Dc&controls=1&showinfo=0"
            title={t("disciplines.moto.videoTitle")}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

    </div>
  );
}

export default MotoStudent;
