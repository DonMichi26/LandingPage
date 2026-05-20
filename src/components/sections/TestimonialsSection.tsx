import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Quote } from 'lucide-react';
import { useParticles } from '../../hooks/useParticles';
import { useMousePosition } from '../../hooks/useMousePosition';
import { GlowingOrbs } from '../ui/GlowingOrbs';
import { ParticleField } from '../ui/ParticleField';
import { MouseGlow } from '../ui/MouseGlow';

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  quote: string;
}

function AvatarInitial({ name, id }: { name: string; id: number }) {
  const colors = [
    { from: 'var(--color-primary)', to: 'var(--color-accent)' },
    { from: '#6366f1', to: '#8b5cf6' },
    { from: '#06b6d4', to: '#3b82f6' },
  ];
  const c = colors[id % colors.length];
  return (
    <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`avatar-grad-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.from} />
          <stop offset="100%" stopColor={c.to} />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="24" fill={`url(#avatar-grad-${id})`} />
      <text x="24" y="24" textAnchor="middle" dominantBaseline="central"
            fill="white" fontSize="20" fontWeight="700" fontFamily="system-ui">
        {name.charAt(0)}
      </text>
    </svg>
  );
}

export function TestimonialsSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const particles = useParticles(30, { minOpacity: 0.1, maxOpacity: 0.4, minSize: 1, maxSize: 3 });
  const mousePos = useMousePosition(sectionRef);

  const testimonials: TestimonialItem[] = [
    { id: 1, name: t('testimonials.items.1.name'), role: t('testimonials.items.1.role'), quote: t('testimonials.items.1.quote') },
    { id: 2, name: t('testimonials.items.2.name'), role: t('testimonials.items.2.role'), quote: t('testimonials.items.2.quote') },
    { id: 3, name: t('testimonials.items.3.name'), role: t('testimonials.items.3.role'), quote: t('testimonials.items.3.quote') },
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 md:py-28 bg-[var(--color-bg-light)] relative overflow-hidden">
      <GlowingOrbs
        orbs={[
          { top: '-20px', right: '-20px', width: '500px', height: '500px', color: 'primary', opacity: 0.15, blur: '80px' },
          { top: '-10px', left: '-128px', width: '400px', height: '400px', color: 'accent', opacity: 0.12, blur: '60px' },
          { top: '33%', right: '40px', width: '250px', height: '250px', color: 'primary', opacity: 0.1, blur: '50px' },
          { bottom: '80px', left: '-80px', width: '350px', height: '350px', color: 'accent', opacity: 0.1, blur: '70px' },
          { bottom: '-40px', right: '25%', width: '200px', height: '200px', color: 'primary', opacity: 0.08, blur: '40px' },
        ]}
        overlay
        overlayColor="rgba(250,250,252,0.9)"
      />
      <ParticleField particles={particles} />
      <MouseGlow mousePos={mousePos} size="300px" blur="40px" opacity={0.1} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-[var(--color-text-dark)] mb-4 animate-fade-in-up">
            {t('testimonials.title')}
          </h2>
          <p className="text-[var(--color-text-secondary)] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl border border-[var(--color-border-light)] hover:border-[var(--color-accent)]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--color-accent)]/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-white" />
              </div>

              <div className="p-6 pt-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-border-light)] flex items-center justify-center overflow-hidden">
                      <AvatarInitial name={item.name} id={item.id} />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--color-text-dark)] text-lg">{item.name}</div>
                    <div className="text-sm text-[var(--color-text-secondary)]">{item.role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-primary)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
