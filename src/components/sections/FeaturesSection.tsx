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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Main Feature - Large Card with Radial */}
          <div className="md:col-span-2 relative aspect-[16/9] rounded-3xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0" 
                 style={{ background: 'radial-gradient(circle at 20% 30%, var(--color-primary) 0%, #0a0a0a 60%)' }} />
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                <FileCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('features.items.reports.title')}</h3>
                <p className="text-white/60 max-w-md">{t('features.items.reports.desc')}</p>
              </div>
            </div>
          </div>

          {/* Security Card with Radial */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0" 
                 style={{ background: 'radial-gradient(circle at 80% 80%, var(--color-accent) 0%, #0a0a0a 60%)' }} />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Seguridad Bancaria</h3>
                <p className="text-white/60 text-sm">Encriptación AES-256</p>
              </div>
            </div>
          </div>

          {/* Small Cards - Solid dark cards */}
          <div className="relative aspect-square rounded-3xl overflow-hidden card-dark">
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center">
                <Camera className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">{t('features.items.camera.title')}</h3>
                <p className="text-[var(--color-text-muted)] text-sm">{t('features.items.camera.desc')}</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-3xl overflow-hidden card-dark">
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center">
                <WifiOff className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">{t('features.items.offline.title')}</h3>
                <p className="text-[var(--color-text-muted)] text-sm">{t('features.items.offline.desc')}</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-3xl overflow-hidden card-dark">
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">{t('features.items.invoicing.title')}</h3>
                <p className="text-[var(--color-text-muted)] text-sm">{t('features.items.invoicing.desc')}</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-3xl overflow-hidden card-dark">
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center">
                <Bell className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">{t('features.items.notifications.title')}</h3>
                <p className="text-[var(--color-text-muted)] text-sm">{t('features.items.notifications.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}