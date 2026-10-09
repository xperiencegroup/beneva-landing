import { Link } from "react-router";
import { useInView } from "../../../hooks/useInView";
import { track } from "../../../analytics/track";
import { TRACK } from "../../../analytics/track.constants";

import compromisoIcon from "../../../assets/icons/home/compromiso.svg";
import visionIcon from "../../../assets/icons/home/vision.svg";

import banner from "../../../assets/images/sections/home/nosotros-banner.jpg";

export default function HomeNosotros() {
  const [ref, isVisible] = useInView();

  return (
    <>
      <div
        ref={ref}
        className="relative w-full flex flex-col justify-center items-center max-md:py-[30px] p-[40px] md:p-[60px] gap-[20px] md:gap-[20px]"
      >
        {/* Texts */}
        <p
          className={`reveal ${isVisible ? "is-visible" : ""} title font-woodland font-bold text-verde-confianza`}
        >
          Nosotros
        </p>

        <div className="w-full flex flex-col justify-center items-center gap-[5px]">
          <h2 className="subtitle text-center font-woodland font-bold leading-none text-verde-confianza">
            Somos una desarrolladora enfocada en las personas:
          </h2>
          <p className="w-full max-w-[1160px] paragraph text-center font-light whitespace-pre-line text-verde-confianza leading-[109%]">
            Beneva nació con una convicción clara: los espacios donde vivimos
            moldean quiénes somos.
            <br />
            Por eso cada proyecto lleva consigo calidad, detalle y una visión
            humana
            <br />
            para que quien llegue a casa sienta que llegó a su lugar.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full gap-[30px] xl:gap-[60px]">
          {/* compromiso beneva */}
          <div className="flex flex-1 flex-col xl:flex-row w-full max-w-[380px] xl:max-w-[580px] xl:h-[140px] justify-center items-center gap-[20px]">
            <div className="flex shrink-0 justify-center items-center size-[95px] rounded-bl-[50px] bg-verde-dinamico">
              <img src={compromisoIcon} alt="Ícono de compromiso" />
            </div>
            <div className="self-start flex flex-col gap-[20px] xl:gap-[5px]">
              <h2 className="subtitle text-center xl:text-left font-woodland font-bold leading-none text-verde-confianza">
                Compromiso Beneva
              </h2>
              <p className="w-full max-w-[1160px] paragraph text-center xl:text-left font-light whitespace-pre-line text-verde-confianza leading-[109%]">
                Construimos con responsabilidad hacia nuestros clientes, nuestro
                equipo y la ciudad.
                <br />
                Cada decisión la tomamos pensando en los tres.
              </p>
            </div>
          </div>

          {/* visión beneva */}
          <div className="flex flex-1 flex-col-reverse md:flex-col xl:flex-row max-w-[380px] xl:max-w-[580px] xl:h-[140px] justify-center items-center gap-[20px]">
            <div className="flex shrink-0 justify-center items-center size-[95px] rounded-bl-[50px] bg-verde-dinamico">
              <img src={visionIcon} alt="Ícono de compromiso" />
            </div>
            <div className="flex flex-col gap-[20px] xl:gap-[5px]">
              <h2 className="subtitle text-center xl:text-left font-woodland font-bold leading-none text-verde-confianza">
                Nuestra Visión
              </h2>
              <p className="w-full max-w-[1160px] paragraph text-center xl:text-left font-light whitespace-pre-line text-verde-confianza leading-[109%]">
                Ser una desarrolladora reconocida por crear proyectos de calidad
                que generen confianza, valor y una experiencia excepcional para
                nuestros clientes y nuestra comunidad.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <Link
          to={"/quienes-somos"}
          onClick={() =>
            track(TRACK.home.nosotros.cta, { item_id: "quienes-somos" })
          }
          style={{ transitionDelay: isVisible ? ".8s" : "0s" }}
          className={`reveal ${isVisible ? "is-visible" : ""} relative group text-[14px] md:text-button px-[24px] py-[15px] md:px-[clamp(20px,3.438vw,44px)] md:py-[clamp(7px,1.172vw,15px)] transition-all text-gris-profundo bg-celeste-bienestar hover:bg-transparent hover:font-bold hover:cursor-pointer`}
        >
          Conócenos
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-celeste-bienestar opacity-0 group-hover:opacity-100 transition-opacity ease-in" />
        </Link>
      </div>

      {/* Banner */}
      <div className="hidden xl:block relative w-full h-[50svh] rounded-tl-[120px] overflow-hidden">
        <img
          src={banner}
          alt="Imágen de casas"
          className="absolute inset-0 w-full h-full object-cover object-[0%_42%]"
        />
      </div>
    </>
  );
}
