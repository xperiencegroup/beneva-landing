import sobrepensarIcon from "../../../assets/icons/values/sobrepensar.png";
import respetoIcon from "../../../assets/icons/values/respeto.png";
import colaborarIcon from "../../../assets/icons/values/colaborar.png";
import entenderIcon from "../../../assets/icons/values/entender.png";
import proactivosIcon from "../../../assets/icons/values/proactivos.png";
import aprendizajeIcon from "../../../assets/icons/values/aprendizaje.png";
import calidadIcon from "../../../assets/icons/values/calidad.png";
import responsabilidadIcon from "../../../assets/icons/values/responsabilidad.png";

const ITEMS = [
  {
    description: "Sobrepasar\nexpectativas\nsiempre.",
    icon: sobrepensarIcon,
  },
  {
    description: "Actuar siempre con respeto.",
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
    description: "Ser proactivos ante cada situación.",
    icon: proactivosIcon,
  },
  {
    description: "Aprender constantemente de lo que hacemos.",
    icon: aprendizajeIcon,
  },
  {
    description: "Entregar siempre trabajos de calidad.",
    icon: calidadIcon,
  },
  {
    description:
      "Tomar responsabilidad de nuestras acciones y las de nuestro equipo.",
    icon: responsabilidadIcon,
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
      <div className="self-center flex flex-wrap w-full max-w-[1280px] justify-center gap-[clamp(9px,1.484vw,19px)]">
        {ITEMS.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col w-[48%] md:w-full md:max-w-[40%] lg:w-[23%] h-[192px] md:h-[279px] lg:h-[279px] justify-center items-center gap-[15px] md:gap-[clamp(7px,1.172vw,15px)] p-[20px] md:p-[clamp(9px,1.563vw,20px)] rounded-t-[130px] bg-azul-integro"
            >
              <div className="relative size-[45px]">
                <img
                  src={item.icon}
                  alt={item.description}
                  className="absolute w-full h-full object-contain"
                />
              </div>
              <p className="max-w-[216px] text-[15px] md:text-[20px] lg:text-[26px] font-woodland font-bold leading-[115%] text-center text-beige-hogar whitespace-break-spaces">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
