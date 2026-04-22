import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Smartphone } from 'lucide-react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { useScrollBehavior } from '../../hooks/useScrollBehavior';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const { isScrolled, isVisible } = useScrollBehavior({ hideAfterHero: true });

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    setIsLangOpen(false);
  };

  const navItems = [
    { key: 'features', href: '#features' },
    { key: 'download', href: '#download' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'faq', href: '#faq' },
    { key: 'contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 shadow-lg bg-[radial-gradient(ellipse_at_center,_oklch(15%_0.01_250)_0%,_oklch(5%_0.01_250)_100%)]' 
          : 'bg-transparent py-6'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)] flex items-center justify-center shadow-lg">
              <Smartphone className="w-5 h-5 text-[var(--color-background)]" />
            </div>
            <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-[var(--color-text)]">Smart</span> <span className="text-[var(--color-accent)]">Finance</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors font-medium text-sm tracking-wide relative group"
              >
                {t(`nav.${item.key}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors px-3 py-2 rounded-lg hover:bg-[var(--color-surface)]"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase font-semibold text-xs">{i18n.language}</span>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-20 glass-card rounded-xl py-1 overflow-hidden">
                  <button
                    onClick={toggleLanguage}
                    className="block w-full text-left px-4 py-2.5 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-surface)] transition-colors text-sm"
                  >
                    {i18n.language === 'es' ? 'EN' : 'ES'}
                  </button>
                </div>
              )}
            </div>
            <button className="btn-primary !py-2.5 !px-5 !text-sm">
              {t('hero.cta')}
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="text-[var(--color-text-muted)] p-2.5 rounded-lg hover:bg-[var(--color-surface)] transition-colors"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[var(--color-text-muted)] p-2.5 rounded-lg hover:bg-[var(--color-surface)] transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden glass border-t border-[var(--color-border)]">
          <div className="px-6 py-5 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left text-[var(--color-text-muted)] hover:text-[var(--color-accent)] font-medium py-3 px-4 rounded-lg hover:bg-[var(--color-surface)] transition-colors"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
            <div className="pt-3">
              <button className="w-full btn-primary">
                {t('hero.cta')}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
