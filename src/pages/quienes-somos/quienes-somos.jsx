import QuienesSomosCta from "./components/quienes-somos-cta";
import QuienesSomosHero from "./components/quienes-somos-hero";
import QuienesSomosHistoria from "./components/quienes-somos-historia";
import QuienesSomosNosMueve from "./components/quienes-somos-nos-mueve";
import QuienesSomosProfesionales from "./components/quienes-somos-profesionales";
import QuienesSomosValores from "./components/quienes-somos-valores";

export default function QuienesSomos() {
  return (
    <main className="flex flex-col">
      <QuienesSomosHero />

      <QuienesSomosHistoria />

      <QuienesSomosNosMueve />

      <QuienesSomosValores />

      <QuienesSomosProfesionales />

      <QuienesSomosCta />
    </main>
  );
}
