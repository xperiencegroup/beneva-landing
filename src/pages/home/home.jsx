import HomeCompromiso from "./components/home-compromiso";
import HomeConstruimos from "./components/home-construimos";
import HomeEnterarme from "./components/home-enterarme";
import HomeHero from "./components/home-hero";
import HomeNosotros from "./components/home-nosotros";
import HomePatrimonio from "./components/home-patrimonio";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeHero />

      <HomeNosotros />

      <HomeCompromiso />

      <HomeConstruimos />

      <HomePatrimonio />

      <HomeEnterarme />
    </div>
  );
}
