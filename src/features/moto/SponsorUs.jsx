import SponsorUsSection from "@/components/data-display/SponsorUsSection";

export default function MotoSponsorUs() {
  return (
    <SponsorUsSection
      headerSubtitle="Asóciese con la división MotoStudent del ISC Racing Team e invierta en movilidad eléctrica y talento de ingeniería."
      introTitle="Una alianza estratégica con retorno medible"
      introParagraphs={
        <>
          <p>
            La división MotoStudent del ISC Racing Team busca socios corporativos comprometidos con la movilidad eléctrica y el desarrollo del talento universitario. Proponemos una colaboración estratégica con objetivos definidos y resultados cuantificables, no un simple patrocinio.
          </p>
          <p>
            Establecemos acuerdos técnico-corporativos en los que su empresa aporta recursos económicos o técnicos y el equipo retorna valor tangible: presencia de marca internacional, acceso directo a ingenieros altamente cualificados de ICAI e ICADE y asociación con un proyecto de innovación eléctrica.
          </p>
          <p>
            MotoStudent es una competición internacional disputada en el circuito de MotorLand Aragón. Su entorno tecnológico de alto nivel la convierte en una plataforma idónea para que su marca refuerce su posicionamiento en el sector de la movilidad de dos ruedas.
          </p>
        </>
      }
      benefits={[
        { label: "Visibilidad de marca", text: "Presencia de su logotipo en el prototipo, equipamiento y eventos ante un público técnico y especializado." },
        { label: "Acceso a talento", text: "Contacto directo con ingenieros en formación de ICAI e ICADE para sus procesos de selección y prácticas." },
        { label: "Innovación eléctrica", text: "Asociación con el desarrollo de tecnología de propulsión eléctrica y gestión de baterías." },
        { label: "Responsabilidad corporativa", text: "Inversión en la formación de futuros profesionales y en la excelencia universitaria." },
        { label: "Posicionamiento", text: "Difusión continua en nuestras campañas, redes sociales y apariciones en medios." },
      ]}
      tiers={[
        {
          name: "TITLE SPONSOR",
          premium: true,
          items: [
            "Visibilidad máxima y prioritaria en el carenado y equipamiento oficial.",
            "Oportunidades exclusivas de branding y personalización del prototipo.",
            "Acceso prioritario al talento (CV Book) y a eventos privados del equipo.",
            "Difusión premium en todas nuestras campañas y redes sociales.",
          ],
        },
        {
          name: "MAIN SPONSOR",
          items: [
            "Alta visibilidad en puntos clave del prototipo y equipamiento.",
            "Contacto directo con nuestros ingenieros y acceso al talento del equipo.",
            "Participación destacada en nuestros eventos y exhibiciones.",
            "Presencia constante en nuestros canales de comunicación corporativa.",
          ],
        },
        {
          name: "OFFICIAL SPONSOR",
          items: [
            "Presencia de marca representativa en el prototipo y equipamiento.",
            "Invitación a eventos clave y exhibiciones del equipo en pista.",
            "Difusión regular en nuestras redes sociales y plataformas digitales.",
          ],
          note: "*El patrocinio de software y componentes técnicos se incluye en esta categoría según su alcance de colaboración.",
        },
        {
          name: "ASSOCIATE SPONSOR",
          items: [
            "Visibilidad de marca en los activos de competición del equipo.",
            "Menciones y presencia en nuestras campañas de comunicación.",
          ],
        },
      ]}
      ctaTitle="Construyamos una colaboración a la altura de su marca"
      ctaText="Contacte con nuestro departamento de Alianzas para concertar una reunión y diseñar un acuerdo de patrocinio adaptado a los objetivos de su empresa."
      ctaEmailHref="mailto:motostudent@iscracingteam.com?subject=Interés%20en%20Patrocinio%20MotoStudent"
    />
  );
}
