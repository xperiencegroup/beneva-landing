import { GalleryCarrousel } from "../../../components/carousel/embla/gallery-carousel";

// Images
import image6 from "../../../assets/images/sections/proyectos/hero-carousel/caseta-6.jpg";
import image5 from "../../../assets/images/sections/proyectos/hero-carousel/alberca-5.jpg";
import image4 from "../../../assets/images/sections/proyectos/hero-carousel/asador-4.jpg";
import image3 from "../../../assets/images/sections/proyectos/hero-carousel/casaclub-3.jpg";
import image2 from "../../../assets/images/sections/proyectos/hero-carousel/cocina-2.jpg";
import image1 from "../../../assets/images/sections/proyectos/hero-carousel/casa-1.jpg";

const images = [image1, image2, image3, image4, image5, image6];

export default function ProyectosHero() {
  return (
    <div className="relative flex flex-col justify-end items-center h-lvh max-h-[900px] gap-[20px] px-[44px] pb-[60px] md:p-[60px] rounded-bl-[100px] md:rounded-bl-[150px] lg:rounded-bl-[200px] overflow-hidden">
      {/* Overlay gradiente */}
      <div className="absolute z-0 inset-0 w-full h-full bg-linear-to-b from-gris-gradiente/0 from-21% md:via-gris-gradiente/70 via-gris-gradiente/90 via-80% to-gris-gradiente" />

      {/* Carousel */}
      <div className="absolute -z-10 inset-0 w-full h-full">
        <div className="relative w-full h-full pointer-events-none">
          {/* Embla Carousel */}
          <GalleryCarrousel images={images} />
        </div>
      </div>

      <h2 className="animate-hero-1 relative max-w-[1180px] title font-woodland font-bold text-center leading-[110%] text-beige-hogar">
        Lo que hemos construido habla por nosotros
      </h2>

      <p className="animate-hero-2 relative max-w-[1160px] paragraph leading-tight text-center text-beige-hogar">
        Cada proyecto Beneva lleva consigo años de experiencia, atención al
        detalle y una visión clara: construir espacios donde las familias de
        Nuevo León quieran vivir de verdad.
      </p>
    </div>
  );
}
