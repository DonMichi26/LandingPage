import { useTranslation } from 'react-i18next';
import { Shield, FileCheck, Camera, WifiOff, FileText, Bell } from 'lucide-react';

export function FeaturesSection() {
  const { t } = useTranslation();

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 radial-glow" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-[var(--color-text)]">Funciones</span>
            <br />
            <span className="text-gradient">que marcan la diferencia</span>
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">
            Todo lo que necesitas para gestionar tus finanzas personales y empresariales en un solo lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-4 min-h-[600px]">
          {/* Large Card - col-span-2 row-span-2 */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden cursor-pointer h-full transition-all duration-300 ease-out hover:scale-105 hover:z-10 hover:shadow-2xl hover:shadow-primary/20">
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0" 
                 style={{ background: 'radial-gradient(circle at 20% 30%, var(--color-primary) 0%, #0a0a0a 60%)' }} />
            <div className="absolute inset-0 p-8 flex flex-col justify-between h-full">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <FileCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('features.items.reports.title')}</h3>
                <p className="text-white/60 max-w-md">{t('features.items.reports.desc')}</p>
              </div>
            </div>
          </div>

          {/* Tall Card - col-span-1 row-span-2 */}
          <div className="md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden cursor-pointer h-full transition-all duration-300 ease-out hover:scale-105 hover:z-10 hover:shadow-2xl hover:shadow-accent/20">
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0" 
                 style={{ background: 'radial-gradient(circle at 80% 80%, var(--color-accent) 0%, #0a0a0a 60%)' }} />
            <div className="absolute inset-0 p-6 flex flex-col justify-between h-full">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Seguridad Bancaria</h3>
                <p className="text-white/60 text-sm">Encriptación AES-256</p>
              </div>
            </div>
          </div>

          {/* Wide Card - col-span-2 row-span-1 */}
          <div className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden cursor-pointer h-full card-dark transition-all duration-300 ease-out hover:scale-105 hover:z-10 hover:border-primary">
            <div className="absolute inset-0 p-6 flex items-center justify-between h-full">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <Camera className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">{t('features.items.camera.title')}</h3>
                  <p className="text-[var(--color-text-muted)] text-sm">{t('features.items.camera.desc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Small Card 1 */}
          <div className="md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden cursor-pointer h-full card-dark transition-all duration-300 ease-out hover:scale-105 hover:z-10 hover:border-primary">
            <div className="absolute inset-0 p-6 flex flex-col justify-between h-full">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <WifiOff className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[var(--color-text)]">{t('features.items.offline.title')}</h3>
                <p className="text-[var(--color-text-muted)] text-xs">{t('features.items.offline.desc')}</p>
              </div>
            </div>
          </div>

          {/* Small Card 2 */}
          <div className="md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden cursor-pointer h-full card-dark transition-all duration-300 ease-out hover:scale-105 hover:z-10 hover:border-primary">
            <div className="absolute inset-0 p-6 flex flex-col justify-between h-full">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <FileText className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[var(--color-text)]">{t('features.items.invoicing.title')}</h3>
                <p className="text-[var(--color-text-muted)] text-xs">{t('features.items.invoicing.desc')}</p>
              </div>
            </div>
          </div>

          {/* Small Card 3 */}
          <div className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden cursor-pointer h-full card-dark transition-all duration-300 ease-out hover:scale-105 hover:z-10 hover:border-primary">
            <div className="absolute inset-0 p-6 flex items-center justify-between h-full">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <Bell className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">{t('features.items.notifications.title')}</h3>
                  <p className="text-[var(--color-text-muted)] text-sm">{t('features.items.notifications.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}