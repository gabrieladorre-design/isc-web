import SponsorUsSection from "@/components/data-display/SponsorUsSection";
import { useI18n } from "@/i18n";

// Imágenes reales de impacto
import headerImg from "@/assets/fotos-y-videos/pruebas/coche/fs-team.jpg";
import showcase1 from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/Coche-02.jpg";
import showcase2 from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/Coche-04.jpg";
import showcase3 from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/Coche-06.jpg";

export default function SponsorUs() {
  const { t } = useI18n();

  return (
    <SponsorUsSection
      headerImage={headerImg}
      headerSubtitle={t("sponsorUs.formula.headerSubtitle")}
      valueProps={t("sponsorUs.formula.valueProps")}
      pitchTitle={t("sponsorUs.formula.pitchTitle")}
      pitchText={t("sponsorUs.formula.pitchText")}
      showcaseImages={[showcase1, showcase2, showcase3]}
      introTitle={t("sponsorUs.formula.introTitle")}
      introParagraphs={t("sponsorUs.formula.introParagraphs")}
      benefits={t("sponsorUs.formula.benefits")}
      tiers={t("sponsorUs.formula.tiers")}
      ctaTitle={t("sponsorUs.formula.ctaTitle")}
      ctaText={t("sponsorUs.formula.ctaText")}
      ctaEmailHref="mailto:direccion.isc@clubisc.com?subject=Interés%20en%20Patrocinio%20ISC"
    />
  );
}
