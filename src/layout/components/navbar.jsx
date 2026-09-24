import { useState } from "react";
import { Link, useLocation } from "react-router";
import { track } from "../../analytics/track";
import { TRACK } from "../../analytics/track.constants";

import benevaLogo from "../../assets/images/icons/main/beneva-white.svg";
import menuIcon from "../../assets/icons/navbar/menuIcon.svg";
import closeIcon from "../../assets/icons/commons/closeIcon.svg";

const RUTAS = [
  { id: "quienes-somos", slug: "/quienes-somos", title: "Quiénes somos" },
  { id: "proyectos", slug: "/proyectos", title: "Proyectos" },
  {
    id: "desarrollemos-juntos",
    slug: "/desarrollemos-juntos",
    title: "Desarrollemos juntos",
  },
];

const CONTACTO = {
  id: "contactanos",
  slug: "/contactanos",
  title: "Contáctanos",
};

export default function Navbar() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar-enter fixed z-50 flex h-fit w-full bg-verde-confianza p-[20px] md:px-[clamp(11px,1.875vw,24px)] md:py-[clamp(7px,1.172vw,15px)]">
      {/* Logo Beneva*/}
      <div className="flex-1 flex justify-start items-center">
        <Link to={"/"} onClick={() => track(TRACK.layout.logo.home)}>
          <img src={benevaLogo} alt="Logo de Beneva" />
        </Link>
      </div>

      {/* Secciones Desktop */}
      <div className="hidden flex-3 md:flex justify-center items-center gap-[clamp(5px,0.781vw,10px)]">
        {RUTAS.map((ruta) => {
          return (
            <Link
              to={ruta.slug}
              key={ruta.id}
              onClick={() =>
                track(TRACK.layout.menu.item, { item_id: ruta.id })
              }
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
          to={CONTACTO.slug}
          onClick={() =>
            track(TRACK.layout.menu.item, { item_id: CONTACTO.id })
          }
          className={`group relative h-full px-[clamp(11px,1.875vw,24px)] py-[clamp(7px,1.172vw,15px)] text-button font-at-surt transition-colors ${pathname === "/contactanos" ? "bg-celeste-bienestar font-bold text-verde-confianza" : "text-verde-confianza hover:text-beige-hogar bg-beige-hogar hover:bg-transparent"}`}
        >
          {CONTACTO.title}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-celeste-bienestar opacity-0 group-hover:opacity-100 transition-opacity ease-in" />
        </Link>
      </div>

      {/* Botón hamburguesa - mobile */}
      <div className="flex md:hidden">
        <button
          onClick={() => {
            track(TRACK.layout.menu.toggle, {
              action: isMenuOpen ? "close" : "open",
            });
            setIsMenuOpen(!isMenuOpen);
          }}
          className={`flex size-[42px] justify-center items-center transition-all ${isMenuOpen ? "bg-celeste-bienestar" : "bg-beige-hogar"}`}
        >
          <img
            src={isMenuOpen ? closeIcon : menuIcon}
            alt="Ícono de menu"
            className="w-[22px]"
          />
        </button>
      </div>

      <div
        inert={!isMenuOpen}
        className={`absolute -z-10 top-[82px] left-0 w-full h-fit bg-verde-confianza md:hidden landscape:hidden flex flex-col justify-start items-center p-[20px] pt-[30px] gap-[24px] transition-opacity ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        {[...RUTAS, CONTACTO].map((ruta) => (
          <Link
            key={ruta.id}
            to={ruta.slug}
            onClick={() => {
              track(TRACK.layout.menu.item, { item_id: ruta.id });
              setIsMenuOpen(false);
            }}
            className={`w-full text-[18px] leading-tight text-center px-[24px] py-[15px] hover:cursor-pointer ${
              ruta.id === "contactanos"
                ? "text-verde-confianza bg-beige-hogar"
                : ""
            }`}
          >
            {ruta.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
