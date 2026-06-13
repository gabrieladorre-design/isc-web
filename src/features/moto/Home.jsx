import HomeSection from "@/components/data-display/HomeSection";

// Material provisional (sustituir por fotos/vídeos reales del prototipo)
const heroBg = "https://videos.pexels.com/video-files/4384110/4384110-uhd_2560_1440_30fps.mp4";
const presentationVideo = "https://videos.pexels.com/video-files/5001713/5001713-uhd_2560_1440_30fps.mp4";
const motoCad = "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1000";

const galleryImages = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map(
  (num) => `https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80&ixid=${num}`
);

export default function MotoHome() {
  return (
    <HomeSection
      heroTitle="ISC MS RACING TEAM"
      heroVideo={heroBg}
      heroSubtitle="COMPROMISO. TALENTO. PASIÓN."
      heroButtons={[
        { to: "/moto/team", label: "NUESTRO EQUIPO" },
        { to: "/moto/sponsors", label: "PATROCÍNANOS" },
      ]}
      presentation={{
        src: presentationVideo,
        poster: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
        controls: true,
      }}
      whoParagraphs={
        <>
          <p className="intro-text">
            El <strong>ISC MS Racing Team</strong> es el equipo de MotoStudent de la Universidad Pontificia Comillas.
          </p>
          <p>
            Está formado por <strong>20 estudiantes</strong>, mayoritariamente de la Escuela de Ingeniería ICAI, contando también con miembros de ICADE. Nuestro objetivo principal es claro: concebir, diseñar, fabricar y competir al más alto nivel con una motocicleta 100% eléctrica.
          </p>
        </>
      }
      whoHighlights={[
        { icon: "⚡", text: "Motocicleta 100% Eléctrica" },
        { icon: "🛠️", text: "Fabricación propia en ICAI" },
        { icon: "🏁", text: "Competición Internacional" },
      ]}
      cadImg={motoCad}
      cadAlt="Modelo CAD de la motocicleta"
      cadOverlay="IM-01 // EV POWERTRAIN"
      mission={
        <p>
          Formar a los ingenieros del futuro enfrentándolos a desafíos reales del sector de la automoción.
          Fomentamos el talento, el trabajo en equipo y la excelencia técnica
          a través de la competición universitaria de motociclismo más exigente del mundo.
        </p>
      }
      vision={
        <p>
          Consolidarnos como un equipo referente en el paddock de <strong>MotoStudent</strong>.
          Diseñar prototipos eléctricos cada vez más eficientes y competir al más alto nivel.
        </p>
      }
      gallery={galleryImages}
      ctaTitle="¿QUIERES FORMAR PARTE DEL PROYECTO?"
      ctaText="Tanto si eres estudiante buscando un reto, como si eres una empresa apostando por la innovación en dos ruedas."
      ctaButtons={[
        { to: "/moto/recruitment", label: "ÚNETE COMO ALUMNO", className: "btn-primary" },
        { to: "/moto/sponsors", label: "COLABORA COMO EMPRESA", className: "btn-white" },
      ]}
    />
  );
}
