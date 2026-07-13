const VALORES = [
  {
    title: "Colaborativos",
    description:
      "Todos somos parte del resultado. Jalamos parejo porque los mejores proyectos nacen cuando cada quien aporta lo mejor de sí.",
  },
  {
    title: "Respetuosos",
    description:
      "Con nuestro equipo, con nuestros clientes y con las comunidades donde construimos. El respeto es la base de cualquier relación que valga la pena.",
  },
  {
    title: "Proactivos",
    description:
      "Anticipamos, resolvemos y avanzamos. En Beneva los retos son oportunidades para demostrar de qué estamos hechos.",
  },
  {
    title: "Aprendizaje constante",
    description:
      "Una organización que aprende es una organización que crece. Capitalizamos cada experiencia los aciertos y los aprendizajes para hacer mejor el siguiente proyecto.",
  },
  {
    title: "Ambiente laboral",
    description:
      "Creemos que un buen trabajo nace de un buen lugar. Cultivamos un ambiente donde todos se sienten escuchados, valorados y seguros para dar lo mejor de sí.",
  },
];

export default function QuienesSomosValores() {
  return (
    <div className="flex flex-col justify-center items-center p-[clamp(9px,1.563vw,20px)] py-[clamp(14px,2.344vw,30px)] gap-[clamp(9px,1.563vw,20px)]">
      <div className="flex flex-col justify-center items-center gap-[clamp(9px,1.563vw,20px)]">
        <h3 className="text-display2 font-woodland font-bold text-verde-confianza">
          Nuestros valores
        </h3>
        <p className="text-paragraph1 text-center leading-tight text-gris-profundo">
          Lo que somos hacia adentro se refleja en lo que construimos hacia
          afuera.
        </p>
      </div>

      <div className="flex flex-wrap justify-between w-full max-w-[1178px] mx-auto gap-y-[clamp(9px,1.563vw,20px)]">
        {VALORES.map((valor, index) => {
          let widthClasses;

          if (index < 3) {
            // primeros 3: 1 col mobile, pares en tablet, tríada en desktop
            widthClasses = "w-full md:w-[47%] lg:w-[31%]";
          } else if (index === 3) {
            // 4to: 1 col mobile, pareja en tablet, pareja en desktop
            widthClasses = "w-full md:w-[47%] lg:w-[47%]";
          } else {
            // último: 1 col mobile, ancho completo en tablet, pareja en desktop
            widthClasses = "w-full md:w-full lg:w-[47%]";
          }

          return (
            <div
              key={index}
              className={`flex flex-col h-[clamp(131px,22.266vw,285px)] justify-start px-[clamp(18px,3.125vw,40px)] rounded-t-[100px] lg:rounded-t-[150px] gap-[clamp(9px,1.563vw,14px)] text-center bg-rosa-bienestar ${widthClasses} ${
                index < 3
                  ? "py-[clamp(18px,3.125vw,34px)]"
                  : "py-[clamp(18px,3.125vw,40px)]"
              }`}
            >
              <h4 className="text-display-min font-woodland font-bold tracking-wide text-verde-confianza">
                {valor.title}
              </h4>
              <p className="text-paragraph4 leading-[110%] text-gris-profundo">
                {valor.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
