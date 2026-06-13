import HistorySection from "@/components/data-display/HistorySection";
import { formulaTimeline } from "@/data/history";

export default function History() {
  return (
    <HistorySection
      subtitle="Compitiendo en la élite europea desde 2017."
      timeline={formulaTimeline}
      vehicleAlt="Coche"
      vehicleLabel="Monoplaza"
      futureTitle="Innovación Autónoma"
      futureBody={
        <p>
          El ISC Racing Team lidera el camino hacia la <strong>Movilidad Autónoma</strong>.
          Para 2026, estamos centrando nuestros esfuerzos en la implementación de los primeros
          sistemas <em>driverless</em> dentro de Formula Student en Madrid, preparando a nuestros
          ingenieros para los desafíos tecnológicos más exigentes del futuro.
        </p>
      }
    />
  );
}
