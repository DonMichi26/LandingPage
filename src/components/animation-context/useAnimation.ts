import { useContext } from 'react';
import type { AnimationConfig } from './types';
import { AnimationContext } from './AnimationContext';
import { animationVariants } from './variants';

const defaultGetVariants = (config: AnimationConfig) => animationVariants[config.type];

export function useAnimation() {
  const context = useContext(AnimationContext);
  return context ?? { getVariants: defaultGetVariants };
}