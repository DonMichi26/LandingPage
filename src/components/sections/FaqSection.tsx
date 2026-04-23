import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, HelpCircle, CreditCard, Shield } from 'lucide-react';

const faqIcons = [
  MessageCircle,
  HelpCircle,
  CreditCard,
  Shield,
];

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

export function FaqSection() {
  const { t } = useTranslation();

  return (
    <section id="faq" className="py-20 md:py-28 bg-gradient-to-br from-[var(--color-text-dark)] via-[var(--color-surface)] to-[var(--color-text-dark)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
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
    </section>
  );
}