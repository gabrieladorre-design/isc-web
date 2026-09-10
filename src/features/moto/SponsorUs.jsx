import SponsorUsSection from "@/components/data-display/SponsorUsSection";
import { useI18n } from "@/i18n";

// Imágenes reales de impacto del prototipo (MotorLand / Jarama 2024)
import headerImg from "@/assets/fotos-y-videos/HomeMoto/HomeMoto.JPG";
import showcase1 from "@/assets/fotos-y-videos/HomeMoto/imagenes-deslizantes-home/Moto-02.jpg";
import showcase2 from "@/assets/fotos-y-videos/HomeMoto/imagenes-deslizantes-home/Moto-05.jpg";
import showcase3 from "@/assets/fotos-y-videos/HomeMoto/imagenes-deslizantes-home/Moto-09.jpg";

export default function MotoSponsorUs() {
  const { t } = useI18n();

  return (
    <SponsorUsSection
      headerImage={headerImg}
      headerSubtitle={t("sponsorUs.moto.headerSubtitle")}
      valueProps={t("sponsorUs.moto.valueProps")}
      pitchTitle={t("sponsorUs.moto.pitchTitle")}
      pitchText={t("sponsorUs.moto.pitchText")}
      showcaseImages={[showcase1, showcase2, showcase3]}
      introTitle={t("sponsorUs.moto.introTitle")}
      introParagraphs={t("sponsorUs.moto.introParagraphs")}
      benefits={t("sponsorUs.moto.benefits")}
      tiers={t("sponsorUs.moto.tiers")}
      ctaTitle={t("sponsorUs.moto.ctaTitle")}
      ctaText={t("sponsorUs.moto.ctaText")}
      ctaEmailHref="mailto:direccion.isc@clubisc.com?subject=Interés%20en%20Patrocinio%20MotoStudent"
    />
  );
}
