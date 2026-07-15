import ContactoForm from "./components/contacto-form";
import ContactoHero from "./components/contacto-hero";

export default function Contacto() {
  return (
    <main className="flex flex-col bg-verde-confianza">
      <ContactoHero />

      <ContactoForm />
    </main>
  );
}
