import SponsorsSection from "@/components/data-display/SponsorsSection";

export default function MotoSponsors() {
  return (
    <SponsorsSection
      sponsorUsPath="/moto/sponsor-us"
      ctaText="Únete a nuestro equipo e impulsa la innovación eléctrica."
      introText={
        <>
          El proyecto <strong>ISC MS Racing Team</strong> es una realidad gracias
          al apoyo de empresas líderes que apuestan por el talento joven y la
          innovación sobre dos ruedas.
          <br />
          <br />
          Su colaboración técnica y económica nos permite diseñar, fabricar y
          competir con nuestro prototipo eléctrico en MotorLand Aragón.
          <br />
          <strong>¡Gracias por acompañarnos en cada curva!</strong>
        </>
      }
    />
  );
}
