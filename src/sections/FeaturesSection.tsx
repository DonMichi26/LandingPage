import { useTranslation } from 'react-i18next';
import { Camera, MapPin, WifiOff, Bell, FileText, FileCheck } from 'lucide-react';

const features = [
  { key: 'camera', icon: Camera },
  { key: 'gps', icon: MapPin },
  { key: 'offline', icon: WifiOff },
  { key: 'notifications', icon: Bell },
  { key: 'invoicing', icon: FileText },
  { key: 'reports', icon: FileCheck },
];

export function FeaturesSection() {
  const { t } = useTranslation();

  return (
    <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-[#0c1222] to-[#0f2744]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            {t('features.title')}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.key} 
                className="group p-8 bg-gradient-to-br from-[#1a2744]/50 to-[#0c1222]/50 rounded-2xl border border-[#38bdf8]/10 hover:border-[#00d4ff]/30 hover:shadow-lg hover:shadow-[#00d4ff]/10 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#0066ff] to-[#00d4ff] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {t(`features.items.${feature.key}.title`)}
                </h3>
                <p className="text-[#94a3b8] leading-relaxed">
                  {t(`features.items.${feature.key}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}