import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Monitor, MapPin, Clock, Camera, Smartphone, CheckCircle, X } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const comparisonRows = [
  { key: 'device', icon: Monitor },
  { key: 'location', icon: MapPin },
  { key: 'time', icon: Clock },
  { key: 'expense', icon: Camera },
  { key: 'invoice', icon: Smartphone },
  { key: 'sunat', icon: CheckCircle },
];

export function ComparisonSection() {
  const { t } = useTranslation();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 80; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 6 + 4,
        delay: Math.random() * 4,
        opacity: Math.random() * 0.4 + 0.15,
      });
    }
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    const section = sectionRef.current;
    if (section) section.addEventListener('mousemove', handleMouseMove);
    return () => { if (section) section.removeEventListener('mousemove', handleMouseMove); };
  }, []);

  return (
    <section ref={sectionRef} id="comparison" className="bg-black relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full"
             style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.35 }}
        />
        <div className="absolute -top-10 -left-32 w-[400px] h-[400px] rounded-full"
             style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)', filter: 'blur(60px)', opacity: 0.3 }}
        />
        <div className="absolute bottom-20 -left-20 w-[350px] h-[350px] rounded-full"
             style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)', filter: 'blur(70px)', opacity: 0.2 }}
        />
        <div className="absolute -bottom-10 right-1/4 w-[200px] h-[200px] rounded-full"
             style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', filter: 'blur(40px)', opacity: 0.15 }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 opacity-[0.03]"
             style={{ backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="absolute inset-0 z-5">
          {particles.map((particle) => (
            <div key={particle.id} className="absolute rounded-full" style={{
              left: `${particle.x}%`, top: `${particle.y}%`,
              width: particle.size, height: particle.size,
              background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
              opacity: particle.opacity, filter: 'blur(1px)',
              transform: 'translateZ(0)',
              animation: `particleBlink ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }} />
          ))}
        </div>
        <div className="absolute w-[300px] h-[300px] rounded-full pointer-events-none z-10" style={{
          left: `${mousePos.x}%`, top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 60%)',
          filter: 'blur(40px)', opacity: 0.12,
          transition: 'left 0.3s ease-out, top 0.3s ease-out',
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display mb-4">
            {t('comparison.title')}
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">
            {t('comparison.subtitle')}
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-4 px-5 text-left text-[var(--color-text-muted)] text-xs font-semibold uppercase tracking-wider"></th>
                <th className="py-4 px-5 text-center text-[var(--color-text-muted)] text-xs font-semibold uppercase tracking-wider">
                  <span className="inline-flex items-center gap-2">
                    <X className="w-3.5 h-3.5 text-white/30" />
                    {t('comparison.traditional')}
                  </span>
                </th>
                <th className="py-4 px-5 text-center text-xs font-semibold uppercase tracking-wider bg-[var(--color-accent)]/10">
                  <span className="inline-flex items-center gap-2 text-[var(--color-accent)]">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {t('comparison.ourApp')}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => {
                const Icon = row.icon;
                return (
                  <tr key={row.key} className="border-t border-[var(--color-border)] hover:bg-[var(--color-surface-elevated)]/30 transition-colors">
                    <td className="py-3.5 px-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-[var(--color-accent)]" />
                        </div>
                        <span className="text-white font-medium text-sm">
                          {t(`comparison.rows.${row.key}.label`)}
                        </span>
                      </div>
                    </td>
                    <td className="py-3.5 px-5 text-center text-[var(--color-text-muted)] text-sm">
                      {t(`comparison.rows.${row.key}.traditional`)}
                    </td>
                    <td className="py-3.5 px-5 text-center bg-[var(--color-accent)]/5 text-sm">
                      <span className="inline-flex items-center gap-1.5 text-[var(--color-accent)] font-medium">
                        <CheckCircle className="w-3.5 h-3.5" />
                        {t(`comparison.rows.${row.key}.app`)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}