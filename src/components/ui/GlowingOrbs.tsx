export interface OrbConfig {
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  width: string;
  height: string;
  color: 'primary' | 'accent';
  opacity: number;
  blur: string;
}

function Orb({ top, right, left, bottom, width, height, color, opacity, blur }: OrbConfig) {
  return (
    <div
      className="absolute rounded-full"
      style={{
        top, right, left, bottom,
        width, height, opacity,
        background: `radial-gradient(circle, var(--color-${color}) 0%, transparent 70%)`,
        filter: `blur(${blur})`,
      }}
    />
  );
}

interface GlowingOrbsProps {
  orbs: OrbConfig[];
  overlay?: boolean;
  overlayColor?: string;
}

export function GlowingOrbs({ orbs, overlay, overlayColor }: GlowingOrbsProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => <Orb key={i} {...orb} />)}
      {overlay && (
        <div className="absolute inset-0" style={{ background: overlayColor || 'transparent' }} />
      )}
    </div>
  );
}
