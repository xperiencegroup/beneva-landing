import video from "/videos/hero/contacto/banner.mov";

export default function ContactoHero() {
  return (
    <div className="relative flex flex-col justify-end items-center h-lvh max-h-[900px] gap-[5px] px-[40px] pb-[60px] md:p-[60px] rounded-br-[100px] md:rounded-br-[200px] overflow-hidden">
      {/* Overlay gradiente */}
      <div className="absolute z-5 inset-0 w-full h-full bg-linear-to-b from-beige-hogar/0 from-21% md:via-beige-hogar/70 via-beige-hogar/90 via-80% to-beige-hogar" />

      {/* Video */}
      <div className="absolute -z-0 inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <video
            src={video}
            autoPlay
            loop
            playsInline
            muted
            alt="Video de fondo"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      </div>

      <h2 className="animate-hero-1 relative z-10 max-w-[1180px] title font-woodland font-bold text-center leading-[110%] text-verde-confianza">
        Contacto
      </h2>

      <p className="animate-hero-2 relative z-10 max-w-[1160px] paragraph text-center leading-none text-verde-confianza">
        Estamos para ayudarte
      </p>
    </div>
  );
}
