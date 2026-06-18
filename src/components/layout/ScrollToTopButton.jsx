import { useState, useEffect } from "react";
import Icon from "@/components/data-display/Icon";
import "./ScrollToTopButton.scss";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button 
      onClick={scrollToTop}
      aria-label="Volver arriba"
      style={{
        position: 'fixed', bottom: '20px', right: '20px',
        width: '48px', height: '48px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#00402A',
        backgroundColor: '#FFB81C', border: 'none', borderRadius: '50%',
        cursor: 'pointer', zIndex: 1000, boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
      }}
    >
      <Icon name="arrow-up" size={22} strokeWidth={2.5} />
    </button>
  );
}