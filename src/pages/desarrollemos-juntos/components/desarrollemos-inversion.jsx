import bgImage from "../../../assets/images/backgrounds/compromiso-bg.jpg";
import mainImage from "../../../assets/images/sections/desarrollemos-juntos/inversion-main.jpg";

export default function DesarrollemosInversion() {
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
        <div className="flex w-[53%] min-w-0 h-full justify-center items-center pl-4">
          <div className="flex flex-col w-full max-w-[588px] justify-center items-center gap-[clamp(6px,1.563vw,20px)] text-center">
            <h3 className="text-display-min font-woodland text-verde-confianza font-bold">
              Tu inversión en buenas manos
            </h3>
            <p className="text-paragraph1 text-center leading-tight lg:leading-none text-gris-profundo max-w-[500px] lg:max-w-[760px]">
              Cuando un socio trabaja con Beneva, sabe que el cliente final va a
              recibir exactamente lo que se le prometió y eso protege la
              reputación y el valor de cada proyecto.
            </p>

            <div className="flex flex-col w-full h-[278px] items-center px-[clamp(21px,3.594vw,46px)] py-[clamp(9px,1.563vw,20px)] rounded-tl-[20px] sm:rounded-tl-[30px] gap-[clamp(6px,0.938vw,12px)] bg-azul-integro">
              <h4 className="text-min font-woodland font-bold text-rosa-bienestar">
                Servicio y atención al cliente
              </h4>
              <p className="max-w-[659px] text-beige-hogar text-[24px] leading-tight text-center">
                Nuestros clientes y socios son la columna vertebral de lo que
                hacemos. Cada interacción desde la primera llamada hasta la
                entrega de llaves la tratamos con el mismo cuidado que ponemos
                en cada detalle constructivo.
              </p>
            </div>

            <div className="flex flex-col w-full h-[275px] items-center px-[clamp(21px,3.594vw,46px)] py-[clamp(9px,1.563vw,20px)] rounded-tl-[20px] sm:rounded-tl-[30px] gap-[clamp(6px,0.938vw,12px)] bg-azul-integro">
              <h4 className="text-min font-woodland font-bold text-rosa-bienestar">
                Calidad
              </h4>
              <p className="max-w-[659px] text-beige-hogar text-[24px] leading-tight text-center">
                Si queremos vivir en una buena ciudad, hay que construir una
                buena ciudad. Tenemos el más alto estándar de calidad en
                nuestros trabajos sin excepciones.
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-[46%] h-[100vh] relative rounded-tl-[40px] sm:rounded-tl-[60px] lg:rounded-tl-[100px] overflow-hidden shrink-0">
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
