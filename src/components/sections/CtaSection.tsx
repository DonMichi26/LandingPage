import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  const { t } = useTranslation();

  return (
    <section id="cta" className="py-20 md:py-28 relative overflow-hidden mx-4 md:mx-8 mb-8 rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-surface)] to-[var(--color-accent)] opacity-60" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)] rounded-full blur-[150px] opacity-20 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-primary)] rounded-full blur-[120px] opacity-20 -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
          <span className="text-[var(--color-text)]">¿Listo para transformar</span>
          <br />
          <span className="text-gradient">tus finanzas?</span>
        </h2>
        <p className="text-[var(--color-text-muted)] text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Únete a más de 100,000 usuarios que ya están disfrutando de la mejor experiencia en gestión financiera.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary flex items-center justify-center gap-2">
            {t('cta.button')}
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="btn-secondary">
            Ver Demo en Vivo
          </button>
        </div>
      </div>
    </section>
  );
}