import { Link } from "react-router";
import BenevaSloganCustom from "../../assets/images/icons/main/beneva-slogan-custom";
import mailIcon from "../../assets/icons/commons/mailIcon.svg";
import developedByXperience from "../../assets/images/icons/xperience/xperience.png";

export default function Footer() {
  return (
    <div className="flex flex-col w-full md:h-[467px] bg-verde-confianza">
      <div className="flex flex-col justify-center items-center h-full max-md:px-[30px] py-[30px] gap-[20px] md:gap-[clamp(14px,2.344vw,30px)]">
        {/* Logo */}
        <BenevaSloganCustom className="w-[173px] md:w-[clamp(127px,21.484vw,275px)] text-beige-hogar" />

        <div className="flex max-md:flex-col gap-[20px] md:gap-[clamp(9px,1.563vw,20px)] max-md:w-full">
          <Link
            to={"quienes-somos"}
            className="px-[24px] py-[15px] md:px-[clamp(11px,1.875vw,24px)] md:py-[clamp(7px,1.172vw,15px)] text-[16px] max-md:text-center md:text-button text-beige-hogar hover:cursor-pointer"
          >
            Quiénes Somos
          </Link>
          <Link
            to={"proyectos"}
            className="px-[24px] py-[15px] md:px-[clamp(11px,1.875vw,24px)] md:py-[clamp(7px,1.172vw,15px)] text-[16px] max-md:text-center md:text-button text-beige-hogar hover:cursor-pointer"
          >
            Proyectos
          </Link>
          <Link
            to={"desarrollemos-juntos"}
            className="px-[24px] py-[15px] md:px-[clamp(11px,1.875vw,24px)] md:py-[clamp(7px,1.172vw,15px)] text-[16px] max-md:text-center md:text-button text-beige-hogar hover:cursor-pointer"
          >
            Desarrollemos Juntos
          </Link>
          <Link
            to={"contactanos"}
            className="px-[24px] py-[15px] md:px-[clamp(11px,1.875vw,24px)] md:py-[clamp(7px,1.172vw,15px)] text-[16px] max-md:text-center md:text-button text-beige-hogar hover:cursor-pointer"
          >
            Contacto
          </Link>
        </div>

        <p className="flex justify-center items-center gap-[clamp(7px,1.172vw,15px)] text-[15px] md:text-min font-woodland font-bold tracking-wider text-beige-hogar">
          <span>
            <img src={mailIcon} alt="Icóno de correo" />
          </span>
          contacto@beneva.mx
        </p>

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
