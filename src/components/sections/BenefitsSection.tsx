import { useTranslation } from 'react-i18next';
import { Shield, Clock, Headphones, CheckCircle } from 'lucide-react';

const icons = [Shield, Clock, Headphones, CheckCircle];

export function BenefitsSection() {
  const { t } = useTranslation();

  const benefitsKeys = ['security', 'time', 'support', 'compliance'];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-[var(--color-bg-light)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-dark)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            {t('benefits.title')}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsKeys.map((key, i) => {
            const Icon = icons[i];
            return (
              <div key={key} className="p-8 bg-white rounded-2xl border border-[var(--color-border-light)] hover:border-[var(--color-accent)]/40 hover:shadow-xl hover:shadow-[var(--color-accent)]/15 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)]/15 to-[var(--color-accent)]/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-dark)] mb-3">
                  {t(`benefits.items.${key}.title`)}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {t(`benefits.items.${key}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}