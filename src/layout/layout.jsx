import { Outlet } from "react-router";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Layout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}
