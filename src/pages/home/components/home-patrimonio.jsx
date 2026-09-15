import bgImage from "../../../assets/images/backgrounds/compromiso-bg.jpg";
import patrimonioImage from "../../../assets/images/sections/home/patrimonio.jpg";
import logoMision from "../../../assets/images/icons/main/logo-mision-angeles.svg";
import { Link } from "react-router";
import { useInView } from "../../../hooks/useInView";

export default function HomePatrimonio() {
  const [ref, isVisible] = useInView({ threshold: 0.3 });

  return (
    <div className="relative flex justify-center w-full px-[40px] py-[30px] gap-[20px] md:p-[clamp(28px,4.688vw,60px)]">
      {/* Background image */}
      <div className="absolute -z-10 inset-0 w-full h-full overflow-hidden">
        <img
          src={bgImage}
          alt="Imagen de fondo"
          className="absolute inset-0 w-full h-full object-cover scale"
        />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className={`reveal ${isVisible ? "is-visible" : ""} relative flex w-full max-w-[1280px] h-full justify-center items-center`}
      >
        <div className="flex flex-col h-full w-full max-w-[1160px] justify-center items-center gap-[20px]">
          {/* Text */}
          <div className="flex flex-col w-full max-w-[1160px] justify-center items-center text-center">
            <h3 className="title font-woodland text-verde-confianza font-bold leading-none md:leading-tight">
              Más que propiedades, construimos patrimonio
            </h3>
            <p className="w-full paragraph text-center leading-[110%] lg:leading-none text-gris-profundo">
              Cada desarrollo Beneva es una apuesta por la calidad de vida
              espacios diseñados para que tu familia crezca, conviva y eche
              raíces.
            </p>
          </div>

          {/* Misión de los Ángeles */}
          <div className="flex flex-col w-full max-w-[1160px] md:h-[clamp(304px,51.641vw,661px)] rounded-br-[100px] overflow-hidden">
            <div className="relative w-full overflow-hidden h-[308px] md:grow">
              <img
                src={patrimonioImage}
                alt="Render de viviendas"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center items-center w-full bg-verde-confianza px-[clamp(11px,1.875vw,24px)] py-[clamp(14px,2.344vw,30px)]">
              <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1006px] gap-[15px] md:gap-[20px] lg:gap-0 p-[20px] lg:px-[40px]">
                <img
                  src={logoMision}
                  alt="Logo Misión de los Ángeles"
                  className="w-[122px]"
                />
                <h3 className="text-center title font-woodland leading-none text-verde-dinamico">
                  Misión de los Ángeles: Serafines
                </h3>
                <Link
                  to={"/proyectos"}
                  className="relative group text-[14px] md:text-button px-[24px] py-[15px] md:px-[clamp(11px,1.875vw,24px)] md:py-[clamp(7px,1.172vw,15px)] bg-celeste-bienestar hover:bg-transparent text-verde-confianza hover:text-celeste-bienestar active:text-beige-hogar active:font-bold active:bg-transparent hover:cursor-pointer"
                >
                  Ver proyectos
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-celeste-bienestar opacity-0 group-hover:opacity-100 group-active:opacity-0 transition-opacity ease-in" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
