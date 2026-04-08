import { motion } from 'framer-motion';

interface ScaleInProps { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
}

export function ScaleIn({ 
  children, 
  className = '', 
  delay = 0 
}: ScaleInProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}