import { useTranslation } from 'react-i18next';
import { Users, FileText, Globe, Award } from 'lucide-react';

const stats = [
  { key: 'clients', value: 10000, suffix: '+', icon: Users },
  { key: 'invoices', value: 500000, suffix: '+', icon: FileText },
  { key: 'countries', value: 5, suffix: '', icon: Globe },
  { key: 'years', value: 8, suffix: '+', icon: Award },
];

export function StatsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 radial-glow" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center p-6 md:p-8 card-dark rounded-2xl">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {stat.value.toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider">
                {t(`stats.${stat.key}`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}