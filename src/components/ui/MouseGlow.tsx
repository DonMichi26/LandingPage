interface MouseGlowProps {
  mousePos: { x: number; y: number };
  size?: string;
  color?: string;
  blur?: string;
  opacity?: number;
  transition?: string;
}

export function MouseGlow({
  mousePos,
  size = '300px',
  color = 'var(--color-accent)',
  blur = '40px',
  opacity = 0.1,
  transition = 'left 0.3s ease-out, top 0.3s ease-out',
}: MouseGlowProps) {
  return (
    <div
      className="absolute rounded-full pointer-events-none z-10"
      style={{
        width: size,
        height: size,
        left: `${mousePos.x}%`,
        top: `${mousePos.y}%`,
        transform: 'translate(-50%, -50%)',
        background: `radial-gradient(circle, ${color} 0%, transparent 60%)`,
        filter: `blur(${blur})`,
        opacity,
        transition,
      }}
    />
  );
}
