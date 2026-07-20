import bgImage from "../../../assets/images/backgrounds/compromiso-bg.jpg";
import mainImage from "../../../assets/images/sections/quienes-somos/nos-mueve.jpg";

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
  return (
    <div className="relative w-full">
      {/* Background image */}
      <div className="absolute -z-10 inset-0 w-full h-full overflow-hidden">
        <img
          src={bgImage}
          alt="Imagen de fondo"
          className="absolute inset-0 w-full h-full object-cover scale-150 lg:scale-220"
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col lg:flex-row w-full h-full items-center gap-[clamp(8px,2.344vw,30px)]">
        {/* Text  */}
        <div className="flex w-[66%] max-md:w-full min-w-0 h-full justify-center items-center max-md:px-[40px] max-md:py-[30px] md:pr-2">
          <div className="flex flex-col w-full max-w-[780px] justify-center items-center gap-[20px] md:gap-[clamp(6px,1.563vw,20px)] text-center">
            <h3 className="text-[20px] md:text-display-min font-woodland text-verde-confianza font-bold">
              Lo que nos mueve
            </h3>
            <p className="text-paragraph1 text-center leading-[110%] lg:leading-none text-gris-profundo max-w-[295px] md:max-w-[500px] lg:max-w-[760px]">
              El nombre lo dice todo: <br /> Beneva significa buen vivir. Y esa
              idea es la brújula que guía cada decisión que tomamos desde cómo
              diseñamos un espacio hasta cómo tratamos a cada cliente.
            </p>

            {NUESTRA_EMPRESA.map((item) => {
              return (
                <div className="flex flex-col w-full items-center px-[40px] py-[20px] md:px-[clamp(21px,3.594vw,46px)] md:py-[clamp(9px,1.563vw,20px)] rounded-tl-[30px] md:rounded-tl-[20px] sm:rounded-tl-[30px] gap-[15px] md:gap-[clamp(6px,0.938vw,12px)] bg-azul-integro">
                  <h4 className="text-[17px] md:text-min font-woodland font-bold text-rosa-bienestar">
                    {item.titulo}
                  </h4>
                  <p className="max-w-[659px] text-beige-hogar text-[16px] md:text-[24px] md:leading-tight text-center">
                    {item.texto}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-[34%] h-[545px] md:h-[100vh] relative rounded-tl-[100px] md:rounded-tl-[40px] sm:rounded-tl-[60px] lg:rounded-tl-[100px] overflow-hidden shrink-0">
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
