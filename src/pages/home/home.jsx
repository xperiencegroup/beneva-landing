import HomeHero from "./components/home-hero";
import HomeNosotros from "./components/home-nosotros";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeHero />

      <HomeNosotros />
    </div>
  );
}
