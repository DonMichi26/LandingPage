import { useTranslation } from 'react-i18next';
import { Monitor, MapPin, Clock, Camera, Smartphone, CheckCircle } from 'lucide-react';

const comparisonRows = [
  { key: 'device', icon: Monitor },
  { key: 'location', icon: MapPin },
  { key: 'time', icon: Clock },
  { key: 'expense', icon: Camera },
  { key: 'invoice', icon: Smartphone },
  { key: 'sunat', icon: CheckCircle },
];

export function ComparisonSection() {
  const { t } = useTranslation();

  return (
    <section id="comparison" className="py-20 md:py-28 bg-gradient-to-b from-[#0c1222] to-[#0f2744]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            {t('comparison.title')}
          </h2>
          <p className="text-[#94a3b8] text-lg">
            {t('comparison.subtitle')}
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#38bdf8]/10">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-[#1a2744] to-[#0f2744]">
                <th className="py-4 px-6 text-left text-[#94a3b8] font-medium"></th>
                <th className="py-4 px-6 text-center text-[#94a3b8] font-bold">
                  {t('comparison.traditional')}
                </th>
                <th className="py-4 px-6 text-center text-[#00d4ff] font-bold bg-[#0066ff]/10">
                  {t('comparison.ourApp')}
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => {
                const Icon = row.icon;
                return (
                  <tr key={row.key} className="border-t border-[#38bdf8]/10 hover:bg-[#1a2744]/30 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-[#00d4ff]" />
                        <span className="text-white font-medium">
                          {t(`comparison.rows.${row.key}.label`)}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center text-[#94a3b8]">
                      {t(`comparison.rows.${row.key}.traditional`)}
                    </td>
                    <td className="py-4 px-6 text-center bg-[#0066ff]/5">
                      <span className="inline-flex items-center gap-2 text-[#00d4ff] font-medium">
                        <CheckCircle className="w-4 h-4" />
                        {t(`comparison.rows.${row.key}.app`)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}