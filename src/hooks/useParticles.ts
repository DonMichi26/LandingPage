import { useMemo } from 'react';

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface ParticleOptions {
  minSize?: number;
  maxSize?: number;
  minDuration?: number;
  maxDuration?: number;
  minOpacity?: number;
  maxOpacity?: number;
}

export function useParticles(count: number, options: ParticleOptions = {}): Particle[] {
  const {
    minSize = 1,
    maxSize = 4,
    minDuration = 4,
    maxDuration = 8,
    minOpacity = 0.1,
    maxOpacity = 0.5,
  } = options;

  return useMemo(() => {
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (maxSize - minSize) + minSize,
        duration: Math.random() * (maxDuration - minDuration) + minDuration,
        delay: Math.random() * 4,
        opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
      });
    }
    return particles;
  }, [count, minSize, maxSize, minDuration, maxDuration, minOpacity, maxOpacity]);
}
