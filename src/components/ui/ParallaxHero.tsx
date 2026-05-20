import { useTranslation } from 'react-i18next';
import { Smartphone, ArrowRight, Play, Users, FileText, Globe, Award } from 'lucide-react';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useParticles } from '../../hooks/useParticles';
import { useMousePosition } from '../../hooks/useMousePosition';
import { GlowingOrbs } from '../ui/GlowingOrbs';
import { ParticleField } from '../ui/ParticleField';
import { MouseGlow } from '../ui/MouseGlow';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

export function ParallaxHero() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const particles = useParticles(20, { minOpacity: 0.2, maxOpacity: 0.6, minSize: 2, maxSize: 4, minDuration: 12, maxDuration: 20 });
  const mousePos = useMousePosition(sectionRef);
  const { scrollToSection } = useSmoothScroll();

  const stats = [
    { icon: Users, value: '+100K', label: t('stats.clients', 'Usuarios activos') },
    { icon: FileText, value: '1M+', label: t('stats.invoices', 'Facturas emitidas') },
    { icon: Globe, value: '50K+', label: t('stats.downloads', 'Descargas') },
    { icon: Award, value: '4.9', label: t('stats.rating', 'Rating en tiendas') },
  ];

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">
      <GlowingOrbs
        orbs={[
          { top: '-20px', right: '-20px', width: '500px', height: '500px', color: 'primary', opacity: 0.4, blur: '80px' },
          { top: '-10px', left: '-128px', width: '400px', height: '400px', color: 'accent', opacity: 0.35, blur: '60px' },
          { top: '33%', right: '40px', width: '250px', height: '250px', color: 'primary', opacity: 0.3, blur: '50px' },
          { bottom: '80px', left: '-80px', width: '350px', height: '350px', color: 'accent', opacity: 0.25, blur: '70px' },
          { bottom: '-40px', right: '25%', width: '200px', height: '200px', color: 'primary', opacity: 0.2, blur: '40px' },
        ]}
        overlay
        overlayColor="rgba(5,5,5,0.6)"
      />
      <div className="absolute inset-0 opacity-[0.03]"
           style={{ backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <ParticleField particles={particles} animation="float" />
      <MouseGlow mousePos={mousePos} size="400px" blur="60px" opacity={0.1} transition="left 0.4s ease-out, top 0.4s ease-out" />

      <div className="relative z-10 w-full h-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto h-full flex items-center py-24 lg:py-32">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left lg:col-span-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 card-dark rounded-full mb-8 animate-fade-in-up"
                   style={{ animationDelay: '100ms' }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
                </span>
                <span className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase">
                  {t('hero.tagline') || 'Nueva versión con IA'}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.0] font-display mb-8 animate-fade-in-up"
                   style={{ animationDelay: '200ms' }}>
                <span className="block text-white">{t('hero.brandPrefix')}</span>
                <span className="text-[var(--color-accent)]">
                  Smart Finance
                </span>
              </h1>

              <p className="text-xl md:text-2xl lg:text-3xl text-white/60 max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed animate-fade-in-up"
                   style={{ animationDelay: '300ms' }}>
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
                   style={{ animationDelay: '400ms' }}>
                <button
                  onClick={() => scrollToSection('#download')}
                  className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-base font-semibold text-[var(--color-background)] hover:shadow-2xl hover:scale-105 transition-all"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>{t('hero.cta')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('#features')}
                  className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl border border-white/20 text-base font-medium text-white/80 hover:bg-white/5 hover:border-white/30 hover:text-white transition-all"
                >
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </span>
                  <span>{t('hero.ctaSecondary')}</span>
                </button>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-5 lg:col-span-2">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`p-6 rounded-2xl card-dark border border-[var(--color-border)] ${index === 0 ? 'col-span-2' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-white/50">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
