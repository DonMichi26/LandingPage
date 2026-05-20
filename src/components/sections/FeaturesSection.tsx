import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, FileCheck, Camera, WifiOff, FileText, Bell, MapPin } from 'lucide-react';
import { useParticles } from '../../hooks/useParticles';
import { useMousePosition } from '../../hooks/useMousePosition';
import { GlowingOrbs } from '../ui/GlowingOrbs';
import { ParticleField } from '../ui/ParticleField';
import { MouseGlow } from '../ui/MouseGlow';

function FeatureCardDark({ children, className = '' }: {
  children: React.ReactNode; className?: string;
}) {
  return (
    <div className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:z-10 hover:shadow-2xl ${className}`}>
      {children}
    </div>
  );
}

function FeatureCardGradient({ icon: Icon, title, desc, gradient, colSpan = '', rowSpan = '' }: {
  icon: React.ElementType; title: string; desc: string; gradient: string; colSpan?: string; rowSpan?: string;
}) {
  return (
    <FeatureCardDark className={`${colSpan} ${rowSpan}`}>
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0" style={{ background: gradient }} />
      <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-between">
        <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/10 flex items-center justify-center transition-transform duration-300 hover:scale-110">
          <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold text-white mb-0.5">{title}</h3>
          <p className="text-white/60 text-sm md:text-base max-w-md">{desc}</p>
        </div>
      </div>
    </FeatureCardDark>
  );
}

function FeatureCardOutlined({ icon: Icon, title, desc, colSpan = '', rowSpan = '', horizontal = false }: {
  icon: React.ElementType; title: string; desc: string; colSpan?: string; rowSpan?: string; horizontal?: boolean;
}) {
  return (
    <FeatureCardDark className={`${colSpan} ${rowSpan} card-dark border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 hover:shadow-[var(--color-accent)]/10`}>
      <div className={`p-3 md:p-4 ${horizontal ? 'flex items-center gap-3 h-full' : 'flex flex-col justify-between h-full'}`}>
        <div className={`${horizontal ? 'flex-shrink-0' : 'mb-2'}`}>
          <div className="w-8 h-8 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center transition-transform duration-300 hover:scale-110">
            <Icon className="w-4 h-4 text-[var(--color-accent)]" />
          </div>
        </div>
        <div>
          <h3 className={`font-semibold text-[var(--color-text)] ${horizontal ? 'text-base' : 'text-sm'}`}>{title}</h3>
          <p className={`text-[var(--color-text-muted)] leading-relaxed ${horizontal ? 'text-sm' : 'text-xs mt-0.5'}`}>{desc}</p>
        </div>
      </div>
    </FeatureCardDark>
  );
}

export function FeaturesSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const particles = useParticles(120, { minOpacity: 0.2, maxOpacity: 0.5, minSize: 2, maxSize: 4 });
  const mousePos = useMousePosition(sectionRef);

  return (
    <section ref={sectionRef} id="features" className="bg-black relative overflow-hidden py-16 md:py-20">
      <GlowingOrbs
        orbs={[
          { top: '-20px', right: '-20px', width: '500px', height: '500px', color: 'primary', opacity: 0.4, blur: '80px' },
          { top: '-10px', left: '-128px', width: '400px', height: '400px', color: 'accent', opacity: 0.35, blur: '60px' },
          { top: '33%', right: '40px', width: '250px', height: '250px', color: 'primary', opacity: 0.3, blur: '50px' },
          { bottom: '80px', left: '-80px', width: '350px', height: '350px', color: 'accent', opacity: 0.25, blur: '70px' },
          { bottom: '-40px', right: '25%', width: '200px', height: '200px', color: 'primary', opacity: 0.2, blur: '40px' },
          { top: '25%', left: '25%', width: '180px', height: '180px', color: 'accent', opacity: 0.25, blur: '50px' },
          { top: '66%', right: '25%', width: '150px', height: '150px', color: 'primary', opacity: 0.2, blur: '40px' },
          { bottom: '33%', left: '33%', width: '120px', height: '120px', color: 'accent', opacity: 0.25, blur: '30px' },
        ]}
        overlay
        overlayColor="rgba(0,0,0,0.6)"
      />
      <div className="absolute inset-0 opacity-[0.03]"
           style={{ backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <ParticleField particles={particles} />
      <MouseGlow mousePos={mousePos} opacity={0.15} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display mb-4">
            {t('features.title')}
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 gap-2 md:gap-3 min-h-[380px]">
          <FeatureCardGradient
            icon={FileCheck}
            title={t('features.items.reports.title')}
            desc={t('features.items.reports.desc')}
            gradient="radial-gradient(circle at 20% 30%, var(--color-primary) 0%, #0a0a0a 60%)"
            colSpan="md:col-span-2"
            rowSpan="md:row-span-2"
          />
          <FeatureCardGradient
            icon={Shield}
            title={t('features.items.security.title')}
            desc={t('features.items.security.desc')}
            gradient="radial-gradient(circle at 80% 80%, var(--color-accent) 0%, #0a0a0a 60%)"
            colSpan="md:col-span-1"
            rowSpan="md:row-span-2"
          />
          <FeatureCardOutlined
            icon={Camera}
            title={t('features.items.camera.title')}
            desc={t('features.items.camera.desc')}
            colSpan="md:col-span-2"
            rowSpan="md:row-span-1"
            horizontal
          />
          <FeatureCardOutlined
            icon={MapPin}
            title={t('features.items.gps.title')}
            desc={t('features.items.gps.desc')}
            colSpan="md:col-span-1"
            rowSpan="md:row-span-1"
          />
          <FeatureCardOutlined
            icon={WifiOff}
            title={t('features.items.offline.title')}
            desc={t('features.items.offline.desc')}
            colSpan="md:col-span-1"
            rowSpan="md:row-span-1"
          />
          <FeatureCardOutlined
            icon={FileText}
            title={t('features.items.invoicing.title')}
            desc={t('features.items.invoicing.desc')}
            colSpan="md:col-span-1"
            rowSpan="md:row-span-1"
          />
          <FeatureCardOutlined
            icon={Bell}
            title={t('features.items.notifications.title')}
            desc={t('features.items.notifications.desc')}
            colSpan="md:col-span-3"
            rowSpan="md:row-span-1"
            horizontal
          />
        </div>
      </div>
    </section>
  );
}
