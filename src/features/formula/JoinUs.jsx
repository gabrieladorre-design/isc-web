import JoinUsSection from "@/components/data-display/JoinUsSection";

export default function JoinUs() {
  return (
    <JoinUsSection
      /* Cambia a false cuando acabe el plazo de inscripción */
      isOpen={true}
      formsUrl="https://forms.office.com/e/aa59hp5KtL?embed=true"
      headerTitle="ÚNETE AL DESAFÍO"
      headerSubtitle="Buscamos mentes inquietas, apasionadas por el motorsport y con ganas de aprender trabajando en equipo."
      formIntro="Completa el formulario oficial para iniciar tu proceso de selección con nosotros."
      iframeTitle="Formulario Recruitment ISC"
      closedText="Actualmente no tenemos ningún proceso de selección abierto para el equipo."
      info={
        <>
          <h2>¿Qué buscamos?</h2>
          <p>
            El <strong>ISC FS Racing Team</strong> está formado por más de 80 estudiantes de grado y máster. Buscamos talento joven y multidisciplinar procedente de todas las facultades de la universidad (<strong>ICAI</strong>, <strong>ICADE</strong> y <strong>CIHS</strong>):
          </p>

          <ul style={{ marginBottom: "1.5rem" }}>
            <li><strong>ICAI:</strong> Ingeniería en Tecnologías Industriales, Ingeniería de Telecomunicación, Ingeniería Matemática e Inteligencia Artificial, y sus respectivos másteres.</li>
            <li><strong>ICADE:</strong> Administración y Dirección de Empresas (ADE), Business Analytics, Derecho, y todos sus programas de dobles grados.</li>
            <li><strong>CIHS (Ciencias Humanas y Sociales):</strong> Comunicación Global, Relaciones Internacionales, Traducción, y otros perfiles estratégicos que aportan un gran valor a la gestión corporativa y comunicación del equipo.</li>
          </ul>

          <p>
            Entrar al proyecto supone vivir una experiencia única, asumiendo responsabilidades en un entorno similar al mundo laboral, e innovando de primera mano en <strong>movilidad eléctrica y autónoma</strong>.
          </p>

          <h3>Nuestros Departamentos</h3>
          <ul>
            <li><strong>Mecánica:</strong> Chassis & Structural, Braking & Steering, Suspension & Dynamics, Aero & Cooling.</li>
            <li><strong>Eléctrica (Batteries y Powertrain):</strong> Diseño del pack de baterías, gestión del BMS, motor eléctrico, transmisión y refrigeración.</li>
            <li><strong>Electrónica:</strong> Control Electronics, Electronic Subsystems, Telemetry, Integration.</li>
            <li><strong>Driverless:</strong> Desarrollo de software, algoritmos, percepción e implementación en el mundo real.</li>
            <li><strong>Management & Statics:</strong> Operations, Alliances, Media & Marketing, Business Plan, Cost Report, Engineering Design.</li>
          </ul>
        </>
      }
    />
  );
}
