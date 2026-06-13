import ContactSection from "@/components/data-display/ContactSection";

// Dossier oficial (PDF)
import dossierPdfES from "@/assets/Dossier_ISC/Dossier_ISC_Formula_Student_ES.pdf";
import dossierPdfEN from "@/assets/Dossier_ISC/Dossier_ISC_Formula_Student_EN.pdf";

export default function Contact() {
  return (
    <ContactSection
      headerSubtitle="¿Tienes alguna duda o propuesta? Estamos aquí para escucharte."
      email="formulastudent@iscracingteam.com"
      dossierText="Descarga nuestro dossier oficial con toda la información de la temporada y opciones de colaboración."
      dossierEsHref={dossierPdfES}
      dossierEnHref={dossierPdfEN}
      dossierFileES="Dossier_ISC_Formula_Student_ES.pdf"
      dossierFileEN="Dossier_ISC_Formula_Student_EN.pdf"
      mapTallerTitle="Mapa Taller"
      mapIcaiTitle="Mapa ICAI"
      faqs={[
        {
          q: "¿Cómo puedo unirme al equipo?",
          a: <>El proceso de selección suele abrirse en septiembre y enero. Visita la sección <a href="/recruitment">Recruitment</a> para ver si el plazo está abierto.</>,
        },
        {
          q: "¿Buscáis patrocinadores?",
          a: <>¡Siempre! Si representas a una empresa interesada en apoyar el talento joven, descarga nuestro <strong>Dossier</strong> o llámanos.</>,
        },
        {
          q: "¿Organizan visitas?",
          a: "Sí, organizamos jornadas de puertas abiertas puntuales. Anunciamos las fechas en nuestro Instagram.",
        },
      ]}
    />
  );
}
