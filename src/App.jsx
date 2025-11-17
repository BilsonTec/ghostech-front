import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function Layout() {
  const location = useLocation();

  const hideNavbarOn = ["/inscrire", "/Dashboard"];
  const hideFooterOn = ["/inscrire", "/Dashboard"];


  return (
    <div className="min-h-screen flex flex-col">
      
      {!hideNavbarOn.includes(location.pathname) && <Navbar />}

      <main className="flex-grow">
        <Outlet />
      </main>

      {!hideFooterOn.includes(location.pathname) && <Footer />}
    </div>
  );
}
