import sobrepensarIcon from "../../../assets/icons/values/sobrepensar.png";
import respetoIcon from "../../../assets/icons/values/respeto.png";
import colaborarIcon from "../../../assets/icons/values/colaborar.png";
import entenderIcon from "../../../assets/icons/values/entender.png";
import calidadIcon from "../../../assets/icons/values/calidad.png";

const ITEMS = [
  {
    description: "Sobrepasar\nexpectativas.",
    icon: sobrepensarIcon,
  },
  {
    description: "Actuar con respeto.",
    icon: respetoIcon,
  },
  {
    description: "Colaborar y apoyar a nuestro equipo.",
    icon: colaborarIcon,
  },
  {
    description: "Entender y dominar nuestra área de trabajo.",
    icon: entenderIcon,
  },
  {
    description: "Entregar trabajos de calidad.",
    icon: calidadIcon,
  },
];

export default function QuienesSomosProfesionales() {
  return (
    <div className="flex flex-col justify-center items-center px-[24px] py-[30px] md:py-[clamp(28px,4.688vw,60px)] md:px-[clamp(18px,3.125vw,40px)] gap-[20px] md:gap-[clamp(9px,1.563vw,20px)]">
      <div className="flex flex-col justify-center items-center gap-[20px] max-md:max-w-[295px] md:gap-[clamp(9px,1.563vw,20px)] ">
        <h3 className="text-[24px] md:text-display2 text-center font-woodland leading-none font-bold text-verde-confianza">
          En una sola palabra somos: Profesionales
        </h3>
        <p className="text-paragraph1 text-center leading-tight text-gris-profundo">
          Para nosotros ser profesional no es un título es una forma de actuar
          todos los días
        </p>
      </div>

      {/* Items */}
      <div className="self-center flex flex-wrap w-full max-w-[1280px] justify-center gap-[10px]">
        {ITEMS.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col w-[180px] md:w-full md:max-w-[230px] h-[192px] md:h-[279px] justify-center items-center gap-[15px] md:gap-[clamp(7px,1.172vw,15px)] p-[20px] md:p-[clamp(9px,1.563vw,20px)] rounded-t-[130px] bg-azul-integro"
            >
              <div className="relative lg:flex-5 flex justify-center items-center h-[55px] lg:h-full w-full">
                <img
                  src={item.icon}
                  alt={item.description}
                  className="absolute w-full object-contain h-[55px]"
                />
              </div>
              <p className="lg:flex-6 max-w-[216px] text-[15px] md:text-[20px] lg:text-[25px] font-basic-sans leading-[115%] text-center text-beige-hogar whitespace-break-spaces">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
