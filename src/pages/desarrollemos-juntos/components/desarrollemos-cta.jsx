import backgroundImage from "../../../assets/images/sections/desarrollemos-juntos/cta-fondo.jpg";
import { Link } from "react-router";

export default function DesarrollemosCta() {
  return (
    <div className="relative flex flex-col h-[755px] items-center justify-center px-[clamp(28px,4.688vw,60px)] py-[clamp(16px,2.656vw,34px)] gap-[clamp(14px,2.344vw,30px)] bg-verde-confianza/20">
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
        <h3 className="text-display4 text-center font-woodland font-semibold leading-[110%] text-beige-hogar">
          ¿Listo para encontrar tu hogar ideal?
        </h3>
        <p className="text-display2 leading-[110%] text-center font-woodland font-bold text-beige-hogar">
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
