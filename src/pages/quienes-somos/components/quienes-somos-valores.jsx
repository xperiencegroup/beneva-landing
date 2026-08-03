import { useInView } from "../../../hooks/useInView";

const steps = [
  {
    number: "01",
    title: "Colaborativos",
    text: "Creemos en el trabajo en equipo y en la suma de distintas perspectivas. Los mejores resultados nacen cuando cada persona aporta su experiencia, compromiso y talento.",
  },
  {
    number: "02",
    title: "Respetuosos",
    text: "Construimos relaciones basadas en la escucha, la confianza y el respeto hacia nuestro equipo, nuestros clientes y las comunidades de las que formamos parte.",
  },
  {
    number: "03",
    title: "Proactivos",
    text: "Nos anticipamos, proponemos soluciones y actuamos con determinación. Cada reto es una oportunidad para mejorar y avanzar.",
  },
  {
    number: "04",
    title: "Receptivos",
    text: "Escuchamos, aprendemos y evolucionamos a partir de cada experiencia. Valoramos nuevas ideas y aplicamos lo aprendido para mejorar continuamente cada proyecto.",
  },
];

export default function QuienesSomosValores() {
  const [ref, isVisible] = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center w-full bg-beige-hogar px-[40px] py-[30px] md:p-[clamp(20px,4.688vw,60px)] gap-[20px] md:gap-[clamp(9px,1.563vw,20px)]"
    >
      {/* Heading */}
      <div
        className={`reveal ${isVisible ? "is-visible" : ""} flex flex-col items-center text-center gap-[20px] md:gap-[clamp(8px,1.172vw,15px)] mb-[clamp(32px,4.688vw,60px)]`}
      >
        <h2 className="title font-woodland text-verde-confianza font-semibold leading-none">
          Nuestros Valores
        </h2>
        <p className="paragraph leading-tight text-gris-profundo">
          Lo que somos hacia adentro se refleja en lo que construimos hacia
          afuera.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(18px,3.125vw,40px)]">
        {steps.map((step, index) => (
          <div
            key={step.number}
            style={{
              transitionDelay: isVisible
                ? `${(index % 2) * 0.1 + Math.floor(index / 2) * 0.1 + 0.15}s`
                : "0s",
            }}
            className={`reveal-scale ${isVisible ? "is-visible" : ""} flex flex-col items-center justify-center text-center w-full w-[295px] max-md:h-[230px] max-md:max-w-[300px] md:max-w-[clamp(245px,41.641vw,533px)] h-[clamp(164px,27.813vw,356px)] bg-rosa-bienestar rounded-t-[100px] md:rounded-t-[160px] lg:rounded-t-[180px] px-[34px] py-[40px] md:p-[clamp(24px,3.125vw,40px)] gap-[20px] md:gap-[clamp(9px,1.563vw,20px)]`}
          >
            <h3 className="flex flex-col subtitle font-woodland text-gris-profundo font-bold leading-none">
              <span>{step.number}</span>
              <span>{step.title}</span>
            </h3>

            <p className="paragraph leading-tight text-gris-profundo font-basic-sans font-light leading-none">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
