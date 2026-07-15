import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/home";
import QuienesSomos from "./pages/quienes-somos/quienes-somos";
import DesarrollemosJuntos from "./pages/desarrollemos-juntos/desarrollemos-juntos";
import Contacto from "./pages/contacto/contacto";
import Proyectos from "./pages/proyectos/proyectos";
import Layout from "./layout/layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route
            path="desarrollemos-juntos"
            element={<DesarrollemosJuntos />}
          />
          <Route path="contactanos" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
