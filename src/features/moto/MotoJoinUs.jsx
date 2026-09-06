import JoinUsSection from "@/components/data-display/JoinUsSection";
import { useI18n } from "@/i18n";

export default function MotoJoinUs() {
  const { t } = useI18n();

  return (
    <JoinUsSection
      /* Cambia a true cuando se reabra el plazo de inscripción */
      isOpen={false}
      formsUrl="https://forms.office.com/e/aa59hp5KtL?embed=true"
      headerTitle={t("joinUs.moto.headerTitle")}
      headerSubtitle={t("joinUs.moto.headerSubtitle")}
      formIntro={t("joinUs.moto.formIntro")}
      iframeTitle={t("joinUs.moto.iframeTitle")}
      instagramUrl="https://www.instagram.com/iscmsracingteam/"
      closedText={t("joinUs.moto.closedText")}
      info={t("joinUs.moto.info")}
    />
  );
}
