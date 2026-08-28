import BenevaHero from "../../../assets/images/icons/main/beneva-hero";
import video from "/videos/hero/home/banner.mov";

export default function HomeHero() {
  return (
    <div className="relative w-full min-h-lvh rounded-bl-[100px] md:rounded-bl-[200px] overflow-hidden">
      {/* Video */}
      <div className="absolute -z-10 inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <video
            src={video}
            autoPlay
            muted
            playsInline
            loop
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-linear-to-b from-verde-gradiente/0 from-20% via-verde-gradiente/80 via-70% to-verde-gradiente" />

      {/* Content */}
      <div className="absolute inset-0 w-full h-full flex flex-col justify-end items-center gap-[30px] py-[60px] max-md:px-[40px] md:px-[60px]">
        {/* Logo */}
        <BenevaHero className="animate-hero-1 w-[200px] md:w-[300px] text-verde-dinamico" />

        {/* Text */}
        <div className="flex flex-col items-center gap-[20px]">
          <h1 className="animate-hero-2 text-center title font-woodland font-semibold leading-none text-beige-hogar">
            Tu hogar merece lo mejor de ti
          </h1>
          <p className="animate-hero-3 max-w-[80vw] md:max-w-[1160px] paragraph text-center leading-[120%]">
            En Beneva pensamos cada espacio desde adentro hacia afuera porque el
            hogar es donde tu familia echa raíces y construye su historia.
          </p>
        </div>
      </div>
    </div>
  );
}
