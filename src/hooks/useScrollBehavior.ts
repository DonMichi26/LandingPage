import { useState, useEffect, useCallback } from 'react';
import { SCROLL_THRESHOLDS } from '../utils/constants';

interface UseScrollBehaviorOptions {
  hideAfterHero?: boolean;
  onScrollUp?: (visible: boolean) => void;
  threshold?: number;
}

interface ScrollState {
  scrollY: number;
  isScrolled: boolean;
  isVisible: boolean;
  direction: 'up' | 'down';
}

export function useScrollBehavior(options: UseScrollBehaviorOptions = {}) {
  const {
    hideAfterHero = false,
    threshold = SCROLL_THRESHOLDS.navbarBlur,
  } = options;

  const [state, setState] = useState<ScrollState>({
    scrollY: 0,
    isScrolled: false,
    isVisible: true,
    direction: 'up',
  });

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const isScrolled = currentScrollY > threshold;
    const isAfterHero = currentScrollY > window.innerHeight;

    setState((prev) => {
      const direction = currentScrollY > prev.scrollY ? 'down' : 'up';
      let isVisible = true;

      if (hideAfterHero && isAfterHero) {
        isVisible = direction === 'up';
      }

      return {
        scrollY: currentScrollY,
        isScrolled,
        isVisible,
        direction,
      };
    });
  }, [hideAfterHero, threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return state;
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        setProgress(Math.min((window.scrollY / maxScroll) * 100, 100));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}