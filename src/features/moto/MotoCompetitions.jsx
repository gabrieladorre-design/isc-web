import CompetitionsSection from "@/components/data-display/CompetitionsSection";
import { motoEvents, motoResults } from "@/data/competitions";

export default function MotoCompetitions() {
  return (
    <CompetitionsSection
      events={motoEvents}
      results={motoResults}
      subtitle="El terreno donde la ingeniería eléctrica se pone a prueba sobre dos ruedas."
      mapTitle="Mapa de Competición"
      legendIsc="Sede Principal ISC"
      legendOther="Circuitos en Evaluación"
      mapCenter={[44.0, 4.0]}
      highlightLabel="Hito ISC Moto:"
      futureGoalLabel="Próximo objetivo / Test"
    />
  );
}
