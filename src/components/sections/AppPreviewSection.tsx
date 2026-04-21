import { useTranslation } from 'react-i18next';
import { Camera, FileText, BarChart3, CreditCard, Shield, PieChart, Smartphone } from 'lucide-react';

export function AppPreviewSection() {
  const { t } = useTranslation();

  return (
    <section id="app-preview" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-[#0a0a0a]">Todo lo que necesitas</span>
            <br />
            <span className="text-gradient">en tu teléfono</span>
          </h2>
          <p className="text-[#444] text-lg md:text-xl max-w-2xl mx-auto">
            {t('appPreview.subtitle')}
          </p>
        </div>

        {/* Bento Grid - Different proportions */}
        <div className="grid grid-cols-4 grid-rows-4 gap-3 md:gap-4 h-[600px] md:h-[700px]">
          
          {/* Large Card - Dashboard (2x2) - Radial gradient */}
          <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0 bg-radial from-[var(--color-primary)] via-[#1a1a2e] to-[#0a0a0a]" 
                 style={{ background: 'radial-gradient(circle at 30% 30%, var(--color-primary) 0%, #1a1a2e 50%, #0a0a0a 100%)' }} />
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Dashboard</h3>
                <p className="text-white/60 text-sm md:text-base">Resumen en tiempo real</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 w-20 h-28 md:w-24 md:h-36 bg-white/5 rounded-2xl border border-white/10" />
          </div>

          {/* Tall Card - Security (1x2) */}
          <div className="col-span-1 row-span-2 relative rounded-3xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0" 
                 style={{ background: 'radial-gradient(circle at 50% 80%, var(--color-accent) 0%, #0a0a0a 60%)' }} />
            <div className="absolute inset-0 p-5 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-0.5">Seguridad</h3>
                <p className="text-white/60 text-xs">AES-256</p>
              </div>
            </div>
          </div>

          {/* Small Card - Expenses (1x1) */}
          <div className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0" 
                 style={{ background: 'radial-gradient(circle at 70% 30%, var(--color-primary) 0%, #0a0a0a 50%)' }} />
            <div className="absolute inset-0 p-4 flex items-end">
              <div>
                <h3 className="text-base font-bold text-white">Gastos</h3>
                <p className="text-white/50 text-xs">Control</p>
              </div>
            </div>
          </div>

          {/* Wide Card - Reports (2x1) */}
          <div className="col-span-2 row-span-1 relative rounded-3xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0" 
                 style={{ background: 'radial-gradient(ellipse at 50% 50%, var(--color-accent) 0%, #0a0a0a 70%)' }} />
            <div className="absolute inset-0 p-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-0.5">Reportes</h3>
                <p className="text-white/60 text-xs">Análisis profundo</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <PieChart className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Small Card - Invoices (1x1) - white card */}
          <div className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden cursor-pointer bg-white">
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              <FileText className="w-5 h-5 text-[var(--color-primary)]" />
              <div>
                <h3 className="text-sm font-semibold text-[#0a0a0a]">Facturas</h3>
              </div>
            </div>
          </div>

          {/* Small Card - Scanner (1x1) - white card */}
          <div className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden cursor-pointer bg-white">
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              <Camera className="w-5 h-5 text-[var(--color-primary)]" />
              <div>
                <h3 className="text-sm font-semibold text-[#0a0a0a]">Escáner</h3>
              </div>
            </div>
          </div>

          {/* Wide Card - App Preview (2x1) - white card */}
          <div className="col-span-2 row-span-1 relative rounded-3xl overflow-hidden cursor-pointer bg-white">
            <div className="absolute inset-0 flex items-center justify-center gap-6 md:gap-10 p-4">
              <div className="w-16 h-28 md:w-20 md:h-36 bg-[#f5f5f5] rounded-2xl p-2 border border-[#e5e5e5]">
                <div className="w-full h-full bg-[var(--color-primary)]/10 rounded-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-bold text-[#0a0a0a] mb-1">Tu banco en el bolsillo</h3>
                <p className="text-[#666] text-xs md:text-sm">Llevalo contigo everywhere</p>
              </div>
              <Smartphone className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
            </div>
          </div>

          {/* Small Card (1x1) - white card */}
          <div className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden cursor-pointer bg-white">
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              <CreditCard className="w-5 h-5 text-[var(--color-primary)]" />
              <div>
                <h3 className="text-sm font-semibold text-[#0a0a0a]">Métodos</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}