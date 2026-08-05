import { Link } from "react-router";
import mailIcon from "../../assets/icons/commons/mailIcon.svg";
import developedByXperience from "../../assets/images/icons/xperience/xperience.svg";
import LogoMain from "../../assets/images/icons/main/logo-main";

export default function Footer() {
  return (
    <div className="flex flex-col w-full md:h-[467px] bg-verde-confianza">
      <div className="flex flex-col justify-center items-center h-full max-md:px-[30px] py-[30px] gap-[20px]">
        {/* Logo */}
        <Link to={"/"}>
          <LogoMain className="w-[56px] text-beige-hogar" />
        </Link>

        <div className="flex max-md:flex-col gap-[20px] md:gap-[clamp(9px,1.563vw,20px)] max-md:w-full">
          <Link
            to={"quienes-somos"}
            className="relative group px-[24px] py-[15px] md:px-[clamp(11px,1.875vw,24px)] md:py-[clamp(7px,1.172vw,15px)] text-[16px] max-md:text-center md:text-button text-beige-hogar hover:cursor-pointer active:text-verde-confianza active:font-bold active:bg-celeste-bienestar transition-all"
          >
            Quiénes Somos
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-celeste-bienestar opacity-0 group-hover:opacity-100 group-active:opacity-0 transition-opacity ease-in" />
          </Link>
          <Link
            to={"proyectos"}
            className="relative group px-[24px] py-[15px] md:px-[clamp(11px,1.875vw,24px)] md:py-[clamp(7px,1.172vw,15px)] text-[16px] max-md:text-center md:text-button text-beige-hogar hover:cursor-pointer active:text-verde-confianza active:font-bold active:bg-celeste-bienestar transition-all"
          >
            Proyectos
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-celeste-bienestar opacity-0 group-hover:opacity-100 group-active:opacity-0 transition-opacity ease-in" />
          </Link>
          <Link
            to={"desarrollemos-juntos"}
            className="relative group px-[24px] py-[15px] md:px-[clamp(11px,1.875vw,24px)] md:py-[clamp(7px,1.172vw,15px)] text-[16px] max-md:text-center md:text-button text-beige-hogar hover:cursor-pointer active:text-verde-confianza active:font-bold active:bg-celeste-bienestar transition-all"
          >
            Desarrollemos Juntos
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-celeste-bienestar opacity-0 group-hover:opacity-100 group-active:opacity-0 transition-opacity ease-in" />
          </Link>
          <Link
            to={"contactanos"}
            className="relative group px-[24px] py-[15px] md:px-[clamp(11px,1.875vw,24px)] md:py-[clamp(7px,1.172vw,15px)] text-[16px] max-md:text-center md:text-button text-beige-hogar hover:cursor-pointer active:text-verde-confianza active:font-bold active:bg-celeste-bienestar transition-all"
          >
            Contacto
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-celeste-bienestar opacity-0 group-hover:opacity-100 group-active:opacity-0 transition-opacity ease-in" />
          </Link>
        </div>

        <a
          href="mailto:contacto@beneva.mx"
          className="flex justify-center items-center gap-[clamp(7px,1.172vw,15px)] text-[15px] md:text-min font-woodland font-bold tracking-wider text-beige-hogar px-2 rounded hover:bg-black/10"
        >
          <span>
            <img src={mailIcon} alt="Icóno de correo" />
          </span>
          contacto@beneva.mx
        </a>

        <img
          src={developedByXperience}
          alt="Desarrollado por Xperience"
          className="w-[118px] pt-[30px] pb-[15px]"
        />
      </div>

      <div className="py-[30px] md:py-[clamp(14px,2.344vw,30px)] bg-[#192D26]">
        <p className="text-[12px] text-center md:text-paragraph3 text-beige-hogar">
          © 2026 Beneva. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
