import bgImage from "../../../assets/images/backgrounds/compromiso-bg.jpg";
import mainImage from "../../../assets/images/sections/home/compromiso.jpg";
import checkIcon from "../../../assets/icons/commons/checkIcon.svg";

export default function HomeCompromiso() {
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
        {/* Image */}
        <div className="w-full lg:w-[34%] h-[92vh] relative rounded-tr-[40px] sm:rounded-tr-[60px] lg:rounded-tr-[100px] overflow-hidden shrink-0">
          <img
            src={mainImage}
            alt="Imagen principal"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text  */}
        <div className="flex w-[66%] min-w-0 h-full justify-center items-center pr-2">
          <div className="flex flex-col w-full max-w-[780px] justify-center items-center gap-[clamp(6px,1.563vw,20px)] text-center">
            <h3 className="text-display-min font-woodland text-verde-confianza font-bold">
              Los 3 “SI” antes de tomar una decisión
            </h3>
            <p className="text-paragraph1 text-center leading-tight lg:leading-none text-gris-profundo max-w-[500px] lg:max-w-none">
              Antes de cada acción, nuestro equipo se hace tres preguntas.
              Sencillas, pero poderosas porque creemos que la calidad empieza
              por la forma en que uno toma sus decisiones.
            </p>

            <div className="flex w-full pl-3 sm:pl-6 md:pl-10 lg:pl-20 xl:pl-[clamp(64px,10.938vw,140px)] items-center py-[clamp(6px,1.563vw,20px)] rounded-tr-[20px] sm:rounded-tr-[30px] gap-[clamp(5px,1.172vw,15px)] bg-azul-integro">
              <img
                src={checkIcon}
                alt="Ícono del contenedor"
                className="size-[clamp(14px,2.734vw,35px)] shrink-0"
              />
              <p className="text-beige-hogar font-woodland text-min font-bold text-left">
                ¿Es lo mejor para la empresa?
              </p>
            </div>

            <div className="flex w-full pl-3 sm:pl-6 md:pl-10 lg:pl-20 xl:pl-[clamp(64px,10.938vw,140px)] items-center py-[clamp(6px,1.563vw,20px)] rounded-tr-[20px] sm:rounded-tr-[30px] gap-[clamp(5px,1.172vw,15px)] bg-azul-integro">
              <img
                src={checkIcon}
                alt="Ícono del contenedor"
                className="size-[clamp(14px,2.734vw,35px)] shrink-0"
              />
              <p className="text-beige-hogar font-woodland text-min font-bold text-left">
                ¿Es lo mejor para el cliente?
              </p>
            </div>

            <div className="flex w-full pl-3 sm:pl-6 md:pl-10 lg:pl-20 xl:pl-[clamp(64px,10.938vw,140px)] items-center py-[clamp(6px,1.563vw,20px)] rounded-tr-[20px] sm:rounded-tr-[30px] gap-[clamp(5px,1.172vw,15px)] bg-azul-integro">
              <img
                src={checkIcon}
                alt="Ícono del contenedor"
                className="size-[clamp(14px,2.734vw,35px)] shrink-0"
              />
              <p className="text-beige-hogar font-woodland text-min font-bold text-left">
                ¿Tomo responsabilidad de este acto?
              </p>
            </div>

            <h3 className="text-display-min font-woodland text-verde-confianza font-semibold">
              Nuestro Compromiso con la Calidad
            </h3>
            <p className="text-paragraph1 text-center leading-tight lg:leading-none text-gris-profundo max-w-[500px] lg:max-w-[720px]">
              Somos una desarrolladora que se compromete a crear proyectos donde
              la calidad, la innovación y la confianza van de la mano. Creemos
              que cada espacio tiene el poder de transformar la vida de las
              personas y trabajamos cada día para que así sea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
