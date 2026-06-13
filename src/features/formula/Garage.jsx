import GarageGrid from "@/components/data-display/GarageGrid";
import { carsData } from "@/data/formula/coches";

export default function Garage() {
  return (
    <GarageGrid
      items={carsData}
      subtitle="Pura ingeniería en números. Explora nuestra historia técnica desde los orígenes hasta el prototipo actual."
      basePath="/garaje"
      itemNoun="Monoplaza"
      ctaPrefix="SABER MÁS DEL"
      activeIds={["ifs08"]}
    />
  );
}
