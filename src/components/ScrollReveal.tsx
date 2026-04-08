import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

interface Position {
  opacity: number;
  x?: number;
  y?: number;
}

const getInitialPosition = (direction: Direction): Position => {
  switch (direction) {
    case 'up': return { opacity: 0, y: 50 };
    case 'down': return { opacity: 0, y: -50 };
    case 'left': return { opacity: 0, x: -50 };
    case 'right': return { opacity: 0, x: 50 };
    case 'none': return { opacity: 0 };
    default: return { opacity: 0, y: 50 };
  }
};

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  threshold = 0.2,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const initialPos = getInitialPosition(direction) as { opacity: number; x?: number; y?: number };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { 
          opacity: 1, 
          x: 0,
          y: 0,
          transition: { duration, delay }
        },
        hidden: initialPos,
      }}
    >
      {children}
    </motion.div>
  );
}