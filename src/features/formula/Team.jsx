import TeamSection from "@/components/data-display/TeamSection";
import { teamMembers, categories } from "@/data/team";

export default function Team() {
  return (
    <TeamSection
      subtitle="Impulsados por el diseño, unidos por la velocidad."
      stats={[
        { target: 1, label: "Team Leader" },
        { target: 5, label: "Directores Técnicos" },
        { target: 12, label: "Jefes de Departamento" },
        { target: 83, label: "Ingenieros" },
      ]}
      description={
        <>
          <p>Actualmente, el ISC FS Racing Team está formado por 83 estudiantes.</p>
          <p>A nivel organizativo, cuenta con un <strong>Team Leader</strong>, encargado de definir la estrategia general y los objetivos de la temporada, tanto a nivel técnico, como financiero o de comunicación.</p>
          <p>La figura de los <strong>Directores Técnicos</strong> refleja la búsqueda de la especialización por áreas. Destacan la verificación al detalle de todos los aspectos técnicos como la supervisión del progreso de cada departamento.</p>
          <p>Los <strong>Jefes de Departamento</strong> se encargan del desarrollo de una parcela específica del monoplaza y cuentan con un equipo de ingenieros para llevar todas esas tareas a cabo.</p>
        </>
      }
      members={teamMembers}
      categories={categories}
    />
  );
}
