export default function HomeConstruimos() {
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
    <div className="flex flex-col justify-center items-center w-full bg-beige-hogar px-[40px] py-[30px] md:p-[clamp(20px,4.688vw,60px)] gap-[20px] md:gap-[clamp(9px,1.563vw,20px)]">
      {/* Heading */}
      <div className="flex flex-col items-center text-center gap-[20px] md:gap-[clamp(8px,1.172vw,15px)] mb-[clamp(32px,4.688vw,60px)]">
        <h2 className="text-[24px] md:text-display2 font-woodland text-verde-confianza font-semibold leading-none">
          Así construimos cada proyecto
        </h2>
        <p className="text-paragraph1 leading-tight text-gris-profundo">
          Cada desarrollo Beneva sigue un proceso pensado desde las personas
          desde la primera idea hasta el día que entregas llaves.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(18px,3.125vw,40px)]">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-center justify-center text-center w-full w-[295px] max-md:h-[317px] max-md:max-w-[300px] md:max-w-[clamp(245px,41.641vw,533px)] h-[clamp(164px,27.813vw,356px)] bg-rosa-bienestar rounded-t-[160px] lg:rounded-t-[180px] px-[34px] py-[40px] md:p-[clamp(24px,3.125vw,40px)] gap-[20px] md:gap-[clamp(9px,1.563vw,20px)]"
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
