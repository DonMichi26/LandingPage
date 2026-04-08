import { useTranslation } from 'react-i18next';
import { Smartphone } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-b from-[#0c1222] to-[#0a0f1a] py-12 px-4 border-t border-[#38bdf8]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#0066ff] to-[#00d4ff] rounded-lg flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-white">TuLogo</span>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.links.product')}</h4>
            <ul className="space-y-2 text-[#94a3b8]">
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.links.company')}</h4>
            <ul className="space-y-2 text-[#94a3b8]">
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.links.legal')}</h4>
            <ul className="space-y-2 text-[#94a3b8]">
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">{t('footer.links.privacy')}</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">{t('footer.links.terms')}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#38bdf8]/10 pt-8 text-center text-[#94a3b8]">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}