const steps = [
  {
    number: "01",
    title: "Experiencia real",
    text: "Casi 20 años entre construcción y negocios. Sabemos lo que cuesta levantar un desarrollo y cómo hacerlo bien.",
  },
  {
    number: "02",
    title: "Proceso probado",
    text: "Desde la conceptualización hasta la entrega, manejamos cada etapa con rigor y transparencia.",
  },
  {
    number: "03",
    title: "Cantidad que genera plusvalía",
    text: "Desarrollamos con los más altos estándares porque un proyecto bien hecho genera valor para todos: socios, compradores y la ciudad.",
  },
  {
    number: "04",
    title: "Visión de largo plazo",
    text: "Pensamos en comunidades autosustentables que crecen bien  proyectos que siguen generando valor mucho después de la entrega.",
  },
];

export default function DesarrollemosRazones() {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-beige-hogar px-[40px] py-[30px] md:p-[clamp(20px,4.688vw,60px)] gap-[20px]">
      {/* Heading */}
      <div className="flex flex-col items-center text-center gap-[20px] md:gap-[clamp(8px,1.172vw,15px)] mb-[clamp(32px,4.688vw,60px)]">
        <h2 className="text-[24px] md:text-display2 font-woodland text-verde-confianza font-semibold leading-none">
          Por qué desarrollar con Beneva
        </h2>
        <p className="text-paragraph1 leading-tight text-gris-profundo">
          No solo construimos casas desarrollamos proyectos integrales con
          visión de largo plazo. Estas son las razones por las que nuestros
          socios eligen trabajar con nosotros.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(18px,3.125vw,40px)]">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-center justify-center text-center w-full w-[295px] max-md:h-[250px] max-md:max-w-[300px] md:max-w-[clamp(245px,41.641vw,533px)] h-[clamp(164px,27.813vw,356px)] bg-rosa-bienestar rounded-t-[100px] md:rounded-t-[160px] lg:rounded-t-[180px] px-[34px] py-[40px] md:p-[clamp(24px,3.125vw,40px)] gap-[20px] md:gap-[clamp(9px,1.563vw,20px)]"
          >
            <h3 className="flex flex-col text-[20px] md:text-[18px] lg:text-[28px] font-woodland text-gris-profundo font-bold leading-none">
              <span>{step.number}</span>
              <span>{step.title}</span>
            </h3>

            <p className="text-[16px] lg:text-paragraph4 leading-tight text-gris-profundo font-basic-sans font-light leading-none">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
