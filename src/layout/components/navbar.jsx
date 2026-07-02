import { Link, useLocation } from "react-router";
import benevaLogo from "../../assets/images/icons/main/beneva-white.svg";

const RUTAS = [
  { slug: "/quienes-somos", title: "Quiénes somos" },
  { slug: "/proyectos", title: "Proyectos" },
  { slug: "/desarrollemos-juntos", title: "Desarrollemos juntos" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <div className="flex h-fit w-full bg-verde-confianza px-[clamp(11px,1.875vw,24px)] py-[clamp(7px,1.172vw,15px)]">
      {/* Logo */}
      <div className="flex-1 flex justify-start items-center">
        <Link to={"/"}>
          <img src={benevaLogo} alt="Logo de Beneva" />
        </Link>
      </div>

      {/* Secciones */}
      <div className="flex-3 flex justify-center items-center gap-[clamp(5px,0.781vw,10px)]">
        {RUTAS.map((ruta) => {
          return (
            <Link
              to={ruta.slug}
              className={`group relative px-[clamp(11px,1.875vw,24px)] py-[clamp(7px,1.172vw,15px)] text-button font-at-surt transition-colors ${ruta.slug === pathname ? "bg-celeste-bienestar text-verde-confianza font-bold" : "text-beige-hogar"}`}
            >
              {ruta.title}

              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-celeste-bienestar opacity-0 group-hover:opacity-100 transition-opacity ease-in" />
            </Link>
          );
        })}
      </div>

      {/* Contacto */}
      <div className="flex-1 flex justify-end items-center">
        <Link
          to={"contactanos"}
          className={`group relative h-full px-[clamp(11px,1.875vw,24px)] py-[clamp(7px,1.172vw,15px)] text-button font-at-surt transition-colors ${pathname === "/contactanos" ? "bg-celeste-bienestar font-bold text-verde-confianza" : "text-verde-confianza hover:text-beige-hogar bg-beige-hogar hover:bg-transparent"}`}
        >
          Contáctanos
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-celeste-bienestar opacity-0 group-hover:opacity-100 transition-opacity ease-in" />
        </Link>
      </div>
    </div>
  );
}
