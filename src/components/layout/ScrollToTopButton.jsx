import { useState, useEffect } from "react";
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
      style={{
        position: 'fixed', bottom: '20px', right: '20px', 
        padding: '10px 15px', fontSize: '20px', 
        backgroundColor: '#FFD100', border: 'none', borderRadius: '50%', 
        cursor: 'pointer', zIndex: 1000
      }}
    >
      ↑
    </button>
  );
}