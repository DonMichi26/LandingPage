import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FileText, BarChart3, CreditCard, Shield, PieChart, Smartphone,
  ScanLine, Wallet, Target, TrendingUp, ArrowUpRight, PiggyBank,
} from 'lucide-react';
import { useParticles } from '../../hooks/useParticles';
import { useMousePosition } from '../../hooks/useMousePosition';
import { GlowingOrbs } from '../ui/GlowingOrbs';
import { ParticleField } from '../ui/ParticleField';
import { MouseGlow } from '../ui/MouseGlow';

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
  const sectionRef = useRef<HTMLElement>(null);
  const particles = useParticles(60, { minOpacity: 0.08, maxOpacity: 0.3, minSize: 1, maxSize: 3 });
  const mousePos = useMousePosition(sectionRef);

  return (
    <section ref={sectionRef} id="app-preview" className="relative overflow-hidden py-16 md:py-20" style={{ background: 'oklch(94% 0.015 250)' }}>
      <GlowingOrbs
        orbs={[
          { top: '-20px', right: '-20px', width: '400px', height: '400px', color: 'primary', opacity: 0.12, blur: '80px' },
          { top: '-10px', left: '-128px', width: '350px', height: '350px', color: 'accent', opacity: 0.1, blur: '60px' },
          { bottom: '80px', left: '-80px', width: '300px', height: '300px', color: 'primary', opacity: 0.08, blur: '70px' },
          { bottom: '-40px', right: '25%', width: '200px', height: '200px', color: 'accent', opacity: 0.06, blur: '40px' },
        ]}
      />
      <div className="absolute inset-0 opacity-[0.02]"
           style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <ParticleField particles={particles} color="var(--color-primary)" />
      <MouseGlow mousePos={mousePos} size="250px" color="var(--color-primary)" blur="50px" opacity={0.06} />

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
            desc={t('appPreview.items.metrics')}
            gradient="radial-gradient(circle at 30% 30%, var(--color-primary) 0%, #1a1a2e 50%, #0a0a0a 100%)"
            colRow="col-span-2 row-span-2 md:col-span-2 md:row-span-2"
          />

          <BentoDark
            icon={Shield}
            title={t('appPreview.items.security')}
            desc={t('appPreview.items.encryption')}
            gradient="radial-gradient(circle at 50% 80%, var(--color-accent) 0%, #0a0a0a 60%)"
            colRow="col-span-1 row-span-1 md:col-span-1 md:row-span-2"
          />

          <BentoLight icon={ScanLine} title={t('appPreview.screenshots.camera')} colRow="col-span-1 row-span-1 md:col-span-1 md:row-span-1" />
          <BentoLight icon={FileText} title={t('appPreview.screenshots.invoices')} colRow="col-span-1 row-span-1 md:col-span-1 md:row-span-1" />
          <BentoLight icon={PieChart} title={t('appPreview.screenshots.reports')} colRow="col-span-1 row-span-1 md:col-span-1 md:row-span-1" />
          <BentoLight icon={CreditCard} title={t('appPreview.screenshots.expenses')} colRow="col-span-1 row-span-1 md:col-span-1 md:row-span-1" />
          <BentoLight icon={Wallet} title={t('appPreview.items.budget')} colRow="col-span-1 row-span-1 md:col-span-1 md:row-span-1" />
          <BentoLight icon={Target} title={t('appPreview.items.goals')} colRow="col-span-1 row-span-1 md:col-span-1 md:row-span-1" />
          <BentoLight icon={TrendingUp} title={t('appPreview.items.analytics')} colRow="col-span-1 row-span-1 md:col-span-1 md:row-span-1" />
          <BentoLight icon={ArrowUpRight} title={t('appPreview.items.transfers')} colRow="col-span-1 row-span-1 md:col-span-1 md:row-span-1" />
          <BentoLight icon={PiggyBank} title={t('appPreview.items.savings')} colRow="col-span-1 row-span-1 md:col-span-1 md:row-span-1" />
          <BentoLight icon={Smartphone} title={t('appPreview.items.mobileApp')} desc={t('appPreview.items.bankWithYou')} colRow="col-span-2 row-span-1 md:col-span-1 md:row-span-1" />
        </div>
      </div>
    </section>
  );
}
