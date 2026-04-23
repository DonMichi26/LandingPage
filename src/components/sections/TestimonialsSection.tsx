import { useTranslation } from 'react-i18next';

export function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[var(--color-bg-light)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-dark)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            {t('testimonials.title')}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 bg-white rounded-2xl border border-[var(--color-border-light)] hover:border-[var(--color-accent)]/40 hover:shadow-xl hover:shadow-[var(--color-accent)]/15 transition-all">
            <p className="text-[var(--color-text-secondary)] mb-6 italic leading-relaxed">"{t('testimonials.items.1.quote')}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                {t('testimonials.items.1.name').charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-[var(--color-text-dark)]">{t('testimonials.items.1.name')}</div>
                <div className="text-sm text-[var(--color-text-secondary)]">{t('testimonials.items.1.role')}</div>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-[var(--color-border-light)] hover:border-[var(--color-accent)]/40 hover:shadow-xl hover:shadow-[var(--color-accent)]/15 transition-all">
            <p className="text-[var(--color-text-secondary)] mb-6 italic leading-relaxed">"{t('testimonials.items.2.quote')}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                {t('testimonials.items.2.name').charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-[var(--color-text-dark)]">{t('testimonials.items.2.name')}</div>
                <div className="text-sm text-[var(--color-text-secondary)]">{t('testimonials.items.2.role')}</div>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-[var(--color-border-light)] hover:border-[var(--color-accent)]/40 hover:shadow-xl hover:shadow-[var(--color-accent)]/15 transition-all">
            <p className="text-[var(--color-text-secondary)] mb-6 italic leading-relaxed">"{t('testimonials.items.3.quote')}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                {t('testimonials.items.3.name').charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-[var(--color-text-dark)]">{t('testimonials.items.3.name')}</div>
                <div className="text-sm text-[var(--color-text-secondary)]">{t('testimonials.items.3.role')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}