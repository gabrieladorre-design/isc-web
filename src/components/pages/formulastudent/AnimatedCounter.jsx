import { useState, useEffect, useRef } from "react";

function AnimatedCounter({ end, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false); // Para asegurar que solo se anime una vez

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Si el elemento es visible y no se ha animado aún...
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          /* Matemáticas para la animación */
          let start = 0;
          const duration = 2000; // Dura 2 segundos
          const increment = end / (duration / 20); 
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end); // Aseguramos que termine en el número exacto
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 20);
        }
      },
      { threshold: 0.5 } // Se activa al ver el 50% del elemento
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div className="fs-stat-item" ref={ref}>
      <span className="stat-number">+{count}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default AnimatedCounter;