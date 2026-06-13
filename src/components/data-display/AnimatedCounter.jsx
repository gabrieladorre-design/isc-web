import { useState, useEffect, useRef } from "react";

/**
 * Contador numérico animado al entrar en viewport.
 *
 * Props:
 *  - end:       número final al que cuenta
 *  - label:     etiqueta bajo el número
 *  - className: clase del contenedor ("fs-stat-item" / "ms-stat-item")
 */
function AnimatedCounter({ end, label, className = "fs-stat-item" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 20);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 20);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div className={className} ref={ref}>
      <span className="stat-number">+{count}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default AnimatedCounter;
