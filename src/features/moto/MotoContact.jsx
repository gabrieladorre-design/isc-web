import ContactSection from "@/components/data-display/ContactSection";
import { useI18n } from "@/i18n";

// Dossier oficial específico de MotoStudent.
import dossierPdfES from "@/assets/Dossier_ISC/Dossier_ISC_MotoStudent_ES.pdf";
import dossierPdfEN from "@/assets/Dossier_ISC/Dossier_ISC_MotoStudent_EN.pdf";

export default function MotoContact() {
  const { t } = useI18n();

  return (
    <ContactSection
      headerSubtitle={t("contact.moto.headerSubtitle")}
      email="direccion.isc@clubisc.com"
      dossierText={t("contact.moto.dossierText")}
      dossierEsHref={dossierPdfES}
      dossierEnHref={dossierPdfEN}
      dossierFileES="Dossier_ISC_MotoStudent_ES.pdf"
      dossierFileEN="Dossier_ISC_MotoStudent_EN.pdf"
      mapTallerTitle={t("contact.moto.mapWorkshopTitle")}
      mapIcaiTitle={t("contact.moto.mapIcaiTitle")}
      faqs={t("contact.moto.faqs")}
    />
  );
}
