import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Monitor, MapPin, Clock, Camera, Smartphone, CheckCircle, X } from 'lucide-react';
import { useParticles } from '../../hooks/useParticles';
import { useMousePosition } from '../../hooks/useMousePosition';
import { GlowingOrbs } from '../ui/GlowingOrbs';
import { ParticleField } from '../ui/ParticleField';
import { MouseGlow } from '../ui/MouseGlow';

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
  const sectionRef = useRef<HTMLElement>(null);
  const particles = useParticles(80, { minOpacity: 0.15, maxOpacity: 0.4, minSize: 1, maxSize: 3 });
  const mousePos = useMousePosition(sectionRef);

  return (
    <section ref={sectionRef} id="comparison" className="bg-black relative overflow-hidden py-16 md:py-20">
      <GlowingOrbs
        orbs={[
          { top: '-20px', right: '-20px', width: '500px', height: '500px', color: 'primary', opacity: 0.35, blur: '80px' },
          { top: '-10px', left: '-128px', width: '400px', height: '400px', color: 'accent', opacity: 0.3, blur: '60px' },
          { bottom: '80px', left: '-80px', width: '350px', height: '350px', color: 'accent', opacity: 0.2, blur: '70px' },
          { bottom: '-40px', right: '25%', width: '200px', height: '200px', color: 'primary', opacity: 0.15, blur: '40px' },
        ]}
        overlay
        overlayColor="rgba(0,0,0,0.6)"
      />
      <div className="absolute inset-0 opacity-[0.03]"
           style={{ backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <ParticleField particles={particles} />
      <MouseGlow mousePos={mousePos} opacity={0.12} />

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
