import TeamSection from "@/components/data-display/TeamSection";

export default function MotoTeam() {
  return (
    <TeamSection
      subtitle="Impulsados por la innovación, unidos por la velocidad en dos ruedas."
      stats={[
        { target: 1, label: "Team Leader" },
        { target: 2, label: "Directores Técnicos" },
        { target: 4, label: "Jefes de Departamento" },
        { target: 13, label: "Ingenieros" },
      ]}
      description={
        <>
          <p>Actualmente, la división <strong>ISC MS Racing Team</strong> está formada por 20 estudiantes de las escuelas de ICAI e ICADE.</p>
          <p>A nivel organizativo, cuenta con un <strong>Team Leader</strong>, encargado de definir la estrategia general y los objetivos en MotorLand Aragón, tanto a nivel técnico, como financiero y de comunicación.</p>
          <p>La figura de los <strong>Directores Técnicos</strong> refleja la búsqueda de la especialización por áreas. Destacan la verificación al detalle de todos los aspectos técnicos de la motocicleta eléctrica.</p>
          <p>Los <strong>Jefes de Departamento</strong> se encargan del desarrollo de una parcela específica del prototipo y cuentan con un equipo de ingenieros para llevar todas esas tareas a cabo.</p>
        </>
      }
    />
  );
}
