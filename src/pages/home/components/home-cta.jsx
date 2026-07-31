import backgroundImage from "../../../assets/images/sections/home/cta-fondo.jpg";
import { Link } from "react-router";
import { useInView } from "../../../hooks/useInView";

export default function HomeCta() {
  const [ref, isVisible] = useInView();

  return (
    <div className="relative flex flex-col h-[755px] items-center justify-center md:justify-end py-[40px] px-[34px] md:p-[60px] gap-[20px] bg-verde-confianza/20">
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

      <div
        ref={ref}
        className={`reveal-scale ${isVisible ? "is-visible" : ""} relative flex flex-col max-w-[260px] md:max-w-[840px] gap-[20px]`}
      >
        <h3 className="text-[26px] lg:text-[42px] text-center font-woodland font-semibold leading-[110%] text-beige-hogar">
          ¿Listo para encontrar <br className="md:hidden" /> tu hogar ideal?
        </h3>
        <p className="text-[24px] md:text-display5 font-woodland font-semibold leading-[115%] text-center text-beige-hogar">
          Platica con nosotros cuéntanos qué estás buscando y con gusto te
          acompañamos en cada paso del camino.
        </p>
      </div>

      <div
        style={{ transitionDelay: isVisible ? "0.15s" : "0s" }}
        className={`reveal-scale ${isVisible ? "is-visible" : ""} relative flex flex-col md:flex-row max-md:w-full max-md:max-w-[271px] gap-[40px] md:gap-[56px]`}
      >
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
