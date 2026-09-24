import bgImage from "../../../assets/images/backgrounds/compromiso-bg.jpg";
import mainImage from "../../../assets/images/sections/desarrollemos-juntos/inversion-main.jpg";
import { useInView } from "../../../hooks/useInView";

export default function DesarrollemosInversion() {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <div className="relative w-full overflow-hidden">
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
        className="relative flex flex-col lg:flex-row w-full h-full items-center gap-[20px] md:gap-[clamp(8px,2.344vw,30px)]"
      >
        {/* Text  */}
        <div className="flex lg:w-[53%] min-w-0 h-full justify-center items-center px-[40px] py-[30px] md:pl-4">
          <div className="flex flex-col w-full lg:max-w-[588px] justify-center items-center gap-[20px] text-center">
            <div
              className={`reveal ${isVisible ? "is-visible" : ""} flex flex-col items-center gap-[5px] pb-[5px]`}
            >
              <h3 className="subtitle font-woodland text-verde-confianza font-bold leading-none">
                Tu inversión en buenas manos
              </h3>
              <p className="paragraph text-center leading-tight lg:leading-none text-gris-profundo max-w-[500px]">
                Respetamos el patrimonio de nuestros socios y maximizamos su
                valor a través de nuestro proceso de desarrollo.
              </p>
            </div>

            {/* Servicio y atención al cliente */}
            <div
              style={{ transitionDelay: isVisible ? "0.15s" : "0s" }}
              className={`reveal ${isVisible ? "is-visible" : ""} flex flex-col w-full max-[490px]:min-h-[300px] min-[490px]:h-[170px] md:h-[190px] lg:h-[220px] xl:h-[240px] items-center justify-center px-[24px] py-[40px] md:px-[clamp(21px,3.594vw,46px)] md:py-[clamp(9px,1.563vw,20px)] rounded-tl-[80px] sm:rounded-tl-[30px] gap-[5px] bg-azul-integro`}
            >
              <h4 className="subtitle font-woodland font-bold leading-none text-rosa-bienestar">
                Servicio y atención al cliente
              </h4>
              <p className="max-w-[659px] text-beige-hogar text-[16px] parrafos-bloques leading-tight text-center">
                Nuestros clientes y socios son la columna vertebral{" "}
                <br className="hidden lg:block" /> de lo que hacemos.
                <br /> <br />
                Cada interacción desde la primera llamada hasta el finiquito de
                cada proyecto la tratamos con el mismo cuidado que ponemos en
                cada detalle constructivo.
              </p>
            </div>

            {/* Calidad */}
            <div
              style={{ transitionDelay: isVisible ? "0.25s" : "0s" }}
              className={`reveal ${isVisible ? "is-visible" : ""} flex flex-col w-full max-[490px]:min-h-[300px] min-[490px]:h-[170px] md:h-[190px] lg:h-[220px] xl:h-[240px] items-center justify-center px-[24px] py-[40px] md:px-[clamp(21px,3.594vw,46px)] md:py-[clamp(9px,1.563vw,20px)] rounded-tl-[80px] sm:rounded-tl-[30px] gap-[5px] bg-azul-integro`}
            >
              <h4 className="subtitle font-woodland font-bold leading-none text-rosa-bienestar">
                Transparencia
              </h4>
              <p className="max-w-[659px] text-beige-hogar parrafos-bloques leading-tight text-center">
                Toda la información de los proyectos es totalmente{" "}
                <br className="max-sm:hidden" /> transparente con nuestros
                socios y asumimos <br className="max-sm:hidden" />{" "}
                responsabilidad en todas las partes del desarrollo
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className={`reveal-right ${isVisible ? "is-visible" : ""} w-full lg:w-[46%] self-stretch relative rounded-tl-[40px] sm:rounded-tl-[60px] lg:rounded-tl-[100px] overflow-hidden shrink-0`}
        >
          <img
            src={mainImage}
            alt="Imagen principal"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover object-[0%_50%] scale-125"
          />
        </div>
      </div>
    </div>
  );
}
