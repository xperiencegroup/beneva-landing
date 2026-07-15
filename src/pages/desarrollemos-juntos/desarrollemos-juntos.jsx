import DesarrollemosCta from "./components/desarrollemos-cta";
import DesarrollemosFormulario from "./components/desarrollemos-formulario";
import DesarrollemosHero from "./components/desarrollemos-hero";
import DesarrollemosInversion from "./components/desarrollemos-inversion";
import DesarrollemosRazones from "./components/desarrollemos-razones";

export default function DesarrollemosJuntos() {
  return (
    <main className="flex flex-col">
      <DesarrollemosHero />

      <DesarrollemosRazones />

      <DesarrollemosInversion />

      <DesarrollemosFormulario />

      <DesarrollemosCta />
    </main>
  );
}
