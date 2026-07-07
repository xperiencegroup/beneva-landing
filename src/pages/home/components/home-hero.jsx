import BenevaSloganCustom from "../../../assets/images/icons/main/beneva-slogan-custom";

export default function HomeHero() {
  return (
    <div className="relative w-full min-h-lvh bg-zinc-800 rounded-bl-[200px]">
      {/* Image */}
      <div className="absolute inset-0 w-full h-full bg-beige-hogar rounded-bl-[200px]" />

      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-linear-to-b from-verde-gradiente/0 from-20% via-verde-gradiente/80 via-70% to-verde-gradiente rounded-bl-[200px]" />

      {/* Content */}
      <div className="absolute inset-0 w-full h-full flex flex-col justify-end items-center gap-[clamp(46px,7.813vw,100px)] pb-[clamp(64px,10.938vw,140px)]">
        {/* Logo */}
        <BenevaSloganCustom className="w-[clamp(242px,41.016vw,525px)] text-verde-dinamico" />

        {/* Text */}
        <div className="flex flex-col items-center">
          <h1 className="text-[clamp(33px,5.625vw,72px)] font-woodland font-semibold text-beige-hogar">
            Tu hogar merece lo mejor de ti
          </h1>
          <p className="max-w-[52vw] text-paragraph1 text-center font-sans font-light leading-[120%]">
            En Beneva pensamos cada espacio desde adentro hacia afuera porque el
            hogar es donde tu familia echa raíces y construye su historia.
          </p>
        </div>
      </div>
    </div>
  );
}
