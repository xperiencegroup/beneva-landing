import background from "../../../assets/images/sections/quienes-somos/hero-bg.jpg";

export default function QuienesSomosHero() {
  return (
    <div className="relative flex flex-col justify-end items-center h-[650px] gap-[20px] md:gap-[clamp(9px,1.563vw,20px)] px-[40px] pb-[60px] md:p-[clamp(28px,4.688vw,60px)] rounded-br-[100px] md:rounded-br-[200px] overflow-hidden">
      {/* Overlay gradiente */}
      <div className="absolute z-0 inset-0 w-full h-full bg-linear-to-b from-gris-gradiente/0 from-21% md:via-gris-gradiente/70 via-gris-gradiente/90 via-80% to-gris-gradiente" />

      {/* Image */}
      <div className="absolute -z-10 inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <img
            src={background}
            alt="Imagen de fondo"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      <h2 className="relative max-w-[260px] md:max-w-[732px] text-display4 font-woodland font-bold text-center leading-[110%] text-beige-hogar">
        Construyamos algo grande juntos
      </h2>

      <p className="relative max-w-[1160px] text-paragraph1 leading-tight text-center text-beige-hogar">
        Beneva nació con una convicción clara: los espacios donde vivimos
        moldean quiénes somos. Por eso cada proyecto lleva consigo calidad,
        detalle y una visión humana para que quien llegue a casa sienta que
        llegó a su lugar.
      </p>
    </div>
  );
}
