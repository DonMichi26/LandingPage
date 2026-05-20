import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useSmoothScroll } from './useSmoothScroll';

describe('useSmoothScroll', () => {
  it('returns scrollToSection, scrollToTop, and scrollToElement functions', () => {
    const { result } = renderHook(() => useSmoothScroll());
    expect(result.current.scrollToSection).toBeInstanceOf(Function);
    expect(result.current.scrollToTop).toBeInstanceOf(Function);
    expect(result.current.scrollToElement).toBeInstanceOf(Function);
  });

  it('scrollToSection calls scrollIntoView on matching element', () => {
    const el = document.createElement('div');
    el.id = 'test-section';
    document.body.appendChild(el);
    const spy = vi.spyOn(el, 'scrollIntoView');

    const { result } = renderHook(() => useSmoothScroll());
    result.current.scrollToSection('#test-section');

    expect(spy).toHaveBeenCalledOnce();
    spy.mockRestore();
    document.body.removeChild(el);
  });

  it('scrollToSection does nothing for non-existent selector', () => {
    const { result } = renderHook(() => useSmoothScroll());
    expect(() => result.current.scrollToSection('#non-existent')).not.toThrow();
  });

  it('scrollToTop calls window.scrollTo', () => {
    const spy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    const { result } = renderHook(() => useSmoothScroll());
    result.current.scrollToTop();
    expect(spy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth', block: 'start' });
    spy.mockRestore();
  });
});
