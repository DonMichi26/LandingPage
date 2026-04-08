import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-[#0c1222] to-[#0f2744]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#00d4ff]" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Email</h3>
                <p className="text-[#94a3b8]">{t('contact.info.email')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#00d4ff]" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Teléfono</h3>
                <p className="text-[#94a3b8]">{t('contact.info.phone')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#00d4ff]" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Ubicación</h3>
                <p className="text-[#94a3b8]">{t('contact.info.address')}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-4 bg-[#1a2744]/50 border border-[#38bdf8]/10 rounded-xl text-white placeholder-[#94a3b8] focus:ring-2 focus:ring-[#00d4ff] focus:border-[#00d4ff] outline-none transition-colors"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-4 bg-[#1a2744]/50 border border-[#38bdf8]/10 rounded-xl text-white placeholder-[#94a3b8] focus:ring-2 focus:ring-[#00d4ff] focus:border-[#00d4ff] outline-none transition-colors"
                placeholder="tu@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-4 bg-[#1a2744]/50 border border-[#38bdf8]/10 rounded-xl text-white placeholder-[#94a3b8] focus:ring-2 focus:ring-[#00d4ff] focus:border-[#00d4ff] outline-none transition-colors resize-none"
                placeholder="¿En qué podemos ayudarte?"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:from-[#0052cc] hover:to-[#00b8e6] disabled:opacity-50 text-white py-4 px-6 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-[#00d4ff]/20"
            >
              {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}