import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, HelpCircle, CreditCard, Send, ArrowRight, Play } from 'lucide-react';
import { useParticles } from '../../hooks/useParticles';
import { useMousePosition } from '../../hooks/useMousePosition';
import { GlowingOrbs } from '../ui/GlowingOrbs';
import { ParticleField } from '../ui/ParticleField';
import { MouseGlow } from '../ui/MouseGlow';

const faqIcons = [MessageCircle, HelpCircle, CreditCard];
const faqKeys = ['1', '2', '3'];

interface FaqItemProps {
  question: string;
  answer: string;
  icon: React.ElementType;
  index: number;
}

function FaqCard({ question, answer, icon: Icon, index }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = `faq-answer-${index}`;

  return (
    <div 
      className={`rounded-2xl border transition-all duration-300 ${
        isOpen 
          ? 'bg-[var(--color-primary)]/10 border-[var(--color-accent)]/40' 
          : 'bg-white/5 border-white/10 hover:border-[var(--color-accent)]/30'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 p-5 text-left group"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
          isOpen ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-primary)]/20 group-hover:bg-[var(--color-primary)]/30'
        }`}>
          <Icon className={`w-5 h-5 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-[var(--color-accent)]'}`} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-white pr-2">
            {question}
          </h3>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-[var(--color-accent)]' : 'bg-white/5'}`}>
          <svg 
            className={`w-4 h-4 text-white/70 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div 
        id={contentId}
        className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-5 pb-5 pt-0 pl-[4.5rem]">
          <p className="text-white/70 leading-relaxed text-sm">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function SupportSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const particles = useParticles(50, { minOpacity: 0.2, maxOpacity: 0.6, minSize: 2, maxSize: 4, minDuration: 12, maxDuration: 20 });
  const mousePos = useMousePosition(sectionRef);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = t('support.form.nameRequired', 'El nombre es requerido');
    if (!formData.email.trim()) errors.email = t('support.form.emailRequired', 'El email es requerido');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = t('support.form.emailInvalid', 'Email inválido');
    if (!formData.message.trim()) errors.message = t('support.form.messageRequired', 'El mensaje es requerido');
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formErrors[field]) setFormErrors(prev => ({ ...prev, [field]: '' }));
  };

  return (
    <section ref={sectionRef} id="support" className="bg-black relative overflow-hidden">
      <GlowingOrbs
        orbs={[
          { top: '-20px', right: '-20px', width: '500px', height: '500px', color: 'primary', opacity: 0.4, blur: '80px' },
          { top: '-10px', left: '-128px', width: '400px', height: '400px', color: 'accent', opacity: 0.35, blur: '60px' },
          { top: '33%', right: '40px', width: '250px', height: '250px', color: 'primary', opacity: 0.3, blur: '50px' },
          { bottom: '80px', left: '-80px', width: '350px', height: '350px', color: 'accent', opacity: 0.25, blur: '70px' },
          { bottom: '-40px', right: '25%', width: '200px', height: '200px', color: 'primary', opacity: 0.2, blur: '40px' },
          { top: '25%', left: '25%', width: '180px', height: '180px', color: 'accent', opacity: 0.25, blur: '50px' },
          { top: '66%', right: '33%', width: '150px', height: '150px', color: 'primary', opacity: 0.2, blur: '40px' },
          { bottom: '33%', left: '40px', width: '120px', height: '120px', color: 'accent', opacity: 0.25, blur: '30px' },
        ]}
        overlay
        overlayColor="rgba(0,0,0,0.6)"
      />
      <div className="absolute inset-0 opacity-[0.03]"
           style={{ backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <ParticleField particles={particles} animation="float" />
      <MouseGlow mousePos={mousePos} opacity={0.15} />
      
      <div className="relative z-10">
        {/* FAQ Section */}
        <div className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display mb-4">
                  {t('faq.title')}
                </h2>
                <p className="text-[var(--color-text-muted)] text-lg">
                  Todo lo que necesitas saber
                </p>
              </div>

              <div className="space-y-4">
                {faqKeys.map((key, index) => (
                  <FaqCard
                    key={key}
                    index={index}
                    icon={faqIcons[index]}
                    question={t(`faq.items.${key}.question`)}
                    answer={t(`faq.items.${key}.answer`)}
                  />
                ))}
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="sticky top-32">
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-border)]/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-[var(--color-accent)]/20 flex items-center justify-center">
                      <MessageCircle className="w-12 h-12 text-[var(--color-accent)]" />
                    </div>
                    <p className="text-white font-medium">Imagen FAQ</p>
                    <p className="text-[var(--color-text-muted)] text-sm mt-2">Placeholder para ilustración</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 md:py-20 lg:py-24 px-[1%]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-6 gap-4 lg:gap-6 items-stretch" style={{ minHeight: '500px' }}>
            
            <div className="col-span-2 relative overflow-hidden rounded-2xl">
              <img 
                src="/Asesor.png" 
                alt="Asesor Smart Finance"
                className="w-full h-full object-cover object-top"
                style={{ minHeight: '400px' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
            </div>

            <div className="col-span-2 flex flex-col px-4" style={{ paddingTop: '60px' }}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-[var(--color-text)]">
                  {t('support.title')}
                  <br />
                  <span className="text-[var(--color-accent)]">{t('support.titleSuffix')}</span>
                </h2>
                <p className="text-base text-[var(--color-text-muted)] mt-5 leading-relaxed">
                {t('support.subtitle')}
              </p>
            </div>

            <div className="col-span-2">
              <div className="h-full min-h-[400px] bg-[var(--color-surface)] rounded-2xl p-5 border border-[var(--color-border)] flex flex-col">
                <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-3" noValidate>
                  <div className="space-y-2">
                    <div>
                      <label htmlFor="contact-name" className="sr-only">{t('support.form.name')}</label>
                      <input 
                        id="contact-name"
                        type="text" 
                        placeholder={t('support.form.name')}
                        value={formData.name}
                        onChange={e => handleChange('name', e.target.value)}
                        aria-required="true"
                        aria-invalid={!!formErrors.name}
                        aria-describedby={formErrors.name ? 'name-error' : undefined}
                        className={`w-full px-4 py-4 bg-[var(--color-background)] border ${formErrors.name ? 'border-red-500' : 'border-[var(--color-border)]'} rounded-xl text-base text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] outline-none transition-all`}
                      />
                      {formErrors.name && <p id="name-error" className="text-red-400 text-xs mt-1 px-1" role="alert">{formErrors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="sr-only">{t('support.form.email')}</label>
                      <input 
                        id="contact-email"
                        type="email" 
                        placeholder={t('support.form.email')}
                        value={formData.email}
                        onChange={e => handleChange('email', e.target.value)}
                        aria-required="true"
                        aria-invalid={!!formErrors.email}
                        aria-describedby={formErrors.email ? 'email-error' : undefined}
                        className={`w-full px-4 py-4 bg-[var(--color-background)] border ${formErrors.email ? 'border-red-500' : 'border-[var(--color-border)]'} rounded-xl text-base text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] outline-none transition-all`}
                      />
                      {formErrors.email && <p id="email-error" className="text-red-400 text-xs mt-1 px-1" role="alert">{formErrors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <label htmlFor="contact-message" className="sr-only">{t('support.form.message')}</label>
                    <textarea 
                      id="contact-message"
                      placeholder={t('support.form.message')}
                      value={formData.message}
                      onChange={e => handleChange('message', e.target.value)}
                      aria-required="true"
                      aria-invalid={!!formErrors.message}
                      aria-describedby={formErrors.message ? 'message-error' : undefined}
                      className={`flex-1 min-h-[140px] w-full px-4 py-4 bg-[var(--color-background)] border ${formErrors.message ? 'border-red-500' : 'border-[var(--color-border)]'} rounded-xl text-base text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] outline-none transition-all resize-none`}
                    ></textarea>
                    {formErrors.message && <p id="message-error" className="text-red-400 text-xs mt-1 px-1" role="alert">{formErrors.message}</p>}
                  </div>
                  
                  {formStatus === 'sent' && (
                    <div role="alert" aria-live="polite" className="px-4 py-3 rounded-xl bg-green-500/20 border border-green-500/40 text-green-400 text-sm text-center">
                      {t('support.form.sent')}
                    </div>
                  )}
                  
                  {formStatus === 'error' && (
                    <div role="alert" aria-live="assertive" className="px-4 py-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-400 text-sm text-center">
                      {t('support.form.error')}
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    disabled={formStatus === 'sending'}
                    className="w-full flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-base font-semibold text-[var(--color-background)] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity mt-auto"
                  >
                    {formStatus === 'sending' ? (
                      <>{t('support.form.sending')}</>
                    ) : (
                      <>
                        <span>{t('support.form.submit')}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 md:py-16 lg:py-20 px-[1%] pb-20">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[var(--color-surface)] via-[var(--color-surface-elevated)] to-[var(--color-surface)]">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-surface)] via-[var(--color-surface-elevated)] to-[var(--color-surface)]" />
            
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent)] rounded-full blur-[120px]" />
              <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[var(--color-primary)] rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 px-[1%] py-8 md:py-10">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <span className="text-xs font-medium text-[var(--color-accent)]">
                  {t('cta.badge')}
                </span>
              </div>

              <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.1] font-display text-[var(--color-text)]"
              >
                {t('cta.heading')}
                <br />
                <span className="text-[var(--color-accent)]">{t('cta.headingSuffix')}</span>
              </h2>

              <p className="text-sm text-[var(--color-text-muted)] max-w-md mt-3 mb-6">
                {t('cta.users')}
              </p>

              <div className="flex flex-col sm:flex-row gap-2">
                <button className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-sm font-semibold text-[var(--color-background)] hover:opacity-90 transition-opacity">
                  <span>{t('cta.button')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-border)] text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
                  <span className="w-7 h-7 rounded-full bg-[var(--color-surface)] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-background)] transition-colors">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </span>
                  <span>{t('cta.demo')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>

    </section>
  );
}