import image from "../../../assets/images/sections/quienes-somos/nuestra-historia.png";
import { useInView } from "../../../hooks/useInView";

export default function QuienesSomosHistoria() {
  const [textRef, textVisible] = useInView({ threshold: 0.25 });
  const [imageRef, imageVisible] = useInView({ threshold: 0.25 });

  return (
    <>
      <div className="flex flex-col self-center w-full max-w-[1280px] max-h-[900px]">
        <div
          ref={textRef}
          className={`reveal ${textVisible ? "is-visible" : ""} flex flex-col justify-center items-center px-[48px] py-[30px] md:p-[clamp(28px,4.688vw,60px)]`}
        >
          <h3 className="title font-woodland font-bold text-center text-verde-confianza">
            Nuestra historia
          </h3>
          <p className="max-w-[1160px] paragraph leading-[100%] text-center text-gris-profundo">
            Detrás de Beneva hay casi 20 años de experiencia y aprendizaje. A lo
            largo de este tiempo hemos conocido de cerca las necesidades de
            quienes buscan un hogar, entendiendo que una vivienda representa
            mucho más que una compra.
            <br />
            <br />
            De esa experiencia nació Beneva: con la intención de crear
            desarrollos pensados para las familias que los habitan, cuidando
            cada detalle y procurando que cada proyecto aporte valor a su
            entorno y a la ciudad.
          </p>
        </div>
      </div>

      {/* Imagen */}
      <div
        ref={imageRef}
        className={`relative reveal-fade ${imageVisible ? "is-visible" : ""} relative flex h-[50svh] w-full`}
      >
        <p className="absolute bottom-2 left-1/2 -translate-x-[50%] z-10 text-[12px] text-beige-hogar">
          Imágenes con fines ilustrativos*
        </p>

        <img
          src={image}
          alt="Imagen del Parque de Beneva Serafines"
          className="absolute inset-0 w-full h-full object-cover rounded-tl-[100px]"
        />
      </div>
    </>
  );
}
