import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Smartphone } from 'lucide-react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0c1222]/95 backdrop-blur-2xl shadow-lg shadow-black/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#0066ff] to-[#00d4ff] rounded-lg flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-white">TuLogo</span>
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="text-[#94a3b8] hover:text-[#00d4ff] transition-colors font-medium text-sm"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase font-medium text-sm">{i18n.language}</span>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-[#1a2744]/95 backdrop-blur-xl rounded-lg shadow-lg border border-[#38bdf8]/20 py-1">
                  <button
                    onClick={toggleLanguage}
                    className="block w-full text-left px-4 py-2 text-[#94a3b8] hover:text-[#00d4ff] hover:bg-[#0f2744]/50"
                  >
                    {i18n.language === 'es' ? 'EN' : 'ES'}
                  </button>
                </div>
              )}
            </div>
            <button className="bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:from-[#0052cc] hover:to-[#00b8e6] text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all hover:shadow-lg hover:shadow-[#00d4ff]/20">
              {t('hero.cta')}
            </button>
          </div>

          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="text-[#94a3b8] p-2"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#94a3b8] p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#0c1222]/95 backdrop-blur-2xl border-t border-[#38bdf8]/10">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left text-[#94a3b8] hover:text-[#00d4ff] font-medium py-2"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
            <button className="w-full bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white px-5 py-3 rounded-lg font-medium">
              {t('hero.cta')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}