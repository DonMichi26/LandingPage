import { useTranslation } from 'react-i18next';
import { Smartphone, ArrowRight, Play, TrendingUp, Shield, Zap } from 'lucide-react';

export function ParallaxHero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative min-h-[750px] md:min-h-[850px] flex items-center overflow-hidden bg-[#050505]">
      {/* Radial gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ background: 'radial-gradient(circle at 20% 20%, var(--color-primary) 0%, transparent 40%), radial-gradient(circle at 80% 80%, var(--color-accent) 0%, transparent 40%)' }} 
        />
        <div className="absolute inset-0 bg-[#050505]/80" />
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
        />
      </div>

      <div className="relative z-10 w-full pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 card-dark rounded-full mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
                </span>
                <span className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase">
                  {t('hero.tagline') || 'Nueva versión con IA'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="block text-white">{t('hero.title').split(' ')[0]}</span>
                <span className="text-gradient">
                  Smart Finance
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/60 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="btn-primary group flex items-center justify-center gap-2.5">
                  <Smartphone className="w-5 h-5" />
                  {t('hero.cta')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-secondary group flex items-center justify-center gap-2.5">
                  <div className="w-8 h-8 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-[#050505] group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                  {t('hero.ctaSecondary')}
                </button>
              </div>
              
              <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm">
                <div className="flex items-center gap-2.5 text-white/60">
                  <div className="w-9 h-9 card-dark rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <span className="font-medium">4.9 <span className="text-white/40">App Store</span></span>
                </div>
                <div className="flex items-center gap-2.5 text-white/60">
                  <div className="w-9 h-9 card-dark rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <span className="font-medium">SUNAT <span className="text-white/40">Ready</span></span>
                </div>
                <div className="flex items-center gap-2.5 text-white/60">
                  <div className="w-9 h-9 card-dark rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <span className="font-medium"><span className="text-white/40">+100K</span> Usuarios</span>
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-[var(--color-accent)]/20 blur-[80px] rounded-full" />
                <div className="relative z-10 w-64 md:w-72 lg:w-80 aspect-[9/19] rounded-[3rem] p-3" 
                     style={{ boxShadow: '0 0 80px -20px var(--color-accent)/30' }}>
                  <div className="w-full h-full bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden border border-[var(--color-border)]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-[#0a0a0a] rounded-b-2xl z-30" />
                    
                    <div className="w-full h-full p-5 pt-14 flex flex-col gap-4">
                      <div className="h-32 rounded-2xl p-4 flex flex-col justify-between" 
                           style={{ background: 'radial-gradient(circle at 30% 30%, var(--color-primary) 0%, #1a1a2e 100%)' }}>
                        <div className="text-xs text-white/60 font-medium">Balance Disponible</div>
                        <div className="text-3xl font-bold text-white">S/ 12,450.00</div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="flex-1 h-20 card-dark rounded-xl flex flex-col items-center justify-center gap-1.5">
                          <div className="w-7 h-7 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)]">
                            <TrendingUp className="w-4 h-4" />
                          </div>
                          <span className="text-xs text-white/40">Ingresos</span>
                        </div>
                        <div className="flex-1 h-20 card-dark rounded-xl flex flex-col items-center justify-center gap-1.5">
                          <div className="w-7 h-7 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)]">
                            <ArrowRight className="w-4 h-4 rotate-90" />
                          </div>
                          <span className="text-xs text-white/40">Gastos</span>
                        </div>
                      </div>

                      <div className="flex-1 card-dark rounded-xl p-3.5">
                        <div className="h-1.5 w-16 bg-[var(--color-border)] rounded-full mb-3" />
                        <div className="space-y-3">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-lg bg-[var(--color-surface-elevated)]" />
                              <div className="flex-1 space-y-1.5">
                                <div className="h-1.5 w-full bg-[var(--color-border)] rounded-full" />
                                <div className="h-1.5 w-2/3 bg-[var(--color-border)]/50 rounded-full" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="h-12 rounded-xl flex items-center justify-center" 
                           style={{ background: 'radial-gradient(circle at 30% 30%, var(--color-accent) 0%, var(--color-primary) 100%)' }}>
                        <span className="text-[#050505] font-semibold text-sm">Nuevo Pago</span>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[var(--color-border)] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}