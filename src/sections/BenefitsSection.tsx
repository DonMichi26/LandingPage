import { useTranslation } from 'react-i18next';
import { Shield, Clock, Headphones, CheckCircle } from 'lucide-react';

const icons = [Shield, Clock, Headphones, CheckCircle];

export function BenefitsSection() {
  const { t } = useTranslation();

  const benefitsKeys = ['security', 'time', 'support', 'compliance'];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0c1222] mb-4">
            {t('benefits.title')}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsKeys.map((key, i) => {
            const Icon = icons[i];
            return (
              <div key={key} className="p-8 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-2xl border border-[#e2e8f0] hover:border-[#00d4ff]/30 hover:shadow-lg hover:shadow-[#00d4ff]/10 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0066ff]/10 to-[#00d4ff]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-8 h-8 text-[#0066ff]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0c1222] mb-3">
                  {t(`benefits.items.${key}.title`)}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed">
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