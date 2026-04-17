import { useTranslation } from 'react-i18next';

export function CtaSection() {
  const { t } = useTranslation();

  return (
    <section id="cta" className="py-20 md:py-28 bg-gradient-to-r from-[#0066ff] via-[#0088ff] to-[#00d4ff]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
          {t('cta.title')}
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          {t('cta.subtitle')}
        </p>
        <button className="bg-white text-[#0066ff] hover:bg-[#f0f9ff] px-10 py-5 rounded-xl font-semibold text-lg transition-all hover:shadow-2xl hover:-translate-y-1">
          {t('cta.button')}
        </button>
      </div>
    </section>
  );
}