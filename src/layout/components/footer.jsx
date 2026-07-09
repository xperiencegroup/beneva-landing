import { Link } from "react-router";
import BenevaSloganCustom from "../../assets/images/icons/main/beneva-slogan-custom";
import mailIcon from "../../assets/icons/commons/mailIcon.svg";
import developedByXperience from "../../assets/images/icons/xperience/xperience.png";

export default function Footer() {
  return (
    <div className="flex flex-col w-full h-[467px] bg-verde-confianza">
      <div className="flex flex-col justify-center items-center h-full gap-[clamp(14px,2.344vw,30px)]">
        {/* Logo */}
        <BenevaSloganCustom className="w-[clamp(127px,21.484vw,275px)] text-beige-hogar" />

        <div className="flex gap-[clamp(9px,1.563vw,20px)]">
          <Link
            to={"quienes-somos"}
            className="px-[clamp(11px,1.875vw,24px)] py-[clamp(7px,1.172vw,15px)] text-button text-beige-hogar hover:cursor-pointer"
          >
            Quiénes Somos
          </Link>
          <Link
            to={"proyectos"}
            className="px-[clamp(11px,1.875vw,24px)] py-[clamp(7px,1.172vw,15px)] text-button text-beige-hogar hover:cursor-pointer"
          >
            Proyectos
          </Link>
          <Link
            to={"desarrollemos-juntos"}
            className="px-[clamp(11px,1.875vw,24px)] py-[clamp(7px,1.172vw,15px)] text-button text-beige-hogar hover:cursor-pointer"
          >
            Desarrollemos Juntos
          </Link>
          <Link
            to={"contactanos"}
            className="px-[clamp(11px,1.875vw,24px)] py-[clamp(7px,1.172vw,15px)] text-button text-beige-hogar hover:cursor-pointer"
          >
            Contacto
          </Link>
        </div>

        <p className="flex justify-center items-center gap-[clamp(7px,1.172vw,15px)] text-min font-woodland font-bold tracking-wider text-beige-hogar">
          <span>
            <img src={mailIcon} alt="Icóno de correo" />
          </span>
          contacto@beneva.mx
        </p>

        <img
          src={developedByXperience}
          alt="Desarrollado por Xperience"
          className="w-[clamp(54px,9.219vw,118px)]"
        />
      </div>

      <div className="py-[clamp(14px,2.344vw,30px)] bg-[#192D26]">
        <p className="text-center text-paragraph3 text-beige-hogar">
          © 2026 Beneva. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
