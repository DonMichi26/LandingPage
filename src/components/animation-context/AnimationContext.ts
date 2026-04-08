import { createContext } from 'react';
import type { AnimationConfig } from './types';

export interface AnimationContextValue {
  getVariants: (config: AnimationConfig) => {
    hidden: Record<string, unknown>;
    visible: Record<string, unknown>;
  };
}

export const AnimationContext = createContext<AnimationContextValue | null>(null);