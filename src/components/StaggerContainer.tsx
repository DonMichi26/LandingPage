import { motion } from 'framer-motion';

interface StaggerContainerProps { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
}

export function StaggerContainer({ 
  children, 
  className = '', 
  delay = 0 
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}