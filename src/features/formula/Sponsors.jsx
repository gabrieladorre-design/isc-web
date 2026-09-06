import SponsorsSection from "@/components/data-display/SponsorsSection";
import { useI18n } from "@/i18n";

export default function Sponsors() {
  const { t } = useI18n();

  return (
    <SponsorsSection
      sponsorUsPath="/sponsor-us"
      ctaText={t("sponsors.formula.ctaText")}
      introText={t("sponsors.formula.introText")}
    />
  );
}
