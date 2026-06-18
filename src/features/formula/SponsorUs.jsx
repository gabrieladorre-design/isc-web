import SponsorUsSection from "@/components/data-display/SponsorUsSection";

// Imágenes reales de impacto
import headerImg from "@/assets/fotos-y-videos/pruebas/coche/fs-team.jpg";
import showcase1 from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/Coche-02.jpg";
import showcase2 from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/Coche-04.jpg";
import showcase3 from "@/assets/fotos-y-videos/HomeCoche/imagenes-deslizantes-home/Coche-06.jpg";

export default function SponsorUs() {
  return (
    <SponsorUsSection
      headerImage={headerImg}
      headerSubtitle="Asóciese con el ISC Racing Team e invierta en innovación, ingeniería y talento universitario."
      valueProps={[
        { value: "+80", label: "Ingenieros en el equipo" },
        { value: "100%", label: "Monoplaza eléctrico" },
        { value: "ICAI · ICADE", label: "Talento multidisciplinar" },
        { value: "Europa", label: "Competición internacional" },
      ]}
      pitchTitle="Su marca, en el corazón de la ingeniería del futuro"
      pitchText="Cada temporada, decenas de ingenieros llevan su marca a los circuitos más exigentes de Europa ante miles de profesionales del sector de la automoción, la energía y la tecnología. Asociarse con el ISC Racing Team es invertir en visibilidad de alto valor, en I+D real y en la próxima generación de talento que su empresa querrá contratar."
      showcaseImages={[showcase1, showcase2, showcase3]}
      introTitle="Una alianza estratégica con retorno medible"
      introParagraphs={
        <>
          <p>
            El ISC Racing Team busca socios corporativos que compartan una visión a largo plazo basada en la innovación tecnológica y el desarrollo del talento. Más que un patrocinio, proponemos una colaboración estratégica con objetivos definidos y resultados cuantificables.
          </p>
          <p>
            Establecemos acuerdos técnico-corporativos en los que su empresa aporta recursos económicos o técnicos y el equipo retorna valor tangible: presencia de marca en un entorno de alto rendimiento, acceso directo a futuros ingenieros y asociación con un proyecto de excelencia académica.
          </p>
          <p>
            Formula Student es la mayor competición internacional de ingeniería universitaria. Su proyección en el sector industrial y tecnológico convierte al equipo en una plataforma de comunicación idónea para compañías que deseen reforzar su posicionamiento de marca en el ámbito del motorsport y la movilidad.
          </p>
        </>
      }
      benefits={[
        { label: "Visibilidad de marca", text: "Presencia de su logotipo en el monoplaza, equipamiento y eventos ante un público técnico y especializado." },
        { label: "Acceso a talento", text: "Contacto directo con ingenieros en formación de ICAI e ICADE para sus procesos de selección y prácticas." },
        { label: "Innovación e I+D", text: "Asociación con el desarrollo de tecnología eléctrica y autónoma de vanguardia." },
        { label: "Responsabilidad corporativa", text: "Inversión en la formación de futuros profesionales y en la excelencia universitaria." },
        { label: "Posicionamiento", text: "Difusión continua en nuestras campañas, redes sociales y apariciones en medios." },
      ]}
      tiers={[
        {
          name: "TITLE SPONSOR",
          premium: true,
          items: [
            "Visibilidad máxima y prioritaria en el monoplaza y equipamiento oficial.",
            "Oportunidades exclusivas de branding y personalización del vehículo.",
            "Acceso prioritario al talento (CV Book) y a eventos privados del equipo.",
            "Difusión premium en todas nuestras campañas y redes sociales.",
          ],
        },
        {
          name: "MAIN SPONSOR",
          items: [
            "Alta visibilidad en puntos clave del monoplaza y equipamiento.",
            "Contacto directo con nuestros ingenieros y acceso al talento del equipo.",
            "Participación destacada en nuestros eventos y exhibiciones.",
            "Presencia constante en nuestros canales de comunicación corporativa.",
          ],
        },
        {
          name: "OFFICIAL SPONSOR",
          items: [
            "Presencia de marca representativa en el monoplaza y equipamiento.",
            "Invitación a eventos clave y exhibiciones del equipo en pista.",
            "Difusión regular en nuestras redes sociales y plataformas digitales.",
          ],
          note: "*El patrocinio de software y herramientas se incluye en esta categoría según su alcance de colaboración.",
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
      ctaText="Contacte con nuestro departamento de Alianzas para concertar una reunión y diseñar juntos un acuerdo de patrocinio adaptado a sus objetivos."
      ctaEmailHref="mailto:formulastudent@iscracingteam.com?subject=Interés%20en%20Patrocinio%20ISC"
    />
  );
}
