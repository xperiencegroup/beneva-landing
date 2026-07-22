import backgroundImage from "../../../assets/images/sections/quienes-somos/cta-background.jpg";
import rightDecoration from "../../../assets/images/icons/decorations/icono-quienes-somos.png";
import { Link } from "react-router";

export default function QuienesSomosCta() {
  return (
    <div className="relative flex flex-col h-[442px] md:h-[588px] items-center justify-center px-[44px] py-[34px] md:px-[clamp(28px,4.688vw,60px)] md:py-[clamp(16px,2.656vw,34px)] gap-[30px] md:gap-[clamp(14px,2.344vw,30px)] bg-verde-confianza/20">
      {/* Decoración */}
      <div className="absolute z-10 top-1 right-0 w-full h-[380px] overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          {/* right side */}
          <img
            src={rightDecoration}
            alt="Ícono izquierdo"
            className="absolute right-1 top-0 w-[30vw]"
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

      <div className="relative flex flex-col max-w-[860px] gap-[20px] md:gap-[clamp(9px,1.563vw,20px)]">
        <h3 className="text-[24px] md:text-display2 text-center font-woodland font-semibold leading-[110%] text-beige-hogar">
          Ya sabes quiénes somos. <br /> ¿Empezamos?
        </h3>
        <p className="text-paragraph1 leading-tight text-center text-beige-hogar">
          Estamos listos para acompañarte <br /> en el camino hacia tu hogar
          ideal.
        </p>
      </div>

      <div className="relative flex portrait:flex-col gap-[40px] md:gap-[clamp(26px,4.375vw,56px)]">
        <Link
          to={"/contactanos"}
          className="relative group text-[18px] md:text-button px-[24px] py-[15px] md:px-[clamp(11px,1.875vw,24px)] md:py-[clamp(7px,1.172vw,15px)] bg-beige-hogar text-center text-verde-confianza hover:text-beige-hogar hover:bg-transparent hover:cursor-pointer active:text-verde-confianza active:font-bold active:bg-celeste-bienestar transition-all"
        >
          Contáctanos
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-celeste-bienestar opacity-0 group-hover:opacity-100 group-active:opacity-0 transition-opacity ease-in" />
        </Link>
        <Link
          to={"/proyectos"}
          className="relative group text-[18px] md:text-button px-[24px] py-[15px] md:px-[clamp(11px,1.875vw,24px)] md:py-[clamp(7px,1.172vw,15px)] bg-celeste-bienestar text-center text-verde-confianza hover:bg-transparent hover:text-celeste-bienestar hover:cursor-pointer active:bg-verde-confianza active:font-bold active:text-beige-hogar transition-all"
        >
          Ver proyecto
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-celeste-bienestar opacity-0 group-hover:opacity-100 group-active:opacity-0 transition-opacity ease-in" />
        </Link>
      </div>
    </div>
  );
}
