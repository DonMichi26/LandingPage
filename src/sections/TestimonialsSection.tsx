import { useTranslation } from 'react-i18next';

export function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0c1222] mb-4">
            {t('testimonials.title')}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-2xl border border-[#e2e8f0] hover:border-[#00d4ff]/20 hover:shadow-lg hover:shadow-[#00d4ff]/10 transition-all">
            <p className="text-[#64748b] mb-6 italic leading-relaxed">"{t('testimonials.items.1.quote')}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0066ff] to-[#00d4ff] rounded-full flex items-center justify-center text-white font-bold text-sm">
                {t('testimonials.items.1.name').charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-[#0c1222]">{t('testimonials.items.1.name')}</div>
                <div className="text-sm text-[#94a3b8]">{t('testimonials.items.1.role')}</div>
              </div>
            </div>
          </div>
          <div className="p-8 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-2xl border border-[#e2e8f0] hover:border-[#00d4ff]/20 hover:shadow-lg hover:shadow-[#00d4ff]/10 transition-all">
            <p className="text-[#64748b] mb-6 italic leading-relaxed">"{t('testimonials.items.2.quote')}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0066ff] to-[#00d4ff] rounded-full flex items-center justify-center text-white font-bold text-sm">
                {t('testimonials.items.2.name').charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-[#0c1222]">{t('testimonials.items.2.name')}</div>
                <div className="text-sm text-[#94a3b8]">{t('testimonials.items.2.role')}</div>
              </div>
            </div>
          </div>
          <div className="p-8 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-2xl border border-[#e2e8f0] hover:border-[#00d4ff]/20 hover:shadow-lg hover:shadow-[#00d4ff]/10 transition-all">
            <p className="text-[#64748b] mb-6 italic leading-relaxed">"{t('testimonials.items.3.quote')}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0066ff] to-[#00d4ff] rounded-full flex items-center justify-center text-white font-bold text-sm">
                {t('testimonials.items.3.name').charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-[#0c1222]">{t('testimonials.items.3.name')}</div>
                <div className="text-sm text-[#94a3b8]">{t('testimonials.items.3.role')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}