import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FileText, BarChart3, CreditCard, Shield, PieChart, Smartphone,
  ScanLine, Wallet, Target, TrendingUp, ArrowUpRight, PiggyBank,
} from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function BentoCard({ children, className = '', style }: {
  children: React.ReactNode; className?: string; style?: React.CSSProperties;
}) {
  return (
    <div className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:z-10 hover:shadow-xl ${className}`} style={style}>
      {children}
    </div>
  );
}

function BentoDark({ icon: Icon, title, desc, gradient, colRow }: {
  icon: React.ElementType; title: string; desc: string; gradient: string; colRow: string;
}) {
  return (
    <BentoCard className={`${colRow} group`}>
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 transition-all duration-500 group-hover:scale-110" style={{ background: gradient }} />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12) 0%, transparent 60%)' }} />
      <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
          <Icon className="w-4 h-4 md:w-5 md:h-5 text-white transition-all duration-300 group-hover:scale-110" />
        </div>
        <div>
          <h3 className="text-sm md:text-base font-bold text-white mb-0.5">{title}</h3>
          <p className="text-white/60 text-xs md:text-sm transition-colors duration-300 group-hover:text-white/80">{desc}</p>
        </div>
      </div>
    </BentoCard>
  );
}

function BentoLight({ icon: Icon, title, desc, colRow }: {
  icon: React.ElementType; title: string; desc?: string; colRow: string;
}) {
  return (
    <BentoCard className={`${colRow} bg-white group border border-[oklch(82%_0.04_230)] hover:border-[var(--color-primary)]/40 hover:shadow-lg`}>
      <div className="p-3 flex flex-col justify-between h-full">
        <div className="w-8 h-8 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-1 transition-all duration-300 group-hover:bg-[var(--color-primary)]/20 group-hover:scale-110">
          <Icon className="w-4 h-4 text-[var(--color-primary)] transition-all duration-300 group-hover:scale-110" />
        </div>
        <div>
          <h3 className="text-xs md:text-sm font-semibold text-[var(--color-text-dark)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">{title}</h3>
          {desc && <p className="text-[10px] md:text-xs mt-0.5" style={{ color: 'oklch(38% 0.04 240)' }}>{desc}</p>}
        </div>
      </div>
    </BentoCard>
  );
}

export function AppPreviewSection() {
  const { t } = useTranslation();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 60; i++) {
      newParticles.push({
        id: i, x: Math.random() * 100, y: Math.random() * 100,
        size: Math.random() * 3 + 1, duration: Math.random() * 6 + 4,
        delay: Math.random() * 4, opacity: Math.random() * 0.3 + 0.08,
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
    <section ref={sectionRef} id="app-preview" className="relative overflow-hidden py-16 md:py-20" style={{ background: 'oklch(94% 0.015 250)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full"
             style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.12 }}
        />
        <div className="absolute -top-10 -left-32 w-[350px] h-[350px] rounded-full"
             style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)', filter: 'blur(60px)', opacity: 0.1 }}
        />
        <div className="absolute bottom-20 -left-20 w-[300px] h-[300px] rounded-full"
             style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', filter: 'blur(70px)', opacity: 0.08 }}
        />
        <div className="absolute -bottom-10 right-1/4 w-[200px] h-[200px] rounded-full"
             style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)', filter: 'blur(40px)', opacity: 0.06 }}
        />
        <div className="absolute inset-0 opacity-[0.02]"
             style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="absolute inset-0 z-5">
          {particles.map((p) => (
            <div key={p.id} className="absolute rounded-full" style={{
              left: `${p.x}%`, top: `${p.y}%`,
              width: p.size, height: p.size,
              background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
              opacity: p.opacity, filter: 'blur(0.5px)',
              animation: `particleBlink ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }} />
          ))}
        </div>
        <div className="absolute w-[250px] h-[250px] rounded-full pointer-events-none z-10" style={{
          left: `${mousePos.x}%`, top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 60%)',
          filter: 'blur(50px)', opacity: 0.06,
          transition: 'left 0.3s ease-out, top 0.3s ease-out',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-3">
            <span className="text-[var(--color-text-dark)]">{t('appPreview.title')}</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'oklch(30% 0.03 240)' }}>
            {t('appPreview.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-auto md:grid-rows-4 gap-2 md:gap-3 min-h-[650px] md:min-h-[400px]">
          <BentoDark
            icon={BarChart3}
            title={t('appPreview.screenshots.dashboard')}
            desc="Métricas en tiempo real"
            gradient="radial-gradient(circle at 30% 30%, var(--color-primary) 0%, #1a1a2e 50%, #0a0a0a 100%)"
            colRow="col-span-2 row-span-2 md:col-span-2 md:row-span-2"
          />

          <BentoDark
            icon={Shield}
            title="Seguridad"
            desc="AES-256"
            gradient="radial-gradient(circle at 50% 80%, var(--color-accent) 0%, #0a0a0a 60%)"
            colRow="col-span-1 row-span-1 md:col-span-1 md:row-span-2"
          />

          <BentoLight
            icon={ScanLine}
            title={t('appPreview.screenshots.camera')}
            colRow="col-span-1 row-span-1 md:col-span-1 md:row-span-1"
          />

          <BentoLight
            icon={FileText}
            title={t('appPreview.screenshots.invoices')}
            colRow="col-span-1 row-span-1 md:col-span-1 md:row-span-1"
          />

          <BentoLight
            icon={PieChart}
            title={t('appPreview.screenshots.reports')}
            colRow="col-span-1 row-span-1 md:col-span-1 md:row-span-1"
          />

          <BentoLight
            icon={CreditCard}
            title={t('appPreview.screenshots.expenses')}
            colRow="col-span-1 row-span-1 md:col-span-1 md:row-span-1"
          />

          <BentoLight
            icon={Wallet}
            title="Presupuesto"
            colRow="col-span-1 row-span-1 md:col-span-1 md:row-span-1"
          />

          <BentoLight
            icon={Target}
            title="Metas"
            colRow="col-span-1 row-span-1 md:col-span-1 md:row-span-1"
          />

          <BentoLight
            icon={TrendingUp}
            title="Analíticas"
            colRow="col-span-1 row-span-1 md:col-span-1 md:row-span-1"
          />

          <BentoLight
            icon={ArrowUpRight}
            title="Transferencias"
            colRow="col-span-1 row-span-1 md:col-span-1 md:row-span-1"
          />

          <BentoLight
            icon={PiggyBank}
            title="Ahorros"
            colRow="col-span-1 row-span-1 md:col-span-1 md:row-span-1"
          />

          <BentoLight
            icon={Smartphone}
            title="App Móvil"
            desc="Lleva tu banco contigo"
            colRow="col-span-2 row-span-1 md:col-span-1 md:row-span-1"
          />
        </div>
      </div>
    </section>
  );
}