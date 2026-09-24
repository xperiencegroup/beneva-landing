import LogoMain from "../../../assets/images/icons/main/logo-main";
import { useInView } from "../../../hooks/useInView";

const steps = [
  {
    number: "01",
    title: "Experiencia real",
    text: "10 proyectos concluidos exitosamente.\n Una trayectoria que nos permite entender cada reto y llevar cada desarrollo de la planeación a la realidad.",
  },
  {
    number: "02",
    title: "Proceso probado",
    text: "Desde la conceptualización hasta la entrega, manejamos cada etapa con rigor y transparencia.",
  },
  {
    number: "03",
    title: "Proyectos que \n generan plusvalía",
    text: "Desarrollamos con los más altos estándares porque un proyecto bien hecho genera valor para todos: socios, compradores y la ciudad.",
  },
  {
    number: "04",
    title: "Visión de largo plazo",
    text: "Pensamos en comunidades autosustentables que crecen bien  proyectos que siguen generando valor mucho después de la entrega.",
  },
];

export default function DesarrollemosRazones() {
  const [ref, isVisible] = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center w-full bg-beige-hogar px-[40px] py-[30px] md:p-[clamp(20px,4.688vw,60px)] gap-[20px]"
    >
      {/* Heading */}
      <div
        className={`reveal ${isVisible ? "is-visible" : ""} flex flex-col items-center text-center gap-[10px] md:gap-[5px] mb-[clamp(32px,4.688vw,60px)]`}
      >
        <h2 className="title font-woodland text-verde-confianza font-semibold leading-none">
          Por qué desarrollar con Beneva
        </h2>
        <p className="max-w-[1160px] paragraph leading-tight text-gris-profundo">
          No solo construimos casas, desarrollamos proyectos integrales con
          visión de largo plazo.
          <br />
          Estas son las razones por las que nuestros socios eligen trabajar con
          nosotros.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[20px] lg:gap-y-[30px]">
        {steps.map((step, index) => (
          <div
            key={step.number}
            style={{
              transitionDelay: isVisible
                ? `${(index % 2) * 0.1 + Math.floor(index / 2) * 0.1 + 0.15}s`
                : "0s",
            }}
            className={`reveal-scale ${isVisible ? "is-visible" : ""} flex flex-col items-center justify-center text-center w-full w-[295px] max-md:h-[280px] max-md:max-w-[300px] md:max-w-[clamp(245px,41.641vw,500px)] h-[clamp(164px,27.813vw,239px)] bg-rosa-bienestar rounded-t-[120px] lg:rounded-t-[160px] px-[34px] py-[40px] md:p-[clamp(24px,3.125vw,40px)] gap-[20px] md:gap-[clamp(9px,1.563vw,20px)]`}
          >
            <h3 className="subtitle font-woodland text-gris-profundo font-bold leading-none whitespace-pre-line">
              <span>{step.title}</span>
            </h3>

            <p className="parrafos-bloques text-gris-profundo font-basic-sans font-light whitespace-pre-line">
              {step.text}
            </p>
          </div>
        ))}
      </div>

      {/* Logo Beneva*/}
      <LogoMain className="size-[56px] text-gris-profundo" />
    </div>
  );
}
