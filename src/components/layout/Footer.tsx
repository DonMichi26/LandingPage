import { useTranslation } from 'react-i18next';
import { Smartphone, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative py-16 px-6 border-t border-[var(--color-border)]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-surface)]/30" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)] flex items-center justify-center shadow-lg">
                <Smartphone className="w-5 h-5 text-[var(--color-background)]" />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="text-[var(--color-text)]">Smart</span> <span className="text-[var(--color-accent)]">Finance</span>
              </span>
            </div>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6 max-w-xs">
              La nueva era de la banca digital en Perú. Seguridad, rapidez y tecnología de punta para tus finanzas.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
                <Mail className="w-4 h-4 text-[var(--color-accent)]" />
                <span>hola@smartfinance.pe</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
                <Phone className="w-4 h-4 text-[var(--color-accent)]" />
                <span>+51 999 888 777</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
                <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                <span>San Isidro, Lima</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-[var(--color-text)] font-semibold mb-4">Producto</h4>
            <ul className="space-y-3 text-sm text-[var(--color-text-muted)]">
              <li><a href="#features" className="hover:text-[var(--color-accent)] transition-colors">Features</a></li>
              <li><a href="#download" className="hover:text-[var(--color-accent)] transition-colors">Descargar</a></li>
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Precios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[var(--color-text)] font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3 text-sm text-[var(--color-text-muted)]">
              <li><a href="#contact" className="hover:text-[var(--color-accent)] transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Carreras</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[var(--color-text)] font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-[var(--color-text-muted)]">
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">{t('footer.links.privacy')}</a></li>
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">{t('footer.links.terms')}</a></li>
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">SUNAT</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-[var(--color-text-muted)]">
            {t('footer.copyright')}
          </div>
          <div className="flex items-center gap-6 text-sm text-[var(--color-text-muted)]">
            <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[var(--color-accent)] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
