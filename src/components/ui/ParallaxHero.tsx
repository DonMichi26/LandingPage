import { useTranslation } from 'react-i18next';
import { Smartphone, ArrowRight, Play, TrendingUp, Shield, Zap } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function ParallaxHero() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setMounted(true);
    
    const newParticles: Particle[] = [];
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 8 + 12,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x, y });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">
      {/* Radial gradient background with glowing orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Large orb - top right */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full" 
             style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.4 }} 
        />
        {/* Medium orb - top left */}
        <div className="absolute -top-10 -left-32 w-[400px] h-[400px] rounded-full" 
             style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)', filter: 'blur(60px)', opacity: 0.35 }} 
        />
        {/* Small orb - center right */}
        <div className="absolute top-1/3 right-10 w-[250px] h-[250px] rounded-full" 
             style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', filter: 'blur(50px)', opacity: 0.3 }} 
        />
        {/* Medium orb - bottom left */}
        <div className="absolute bottom-20 -left-20 w-[350px] h-[350px] rounded-full" 
             style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)', filter: 'blur(70px)', opacity: 0.25 }} 
        />
        {/* Tiny orb - bottom right */}
        <div className="absolute -bottom-10 right-1/4 w-[200px] h-[200px] rounded-full" 
             style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', filter: 'blur(40px)', opacity: 0.2 }} 
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-[#050505]/60" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
                background: `radial-gradient(circle, var(--color-accent) 0%, transparent 70%)`,
                opacity: particle.opacity,
                filter: 'blur(1px)',
                transform: 'translateZ(0)',
                animation: `particleFloat ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
        
        {/* Glow spot that follows mouse */}
        <div 
          className="absolute w-[300px] h-[300px] rounded-full pointer-events-none z-10"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 60%)',
            filter: 'blur(40px)',
            opacity: 0.15,
            transition: 'left 0.3s ease-out, top 0.3s ease-out',
          }}
        />
      </div>

      <div className="relative z-10 w-full h-full px-6">
        <div className="max-w-7xl mx-auto h-full flex items-center py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              {/* Tagline badge - staggered entrance */}
              <div className={`inline-flex items-center gap-2.5 px-4 py-2 card-dark rounded-full mb-8 transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                   style={{ transitionDelay: mounted ? '100ms' : '0ms' }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
                </span>
                <span className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase">
                  {t('hero.tagline') || 'Nueva versión con IA'}
                </span>
              </div>
              
              {/* Title - staggered entrance */}
              <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6 transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} 
                  style={{ fontFamily: 'var(--font-display)', transitionDelay: mounted ? '200ms' : '0ms' }}>
                <span className="block text-white">{t('hero.title').split(' ')[0]}</span>
                <span className="text-gradient">
                  Smart Finance
                </span>
              </h1>
              
              {/* Subtitle - staggered entrance */}
              <p className={`text-lg md:text-xl text-white/60 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                 style={{ transitionDelay: mounted ? '300ms' : '0ms' }}>
                {t('hero.subtitle')}
              </p>
              
              {/* CTA buttons - staggered entrance */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                   style={{ transitionDelay: mounted ? '400ms' : '0ms' }}>
                <button className="btn-primary group flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-150 ease-out">
                  <Smartphone className="w-5 h-5" />
                  {t('hero.cta')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                </button>
                <button className="btn-secondary group flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-150 ease-out">
                  <div className="w-8 h-8 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-[#050505] group-hover:scale-110 transition-transform duration-150">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                  {t('hero.ctaSecondary')}
                </button>
              </div>
              
              {/* Stats - staggered entrance */}
              <div className={`mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                   style={{ transitionDelay: mounted ? '500ms' : '0ms' }}>
                <div className="flex items-center gap-2.5 text-white/60 hover:text-white/80 transition-colors duration-150">
                  <div className="w-9 h-9 card-dark rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <span className="font-medium">4.9 <span className="text-white/40">App Store</span></span>
                </div>
                <div className="flex items-center gap-2.5 text-white/60 hover:text-white/80 transition-colors duration-150">
                  <div className="w-9 h-9 card-dark rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <span className="font-medium">SUNAT <span className="text-white/40">Ready</span></span>
                </div>
                <div className="flex items-center gap-2.5 text-white/60 hover:text-white/80 transition-colors duration-150">
                  <div className="w-9 h-9 card-dark rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <span className="font-medium"><span className="text-white/40">+100K</span> Usuarios</span>
                </div>
              </div>
            </div>
            
            {/* Phone mockup with float animation */}
            <div className={`relative flex justify-center lg:justify-end transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                 style={{ transitionDelay: mounted ? '300ms' : '0ms' }}>
              <div className="relative floating-phone">
                <div className="absolute inset-0 bg-[var(--color-accent)]/20 blur-[80px] rounded-full" />
                <div className="relative z-10 w-72 md:w-80 lg:w-96 aspect-[9/19] rounded-[3rem] p-3" 
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