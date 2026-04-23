/**
 * Navbar.tsx
 * ==========
 * Navbar minimalista con branding distintivo.
 * Diseño limpio con scroll-aware y acceso rápido a navegación.
 * 
 * @features
 * - Scroll-aware: Transparente → Blur al scrollear
 * - Idioma rápido: Toggle ES/EN
 * - Menú móvil: Animado y accesible
 * - Focus states: Keyboard navigation completa
 */

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Smartphone } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { useScrollBehavior } from '../../hooks/useScrollBehavior';

// =============================================================================
// CONSTANTES
// =============================================================================
const navItems = [
  { key: 'features', href: '#features' },
  { key: 'download', href: '#download' },
  { key: 'testimonials', href: '#testimonials' },
  { key: 'faq', href: '#faq' },
  { key: 'contact', href: '#contact' },
];

// =============================================================================
// COMPONENTE PRINCIPAL
// =============================================================================
export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const { isScrolled, isVisible } = useScrollBehavior({ hideAfterHero: true });
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // -------------------------------------------------------------------------
  // EFECTO: Click outside para cerrar dropdown de idioma
  // -------------------------------------------------------------------------
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // -------------------------------------------------------------------------
  // HELPERS
  // -------------------------------------------------------------------------
  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    setIsLangOpen(false);
  };

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  const navTransition = shouldReduceMotion 
    ? { duration: 0 } 
    : { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const };

  // -------------------------------------------------------------------------
  // RENDER
  // -------------------------------------------------------------------------
  return (
    <motion.nav
      initial={false}
      animate={{ 
        y: isVisible ? 0 : -100,
        backgroundColor: isScrolled 
          ? 'oklch(15% 0.01 250 / 0.9)' 
          : 'oklch(5% 0.01 250 / 0)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)'
      }}
      transition={navTransition}
      className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'shadow-lg shadow-black/20' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 lg:h-16">
          
          {/* Logo */}
          <motion.button
            className="flex items-center gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)] flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-[var(--color-background)]" />
            </div>
            <span className="text-base font-bold">
              <span className="text-[var(--color-text)]">Smart</span>
              <span className="text-[var(--color-accent)]">Finance</span>
            </span>
          </motion.button>

          {/* Nav Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors relative group"
                aria-label={t(`nav.${item.key}`)}
              >
                {t(`nav.${item.key}`)}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[var(--color-accent)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
              </button>
            ))}
          </div>

          {/* Acciones Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Selector de idioma */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors px-2 py-1.5 rounded hover:bg-[var(--color-surface)]"
                aria-label={isLangOpen ? 'Cerrar selector de idioma' : 'Abrir selector de idioma'}
                aria-expanded={isLangOpen}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{i18n.language.toUpperCase()}</span>
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-1 w-16 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden"
                  >
                    <button
                      onClick={toggleLanguage}
                      className="w-full text-xs text-center py-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-surface-elevated)] transition-colors"
                    >
                      {i18n.language === 'es' ? 'EN' : 'ES'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-xs font-semibold text-[var(--color-background)] hover:opacity-90 transition-opacity">
              {t('hero.cta')}
            </button>
          </div>

          {/* Nav Mobile */}
          <div className="lg:hidden flex items-center gap-1">
            <button
              onClick={toggleLanguage}
              className="text-xs font-medium text-[var(--color-text-muted)] px-2 py-1.5 rounded hover:bg-[var(--color-surface)] transition-colors"
              aria-label="Cambiar idioma"
            >
              {i18n.language.toUpperCase()}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-[var(--color-text-muted)] rounded-lg hover:bg-[var(--color-surface)] transition-colors"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[var(--color-surface)]/95 border-t border-[var(--color-border)]"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.key}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] py-2.5 px-3 rounded-lg hover:bg-[var(--color-surface-elevated)] transition-colors"
                >
                  {t(`nav.${item.key}`)}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="w-full mt-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-sm font-semibold text-[var(--color-background)] text-center"
              >
                {t('hero.cta')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}