import HomeSection from "@/components/data-display/HomeSection";

// Assets locales (fotos/vídeos reales del prototipo — MotorLand/Jarama 2024)
import heroBg from "@/assets/fotos-y-videos/HomeMoto/HomeMoto.JPG";
import motoCad from "@/assets/fotos-y-videos/HomeMoto/ModeloMoto.JPG";

// Imágenes de la galería deslizante
import mSlide1 from "@/assets/fotos-y-videos/HomeMoto/imagenes-deslizantes-home/Moto-01.jpg";
import mSlide2 from "@/assets/fotos-y-videos/HomeMoto/imagenes-deslizantes-home/Moto-02.jpg";
import mSlide3 from "@/assets/fotos-y-videos/HomeMoto/imagenes-deslizantes-home/Moto-03.jpg";
import mSlide4 from "@/assets/fotos-y-videos/HomeMoto/imagenes-deslizantes-home/Moto-04.jpg";
import mSlide5 from "@/assets/fotos-y-videos/HomeMoto/imagenes-deslizantes-home/Moto-05.jpg";
import mSlide6 from "@/assets/fotos-y-videos/HomeMoto/imagenes-deslizantes-home/Moto-06.jpg";
import mSlide7 from "@/assets/fotos-y-videos/HomeMoto/imagenes-deslizantes-home/Moto-07.jpg";
import mSlide8 from "@/assets/fotos-y-videos/HomeMoto/imagenes-deslizantes-home/Moto-08.jpg";
import mSlide9 from "@/assets/fotos-y-videos/HomeMoto/imagenes-deslizantes-home/Moto-09.jpg";
import mSlide10 from "@/assets/fotos-y-videos/HomeMoto/imagenes-deslizantes-home/Moto-10.jpg";
import mSlide11 from "@/assets/fotos-y-videos/HomeMoto/imagenes-deslizantes-home/Moto-11.jpg";
import mSlide12 from "@/assets/fotos-y-videos/HomeMoto/imagenes-deslizantes-home/Moto-12.jpg";
import mSlide13 from "@/assets/fotos-y-videos/HomeMoto/imagenes-deslizantes-home/Moto-13.jpg";

const galleryImages = [
  mSlide1, mSlide2, mSlide3, mSlide4, mSlide5, mSlide6, mSlide7,
  mSlide8, mSlide9, mSlide10, mSlide11, mSlide12, mSlide13,
];

export default function MotoHome() {
  return (
    <HomeSection
      heroTitle="ISC MS RACING TEAM"
      heroImage={heroBg}
      heroOverlayColor="rgba(0, 0, 0, 0.4)"
      heroSubtitle="COMPROMISO. TALENTO. PASIÓN."
      heroButtons={[
        { to: "/moto/team", label: "NUESTRO EQUIPO" },
        { to: "/moto/sponsors", label: "PATROCÍNANOS" },
      ]}
      presentation={{
        youtubeId: "XTQ6Y1S85x8",
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
        { icon: "bolt", text: "Motocicleta 100% Eléctrica" },
        { icon: "tools", text: "Fabricación propia en ICAI" },
        { icon: "flag", text: "Competición Internacional" },
      ]}
      cadImg={motoCad}
      cadAlt="Modelo CAD de la motocicleta"
      cadOverlay="IM-06 // EV POWERTRAIN"
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
