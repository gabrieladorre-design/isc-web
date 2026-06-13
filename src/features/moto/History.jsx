import HistorySection from "@/components/data-display/HistorySection";
import { motoTimeline } from "@/data/history";

export default function MotoHistory() {
  return (
    <HistorySection
      subtitle="Acelerando hacia el futuro en MotoStudent."
      timeline={motoTimeline}
      vehicleAlt="Moto"
      vehicleLabel="Prototipo"
      futureTitle="La Siguiente Generación"
      futureBody={
        <p>
          El equipo está inmerso en el diseño del <strong>IM-06</strong>.
          Nuestro objetivo para la próxima edición en MotorLand Aragón es implementar telemetría en tiempo real y reducir drásticamente el peso del conjunto para competir por el podio internacional.
        </p>
      }
    />
  );
}
