import type { Particle } from '../../hooks/useParticles';

interface ParticleFieldProps {
  particles: Particle[];
  color?: string;
  animation?: 'float' | 'blink';
}

export function ParticleField({ particles, color = 'var(--color-accent)', animation = 'blink' }: ParticleFieldProps) {
  const animName = animation === 'float' ? 'particleFloat' : 'particleBlink';
  return (
    <div className="absolute inset-0 z-5 pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            opacity: p.opacity,
            filter: 'blur(0.5px)',
            transform: 'translateZ(0)',
            animation: `${animName} ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
