import { useState, useEffect } from 'react';

export function useMousePosition(ref: React.RefObject<HTMLElement | null>): { x: number; y: number } {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          setMousePos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
          });
        }
      });
    };

    const el = ref.current;
    if (el) {
      el.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (el) {
        el.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(rafId);
    };
  }, [ref]);

  return mousePos;
}
