import bgImage from "../../../assets/images/backgrounds/compromiso-bg.jpg";
import mainImage from "../../../assets/images/sections/home/compromiso.jpg";
import { useInView } from "../../../hooks/useInView";

const PREGUNTAS = [
  { label: "¿Es lo mejor para el cliente? " },
  { label: "¿Es lo mejor para la empresa?" },
  { label: "¿Tomo responsabilidad de este acto? " },
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
      <div className="relative flex flex-col md:flex-row w-full h-full items-center md:gap-[60px]">
        {/* Image */}
        <div
          className={`reveal-left ${isVisible ? "is-visible" : ""} w-full md:w-[50%] h-[552px] md:h-[92vh] relative rounded-tr-[100px] overflow-hidden shrink-0`}
        >
          <img
            src={mainImage}
            alt="Imagen principal"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text  */}
        <div className="flex md:w-[66%] min-w-0 h-full justify-start items-center max-md:px-[40px] max-md:py-[30px] md:pr-2">
          <div className="flex flex-col w-full max-w-[615px] gap-[20px] md:gap-[20px] text-center">
            {/* Nuestro compromiso con la calidad */}
            <div
              className={`reveal ${isVisible ? "is-visible" : ""} flex flex-col gap-[5px]`}
            >
              <h3 className="subtitle text-left max-md:pt-2.5 font-woodland font-bold text-verde-confianza leading-none">
                Nuestro Compromiso con la Calidad
              </h3>
              <p className="paragraph text-left leading-[110%] lg:leading-none text-gris-profundo max-w-[500px] lg:max-w-[580px]">
                Somos una desarrolladora que se compromete a crear proyectos
                donde la calidad, la innovación y la confianza van de la mano.
                <br /> <br />
                Creemos que cada espacio tiene el poder de transformar la vida
                de las personas y trabajamos cada día para que así sea.
              </p>
            </div>

            {/* Los 3 "SI" */}
            <div
              style={{ transitionDelay: isVisible ? "0.55s" : "0s" }}
              className={`reveal ${isVisible ? "is-visible" : ""} flex flex-col gap-[5px] pt-[30px]`}
            >
              <h3 className="subtitle text-left font-woodland text-verde-confianza font-bold leading-none">
                Los 3 "SI" antes de tomar una decisión
              </h3>
              <p className="paragraph text-left leading-[110%] lg:leading-none text-gris-profundo max-w-[500px] lg:max-w-none">
                Antes de cada acción, nuestro equipo se hace tres preguntas.
                <br />
                <br />
                Sencillas, pero poderosas porque creemos que la calidad empieza
                por la forma en que uno toma sus decisiones.
              </p>
            </div>

            <div className="flex flex-col w-full max-w-[508px] gap-[15px]">
              {PREGUNTAS.map((pregunta, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      transitionDelay: isVisible
                        ? `${index * 0.1 + 0.55}s`
                        : "0s",
                    }}
                    className={`reveal ${isVisible ? "is-visible" : ""} flex flex-row w-full px-[34px] py-[15px] xl:pl-[30px] items-center rounded-tr-[20px] sm:rounded-tr-[30px]  bg-azul-integro`}
                  >
                    <p className="preguntas text-beige-hogar font-woodland font-bold text-left leading-none">
                      <span className="text-rosa-bienestar">{index + 1}.</span>{" "}
                      {pregunta.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
