import { useTranslation } from 'react-i18next';

const stats = [
  { key: 'clients', value: '10,000+' },
  { key: 'invoices', value: '500,000+' },
  { key: 'countries', value: '5' },
  { key: 'years', value: '8' },
];

export function StatsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#0f2744] via-[#0c1222] to-[#0f2744]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            {t('stats.title')}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-[#00d4ff] text-lg font-medium">
                {t(`stats.${stat.key}`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}