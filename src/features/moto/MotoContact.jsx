import ContactSection from "@/components/data-display/ContactSection";

// Dossier: se reutiliza el de Formula Student hasta disponer del específico de MotoStudent.
import dossierPdfES from "@/assets/Dossier_ISC/Dossier_ISC_Formula_Student_ES.pdf";
import dossierPdfEN from "@/assets/Dossier_ISC/Dossier_ISC_Formula_Student_EN.pdf";

export default function MotoContact() {
  return (
    <ContactSection
      headerSubtitle="¿Tienes alguna duda o propuesta para MotoStudent? Estamos aquí para escucharte."
      email="motostudent@iscracingteam.com"
      dossierText="Descarga nuestro dossier oficial con toda la información técnica del prototipo y opciones de colaboración."
      dossierEsHref={dossierPdfES}
      dossierEnHref={dossierPdfEN}
      dossierFileES="Dossier_ISC_MotoStudent_ES.pdf"
      dossierFileEN="Dossier_ISC_MotoStudent_EN.pdf"
      mapTallerTitle="Mapa Taller Moto"
      mapIcaiTitle="Mapa ICAI Moto"
      faqs={[
        {
          q: "¿Cómo puedo unirme al equipo?",
          a: <>El proceso de selección suele abrirse en septiembre y enero. Visita la sección <a href="/moto/recruitment">Recruitment</a> para ver si el plazo está abierto.</>,
        },
        {
          q: "¿Buscáis patrocinadores?",
          a: <>¡Siempre! Si representas a una empresa interesada en apoyar la innovación eléctrica en dos ruedas, descarga nuestro <strong>Dossier</strong> o llámanos.</>,
        },
        {
          q: "¿Organizan visitas?",
          a: "Sí, organizamos jornadas de puertas abiertas puntuales en nuestro taller. Anunciamos las fechas en nuestro Instagram.",
        },
      ]}
    />
  );
}
