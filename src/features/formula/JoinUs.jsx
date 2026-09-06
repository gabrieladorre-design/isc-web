import JoinUsSection from "@/components/data-display/JoinUsSection";
import { useI18n } from "@/i18n";

export default function JoinUs() {
  const { t } = useI18n();

  return (
    <JoinUsSection
      /* Cambia a true cuando se reabra el plazo de inscripción */
      isOpen={false}
      formsUrl="https://forms.office.com/e/aa59hp5KtL?embed=true"
      headerTitle={t("joinUs.formula.headerTitle")}
      headerSubtitle={t("joinUs.formula.headerSubtitle")}
      formIntro={t("joinUs.formula.formIntro")}
      iframeTitle={t("joinUs.formula.iframeTitle")}
      closedText={t("joinUs.formula.closedText")}
      info={t("joinUs.formula.info")}
    />
  );
}
