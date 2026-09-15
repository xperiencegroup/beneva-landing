import LogoMain from "../../../assets/images/icons/main/logo-main";
import { useInView } from "../../../hooks/useInView";

export default function HomeConstruimos() {
  const [ref, isVisible] = useInView({ threshold: 0.3 });

  const steps = [
    {
      number: "01",
      title: "Conceptualización",
      text: "Todos somos colaboradores y colaboramos juntos para hacer que las cosas sucedan.",
    },
    {
      number: "02",
      title: "Desarrollo y construcción",
      text: "Supervisamos cada etapa con atención al detalle materiales, acabados y tiempos. Porque la calidad no se improvisa, se cuida desde el principio.",
    },
    {
      number: "03",
      title: "Acompañamiento al cliente",
      text: "Desde el primer contacto hasta la entrega, tenemos a alguien de nuestro equipo disponible para resolver dudas, guiar el proceso y hacer que la experiencia sea clara y tranquila.",
    },
    {
      number: "04",
      title: "Entrega y comunidad",
      text: "Entregamos tu hogar con orgullo y nos aseguramos de que el fraccionamiento siga creciendo bien: autosustentable, con plusvalía y con vida comunitaria real.",
    },
  ];

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center w-full bg-beige-hogar px-[40px] py-[30px] md:p-[clamp(20px,4.688vw,30px)] gap-[20px] md:gap-[clamp(9px,1.563vw,20px)]"
    >
      {/* Heading */}
      <div
        className={`reveal ${isVisible ? "is-visible" : ""} flex flex-col items-center text-center gap-[10px] md:gap-[10px] mb-[clamp(32px,4.688vw,60px)]`}
      >
        <h3 className="title font-woodland text-verde-confianza font-semibold leading-none">
          Nuestro Proceso
        </h3>
        <h3 className="subtitle font-woodland text-verde-confianza font-semibold leading-none">
          Así construimos cada proyecto
        </h3>
        <p className="max-w-[1160px] paragraph leading-tight text-gris-profundo">
          Cada desarrollo Beneva sigue un proceso pensado en las personas,
          <br />
          desde la primera idea hasta el día en que entregas llaves
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] xl:gap-[10px]">
        {steps.map((step, index) => (
          <div
            key={step.number}
            style={{
              transitionDelay: isVisible
                ? `${(index % 2) * 0.1 + Math.floor(index / 2) * 0.1 + 0.15}s`
                : "0s",
            }}
            className={`relative reveal-scale ${isVisible ? "is-visible" : ""} flex flex-col items-center justify-center text-center w-full w-[295px] max-md:h-[231px] max-md:max-w-[300px] md:max-w-[clamp(349px,41.641vw,573px)] md:h-[286px] xl:h-[clamp(164px,27.813vw,250px)] bg-rosa-bienestar rounded-tl-[120px] lg:rounded-tl-[160px] px-[30px] py-[40px] lg:px-[60px] xl:p-[clamp(24px,3.125vw,40px)] gap-[5px]`}
          >
            <h3 className="max-md:w-full max-md:max-w-[70%] subtitle font-woodland text-gris-profundo font-bold leading-none">
              {step.title}
            </h3>

            <p className="parrafos-bloques leading-tight text-gris-profundo font-basic-sans font-light leading-none">
              {step.text}
            </p>

            {/* Number */}
            <div className="absolute flex w-[60px] h-[64px] md:w-[70px] md:h-[74px] xl:w-[84px] xl:h-[81px] top-0 right-0 justify-center items-center rounded-bl-[40px] bg-verde-dinamico">
              <p className="subtitle text-gris-profundo font-woodland font-semibold">
                {step.number}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Logo beneva */}
      <LogoMain className="w-[43px] h-[60px] text-gris-profundo" />
    </div>
  );
}
