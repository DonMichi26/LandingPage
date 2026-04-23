import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Download } from 'lucide-react';

export function StickyCta() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#download"
      aria-label={t('cta.downloadAria', 'Descargar app')}
      className="group fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white px-4 py-3 rounded-full shadow-lg hover:px-5 hover:opacity-90 transition-all duration-300"
    >
      <Download className="w-5 h-5" />
      <span className="whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[160px] group-hover:opacity-100 transition-all duration-300 text-sm font-semibold">
        {t('download.now', 'Descargar ahora')}
      </span>
    </a>
  );
}