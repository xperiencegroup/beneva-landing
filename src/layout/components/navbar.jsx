import { useState } from "react";
import { Link, useLocation } from "react-router";
import benevaLogo from "../../assets/images/icons/main/beneva-white.svg";
import menuIcon from "../../assets/icons/navbar/menuIcon.svg";

const RUTAS = [
  { slug: "/quienes-somos", title: "Quiénes somos" },
  { slug: "/proyectos", title: "Proyectos" },
  { slug: "/desarrollemos-juntos", title: "Desarrollemos juntos" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed z-50 flex h-fit w-full bg-verde-confianza p-[20px] md:px-[clamp(11px,1.875vw,24px)] md:py-[clamp(7px,1.172vw,15px)]">
      {/* Logo Beneva*/}
      <div className="flex-1 flex justify-start items-center">
        <Link to={"/"}>
          <img src={benevaLogo} alt="Logo de Beneva" />
        </Link>
      </div>

      {/* Secciones */}
      <div className="hidden flex-3 md:flex justify-center items-center gap-[clamp(5px,0.781vw,10px)]">
        {RUTAS.map((ruta) => {
          return (
            <Link
              to={ruta.slug}
              key={ruta.slug}
              className={`group relative px-[clamp(11px,1.875vw,24px)] py-[clamp(7px,1.172vw,15px)] text-button font-at-surt transition-colors ${ruta.slug === pathname ? "bg-celeste-bienestar text-verde-confianza font-bold" : "text-beige-hogar"}`}
            >
              {ruta.title}

              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-celeste-bienestar opacity-0 group-hover:opacity-100 transition-opacity ease-in" />
            </Link>
          );
        })}
      </div>

      {/* Contacto */}
      <div className="hidden md:flex flex-1 justify-end items-center">
        <Link
          to={"contactanos"}
          className={`group relative h-full px-[clamp(11px,1.875vw,24px)] py-[clamp(7px,1.172vw,15px)] text-button font-at-surt transition-colors ${pathname === "/contactanos" ? "bg-celeste-bienestar font-bold text-verde-confianza" : "text-verde-confianza hover:text-beige-hogar bg-beige-hogar hover:bg-transparent"}`}
        >
          Contáctanos
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-celeste-bienestar opacity-0 group-hover:opacity-100 transition-opacity ease-in" />
        </Link>
      </div>

      {/* Botón hamburguesa - mobile */}
      <div className="flex md:hidden">
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="flex size-[42px] justify-center items-center bg-beige-hogar"
        >
          <img src={menuIcon} alt="Ícono de menu" className="w-[22px]" />
        </button>
      </div>
    </div>
  );
}
