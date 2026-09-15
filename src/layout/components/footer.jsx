import { Link } from "react-router";
import developedByXperience from "../../assets/images/icons/xperience/xperience.svg";
import benevaLogoWhite from "../../assets/images/icons/main/beneva-footer.svg";
import correoIcon from "../../assets/icons/form/green/correo.svg";

import instagramIcon from "../../assets/icons/social/instagram.svg";
import facebookIcon from "../../assets/icons/social/facebook.svg";

const socials = [
  {
    id: "instagram",
    icon: instagramIcon,
    href: "#",
  },
  {
    id: "facebook",
    icon: facebookIcon,
    href: "#",
  },
];

export default function Footer() {
  return (
    <div className="flex flex-col w-full md:h-[467px] bg-verde-confianza">
      <div className="self-center flex flex-col w-full max-w-[1280px] justify-center h-full max-md:px-[30px] py-[60px] px-[44px] lg:px-[60px] xl:px-5 gap-[20px] md:gap-[30px]">
        {/* Logo y frase*/}
        <div className="flex flex-col md:flex-row w-full max-w-[1280px] items-center py-[20px] gap-[10px] md:gap-[20px]">
          <Link to={"/"}>
            <img
              src={benevaLogoWhite}
              alt="Logo de Beneva"
              className="w-[362px] hover:cursor-pointer"
            />
          </Link>

          {/* divider */}
          <div className="shrink-0 w-[2px] h-[20px] md:h-full bg-beige-hogar" />

          <p className="w-full max-w-[346px] text-center md:text-left paragraph text-beige-hogar">
            Desarrollamos espacios que mejoran vidas y construyen futuro
          </p>
        </div>

        {/* divider horizontal */}
        <div className="hidden md:block w-full h-[1px] bg-beige-hogar" />

        <div className="flex max-md:flex-col md:gap-[20px] max-md:w-full justify-center lg:justify-start">
          <Link
            to={"quienes-somos"}
            className="relative group px-[24px] py-[15px] button text-center text-beige-hogar hover:cursor-pointer active:text-verde-confianza active:font-bold active:bg-celeste-bienestar transition-all"
          >
            Quiénes Somos
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-celeste-bienestar opacity-0 group-hover:opacity-100 group-active:opacity-0 transition-opacity ease-in" />
          </Link>
          <Link
            to={"proyectos"}
            className="relative group px-[24px] py-[15px] button text-center text-beige-hogar hover:cursor-pointer active:text-verde-confianza active:font-bold active:bg-celeste-bienestar transition-all"
          >
            Proyectos
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-celeste-bienestar opacity-0 group-hover:opacity-100 group-active:opacity-0 transition-opacity ease-in" />
          </Link>
          <Link
            to={"desarrollemos-juntos"}
            className="relative group px-[24px] py-[15px] button text-center text-beige-hogar hover:cursor-pointer active:text-verde-confianza active:font-bold active:bg-celeste-bienestar transition-all"
          >
            Desarrollemos Juntos
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-celeste-bienestar opacity-0 group-hover:opacity-100 group-active:opacity-0 transition-opacity ease-in" />
          </Link>
          <Link
            to={"contactanos"}
            className="relative group px-[24px] py-[15px] button text-center text-beige-hogar hover:cursor-pointer active:text-verde-confianza active:font-bold active:bg-celeste-bienestar transition-all"
          >
            Contacto
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-celeste-bienestar opacity-0 group-hover:opacity-100 group-active:opacity-0 transition-opacity ease-in" />
          </Link>
        </div>

        <div className="max-md:self-center flex flex-col md:flex-row justify-between items-center w-full max-md:max-w-[315px] md:w-full md:h-[97px] px-[25px] py-[15px] max-md:gap-[20px] rounded-[12px] border-[1px] border-beige-hogar">
          <p className="subtitle text-beige-hogar font-woodland font-bold">
            Escríbenos
          </p>

          <a
            href="mailto:contacto@beneva.mx"
            className="flex flex-wrap max-md:w-full max-md:w-full max-md:max-w-[210px] max-md:justify-between justify-center items-center  gap-[4px] md:gap-[8px] lg:gap-[15px] paragraph text-beige-hogar"
          >
            <span className="flex shrink-0 justify-center items-center size-[42px] md:size-[60px] bg-beige-hogar">
              <img
                src={correoIcon}
                alt="Ícono de correo"
                className="w-[20px] md:w-[28px]"
              />
            </span>
            contacto@beneva.mx
          </a>

          {/* redes sociales */}
          <div className="flex max-md:w-full max-md:max-w-[210px] max-md:justify-center gap-[40px]">
            {socials.map((social) => {
              return (
                <a
                  key={social.id}
                  className="flex size-[42px] md:size-[60px] justify-center items-center bg-beige-hogar"
                >
                  <img
                    src={social.icon}
                    alt={`Ícono de ${social.id}`}
                    className="size-[19px] md:size-[28px]"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-[30px] md:py-[clamp(14px,2.344vw,30px)] bg-[#192D26]">
        <p className="paragraph text-center md:text-paragraph3 text-beige-hogar">
          © 2026 Beneva. Todos los derechos reservados.
        </p>

        <img
          src={developedByXperience}
          alt="Desarrollado por Xperience"
          className="w-[118px] pt-[18px] pb-[15px]"
        />
      </div>
    </div>
  );
}
