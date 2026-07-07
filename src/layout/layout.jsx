import { Outlet } from "react-router";
import Navbar from "./components/navbar";

export default function Layout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />

      <Outlet />
    </div>
  );
}
