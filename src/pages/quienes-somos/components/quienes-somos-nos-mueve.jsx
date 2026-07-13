import bgImage from "../../../assets/images/backgrounds/compromiso-bg.jpg";
import mainImage from "../../../assets/images/sections/quienes-somos/nos-mueve.jpg";

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
        <div className="flex w-[66%] min-w-0 h-full justify-center items-center pr-2">
          <div className="flex flex-col w-full max-w-[780px] justify-center items-center gap-[clamp(6px,1.563vw,20px)] text-center">
            <h3 className="text-display-min font-woodland text-verde-confianza font-bold">
              Lo que nos mueve
            </h3>
            <p className="text-paragraph1 text-center leading-tight lg:leading-none text-gris-profundo max-w-[500px] lg:max-w-[760px]">
              El nombre lo dice todo: Beneva significa buen vivir. Y esa idea es
              la brújula que guía cada decisión que tomamos desde cómo diseñamos
              un espacio hasta cómo tratamos a cada cliente.
            </p>

            <div className="flex flex-col w-full items-center px-[clamp(21px,3.594vw,46px)] py-[clamp(9px,1.563vw,20px)] rounded-tl-[20px] sm:rounded-tl-[30px] gap-[clamp(6px,0.938vw,12px)] bg-azul-integro">
              <h4 className="text-min font-woodland font-bold text-rosa-bienestar">
                Nuestra misión
              </h4>
              <p className="max-w-[659px] text-beige-hogar text-[24px] leading-tight text-center">
                Desarrollar espacios residenciales que mejoren la vida de las
                personas con calidad real, atención al detalle y un compromiso
                genuino con cada familia que confía en nosotros.
              </p>
            </div>

            <div className="flex flex-col w-full items-center px-[clamp(21px,3.594vw,46px)] py-[clamp(9px,1.563vw,20px)] rounded-tl-[20px] sm:rounded-tl-[30px] gap-[clamp(6px,0.938vw,12px)] bg-azul-integro">
              <h4 className="text-min font-woodland font-bold text-rosa-bienestar">
                Nuestra visión
              </h4>
              <p className="max-w-[659px] text-beige-hogar text-[24px] leading-tight text-center">
                Crecer como desarrolladora de referencia en la zona
                metropolitana manteniendo siempre la misma calidad, el mismo
                cuidado y el mismo carácter en cada proyecto que emprendamos.
              </p>
            </div>

            <div className="flex flex-col w-full items-center px-[clamp(21px,3.594vw,46px)] py-[clamp(9px,1.563vw,20px)] rounded-tl-[20px] sm:rounded-tl-[30px] gap-[clamp(6px,0.938vw,12px)] bg-azul-integro">
              <h4 className="text-min font-woodland font-bold text-rosa-bienestar">
                Nuestro propósito
              </h4>
              <p className="max-w-[659px] text-beige-hogar text-[24px] leading-tight text-center">
                Construir el Nuevo León donde queremos vivir comunidades con
                vida, con plusvalía y con el orgullo de haber sido hechas bien
                desde el principio.
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-[34%] h-[100vh] relative rounded-tl-[40px] sm:rounded-tl-[60px] lg:rounded-tl-[100px] overflow-hidden shrink-0">
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
