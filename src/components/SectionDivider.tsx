import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'fade' | 'mask' | 'curve' | 'gradient-bridge' | 'glow-wash';
  color?: 'primary' | 'accent';
}

export function SectionDivider({ variant = 'fade', color = 'primary' }: SectionDividerProps) {
  // Deep Blue Gradient Bridge
  if (variant === 'gradient-bridge') {
    return (
      <div className="w-full h-64 md:h-80 relative z-0 pointer-events-none overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b ${
          color === 'primary' 
            ? 'from-transparent via-primary/5 to-transparent' 
            : 'from-transparent via-accent/5 to-transparent'
        }`} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_70%)] opacity-[0.03]" />
      </div>
    );
  }

  // Soft Glow Wash (Google Style)
  if (variant === 'glow-wash') {
    return (
      <div className="w-full h-48 md:h-64 relative z-0 flex items-center justify-center">
        <div className="absolute w-[120%] h-full bg-gradient-to-r from-transparent via-accent/10 to-transparent blur-[80px] opacity-40 rotate-[-2deg]" />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30" />
      </div>
    );
  }

  if (variant === 'fade') {
    return (
      <div className="w-full h-32 md:h-48 relative z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-transparent" />
      </div>
    );
  }

  if (variant === 'mask') {
    return (
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true }}
        className="w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent my-12 opacity-60"
      />
    );
  }

  return (
    <div className="w-full h-24 md:h-32 flex items-center justify-center relative overflow-hidden">
      <div className="absolute w-[150%] h-[200%] bg-accent/10 blur-[100px] rounded-[100%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
    </div>
  );
}
