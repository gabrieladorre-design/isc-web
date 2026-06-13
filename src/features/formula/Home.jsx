import HomeSection from "@/components/data-display/HomeSection";

// Assets locales
import heroBg from "@/assets/fotos-y-videos/HomeCoche/HomeCoche.JPG";
import presentationVideo from "@/assets/fotos-y-videos/HomeCoche/HomeVideoCoche.mp4";
import carCad from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/C01.JPG";

// Imágenes de la galería deslizante
import slide1 from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/C01.JPG";
import slide2 from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/C03b.JPG";
import slide3 from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/C03c.JPG";
import slide4 from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/C04.jpg";
import slide5 from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/C04b.jpg";

const galleryImages = [slide1, slide2, slide3, slide4, slide5];

export default function Home() {
  return (
    <HomeSection
      heroTitle="ISC FS RACING TEAM"
      heroImage={heroBg}
      heroOverlayColor="rgba(0, 0, 0, 0.4)"
      heroSubtitle="INNOVACIÓN. VELOCIDAD. FUTURO."
      heroButtons={[
        { to: "/team", label: "CONOCE AL EQUIPO" },
        { to: "/sponsor-us", label: "PATROCÍNANOS" },
      ]}
      presentation={{
        src: presentationVideo,
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        controls: true,
      }}
      whoParagraphs={
        <>
          <p className="intro-text">
            Somos más de <strong>80 estudiantes</strong> de la Universidad Pontificia Comillas (ICAI).
            Un equipo multidisciplinar de ingenieros mecánicos, electrónicos y perfiles de gestión (ADE) unidos por una pasión: ganar en la pista y liderar la innovación tecnológica.
          </p>
          <p>
            Diseñamos y fabricamos desde cero nuestro monoplaza para la Formula Student. Apostamos por el futuro desarrollando un sistema de propulsión <strong>100% Eléctrico</strong> de alto rendimiento, un chasis ultraligero y un paquete aerodinámico de vanguardia.
          </p>
        </>
      }
      whoHighlights={[
        { icon: "⚡", text: "Vehículo 100% Eléctrico" },
        { icon: "🛠️", text: "Fabricación propia en ICAI" },
        { icon: "🏁", text: "Competición Internacional" },
      ]}
      cadImg={carCad}
      cadAlt="Monoplaza ISC"
      cadOverlay="IFS-07 // EV POWERTRAIN"
      mission={
        <p>
          Formar a los ingenieros del futuro enfrentándolos a desafíos reales.
          Fomentamos el talento, el trabajo en equipo y la excelencia técnica
          a través de la competición automovilística más exigente a nivel universitario.
        </p>
      }
      vision={
        <p>
          Consolidarnos como un equipo referente en <strong>Formula Student Europe</strong>.
          Diseñar vehículos cada vez más eficientes y competir al más alto nivel en los circuitos más emblemáticos: Montmeló, Hockenheim y Varano.
        </p>
      }
      gallery={[...galleryImages, ...galleryImages, ...galleryImages]}
      ctaTitle="¿QUIERES FORMAR PARTE DE LA HISTORIA?"
      ctaText="Tanto si eres estudiante buscando un reto, como si eres una empresa buscando innovación."
      ctaButtons={[
        { to: "/recruitment", label: "ÚNETE COMO ALUMNO", className: "btn-primary" },
        { to: "/sponsor-us", label: "COLABORA COMO EMPRESA", className: "btn-white" },
      ]}
    />
  );
}
