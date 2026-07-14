import backgroundImage from "../../../assets/images/sections/quienes-somos/cta-background.jpg";
import rightDecoration from "../../../assets/images/icons/decorations/icono-quienes-somos.png";
import { Link } from "react-router";

export default function QuienesSomosCta() {
  return (
    <div className="relative flex flex-col h-[588px] items-center justify-center px-[clamp(28px,4.688vw,60px)] py-[clamp(16px,2.656vw,34px)] gap-[clamp(14px,2.344vw,30px)] bg-verde-confianza/20">
      {/* Decoración */}
      <div className="absolute z-10 top-0 right-0 w-full h-[380px] overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          {/* right side */}
          <img
            src={rightDecoration}
            alt="Ícono izquierdo"
            className="absolute right-1 top-0 w-[396px] h-[298px]"
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

      <div className="relative flex flex-col max-w-[860px] gap-[clamp(9px,1.563vw,20px)]">
        <h3 className="text-display2 text-center font-woodland font-semibold leading-[110%] text-beige-hogar">
          Ya sabes quiénes somos. <br /> ¿Empezamos?
        </h3>
        <p className="text-paragraph1 leading-none text-center text-beige-hogar">
          Estamos listos para acompañarte en el camino hacia tu hogar ideal.
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
