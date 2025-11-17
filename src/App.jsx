import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./pages/scrollToTop";

export default function Layout() {
  const location = useLocation();

  const hideNavbarOn = ["/inscrire", "/Dashboard"];
  const hideFooterOn = ["/inscrire", "/Dashboard"];


  return (
    <div className="flex flex-col min-h-screen">
      
      {!hideNavbarOn.includes(location.pathname) && <Navbar />}

      <main className="flex-grow">
        
          <ScrollToTop />
          
        <Outlet />
      </main>

      {!hideFooterOn.includes(location.pathname) && <Footer />}
    </div>
  );
}
