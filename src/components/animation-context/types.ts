export type AnimationType = 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'none';

export interface AnimationConfig {
  type: AnimationType;
  duration?: number;
  delay?: number;
}

export interface AnimationContextValue {
  getVariants: (config: AnimationConfig) => {
    hidden: Record<string, unknown>;
    visible: Record<string, unknown>;
  };
}