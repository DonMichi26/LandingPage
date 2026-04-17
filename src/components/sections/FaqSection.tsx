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
}

function FaqCard({ question, answer, icon: Icon }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
        isOpen 
          ? 'bg-gradient-to-br from-[#0066ff] to-[#00d4ff]' 
          : 'bg-white border border-[#e2e8f0] hover:border-[#00d4ff]/50 hover:shadow-lg hover:shadow-[#00d4ff]/10'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start gap-4 p-6 text-left"
      >
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
          isOpen ? 'bg-white/20' : 'bg-[#f1f5f9]'
        }`}>
          <Icon className={`w-6 h-6 ${isOpen ? 'text-white' : 'text-[#0066ff]'}`} />
        </div>
        <div className="flex-1 pr-4">
          <h3 className={`font-semibold text-lg ${isOpen ? 'text-white' : 'text-[#0c1222]'}`}>
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
            : 'bg-[#f1f5f9] text-[#94a3b8]'
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
    <section id="faq" className="py-20 md:py-28 bg-gradient-to-br from-[#0c1222] via-[#0f2744] to-[#0c1222]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-[#94a3b8] text-lg">
            Todo lo que necesitas saber
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {faqKeys.map((key, index) => (
            <FaqCard
              key={key}
              icon={faqIcons[index]}
              question={t(`faq.items.${key}.question`)}
              answer={t(`faq.items.${key}.answer`)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#94a3b8]">
            ¿Aún tienes dudas?{' '}
            <a href="#contact" className="text-[#00d4ff] hover:underline font-medium">
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}