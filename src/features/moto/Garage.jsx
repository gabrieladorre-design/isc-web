import GarageGrid from "@/components/data-display/GarageGrid";
import { motosData } from "@/data/moto/motos";
import { useI18n } from "@/i18n";

export default function Garage() {
  const { t } = useI18n();

  return (
    <GarageGrid
      items={motosData}
      subtitle={t("garage.moto.subtitle")}
      basePath="/moto/garaje"
      itemNoun={t("garage.moto.itemNoun")}
      ctaPrefix={t("garage.moto.ctaPrefix")}
      activeIds={["im04"]}
    />
  );
}
