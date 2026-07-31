import video from "/videos/hero/proyectos/banner.mov";

export default function ProyectosHero() {
  return (
    <div className="relative flex flex-col justify-end items-center h-lvh max-h-[900px] gap-[20px] px-[44px] pb-[60px] md:p-[60px] rounded-bl-[100px] md:rounded-bl-[150px] lg:rounded-bl-[200px] overflow-hidden">
      {/* Overlay gradiente */}
      <div className="absolute z-0 inset-0 w-full h-full bg-linear-to-b from-gris-gradiente/0 from-21% md:via-gris-gradiente/70 via-gris-gradiente/90 via-80% to-gris-gradiente" />

      {/* Video */}
      <div className="absolute -z-10 inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <video
            src={video}
            autoPlay
            loop
            muted
            alt="Video de fondo"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      <h2 className="animate-hero-1 relative max-w-[1180px] text-display6 font-woodland font-bold text-center leading-[110%] text-beige-hogar">
        Lo que hemos construido habla por nosotros
      </h2>

      <p className="animate-hero-2 relative max-w-[1160px] text-[18px] md:text-paragraph4 leading-tight text-center text-beige-hogar">
        Cada proyecto Beneva lleva consigo años de experiencia, atención al
        detalle y una visión clara: construir espacios donde las familias de
        Nuevo León quieran vivir de verdad.
      </p>
    </div>
  );
}
