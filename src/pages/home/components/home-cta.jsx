import backgroundImage from "../../../assets/images/sections/home/cta-fondo.jpg";
import leftDecoration from "../../../assets/images/icons/decorations/icono-izquierda.png";
import rightDecoration from "../../../assets/images/icons/decorations/icono-derecha.png";
import centerDecoration from "../../../assets/images/icons/decorations/icono-centro.png";
import { Link } from "react-router";

export default function HomeCta() {
  return (
    <div className="relative flex flex-col h-[755px] items-center justify-center px-[clamp(28px,4.688vw,60px)] py-[clamp(16px,2.656vw,34px)] gap-[clamp(9px,1.563vw,20px)] bg-verde-confianza/20">
      {/* Decoración */}
      <div className="absolute z-10 bottom-0 w-full h-[380px] translate-y-[50%] overflow-hidden">
        <div className="relative w-full h-full">
          {/* left side */}
          <img
            src={leftDecoration}
            alt="Ícono izquierdo"
            className="absolute -left-2 top-0 h-full"
          />
          {/* Center */}
          <img
            src={centerDecoration}
            alt="Ícono izquierdo"
            className="absolute left-1/2 -translate-x-1/2 -top-5 h-[270px]"
          />
          {/* right side */}
          <img
            src={rightDecoration}
            alt="Ícono izquierdo"
            className="absolute right-1 top-0 h-full"
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

      <div className="relative flex flex-col max-w-[840px] gap-[clamp(9px,1.563vw,20px)]">
        <h3 className="text-display3 text-center font-woodland font-semibold leading-[110%] text-beige-hogar">
          ¿Listo para encontrar tu hogar ideal?
        </h3>
        <p className="text-display2 font-woodland font-semibold leading-none text-center text-beige-hogar">
          Platica con nosotros cuéntanos qué estás buscando y con gusto te
          acompañamos en cada paso del camino.
        </p>
      </div>

      <div className="relative flex gap-[clamp(26px,4.375vw,56px)]">
        <Link
          to={"contactanos"}
          className="px-[clamp(11px,1.875vw,24px)] py-[clamp(7px,1.172vw,15px)] bg-beige-hogar text-verde-confianza hover:cursor-pointer"
        >
          Contáctanos
        </Link>
        <Link
          to={"proyectos"}
          className="px-[clamp(11px,1.875vw,24px)] py-[clamp(7px,1.172vw,15px)] bg-celeste-bienestar text-verde-confianza hover:cursor-pointer"
        >
          Ver proyecto
        </Link>
      </div>
    </div>
  );
}
