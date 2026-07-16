import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import "./HomeSection.scss";

/**
 * Landing ("Home") reutilizable para Coche y Moto.
 * La estructura (hero, vídeo, quiénes somos, misión/visión, galería, CTA) y las
 * animaciones de scroll-reveal son idénticas; todo el contenido se pasa por props.
 *
 * Props:
 *  - heroImage / heroVideo: portada como imagen de fondo (coche) o vídeo (moto). Usa uno u otro.
 *  - heroOverlayColor:      color del overlay del hero (opcional; el CSS aplica el por defecto)
 *  - heroSubtitle:          eslogan bajo el título
 *  - heroButtons:           [{ to, label }] botones del hero
 *  - presentation:          { src, poster?, autoPlay?, loop?, muted?, playsInline?, controls? }
 *  - whoParagraphs:         JSX con los párrafos de "Quiénes Somos"
 *  - whoHighlights:         [{ icon, text }] tarjetas de specs
 *  - cadImg / cadAlt / cadOverlay: imagen del vehículo + etiqueta técnica
 *  - mission / vision:      JSX del texto de Misión y Visión
 *  - gallery:               array de src de imágenes (ya repetidas para el bucle del slider)
 *  - ctaTitle / ctaText:    cabecera del Call To Action final
 *  - ctaButtons:            [{ to, label, className }] botones del CTA
 */
export default function HomeSection({
  heroTitle = "ISC RACING TEAM",
  heroImage = null,
  heroVideo = null,
  heroOverlayColor = null,
  heroSubtitle = "",
  heroButtons = [],
  presentation = {},
  whoParagraphs = null,
  whoHighlights = [],
  cadImg = null,
  cadAlt = "",
  cadOverlay = "",
  mission = null,
  vision = null,
  gallery = [],
  ctaTitle = "",
  ctaText = "",
  ctaButtons = [],
}) {
  const revealRefs = useRef([]);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.15 });

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Reproduce el vídeo de presentación automáticamente al entrar en pantalla
     y lo pausa al salir. Intenta reproducir CON sonido; si el navegador bloquea
     el autoplay con audio, cae a silenciado (y el sonido se activará en cuanto
     el usuario interactúe con la página, ver efecto siguiente). */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = false;
          video.play().catch(() => {
            // Autoplay con sonido bloqueado → reproducir en silencio
            video.muted = true;
            video.play().catch(() => {});
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  /* Activa el sonido en la primera interacción del usuario con la página
     (los navegadores solo permiten audio tras un gesto del usuario). */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const enableSound = () => {
      video.muted = false;
      video.volume = 1;
      if (!video.paused || isElementInViewport(video)) {
        video.play().catch(() => {});
      }
      window.removeEventListener("pointerdown", enableSound);
      window.removeEventListener("keydown", enableSound);
      window.removeEventListener("touchstart", enableSound);
    };
    const isElementInViewport = (el) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };
    window.addEventListener("pointerdown", enableSound);
    window.addEventListener("keydown", enableSound);
    window.addEventListener("touchstart", enableSound);
    return () => {
      window.removeEventListener("pointerdown", enableSound);
      window.removeEventListener("keydown", enableSound);
      window.removeEventListener("touchstart", enableSound);
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="home-page">

      {/* 1. HERO SECTION (PORTADA) */}
      <section
        className="hero-section"
        style={heroImage ? {
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        } : undefined}
      >
        <div
          className="video-overlay"
          style={heroOverlayColor ? { backgroundColor: heroOverlayColor } : undefined}
        ></div>
        {heroVideo && (
          <video className="hero-video" src={heroVideo} autoPlay loop muted playsInline />
        )}

        <div className="hero-content">
          <h1 className="slide-up">{heroTitle}</h1>
          <p className="slide-up delay-1">{heroSubtitle}</p>
          <div className="hero-buttons slide-up delay-2">
            {heroButtons.map((btn, i) => (
              <Link key={i} to={btn.to} className="btn-primary">{btn.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. VÍDEO DE PRESENTACIÓN */}
      <section className="presentation-section" ref={addToRefs}>
        <div className="presentation-container">
          <div className="video-wrapper">
            {presentation.youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${presentation.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${presentation.youtubeId}&controls=1&rel=0&modestbranding=1`}
                title="Vídeo de presentación"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                ref={videoRef}
                src={presentation.src}
                poster={presentation.poster}
                loop={presentation.loop}
                playsInline
                controls={presentation.controls}
              ></video>
            )}
          </div>
        </div>
      </section>

      {/* 3. QUIÉNES SOMOS + IMAGEN DEL VEHÍCULO */}
      <section className="who-we-are-section" ref={addToRefs}>
        <div className="who-container">

          <div className="who-text">
            <h2>QUIÉNES SOMOS</h2>
            <div className="divider-left"></div>
            {whoParagraphs}

            <div className="specs-highlights">
              {whoHighlights.map((h, i) => (
                <div className="highlight" key={i}>
                  <span className="icon"><Icon name={h.icon} /></span>
                  <span>{h.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="who-visual">
            <div className="cad-frame">
              <img src={cadImg} alt={cadAlt} />
              <div className="tech-overlay">
                <span>{cadOverlay}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. MISIÓN Y VISIÓN */}
      <section className="mission-vision-section" ref={addToRefs}>
        <div className="mv-container">
          <div className="mv-card">
            <div className="icon-wrapper"><Icon name="target" /></div>
            <h3>NUESTRA MISIÓN</h3>
            {mission}
          </div>
          <div className="mv-card">
            <div className="icon-wrapper"><Icon name="globe" /></div>
            <h3>NUESTRA VISIÓN</h3>
            {vision}
          </div>
        </div>
      </section>

      {/* 5. GALERÍA DESLIZANTE */}
      <section className="gallery-section">
        <h2>NUESTRA PASIÓN EN IMÁGENES</h2>
        <div className="gallery-slider">
          <div className="slider-track">
            {gallery.map((imgSrc, i) => (
              <div key={i} className="slide">
                <img src={imgSrc} alt={`Gallery slide ${i}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION FINAL */}
      <section className="cta-section" ref={addToRefs}>
        <div className="cta-content">
          <h2>{ctaTitle}</h2>
          <p>{ctaText}</p>
          <div className="cta-buttons">
            {ctaButtons.map((btn, i) => (
              <Link key={i} to={btn.to} className={btn.className}>{btn.label}</Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
