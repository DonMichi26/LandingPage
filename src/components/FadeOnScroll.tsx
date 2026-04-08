import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FadeOnScrollProps {
  children: React.ReactNode;
  threshold?: number;
}

export function FadeOnScroll({ children, threshold = 0.1 }: FadeOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0.3 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}