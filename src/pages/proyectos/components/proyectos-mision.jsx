import logoMision from "../../../assets/images/icons/main/logo-mision-angeles-verde.svg";
import misionImage from "../../../assets/images/sections/proyectos/mision-main-image.jpg";

export default function ProyectosMision() {
  return (
    <>
      <div className="flex flex-col h-[373px] justify-center items-center gap-[clamp(9px,1.563vw,20px)]">
        <img
          src={logoMision}
          alt="Logo Misión de los Ángeles"
          className="w-[clamp(71px,12.031vw,154px)]"
        />

        <h2 className="text-display2 font-woodland font-bold text-verde-confianza">
          Misión de los Ángeles
        </h2>

        <p className="max-w-[1160px] text-paragraph1 text-center text-gris-profundo">
          Dos prototipos de vivienda, más de 5,500 m² de amenidades y vigilancia
          24/7 en una de las zonas de mayor crecimiento de Apodaca. El hogar que
          tu familia merece está aquí.
        </p>

        <button className="text-button px-[clamp(11px,1.875vw,24px)] py-[clamp(7px,1.172vw,15px)] text-verde-confianza bg-celeste-bienestar hover:cursor-pointer">
          Ver sitio del proyecto
        </button>
      </div>

      <div className="relative w-full h-[545px] rounded-tr-[200px] overflow-hidden">
        <img
          src={misionImage}
          alt="Acesso Misión de los Ángeles"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </>
  );
}
