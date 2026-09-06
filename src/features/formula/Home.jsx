import HomeSection from "@/components/data-display/HomeSection";
import { useI18n } from "@/i18n";

// Assets locales
import heroBg from "@/assets/fotos-y-videos/HomeCoche/HomeCoche.JPG";
import presentationVideo from "@/assets/fotos-y-videos/HomeCoche/HomeVideoCoche.mp4";
import carCad from "@/assets/fotos-y-videos/HomeCoche/ModeloCoche.JPG";

// Imágenes de la galería deslizante (fotos reales — Jarama 2024)
import slide1 from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/Coche-01.jpg";
import slide2 from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/Coche-02.jpg";
import slide3 from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/Coche-03.jpg";
import slide4 from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/Coche-04.jpg";
import slide5 from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/Coche-05.jpg";
import slide6 from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/Coche-06.jpg";
import slide7 from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/Coche-07.jpg";

const galleryImages = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

export default function Home() {
  const { t } = useI18n();

  return (
    <HomeSection
      heroTitle="ISC FS RACING TEAM"
      heroImage={heroBg}
      heroOverlayColor="rgba(0, 0, 0, 0.4)"
      heroSubtitle={t("home.formula.heroSubtitle")}
      heroButtons={[
        { to: "/team", label: t("home.formula.btnTeam") },
        { to: "/sponsor-us", label: t("home.formula.btnSponsor") },
      ]}
      presentation={{
        src: presentationVideo,
        poster: heroBg,
        loop: true,
        controls: true,
      }}
      whoParagraphs={t("home.formula.whoParagraphs")}
      whoHighlights={[
        { icon: "bolt", text: t("home.formula.highlight1") },
        { icon: "tools", text: t("home.formula.highlight2") },
        { icon: "flag", text: t("home.formula.highlight3") },
      ]}
      cadImg={carCad}
      cadAlt={t("home.formula.cadAlt")}
      cadOverlay="IFS-07 // EV POWERTRAIN"
      mission={t("home.formula.mission")}
      vision={t("home.formula.vision")}
      gallery={[...galleryImages, ...galleryImages, ...galleryImages]}
      ctaTitle={t("home.formula.ctaTitle")}
      ctaText={t("home.formula.ctaText")}
      ctaButtons={[
        { to: "/recruitment", label: t("home.formula.ctaStudent"), className: "btn-primary" },
        { to: "/sponsor-us", label: t("home.formula.ctaCompany"), className: "btn-white" },
      ]}
    />
  );
}
