import { useTranslation } from 'react-i18next';
import { Smartphone, Camera, FileText, BarChart3, Receipt } from 'lucide-react';

const screenshots = [
  { key: 'dashboard', icon: BarChart3, color: 'from-[#0066ff] to-[#00d4ff]' },
  { key: 'expenses', icon: Receipt, color: 'from-[#00d4ff] to-[#38bdf8]' },
  { key: 'invoices', icon: FileText, color: 'from-[#0066ff] to-[#38bdf8]' },
  { key: 'reports', color: 'from-[#00d4ff] to-[#0066ff]' },
  { key: 'camera', icon: Camera, color: 'from-[#0066ff] to-[#00d4ff]' },
];

export function AppPreviewSection() {
  const { t } = useTranslation();

  return (
    <section id="app-preview" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0c1222] mb-4">
            {t('appPreview.title')}
          </h2>
          <p className="text-[#64748b] text-lg md:text-xl max-w-2xl mx-auto">
            {t('appPreview.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {screenshots.map((shot) => (
            <div 
              key={shot.key} 
              className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#00d4ff]/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${shot.color}`} />
              <div className="absolute inset-0 flex items-center justify-center">
                {shot.icon ? (
                  <shot.icon className="w-16 h-16 text-white/40" />
                ) : (
                  <Smartphone className="w-16 h-16 text-white/40" />
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm font-medium text-center">
                  {t(`appPreview.screenshots.${shot.key}`)}
                </p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Smartphone className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-[#00d4ff] rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-[#94a3b8]/50 rounded-full" />
            <div className="w-2 h-2 bg-[#94a3b8]/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}