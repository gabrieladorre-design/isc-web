import HomeSection from "@/components/data-display/HomeSection";
import { useI18n } from "@/i18n";

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
  const { t } = useI18n();

  return (
    <HomeSection
      heroTitle="ISC MS RACING TEAM"
      heroImage={heroBg}
      heroOverlayColor="rgba(0, 0, 0, 0.4)"
      heroSubtitle={t("home.moto.heroSubtitle")}
      heroButtons={[
        { to: "/moto/team", label: t("home.moto.btnTeam") },
        { to: "/moto/sponsors", label: t("home.moto.btnSponsor") },
      ]}
      presentation={{
        youtubeId: "XTQ6Y1S85x8",
      }}
      whoParagraphs={t("home.moto.whoParagraphs")}
      whoHighlights={[
        { icon: "bolt", text: t("home.moto.highlight1") },
        { icon: "tools", text: t("home.moto.highlight2") },
        { icon: "flag", text: t("home.moto.highlight3") },
      ]}
      cadImg={motoCad}
      cadAlt={t("home.moto.cadAlt")}
      cadOverlay="IM-06 // EV POWERTRAIN"
      mission={t("home.moto.mission")}
      vision={t("home.moto.vision")}
      gallery={galleryImages}
      ctaTitle={t("home.moto.ctaTitle")}
      ctaText={t("home.moto.ctaText")}
      ctaButtons={[
        { to: "/moto/recruitment", label: t("home.moto.ctaStudent"), className: "btn-primary" },
        { to: "/moto/sponsors", label: t("home.moto.ctaCompany"), className: "btn-white" },
      ]}
    />
  );
}
