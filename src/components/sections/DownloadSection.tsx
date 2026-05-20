import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface MockupCardProps {
  title: string;
  subtitle: string;
  icon: React.ElementType;
}

function MockupCard({ title, subtitle, icon: Icon }: MockupCardProps) {
  return (
    <div className="w-44 p-4 card-dark rounded-2xl shadow-xl">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)]">
          <Icon className="w-4 h-4" strokeWidth={2} />
        </div>
        <span className="text-white text-sm font-medium">{title}</span>
      </div>
      <div className="text-xs text-white/40">{subtitle}</div>
    </div>
  );
}

export function DownloadSection() {
  const { t } = useTranslation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Inicializar partículas en el estado inicial (elimina el error de lint set-state-in-effect)
  const [particles] = useState<Particle[]>(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 12; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 2,
        duration: Math.random() * 8 + 12,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.4 + 0.15,
      });
    }
    return newParticles;
  });

  // Throttling para mousemove (mejora rendimiento)
  useEffect(() => {
    let rafId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          setMousePos({ x, y });
        }
      });
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="download" 
      className="relative py-20 md:py-32 overflow-hidden bg-[var(--color-background)]"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full" 
             style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', filter: 'blur(100px)', opacity: 0.35 }} 
        />
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full" 
             style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.3 }} 
        />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full" 
             style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', filter: 'blur(60px)', opacity: 0.25 }} 
        />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full" 
             style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)', filter: 'blur(90px)', opacity: 0.28 }} 
        />
        <div className="absolute bottom-1/4 left-1/2 w-[350px] h-[350px] rounded-full" 
             style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', filter: 'blur(70px)', opacity: 0.22 }} 
        />
        <div className="absolute top-3/4 right-0 w-[250px] h-[250px] rounded-full" 
             style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)', filter: 'blur(50px)', opacity: 0.2 }} 
        />
        
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{ backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
        />
        
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
        
        <div 
          className="absolute w-[400px] h-[400px] rounded-full pointer-events-none z-10"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 60%)',
            filter: 'blur(60px)',
            opacity: 0.1,
            transition: 'left 0.4s ease-out, top 0.4s ease-out',
          }}
        />
      </div>

      <motion.div 
        style={{ y }}
        className="max-w-6xl mx-auto px-4 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-4 py-2 card-dark rounded-full mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
              </span>
              <span className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase">Disponible ahora</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] font-display mb-6"
            >
              <span className="block text-white">{t('download.title')}</span>
              <span className="text-[var(--color-accent)]">{t('download.titleSuffix')}</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-white/60 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {t('download.subtitle')}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descargar en App Store"
                className="group flex items-center justify-center gap-3 bg-white hover:bg-white/90 text-[#050505] px-5 py-3 rounded-xl font-semibold transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-[#050505]/60">Descargar en</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </a>
              
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descargar en Play Store"
                className="group flex items-center justify-center gap-3 bg-white hover:bg-white/90 text-[#050505] px-5 py-3 rounded-xl font-semibold transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-[#050505]/60">Disponible en</div>
                  <div className="text-sm font-bold">Play Store</div>
                </div>
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex items-center gap-2.5 text-white/60 text-sm">
                <div className="w-8 h-8 card-dark rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span>{t('download.free')}</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/60 text-sm">
                <div className="w-8 h-8 card-dark rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span>{t('download.noCreditCard')}</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative floating-phone">
              <div className="absolute inset-0 bg-[var(--color-accent)]/20 blur-[80px] rounded-full" />
              <div className="relative z-10 w-72 md:w-80 lg:w-96 aspect-[9/19] rounded-[3rem] p-3" 
                   style={{ boxShadow: '0 0 80px -20px var(--color-accent)/30' }}>
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden border border-[var(--color-border)]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-[var(--color-background)] rounded-b-2xl z-30" />
                  
                  <div className="w-full h-full p-5 pt-14 flex flex-col gap-4">
                    <div className="h-32 rounded-2xl p-4 flex flex-col justify-between" 
                         style={{ background: 'radial-gradient(circle at 30% 30%, var(--color-primary) 0%, var(--color-surface) 100%)' }}>
                      <div className="text-xs text-white/60 font-medium">{t('download.mockup.balance')}</div>
                      <div className="text-3xl font-bold text-white">S/ 0.00</div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-1 h-20 card-dark rounded-xl flex flex-col items-center justify-center gap-1.5">
                        <div className="w-7 h-7 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)]">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                        </div>
                        <span className="text-xs text-white/40">{t('download.mockup.income')}</span>
                      </div>
                      <div className="flex-1 h-20 card-dark rounded-xl flex flex-col items-center justify-center gap-1.5">
                        <div className="w-7 h-7 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)]">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                        <span className="text-xs text-white/40">{t('download.mockup.expenses')}</span>
                      </div>
                    </div>

                    <div className="flex-1 card-dark rounded-xl p-3.5">
                      <div className="h-1.5 w-16 bg-[var(--color-border)] rounded-full mb-3" />
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg" style={{ background: 'var(--color-surface-elevated)' }} />
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
                      <span className="text-[#050505] font-semibold text-sm">{t('download.mockup.newIncome')}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[var(--color-border)] rounded-full" />
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -right-4 md:right-0 top-1/4 hidden md:block"
            >
              <MockupCard 
                title={t('download.mockup.invoiceCreated')}
                subtitle={t('download.mockup.sunatAccepted')}
                icon={({ className, strokeWidth }) => (
                  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -left-4 md:left-0 bottom-1/4 hidden md:block"
            >
              <MockupCard 
                title={t('download.mockup.amountAdded')}
                subtitle={t('download.mockup.incomeRegistered')}
                icon={({ className, strokeWidth }) => (
                  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}