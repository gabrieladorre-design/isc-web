import HistorySection from "@/components/data-display/HistorySection";
import { motoTimeline } from "@/data/history";
import { useI18n } from "@/i18n";

export default function MotoHistory() {
  const { t } = useI18n();

  return (
    <HistorySection
      subtitle={t("history.moto.subtitle")}
      timeline={motoTimeline}
      vehicleAlt={t("history.moto.vehicleAlt")}
      vehicleLabel={t("history.moto.vehicleLabel")}
      futureTitle={t("history.moto.futureTitle")}
      futureBody={t("history.moto.futureBody")}
    />
  );
}
