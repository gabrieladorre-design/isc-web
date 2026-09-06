import CompetitionsSection from "@/components/data-display/CompetitionsSection";
import { motoEvents, motoResults } from "@/data/competitions";
import { useI18n } from "@/i18n";

export default function MotoCompetitions() {
  const { t } = useI18n();

  return (
    <CompetitionsSection
      events={motoEvents}
      results={motoResults}
      subtitle={t("competitions.moto.subtitle")}
      mapTitle={t("competitions.moto.mapTitle")}
      legendIsc={t("competitions.moto.legendIsc")}
      legendOther={t("competitions.moto.legendOther")}
      mapCenter={[44.0, 4.0]}
      highlightLabel={t("competitions.moto.highlightLabel")}
      futureGoalLabel={t("competitions.moto.futureGoalLabel")}
    />
  );
}
