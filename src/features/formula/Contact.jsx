import ContactSection from "@/components/data-display/ContactSection";
import { useI18n } from "@/i18n";

// Dossier oficial (PDF)
import dossierPdfES from "@/assets/Dossier_ISC/Dossier_ISC_Formula_Student_ES.pdf";
import dossierPdfEN from "@/assets/Dossier_ISC/Dossier_ISC_Formula_Student_EN.pdf";

export default function Contact() {
  const { t } = useI18n();

  return (
    <ContactSection
      headerSubtitle={t("contact.formula.headerSubtitle")}
      email="formulastudent@iscracingteam.com"
      dossierText={t("contact.formula.dossierText")}
      dossierEsHref={dossierPdfES}
      dossierEnHref={dossierPdfEN}
      dossierFileES="Dossier_ISC_Formula_Student_ES.pdf"
      dossierFileEN="Dossier_ISC_Formula_Student_EN.pdf"
      mapTallerTitle={t("contact.formula.mapWorkshopTitle")}
      mapIcaiTitle={t("contact.formula.mapIcaiTitle")}
      faqs={t("contact.formula.faqs")}
    />
  );
}
