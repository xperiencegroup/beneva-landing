import ProyectosHero from "./components/proyectos-hero";
import ProyectosMision from "./components/proyectos-mision";

export default function Proyectos() {
  return (
    <main className="flex flex-col">
      <ProyectosHero />

      <ProyectosMision />
    </main>
  );
}
