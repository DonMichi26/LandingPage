import type { ReactNode } from 'react';
import type { AnimationConfig } from './types';
import { AnimationContext } from './AnimationContext';
import { animationVariants } from './variants';

export { AnimationContext };

export function AnimationProvider({ children }: { children: ReactNode }) {
  const getVariants = (config: AnimationConfig) => {
    const baseVariant = animationVariants[config.type];
    
    return {
      hidden: {
        ...baseVariant.hidden,
      },
      visible: {
        ...baseVariant.visible,
        transition: { duration: config.duration ?? 0.5, delay: config.delay ?? 0 },
      },
    };
  };

  return (
    <AnimationContext.Provider value={{ getVariants }}>
      {children}
    </AnimationContext.Provider>
  );
}