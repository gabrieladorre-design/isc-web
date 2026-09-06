import HistorySection from "@/components/data-display/HistorySection";
import { formulaTimeline } from "@/data/history";
import { useI18n } from "@/i18n";

export default function History() {
  const { t } = useI18n();

  return (
    <HistorySection
      subtitle={t("history.formula.subtitle")}
      timeline={formulaTimeline}
      vehicleAlt={t("history.formula.vehicleAlt")}
      vehicleLabel={t("history.formula.vehicleLabel")}
      futureTitle={t("history.formula.futureTitle")}
      futureBody={t("history.formula.futureBody")}
    />
  );
}
