export const APP_CONFIG = {
  name: 'Smart Finance',
  tagline: 'Tu contador en el bolsillo',
  version: '1.0.0',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.smartfinance.app',
} as const;

export const LOCALE_CONFIG = {
  defaultLocale: 'es',
  supportedLocales: ['es', 'en'] as const,
  fallbackLocale: 'es',
} as const;

export const SCROLL_THRESHOLDS = {
  heroEnd: 100,
  stickyCtaVisible: 500,
  navbarBlur: 30,
} as const;

export const ANIMATION_DURATIONS = {
  fast: 200,
  normal: 300,
  slow: 500,
  loading: 1500,
} as const;

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  lg: 1024,
  xl: 1280,
} as const;