import GarageGrid from "@/components/data-display/GarageGrid";
import { motosData } from "@/data/moto/motos";

export default function Garage() {
  return (
    <GarageGrid
      items={motosData}
      subtitle="Pura ingeniería sobre dos ruedas. Explora la evolución técnica de nuestros prototipos eléctricos."
      basePath="/moto/garaje"
      itemNoun="Prototipo"
      ctaPrefix="SABER MÁS DE LA"
      activeIds={["im06", "im05"]}
    />
  );
}
