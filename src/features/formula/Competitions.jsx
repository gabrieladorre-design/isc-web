import CompetitionsSection from "@/components/data-display/CompetitionsSection";
import { formulaEvents, formulaResults } from "@/data/competitions";

export default function Competitions() {
  return (
    <CompetitionsSection
      events={formulaEvents}
      results={formulaResults}
      subtitle="El terreno donde la ingeniería se pone a prueba contra el cronómetro."
      mapTitle="Mapa del Tour Europeo"
      legendIsc="Participación ISC"
      legendOther="Eventos Oficiales FS"
      mapCenter={[47.0, 8.0]}
      highlightLabel="Hito ISC:"
      futureGoalLabel="Próximo objetivo"
    />
  );
}
