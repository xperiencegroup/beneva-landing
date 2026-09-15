import { useInView } from "../../../hooks/useInView";

import sobrepensarIcon from "../../../assets/icons/values/icon-sobrepensar.svg";
import respetoIcon from "../../../assets/icons/values/icon-respeto.svg";
import colaborarIcon from "../../../assets/icons/values/icon-colaborar.svg";
import entenderIcon from "../../../assets/icons/values/icon-entender.svg";
import calidadIcon from "../../../assets/icons/values/icon-calidad.svg";

import banner from "../../../assets/images/sections/home/nosotros-banner.jpg";

const ITEMS = [
  {
    description: "Sobrepasar\nexpectativas.",
    icon: sobrepensarIcon,
  },
  {
    description: "Actuar con respeto.",
    icon: respetoIcon,
  },
  {
    description: "Colaborar y apoyar a nuestro equipo.",
    icon: colaborarIcon,
  },
  {
    description: "Entender y dominar nuestra área de trabajo.",
    icon: entenderIcon,
  },
  {
    description: "Entregar trabajos de calidad.",
    icon: calidadIcon,
  },
];

export default function QuienesSomosProfesionales() {
  const [ref, isVisible] = useInView();

  return (
    <>
      <div
        ref={ref}
        className="flex flex-col justify-center items-center px-[24px] py-[30px] md:py-[clamp(28px,4.688vw,60px)] md:px-[clamp(18px,3.125vw,40px)] gap-[20px] md:gap-[clamp(9px,1.563vw,20px)]"
      >
        <div
          className={`reveal ${isVisible ? "is-visible" : ""} flex flex-col justify-center items-center max-md:max-w-[295px] gap-[5px]`}
        >
          <h3 className="title text-center font-woodland leading-none font-bold text-verde-confianza">
            En una sola palabra somos: Profesionales
          </h3>
          <p className="paragraph text-center leading-tight text-gris-profundo">
            Para nosotros ser profesional no es un título es una forma de actuar
            todos los días
          </p>
        </div>

        {/* Items */}
        <div className="self-center flex flex-wrap w-full max-w-[1280px] justify-center gap-[8px]">
          {ITEMS.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  transitionDelay: isVisible ? `${index * 0.07 + 0.15}s` : "0s",
                }}
                className={`reveal-scale ${isVisible ? "is-visible" : ""} flex flex-col w-[180px] md:w-full md:max-w-[230px] h-[192px] md:h-[250px] justify-center items-center gap-[15px] md:gap-[clamp(7px,1.172vw,15px)] p-[20px] md:p-[clamp(9px,1.563vw,20px)] rounded-t-[130px] bg-azul-integro`}
              >
                <div className="relative lg:flex-5 flex justify-center items-center h-[55px] lg:h-full w-full">
                  <img
                    src={item.icon}
                    alt={item.description}
                    className="absolute w-full object-contain h-[55px]"
                  />
                </div>
                <p className="lg:flex-4 max-w-[216px] parrafos-bloques font-basic-sans leading-[115%] text-center text-beige-hogar whitespace-break-spaces">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Banner */}
      <div className="hidden xl:block relative w-full h-[45svh] bg-cyan-500 rounded-tl-[120px] overflow-hidden">
        <img
          src={banner}
          alt="Imágen de casas"
          className="absolute inset-0 w-full h-full object-cover object-[0%_40%]"
        />
      </div>
    </>
  );
}
