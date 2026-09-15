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
            Detrás de Beneva hay casi 20 años de experiencia acumulada entre
            construcción y negocios. Años de ver cómo se hacen las cosas, de
            aprender qué funciona y qué puede hacerse mejor y de entender que el
            comprador de vivienda merece más que una transacción.
            <br />
            <br />
            Esa convicción fue la semilla de Beneva.
            <br />
            Un proyecto que nació con la intención de construir desarrollos con
            carácter pensados en las familias que los van a habitar, en la
            comunidad que los rodea y en la ciudad que todos compartimos.
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
