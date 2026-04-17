import { useTranslation } from 'react-i18next';
import { Wallet, PieChart, TrendingUp, DollarSign, CreditCard, BarChart3, Smartphone, ArrowRight } from 'lucide-react';
import { useParallax } from '../../hooks/useParallax';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function ParallaxHero() {
  const { t } = useTranslation();
  const scrollY = useParallax();
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const heroHeight = 600;
  const isInHero = scrollY < heroHeight;

  const getTransform = (speed: number) => {
    if (!isInHero) return `translateY(${heroHeight * speed}px)`;
    return `translateY(${scrollY * speed}px)`;
  };

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-[700px] md:min-h-[850px] overflow-hidden bg-gradient-to-br from-[#0c1222] via-[#0f2744] to-[#0c1222]"
    >
      <motion.div 
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2300d4ff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"
        style={{ scale: backgroundScale }}
      />

      <div 
        className="absolute inset-0 opacity-40"
        style={{ transform: getTransform(0.05) }}
      >
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0066ff] via-[#00d4ff] to-transparent rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#00d4ff] via-[#38bdf8] to-transparent rounded-full blur-[100px] opacity-25" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#0066ff]/20 to-[#00d4ff]/20 rounded-full blur-[150px]" />
      </div>

      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: getTransform(0.1) }}
      >
        <div className="absolute top-20 left-[5%] w-40 h-40 border border-[#00d4ff]/20 rounded-full" />
        <div className="absolute top-40 right-[10%] w-32 h-32 border border-[#38bdf8]/15 rounded-full" />
        <div className="absolute bottom-40 left-[15%] w-48 h-48 border border-[#0066ff]/10 rounded-full" />
      </div>

      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: getTransform(0.25) }}
      >
        <div 
          className="absolute top-32 left-[8%] text-[#00d4ff] opacity-40 animate-float"
          style={{ animationDelay: '0s' }}
        >
          <Wallet size={56} strokeWidth={1.5} />
        </div>
        <div 
          className="absolute top-48 right-[12%] text-[#38bdf8] opacity-35 animate-float"
          style={{ animationDelay: '1s' }}
        >
          <PieChart size={44} strokeWidth={1.5} />
        </div>
        <div 
          className="absolute top-[25%] left-[30%] text-[#0066ff] opacity-30 animate-float"
          style={{ animationDelay: '2s' }}
        >
          <TrendingUp size={40} strokeWidth={1.5} />
        </div>
        <div 
          className="absolute bottom-48 right-[20%] text-[#00d4ff] opacity-35 animate-float"
          style={{ animationDelay: '0.5s' }}
        >
          <DollarSign size={48} strokeWidth={1.5} />
        </div>
        <div 
          className="absolute bottom-32 left-[8%] text-[#38bdf8] opacity-25 animate-float"
          style={{ animationDelay: '1.5s' }}
        >
          <CreditCard size={36} strokeWidth={1.5} />
        </div>
      </div>

      <motion.div 
        className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-28 px-4"
        style={{ opacity: contentOpacity }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse" />
                <span className="text-[#00d4ff] text-sm font-medium">Nueva versión con IA</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight mb-6">
                {t('hero.title')}
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#38bdf8]">
                  Smart Finance
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#94a3b8] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:from-[#0052cc] hover:to-[#00b8e6] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-[#00d4ff]/25 hover:-translate-y-1">
                  <Smartphone className="w-5 h-5" />
                  {t('hero.cta')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center justify-center gap-3 border-2 border-[#38bdf8]/30 text-[#38bdf8] hover:bg-[#38bdf8]/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:-translate-y-1">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                  {t('hero.ctaSecondary')}
                </button>
              </div>
              
              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-[#94a3b8]">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#00d4ff]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#00d4ff] text-xs">★</span>
                  </div>
                  <span>4.9 App Store</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#00d4ff]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#00d4ff] text-xs">✓</span>
                  </div>
                  <span>SUNAT Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#00d4ff]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#00d4ff] text-xs">🔒</span>
                  </div>
                  <span>100% Seguro</span>
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <div className="relative animate-pulse-glow">
                <div className="w-64 md:w-72 lg:w-80 aspect-[9/19] bg-gradient-to-br from-[#1a2744] to-[#0c1222] rounded-[3rem] p-3 shadow-2xl shadow-[#00d4ff]/20 border border-[#38bdf8]/20">
                  <div className="w-full h-full bg-[#0c1222] rounded-[2.5rem] overflow-hidden relative">
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#1a2744] to-transparent z-10" />
                    <div className="w-full h-full p-4 pt-12 flex flex-col gap-3">
                      <div className="h-20 bg-gradient-to-r from-[#0066ff]/30 to-[#00d4ff]/30 rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-10 h-10 text-[#00d4ff]" />
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 h-16 bg-[#1a2744] rounded-lg" />
                        <div className="flex-1 h-16 bg-[#1a2744] rounded-lg" />
                      </div>
                      <div className="flex-1 bg-[#1a2744] rounded-lg" />
                      <div className="h-12 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] rounded-lg" />
                    </div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#94a3b8]/30 rounded-full" />
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -right-4 md:right-4 w-24 md:w-28 aspect-[9/19] bg-gradient-to-br from-[#1a2744] to-[#0c1222] rounded-[2rem] p-2 shadow-lg border border-[#00d4ff]/20 hidden md:block">
                  <div className="w-full h-full bg-[#0c1222] rounded-[1.8rem] overflow-hidden">
                    <div className="w-full h-full p-2 pt-6 flex flex-col gap-1">
                      <div className="h-8 bg-[#0066ff]/30 rounded-md" />
                      <div className="h-6 bg-[#1a2744] rounded-md" />
                      <div className="h-6 bg-[#1a2744] rounded-md" />
                      <div className="h-6 bg-[#1a2744] rounded-md" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: getTransform(0.4) }}
      >
        <div className="absolute top-40 right-[8%] w-2 h-2 bg-[#00d4ff] rounded-full opacity-50 animate-pulse" />
        <div className="absolute top-56 left-[12%] w-3 h-3 bg-[#38bdf8] rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="absolute top-72 right-[18%] w-2 h-2 bg-[#0066ff] rounded-full opacity-45 animate-pulse" style={{ animationDelay: '0.6s' }} />
        <div className="absolute bottom-56 left-[6%] w-2 h-2 bg-[#00d4ff] rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.9s' }} />
        <div className="absolute bottom-72 right-[10%] w-3 h-3 bg-[#38bdf8] rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1.2s' }} />
      </div>
    </section>
  );
}