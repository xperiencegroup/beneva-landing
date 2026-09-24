import { Link } from "react-router";
import { useInView } from "../../../hooks/useInView";
import { track } from "../../../analytics/track";
import { TRACK } from "../../../analytics/track.constants";

import backgroundImage from "../../../assets/images/sections/desarrollemos-juntos/cta-fondo.jpg";

const CTAS = [
  { id: "contactanos", to: "/contactanos", label: "Contáctanos" },
  { id: "proyectos", to: "/proyectos", label: "Ver proyectos" },
];

export default function DesarrollemosCta() {
  const [ref, isVisible] = useInView();

  return (
    <div className="relative flex flex-col h-[755px] items-center justify-center md:justify-end px-[44px] py-[34px] md:p-[60px] gap-[20px] md:gap-[30px] bg-verde-confianza/20">
      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-linear-to-b from-verde-gradiente/0 from-7% via-verde-gradiente/30 via-48% to-verde-gradiente" />

      {/* Image */}
      <div className="absolute -z-10 w-full h-full top-0 overflow-hidden">
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
        className={`reveal-scale ${isVisible ? "is-visible" : ""} relative flex flex-col items-center max-w-[860px] gap-[20px]`}
      >
        <h3 className="max-md:max-w-[260px] title text-center font-woodland font-bold leading-[110%] text-beige-hogar">
          ¿Listo para encontrar tu hogar ideal?
        </h3>
        <p className="max-md:max-w-[260px] paragraph leading-[110%] text-center text-beige-hogar">
          Platica con nosotros cuéntanos qué estás buscando y con gusto te
          acompañamos en cada paso del camino.
        </p>
      </div>

      <div
        style={{ transitionDelay: isVisible ? "0.15s" : "0s" }}
        className={`reveal-scale ${isVisible ? "is-visible" : ""} relative flex flex-col md:flex-row gap-[40px] md:gap-[56px]`}
      >
        {CTAS.map((cta) => (
          <Link
            key={cta.id}
            to={cta.to}
            onClick={() => track(TRACK.develop.cta, { item_id: cta.id })}
            className="relative group text-[18px] md:text-button px-[24px] py-[15px] md:px-[clamp(11px,1.875vw,24px)] md:py-[clamp(7px,1.172vw,15px)] bg-celeste-bienestar text-center text-verde-confianza hover:bg-transparent hover:text-celeste-bienestar hover:cursor-pointer active:bg-verde-confianza active:font-bold active:text-beige-hogar transition-all"
          >
            {cta.label}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-celeste-bienestar opacity-0 group-hover:opacity-100 group-active:opacity-0 transition-opacity ease-in" />
          </Link>
        ))}
      </div>
    </div>
  );
}
