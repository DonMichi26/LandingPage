import { renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useParticles } from './useParticles';

describe('useParticles', () => {
  it('generates the requested number of particles', () => {
    const { result } = renderHook(() => useParticles(10));
    expect(result.current).toHaveLength(10);
  });

  it('generates 0 particles when count is 0', () => {
    const { result } = renderHook(() => useParticles(0));
    expect(result.current).toHaveLength(0);
  });

  it('each particle has required properties', () => {
    const { result } = renderHook(() => useParticles(5));
    result.current.forEach((p) => {
      expect(p).toHaveProperty('id');
      expect(p).toHaveProperty('x');
      expect(p).toHaveProperty('y');
      expect(p).toHaveProperty('size');
      expect(p).toHaveProperty('duration');
      expect(p).toHaveProperty('delay');
      expect(p).toHaveProperty('opacity');
    });
  });

  it('particles have sequential ids', () => {
    const { result } = renderHook(() => useParticles(5));
    result.current.forEach((p, i) => {
      expect(p.id).toBe(i);
    });
  });

  it('particle values are within expected ranges', () => {
    const { result } = renderHook(() => useParticles(50));
    result.current.forEach((p) => {
      expect(p.x).toBeGreaterThanOrEqual(0);
      expect(p.x).toBeLessThanOrEqual(100);
      expect(p.y).toBeGreaterThanOrEqual(0);
      expect(p.y).toBeLessThanOrEqual(100);
      expect(p.size).toBeGreaterThanOrEqual(1);
      expect(p.size).toBeLessThanOrEqual(4);
      expect(p.opacity).toBeGreaterThanOrEqual(0.1);
      expect(p.opacity).toBeLessThanOrEqual(0.5);
    });
  });

  it('respects custom options', () => {
    const { result } = renderHook(() =>
      useParticles(10, { minSize: 3, maxSize: 6, minOpacity: 0.5, maxOpacity: 0.9 })
    );
    result.current.forEach((p) => {
      expect(p.size).toBeGreaterThanOrEqual(3);
      expect(p.size).toBeLessThanOrEqual(6);
      expect(p.opacity).toBeGreaterThanOrEqual(0.5);
      expect(p.opacity).toBeLessThanOrEqual(0.9);
    });
  });

  it('returns stable reference across re-renders', () => {
    const { result, rerender } = renderHook(() => useParticles(10));
    const first = result.current;
    rerender();
    expect(result.current).toBe(first);
  });
});
