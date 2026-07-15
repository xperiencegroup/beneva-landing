import WhatsappIcon from "../../../assets/icons/social/whatsapp-icon";
import LogoMain from "../../../assets/images/icons/main/logo-main";

const PARAGRAPHS = [
  {
    title: "Somos una desarrolladora enfocada en las personas:",
    description:
      "Beneva nació con una convicción clara: los espacios donde vivimos moldean quiénes somos. Por eso cada proyecto lleva consigo calidad, detalle y una visión humana para que quien llegue a casa sienta que llegó a su lugar.",
  },
  {
    title: "Compromiso Beneva",
    description:
      "Construimos con responsabilidad hacia nuestros clientes, nuestro equipo y la ciudad. Cada decisión la tomamos pensando en los tres.",
  },
  {
    title: "Nuestra Visión",
    description:
      "Ser una desarrolladora reconocida por crear proyectos de calidad que generen confianza, valor y una experiencia excepcional para nuestros clientes y nuestra comunidad.",
  },
];

export default function HomeNosotros() {
  return (
    <div className="relative w-full flex flex-col justify-center items-center py-[30px] px-[40px] gap-[20px] md:gap-y-[clamp(14px,2.344vw,30px)]">
      {/* Logo */}
      <LogoMain className="w-[56px] text-verde-confianza" />

      {/* Texts */}
      <p className="text-[32px] md:text-display1 font-woodland font-light text-verde-confianza">
        Nosotros
      </p>

      <div className="w-full flex flex-col justify-center items-center gap-[20px] md:gap-y-[clamp(9px,1.563vw,20px)]">
        {PARAGRAPHS.map((item) => {
          return (
            <div
              key={item.title}
              className="flex flex-col justify-center items-center gap-y-[clamp(9px,1.563vw,18px)]"
            >
              <h2 className="text-[20px] md:text-display-min text-center font-woodland font-bold leading-none text-verde-confianza">
                {item.title}
              </h2>
              <h2 className="w-[86vw] text-paragraph1 text-center font-sans font-light text-verde-confianza leading-[109%]">
                {item.description}
              </h2>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <button className="px-[clamp(20px,3.438vw,44px)] py-[clamp(7px,1.172vw,15px)] text-gris-profundo bg-celeste-bienestar">
        Conócenos
      </button>

      {/* Whatsapp Button */}
      <button className="hidden md:flex justify-center items-center size-[clamp(26px,4.375vw,56px)] p-[clamp(8px,1vw,14px)] absolute top-20 right-10 bg-celeste-bienestar hover:cursor-pointer">
        <WhatsappIcon className="text-verde-confianza" />
      </button>
    </div>
  );
}
