import { useCallback } from 'react';

interface SmoothScrollOptions {
  behavior?: 'smooth' | 'auto';
  block?: 'start' | 'center' | 'end' | 'nearest';
  inline?: 'start' | 'center' | 'end' | 'nearest';
}

const defaultOptions: SmoothScrollOptions = {
  behavior: 'smooth',
  block: 'start',
};

export function useSmoothScroll() {
  const scrollToSection = useCallback((href: string, options: SmoothScrollOptions = defaultOptions) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: options.behavior, block: options.block, inline: options.inline });
    }
  }, []);

  const scrollToTop = useCallback((options: SmoothScrollOptions = defaultOptions) => {
    window.scrollTo({ top: 0, ...options });
  }, []);

  const scrollToElement = useCallback((element: HTMLElement | null, options: SmoothScrollOptions = defaultOptions) => {
    if (element) {
      element.scrollIntoView({ behavior: options.behavior, block: options.block, inline: options.inline });
    }
  }, []);

  return {
    scrollToSection,
    scrollToTop,
    scrollToElement,
  };
}