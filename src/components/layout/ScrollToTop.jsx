import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Vuelve al inicio en cada cambio de ruta
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}