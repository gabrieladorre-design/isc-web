import GarageGrid from "@/components/data-display/GarageGrid";
import { carsData } from "@/data/formula/coches";
import { useI18n } from "@/i18n";

export default function Garage() {
  const { t } = useI18n();

  return (
    <GarageGrid
      items={carsData}
      subtitle={t("garage.formula.subtitle")}
      basePath="/garaje"
      itemNoun={t("garage.formula.itemNoun")}
      ctaPrefix={t("garage.formula.ctaPrefix")}
      activeIds={["ifs08"]}
    />
  );
}
