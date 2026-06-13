import JoinUsSection from "@/components/data-display/JoinUsSection";

export default function MotoJoinUs() {
  return (
    <JoinUsSection
      /* Cambia a false cuando acabe el plazo de inscripción */
      isOpen={true}
      formsUrl="https://forms.office.com/e/aa59hp5KtL?embed=true"
      headerTitle="ÚNETE A MOTOSTUDENT"
      headerSubtitle="Buscamos mentes inquietas, apasionadas por el motociclismo y listas para diseñar el futuro de las dos ruedas."
      formIntro="Completa el formulario para iniciar tu proceso de selección con el equipo de MotoStudent."
      iframeTitle="Formulario Recruitment ISC Moto"
      closedText="Actualmente no tenemos ningún proceso de selección abierto para el equipo de motos."
      info={
        <>
          <h2>¿Qué buscamos?</h2>
          <p>
            El <strong>ISC MS Racing Team</strong> está formado por una selección de 20 estudiantes de grado y máster. Buscamos talento multidisciplinar procedente principalmente de <strong>ICAI</strong> e <strong>ICADE</strong>:
          </p>

          <ul style={{ marginBottom: "1.5rem" }}>
            <li><strong>ICAI:</strong> Ingeniería Mecánica, Eléctrica, Telecomunicaciones, Tecnologías Industriales y sus respectivos másteres.</li>
            <li><strong>ICADE:</strong> Administración y Dirección de Empresas (ADE), Business Analytics y programas de dobles grados.</li>
          </ul>

          <p>
            Entrar al proyecto supone asumir la responsabilidad de concebir desde cero un prototipo real, innovando en el exigente campo de la <strong>movilidad eléctrica sobre dos ruedas</strong> para competir en MotorLand.
          </p>

          <h3>Nuestros Departamentos</h3>
          <ul>
            <li><strong>Estructura y Parte Ciclo:</strong> Diseño del chasis multitubular, optimización del basculante, suspensión, frenos y dirección.</li>
            <li><strong>Powertrain:</strong> Integración del motor eléctrico, transmisión, refrigeración térmica y cálculo de potencia.</li>
            <li><strong>Electrónica y Baterías:</strong> Diseño del pack de baterías, gestión del BMS, cableado, telemetría y sensores.</li>
            <li><strong>Management:</strong> Búsqueda de patrocinadores, operaciones logísticas, Business Plan corporativo y Media & Marketing.</li>
          </ul>
        </>
      }
    />
  );
}
