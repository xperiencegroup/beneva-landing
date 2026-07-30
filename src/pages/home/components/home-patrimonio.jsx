import bgImage from "../../../assets/images/backgrounds/compromiso-bg.jpg";
import patrimonioImage from "../../../assets/images/sections/home/patrimonio.jpg";
import logoMision from "../../../assets/images/icons/main/logo-mision-angeles.svg";
import { Link } from "react-router";

export default function HomePatrimonio() {
  return (
    <div className="relative w-full px-[40px] py-[30px] gap-[20px] md:p-[clamp(28px,4.688vw,60px)]">
      {/* Background image */}
      <div className="absolute -z-10 inset-0 w-full h-full overflow-hidden">
        <img
          src={bgImage}
          alt="Imagen de fondo"
          className="absolute inset-0 w-full h-full object-cover scale"
        />
      </div>

      {/* Content */}
      <div className="relative flex w-full h-full justify-center items-center">
        <div className="flex flex-col min-w-0 h-full justify-center items-center gap-[20px]">
          {/* Text */}
          <div className="flex flex-col w-full max-w-[1160px] justify-center items-center gap-[20px] text-center">
            <h3 className="text-[24px] md:text-display2 font-woodland text-verde-confianza font-bold leading-none md:leading-tight">
              Más que propiedades, construimos patrimonio
            </h3>
            <p className="text-paragraph1 text-center leading-[110%] lg:leading-none text-gris-profundo">
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
              <div className="flex flex-col justify-center items-center gap-[20px] md:gap-[clamp(9px,1.563vw,20px)]">
                <img
                  src={logoMision}
                  alt="Logo Misión de los Ángeles"
                  className="w-[122px]"
                />
                <h3 className="text-[24px] text-center md:text-display2 font-woodland leading-none text-verde-dinamico">
                  Misión de los <br /> Ángeles
                </h3>
                <Link
                  to={"/proyectos"}
                  className="relative group text-[14px] md:text-button px-[24px] py-[15px] md:px-[clamp(11px,1.875vw,24px)] md:py-[clamp(7px,1.172vw,15px)] bg-celeste-bienestar hover:bg-transparent text-verde-confianza hover:text-celeste-bienestar active:text-beige-hogar active:font-bold active:bg-transparent hover:cursor-pointer"
                >
                  Ver proyecto
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
