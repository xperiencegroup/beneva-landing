import backgroundImage from "../../../assets/images/sections/home/cta-fondo.jpg";
import leftDecoration from "../../../assets/images/icons/decorations/icono-izquierda.png";
import rightDecoration from "../../../assets/images/icons/decorations/icono-derecha.png";
import centerDecoration from "../../../assets/images/icons/decorations/icono-centro.png";
import { Link } from "react-router";

export default function HomeCta() {
  return (
    <div className="relative flex flex-col h-[755px] items-center justify-center px-[clamp(28px,4.688vw,60px)] py-[clamp(16px,2.656vw,34px)] gap-[20px] md:gap-[clamp(9px,1.563vw,20px)] bg-verde-confianza/20">
      {/* Decoración */}
      <div className="absolute z-10 bottom-0 w-full h-[380px] translate-y-[50%] overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          {/* left side */}
          <img
            src={leftDecoration}
            alt="Ícono izquierdo"
            className="absolute -left-2 top-0 h-full max-[1100px]:hidden"
          />
          {/* Center */}
          <img
            src={centerDecoration}
            alt="Ícono izquierdo"
            className="absolute left-1/2 -translate-x-1/2 bottom-0 -top-5 h-[245px] max-[1100px]:hidden"
          />
          {/* right side */}
          <img
            src={rightDecoration}
            alt="Ícono izquierdo"
            className="absolute right-1 top-0 h-full max-[1100px]:hidden"
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-linear-to-b from-verde-gradiente/0 from-0% via-verde-gradiente/80 via-36% to-verde-gradiente" />

      {/* Image */}
      <div className="absolute -z-10 w-full h-full overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={backgroundImage}
            alt="Imagen de fondo"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex flex-col max-w-[287px] md:max-w-[840px] gap-[20px] md:gap-[clamp(9px,1.563vw,20px)]">
        <h3 className="text-[30px] md:text-display3 text-center font-woodland font-semibold leading-[110%] text-beige-hogar">
          ¿Listo para encontrar <br className="md:hidden" /> tu hogar ideal?
        </h3>
        <p className="text-[24px] md:text-display2 font-woodland font-semibold leading-none text-center text-beige-hogar">
          Platica con nosotros cuéntanos qué estás buscando y con gusto te
          acompañamos en cada paso del camino.
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row max-md:w-full max-md:max-w-[271px] gap-[40px] md:gap-[clamp(26px,4.375vw,56px)]">
        <Link
          to={"contactanos"}
          className="text-[18px] md:text-button px-[24px] py-[15px] md:px-[clamp(11px,1.875vw,24px)] md:py-[clamp(7px,1.172vw,15px)] bg-beige-hogar text-center text-verde-confianza hover:cursor-pointer"
        >
          Contáctanos
        </Link>
        <Link
          to={"proyectos"}
          className="text-[18px] md:text-button px-[24px] py-[15px] md:px-[clamp(11px,1.875vw,24px)] md:py-[clamp(7px,1.172vw,15px)] bg-celeste-bienestar text-center text-verde-confianza hover:cursor-pointer"
        >
          Ver proyecto
        </Link>
      </div>
    </div>
  );
}
