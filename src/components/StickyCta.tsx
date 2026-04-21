import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Download, X } from 'lucide-react';

export function StickyCta() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-10 right-10 z-50 animate-fade-in-up">
      <button
        onClick={handleDismiss}
        className="absolute -top-3 -right-3 w-8 h-8 bg-white border border-border rounded-full flex items-center justify-center text-text-muted hover:text-primary transition-all duration-300 shadow-xl"
      >
        <X className="w-4 h-4" />
      </button>
      <a
        href="#download"
        className="flex items-center gap-4 bg-primary text-white px-8 py-4 rounded-2xl shadow-[0_20px_40px_-10px_oklch(25%_0.07_250_/_40%)] hover:bg-primary-hover hover:-translate-y-1 transition-all duration-500 group"
      >
        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-colors duration-500">
          <Download className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold tracking-widest opacity-70">App Móvil</span>
          <span className="font-bold text-base whitespace-nowrap">
            {t('download.now', 'Descargar ahora')}
          </span>
        </div>
      </a>
    </div>
  );
}
