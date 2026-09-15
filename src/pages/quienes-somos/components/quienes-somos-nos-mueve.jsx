import bgImage from "../../../assets/images/backgrounds/compromiso-bg.jpg";
import mainImage from "../../../assets/images/sections/quienes-somos/nos-mueve.png";
import { useInView } from "../../../hooks/useInView";

const NUESTRA_EMPRESA = [
  {
    titulo: "Nuestra misión",
    texto:
      "Desarrollar espacios residenciales que mejoren la vida de las personas con calidad real, atención al detalle y un compromiso genuino con cada familia que confía en nosotros.",
  },
  {
    titulo: "Nuestra visión",
    texto:
      "Crecer como desarrolladora de referencia en la zona metropolitana manteniendo siempre la misma calidad, el mismo cuidado y el mismo carácter en cada proyecto que emprendamos.",
  },
  {
    titulo: "Nuestro propósito",
    texto:
      "Construir el Nuevo León donde queremos vivir, comunidades con vida, con plusvalía y con el orgullo de haber sido hechas bien desde el principio.",
  },
];

export default function QuienesSomosNosMueve() {
  const [ref, isVisible] = useInView({ threshold: 0.25 });

  return (
    <div className="relative w-full h-fit lg:h-[929px] overflow-hidden">
      {/* Background image */}
      <div className="absolute -z-10 inset-0 w-full h-full overflow-hidden">
        <img
          src={bgImage}
          alt="Imagen de fondo"
          className="absolute inset-0 w-full h-full object-cover scale-150 lg:scale-220"
        />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className="relative flex flex-col lg:flex-row w-full h-full items-center gap-[clamp(8px,2.344vw,30px)]"
      >
        {/* Text  */}
        <div className="flex w-[66%] w-full min-w-0 h-full justify-center items-center max-md:px-[40px] max-md:py-[30px] px-[30px] py-5">
          <div className="flex flex-col w-full lg:max-w-[780px] justify-center items-center gap-[20px] md:gap-[20px] text-center">
            <div
              className={`reveal ${isVisible ? "is-visible" : ""} flex flex-col items-center gap-[5px]`}
            >
              <h3 className="subtitle font-woodland text-verde-confianza font-bold">
                Lo que nos mueve
              </h3>
              <p className="paragraph text-center leading-[110%] text-gris-profundo max-w-[295px] md:max-w-[500px] lg:max-w-[760px]">
                El nombre lo dice todo: Beneva significa buen vivir.
                <br />
                <br />Y esa idea es la brújula que guía cada decisión que
                tomamos desde cómo diseñamos un espacio hasta cómo tratamos a
                cada cliente.
              </p>
            </div>

            {/* Misión, visión y propósito */}
            <div className="flex flex-col gap-[15px]">
              {NUESTRA_EMPRESA.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      transitionDelay: isVisible
                        ? `${index * 0.1 + 0.15}s`
                        : "0s",
                    }}
                    className={`reveal ${isVisible ? "is-visible" : ""} flex flex-col justify-center w-full min-h-[258px] min-[540px]:min-h-[160px] md:h-[164px] items-center px-[40px] py-[20px] md:px-[clamp(21px,3.594vw,46px)] md:py-[clamp(9px,1.563vw,20px)] rounded-tl-[30px] md:rounded-tl-[20px] sm:rounded-tl-[30px] gap-[5px] bg-azul-integro`}
                  >
                    <h4 className="subtitle font-woodland font-bold tracking-wide text-rosa-bienestar">
                      {item.titulo}
                    </h4>
                    <p className="max-w-[659px] text-beige-hogar parrafos-bloques leading-[110%] text-center">
                      {item.texto}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className={`reveal-right ${isVisible ? "is-visible" : ""} w-full lg:w-[34%] h-[545px] lg:h-full relative rounded-tl-[100px] md:rounded-tl-[40px] sm:rounded-tl-[60px] lg:rounded-tl-[100px] overflow-hidden shrink-0`}
        >
          <img
            src={mainImage}
            alt="Imagen principal"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
