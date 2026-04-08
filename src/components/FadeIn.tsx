import { motion } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  duration?: number;
}

const directionVariants: Record<Direction, { hidden: { y?: number; x?: number; opacity: number }; visible: { y?: number; x?: number; opacity: number } }> = {
  up: { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  down: { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  left: { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  right: { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  none: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

export function FadeIn({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  duration = 0.6 
}: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      variants={directionVariants[direction]}
      className={className}
    >
      {children}
    </motion.div>
  );
}