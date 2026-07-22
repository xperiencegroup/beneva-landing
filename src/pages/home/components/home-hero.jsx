import BenevaSloganCustom from "../../../assets/images/icons/main/beneva-slogan-custom";
import video from "/videos/hero/home/banner.mov";

export default function HomeHero() {
  return (
    <div className="relative w-full min-h-lvh rounded-bl-[200px] overflow-hidden">
      {/* Video */}
      <div className="absolute -z-10 inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <video
            src={video}
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-linear-to-b from-verde-gradiente/0 from-20% via-verde-gradiente/80 via-70% to-verde-gradiente rounded-bl-[200px]" />

      {/* Content */}
      <div className="absolute inset-0 w-full h-full flex flex-col justify-end items-center gap-[clamp(46px,7.813vw,100px)] max-md:px-[20px] pb-[25vh] md:pb-[clamp(64px,10.938vw,140px)]">
        {/* Logo */}
        <BenevaSloganCustom className="w-[80vw] md:w-[clamp(242px,41.016vw,525px)] text-verde-dinamico" />

        {/* Text */}
        <div className="flex flex-col items-center gap-[clamp(9px,1.563vw,20px)]">
          <h1 className="text-center text-display4 font-woodland font-semibold leading-none text-beige-hogar">
            Tu hogar merece lo mejor de ti
          </h1>
          <p className="max-w-[80vw] md:max-w-[78vw] text-[18px] md:text-paragraph1 text-center font-sans leading-[120%]">
            En Beneva pensamos cada espacio desde adentro hacia afuera porque el
            hogar es donde tu familia echa raíces y construye su historia.
          </p>
        </div>
      </div>
    </div>
  );
}
