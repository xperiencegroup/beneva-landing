import background from "../../../assets/images/sections/quienes-somos/hero-bg.jpg";

export default function QuienesSomosHero() {
  return (
    <div className="relative flex flex-col justify-end items-center h-lvh max-h-[900px] gap-[20px] pb-[60px] px-[40px] md:p-[60px] rounded-br-[100px] md:rounded-br-[150px] lg:rounded-br-[200px] overflow-hidden">
      {/* Overlay gradiente */}
      <div className="absolute z-0 inset-0 w-full h-full bg-linear-to-b from-gris-gradiente/0 from-21% md:via-gris-gradiente/70 via-gris-gradiente/90 via-80% to-gris-gradiente" />

      {/* Video */}
      <div className="absolute -z-10 inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <img
            src={background}
            alt="Imagen de fondo"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      <h2 className="relative max-w-[260px] md:max-w-[732px] text-display6 font-woodland font-bold text-center leading-[110%] text-beige-hogar">
        Construyamos algo grande juntos
      </h2>

      <p className="relative max-w-[1088px] text-[18px] md:text-paragraph4  leading-tight text-center text-beige-hogar">
        Creamos espacios pensados para vivir mejor, con calidad, detalle y una
        visión profundamente humana.
      </p>
    </div>
  );
}
