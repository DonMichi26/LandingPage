import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, HelpCircle, CreditCard, Shield } from 'lucide-react';

const faqIcons = [
  MessageCircle,
  HelpCircle,
  CreditCard,
  Shield,
];

const faqKeys = ['1', '2', '3', '4'];

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
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
        isOpen 
          ? 'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]' 
          : 'bg-white border border-[var(--color-border-light)] hover:border-[var(--color-accent)]/50 hover:shadow-xl hover:shadow-[var(--color-accent)]/15'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start gap-4 p-6 text-left"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
          isOpen ? 'bg-white/20' : 'bg-[var(--color-bg-light)]'
        }`}>
          <Icon className={`w-6 h-6 ${isOpen ? 'text-white' : 'text-[var(--color-primary)]'}`} />
        </div>
        <div className="flex-1 pr-4">
          <h3 className={`font-semibold text-lg ${isOpen ? 'text-white' : 'text-[var(--color-text-dark)]'}`}>
            {question}
          </h3>
          {isOpen && (
            <p className={`mt-3 leading-relaxed ${isOpen ? 'text-white/90' : ''}`}>
              {answer}
            </p>
          )}
        </div>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
          isOpen 
            ? 'bg-white/20 text-white' 
            : 'bg-[var(--color-bg-light)] text-[var(--color-text-secondary)]'
        }`}>
          <svg 
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
    </div>
  );
}

export function FaqSection() {
  const { t } = useTranslation();

  return (
    <section id="faq" className="py-20 md:py-28 bg-gradient-to-br from-[var(--color-text-dark)] via-[var(--color-surface)] to-[var(--color-text-dark)]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            {t('faq.title')}
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg">
            Todo lo que necesitas saber
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
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

        <div className="mt-12 text-center">
          <p className="text-[var(--color-text-muted)]">
            ¿Aún tienes dudas?{' '}
            <a href="#contact" className="text-[var(--color-accent)] hover:underline font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 rounded-sm">
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}