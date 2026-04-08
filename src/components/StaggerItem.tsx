import { motion } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right';

interface StaggerItemProps { 
  children: React.ReactNode; 
  className?: string;
  direction?: Direction;
}

const directionVariants: Record<Direction, { hidden: { y?: number; x?: number; opacity: number }; visible: { y?: number; x?: number; opacity: number } }> = {
  up: { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  down: { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  left: { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  right: { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
};

export function StaggerItem({ 
  children, 
  className = '',
  direction = 'up' 
}: StaggerItemProps) {
  return (
    <motion.div
      variants={directionVariants[direction]}
      className={className}
    >
      {children}
    </motion.div>
  );
}