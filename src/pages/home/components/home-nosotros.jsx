import { Link } from "react-router";
import { useInView } from "../../../hooks/useInView";

const PARAGRAPHS = [
  {
    title: "Somos una desarrolladora enfocada en las personas:",
    description:
      "Beneva nació con una convicción clara: los espacios donde vivimos moldean quiénes somos. Por eso cada proyecto lleva consigo calidad, detalle y una visión humana para que quien llegue a casa sienta que llegó a su lugar.",
  },
  {
    title: "Compromiso Beneva",
    description:
      "Construimos con responsabilidad hacia nuestros clientes, nuestro equipo y la ciudad. Cada decisión la tomamos pensando en los tres.",
  },
  {
    title: "Nuestra Visión",
    description:
      "Ser una desarrolladora reconocida por crear proyectos de calidad que generen confianza, valor y una experiencia excepcional para nuestros clientes y nuestra comunidad.",
  },
];

export default function HomeNosotros() {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className="relative w-full flex flex-col justify-center items-center max-md:py-[30px] p-[40px] md:p-[60px] gap-[20px] md:gap-[30px]"
    >
      {/* Texts */}
      <p
        className={`reveal ${isVisible ? "is-visible" : ""} text-[32px] md:text-display1 font-woodland font-bold text-verde-confianza`}
      >
        Nosotros
      </p>

      <div className="w-full flex flex-col justify-center items-center gap-[30px] md:gap-[30px]">
        {PARAGRAPHS.map((item, index) => {
          return (
            <div
              key={item.title}
              style={{
                transitionDelay: isVisible ? `${index * 0.4 + 0.1}s` : "0s",
              }}
              className={`reveal ${isVisible ? "is-visible" : ""} flex flex-col justify-center items-center gap-y-[clamp(9px,1.563vw,18px)]`}
            >
              <h2 className="text-[20px] md:text-display-min text-center font-woodland font-bold leading-none text-verde-confianza">
                {item.title}
              </h2>
              <h2 className="w-[86vw] text-paragraph1 text-center font-sans font-light text-verde-confianza leading-[109%]">
                {item.description}
              </h2>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <Link
        to={"/quienes-somos"}
        style={{ transitionDelay: isVisible ? "1.5s" : "0s" }}
        className={`reveal ${isVisible ? "is-visible" : ""} relative group text-[14px] md:text-button px-[24px] py-[15px] md:px-[clamp(20px,3.438vw,44px)] md:py-[clamp(7px,1.172vw,15px)] transition-all text-gris-profundo bg-celeste-bienestar hover:bg-transparent hover:font-bold hover:cursor-pointer`}
      >
        Conócenos
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-celeste-bienestar opacity-0 group-hover:opacity-100 transition-opacity ease-in" />
      </Link>
    </div>
  );
}
