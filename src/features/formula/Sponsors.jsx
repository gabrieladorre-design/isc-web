import SponsorsSection from "@/components/data-display/SponsorsSection";

export default function Sponsors() {
  return (
    <SponsorsSection
      sponsorUsPath="/sponsor-us"
      ctaText="Únete a nuestro equipo e impulsa la innovación."
      introText={
        <>
          El proyecto <strong>ISC Racing Team</strong> es una realidad gracias al
          apoyo de empresas líderes que apuestan por el talento joven y la
          innovación.
          <br />
          <br />
          Su colaboración técnica y económica nos permite diseñar, fabricar y
          competir al más alto nivel internacional.
          <br />
          <strong>¡Gracias por acompañarnos en cada curva!</strong>
        </>
      }
    />
  );
}
