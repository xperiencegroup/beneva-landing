import logoMision from "../../../assets/images/icons/main/logo-mision-angeles-verde.svg";
import misionImage from "../../../assets/images/sections/proyectos/mision-main-image.png";
import { useInView } from "../../../hooks/useInView";

export default function ProyectosMision() {
  const [textRef, textVisible] = useInView({ threshold: 0.25 });
  const [imageRef, imageVisible] = useInView({ threshold: 0.25 });

  return (
    <>
      <div
        ref={textRef}
        className={`reveal ${textVisible ? "is-visible" : ""} flex flex-col h-fit md:h-[373px] justify-center items-center px-[40px] py-[30px] gap-[15px] md:gap-[20px]`}
      >
        <img
          src={logoMision}
          alt="Logo Misión de los Ángeles"
          className="w-[122px] h-[40px] md:w-[210px] md:h-[69px] xl:w-[282px] xl:h-[93px]"
        />

        <p className="max-w-[1160px] paragraph text-center leading-[110%] text-gris-profundo">
          Dos prototipos de vivienda, más de 5,500 m² de amenidades y vigilancia
          24/7 <br /> en una de las zonas de mayor crecimiento de Apodaca.
          <br />
          <br />
          El hogar que tu familia merece está aquí.
        </p>

        <button className="relative group text-[18px] md:text-button px-[24px] py-[15px] md:px-[clamp(11px,1.875vw,24px)] md:py-[clamp(7px,1.172vw,15px)] text-verde-confianza bg-celeste-bienestar hover:bg-transparent hover:cursor-pointer active:text-beige-hogar active:font-bold active:bg-verde-confianza transition-all">
          Ver sitio del proyecto
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-celeste-bienestar opacity-0 group-hover:opacity-100 active:opacity-0 group-active:opacity-0 transition-opacity ease-in" />
        </button>
      </div>

      <div
        ref={imageRef}
        className={`reveal-fade ${imageVisible ? "is-visible" : ""} relative w-full h-[545px] rounded-tr-[100px] md:rounded-tr-[200px] overflow-hidden`}
      >
        <img
          src={misionImage}
          alt="Acesso Misión de los Ángeles"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </>
  );
}
