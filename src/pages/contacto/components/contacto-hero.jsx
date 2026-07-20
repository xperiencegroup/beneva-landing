import background from "../../../assets/images/sections/contacto/hero-bg.jpg";

export default function ContactoHero() {
  return (
    <div className="relative flex flex-col justify-end items-center h-[650px] gap-[clamp(9px,1.563vw,20px)] px-[40px] pb-[60px] md:p-[clamp(28px,4.688vw,60px)] rounded-br-[100px] md:rounded-br-[200px] overflow-hidden">
      {/* Overlay gradiente */}
      <div className="absolute z-5 inset-0 w-full h-full bg-linear-to-b from-beige-hogar/0 from-21% md:via-beige-hogar/70 via-beige-hogar/90 via-80% to-beige-hogar" />

      {/* Image */}
      <div className="absolute -z-0 inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <img
            src={background}
            alt="Imagen de fondo"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      </div>

      <h2 className="relative z-10 max-w-[1180px] text-display4 font-woodland font-bold text-center leading-[110%] text-verde-confianza">
        Contacto
      </h2>

      <p className="relative z-10 max-w-[1160px] text-[24px] md:text-display2 text-center font-woodland font-bold leading-none text-verde-confianza">
        Estamos aquí para ayudarte
      </p>
    </div>
  );
}
