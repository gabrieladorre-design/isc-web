import SponsorsSection from "@/components/data-display/SponsorsSection";
import { useI18n } from "@/i18n";

export default function MotoSponsors() {
  const { t } = useI18n();

  return (
    <SponsorsSection
      sponsorUsPath="/moto/sponsor-us"
      ctaText={t("sponsors.moto.ctaText")}
      introText={t("sponsors.moto.introText")}
    />
  );
}
