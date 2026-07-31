import bgImage from "../../../assets/images/backgrounds/compromiso-bg.jpg";
import mainImage from "../../../assets/images/sections/home/compromiso.jpg";
import checkIcon from "../../../assets/icons/commons/checkIcon.svg";
import { useInView } from "../../../hooks/useInView";

const PREGUNTAS = [
  { label: "¿Es lo mejor para la empresa?" },
  { label: "¿Es lo mejor para el cliente?" },
  { label: "¿Tomo responsabilidad de este acto?" },
];

export default function HomeCompromiso() {
  const [ref, isVisible] = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className="relative w-full">
      {/* Background image */}
      <div className="absolute -z-10 inset-0 w-full h-full overflow-hidden">
        <img
          src={bgImage}
          alt="Imagen de fondo"
          className="absolute inset-0 w-full h-full object-cover scale-150 lg:scale-220"
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row w-full h-full items-center gap-[clamp(8px,2.344vw,30px)]">
        {/* Image */}
        <div
          className={`reveal-left ${isVisible ? "is-visible" : ""} w-full md:w-[34%] h-[552px] md:h-[92vh] relative rounded-tr-[100px] overflow-hidden shrink-0`}
        >
          <img
            src={mainImage}
            alt="Imagen principal"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text  */}
        <div className="flex md:w-[66%] min-w-0 h-full justify-center items-center max-md:px-[40px] max-md:py-[30px] md:pr-2">
          <div className="flex flex-col w-full max-w-[780px] justify-center items-center gap-[20px] md:gap-[40px] text-center">
            <div
              className={`reveal ${isVisible ? "is-visible" : ""} flex flex-col gap-[20px]`}
            >
              <h3 className="text-[20px] md:text-display5 font-woodland text-verde-confianza font-bold leading-none">
                Los 3 "SI" antes de tomar una decisión
              </h3>
              <p className="text-paragraph1 text-center leading-[110%] lg:leading-none text-gris-profundo max-w-[500px] lg:max-w-none">
                Antes de cada acción, nuestro equipo se hace tres preguntas.
                Sencillas, pero poderosas porque creemos que la calidad empieza
                por la forma en que uno toma sus decisiones.
              </p>
            </div>

            <div className="flex flex-col w-full gap-[20px]">
              {PREGUNTAS.map((pregunta, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      transitionDelay: isVisible
                        ? `${index * 0.1 + 0.15}s`
                        : "0s",
                    }}
                    className={`reveal ${isVisible ? "is-visible" : ""} flex flex-col md:flex-row w-full px-[34px] py-[20px] md:pl-10 lg:pl-20 xl:pl-[clamp(64px,10.938vw,140px)] items-center rounded-tr-[20px] sm:rounded-tr-[30px] gap-[15px] md:gap-[clamp(5px,1.172vw,15px)] bg-azul-integro`}
                  >
                    <img
                      src={checkIcon}
                      alt="Ícono del contenedor"
                      className="size-[35px] md:size-[clamp(14px,2.734vw,35px)] shrink-0"
                    />
                    <p className="text-[15px] text-beige-hogar font-woodland md:text-min font-bold text-center md:text-left leading-none">
                      {pregunta.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <div
              style={{ transitionDelay: isVisible ? "0.55s" : "0s" }}
              className={`reveal ${isVisible ? "is-visible" : ""} flex flex-col gap-[20px]`}
            >
              <h3 className="text-[20px] md:text-display5 max-md:pt-2.5 font-woodland font-bold text-verde-confianza leading-none">
                Nuestro Compromiso con la Calidad
              </h3>
              <p className="text-paragraph1 text-center leading-[110%] lg:leading-none text-gris-profundo max-w-[500px] lg:max-w-[720px]">
                Somos una desarrolladora que se compromete a crear proyectos
                donde la calidad, la innovación y la confianza van de la mano.
                Creemos que cada espacio tiene el poder de transformar la vida
                de las personas y trabajamos cada día para que así sea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
