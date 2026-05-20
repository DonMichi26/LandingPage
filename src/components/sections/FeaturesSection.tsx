import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, FileCheck, Camera, WifiOff, FileText, Bell, MapPin } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function FeatureCardDark({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:z-10 hover:shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
}

function FeatureCardGradient({
  icon: Icon,
  title,
  desc,
  gradient,
  colSpan = '',
  rowSpan = '',
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  gradient: string;
  colSpan?: string;
  rowSpan?: string;
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

function FeatureCardOutlined({
  icon: Icon,
  title,
  desc,
  colSpan = '',
  rowSpan = '',
  horizontal = false,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  colSpan?: string;
  rowSpan?: string;
  horizontal?: boolean;
}) {
  return (
    <FeatureCardDark className={`${colSpan} ${rowSpan} card-dark border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 hover:shadow-[var(--color-accent)]/10`}>
      <div className={`p-3 md:p-4 ${horizontal ? 'flex items-center gap-3 h-full' : 'flex flex-col justify-between h-full'}`}>
        <div className={`${horizontal ? 'flex-shrink-0' : 'mb-2'}`}>
          <div className={`w-8 h-8 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center transition-transform duration-300 hover:scale-110`}>
            <Icon className="w-4 h-4 text-[var(--color-accent)]" />
          </div>
        </div>
        <div>
          <h3 className={`font-semibold text-[var(--color-text)] ${horizontal ? 'text-base' : 'text-sm'}`}>
            {title}
          </h3>
          <p className={`text-[var(--color-text-muted)] leading-relaxed ${horizontal ? 'text-sm' : 'text-xs mt-0.5'}`}>
            {desc}
          </p>
        </div>
      </div>
    </FeatureCardDark>
  );
}

export function FeaturesSection() {
  const { t } = useTranslation();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 120; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 6 + 4,
        delay: Math.random() * 4,
        opacity: Math.random() * 0.5 + 0.2,
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
    if (section) section.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (section) section.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} id="features" className="bg-black relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full"
             style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.4 }}
        />
        <div className="absolute -top-10 -left-32 w-[400px] h-[400px] rounded-full"
             style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)', filter: 'blur(60px)', opacity: 0.35 }}
        />
        <div className="absolute top-1/3 right-10 w-[250px] h-[250px] rounded-full"
             style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', filter: 'blur(50px)', opacity: 0.3 }}
        />
        <div className="absolute bottom-20 -left-20 w-[350px] h-[350px] rounded-full"
             style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)', filter: 'blur(70px)', opacity: 0.25 }}
        />
        <div className="absolute -bottom-10 right-1/4 w-[200px] h-[200px] rounded-full"
             style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', filter: 'blur(40px)', opacity: 0.2 }}
        />
        <div className="absolute top-1/4 left-1/4 w-[180px] h-[180px] rounded-full"
             style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)', filter: 'blur(50px)', opacity: 0.25 }}
        />
        <div className="absolute top-2/3 right-1/4 w-[150px] h-[150px] rounded-full"
             style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', filter: 'blur(40px)', opacity: 0.2 }}
        />
        <div className="absolute bottom-1/3 left-1/3 w-[120px] h-[120px] rounded-full"
             style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)', filter: 'blur(30px)', opacity: 0.25 }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 opacity-[0.03]"
             style={{ backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />

        <div className="absolute inset-0 z-5">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
                background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
                opacity: particle.opacity,
                filter: 'blur(1px)',
                transform: 'translateZ(0)',
                animation: `particleBlink ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>

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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display mb-4">
            {t('features.title')}
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">
            Todo lo que necesitas para gestionar tus finanzas en un solo lugar.
          </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 gap-2 md:gap-3 min-h-[380px]">
          {/* Reports - 2×2 gradient */}
          <FeatureCardGradient
            icon={FileCheck}
            title={t('features.items.reports.title')}
            desc={t('features.items.reports.desc')}
            gradient="radial-gradient(circle at 20% 30%, var(--color-primary) 0%, #0a0a0a 60%)"
            colSpan="md:col-span-2"
            rowSpan="md:row-span-2"
          />

          {/* Security - 1×2 gradient */}
          <FeatureCardGradient
            icon={Shield}
            title={t('features.items.security.title')}
            desc={t('features.items.security.desc')}
            gradient="radial-gradient(circle at 80% 80%, var(--color-accent) 0%, #0a0a0a 60%)"
            colSpan="md:col-span-1"
            rowSpan="md:row-span-2"
          />

          {/* Camera - 2×1 outlined */}
          <FeatureCardOutlined
            icon={Camera}
            title={t('features.items.camera.title')}
            desc={t('features.items.camera.desc')}
            colSpan="md:col-span-2"
            rowSpan="md:row-span-1"
            horizontal
          />

          {/* GPS - 1×1 outlined */}
          <FeatureCardOutlined
            icon={MapPin}
            title={t('features.items.gps.title')}
            desc={t('features.items.gps.desc')}
            colSpan="md:col-span-1"
            rowSpan="md:row-span-1"
          />

          {/* Offline - 1×1 outlined */}
          <FeatureCardOutlined
            icon={WifiOff}
            title={t('features.items.offline.title')}
            desc={t('features.items.offline.desc')}
            colSpan="md:col-span-1"
            rowSpan="md:row-span-1"
          />

          {/* Invoicing - 1×1 outlined */}
          <FeatureCardOutlined
            icon={FileText}
            title={t('features.items.invoicing.title')}
            desc={t('features.items.invoicing.desc')}
            colSpan="md:col-span-1"
            rowSpan="md:row-span-1"
          />

          {/* Notifications - 3×1 outlined */}
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
