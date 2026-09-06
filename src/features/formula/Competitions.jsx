import CompetitionsSection from "@/components/data-display/CompetitionsSection";
import { formulaEvents, formulaResults } from "@/data/competitions";
import { useI18n } from "@/i18n";

export default function Competitions() {
  const { t } = useI18n();

  return (
    <CompetitionsSection
      events={formulaEvents}
      results={formulaResults}
      subtitle={t("competitions.formula.subtitle")}
      mapTitle={t("competitions.formula.mapTitle")}
      legendIsc={t("competitions.formula.legendIsc")}
      legendOther={t("competitions.formula.legendOther")}
      mapCenter={[47.0, 8.0]}
      highlightLabel={t("competitions.formula.highlightLabel")}
      futureGoalLabel={t("competitions.formula.futureGoalLabel")}
    />
  );
}
