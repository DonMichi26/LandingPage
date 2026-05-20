import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';

const logoSvg = `<svg viewBox="0 0 120 48" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" y="8" width="44" height="32" rx="4" stroke="#94a3b8" strokeWidth="1.5"/>
  <rect x="6" y="14" width="12" height="8" rx="1.5" fill="#94a3b8" opacity="0.3"/>
  <rect x="6" y="26" width="12" height="8" rx="1.5" fill="#94a3b8" opacity="0.3"/>
  <rect x="22" y="14" width="20" height="3" rx="1.5" fill="#94a3b8" opacity="0.5"/>
  <rect x="22" y="20" width="16" height="2" rx="1" fill="#94a3b8" opacity="0.25"/>
  <rect x="22" y="26" width="18" height="2" rx="1" fill="#94a3b8" opacity="0.25"/>
  <rect x="22" y="32" width="14" height="2" rx="1" fill="#94a3b8" opacity="0.25"/>
  <circle cx="66" cy="24" r="16" stroke="#94a3b8" strokeWidth="1.5"/>
  <path d="M72 20l-8 8-4-4" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <text x="95" y="28" fill="#94a3b8" fontSize="13" fontWeight="600" fontFamily="system-ui" textAnchor="middle">BANK</text>
</svg>`;

export function BrandsCarouselSection() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const logos = Array(12).fill(logoSvg);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const animationDuration = scrollWidth / 50;

    container.style.setProperty('--scroll-duration', `${animationDuration}s`);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 tracking-tight">
            {t('partners.title')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div 
          ref={containerRef}
          className="flex gap-12 md:gap-20"
          style={{
            width: 'fit-content',
            animation: 'scroll 120s linear infinite',
            filter: 'grayscale(100%) opacity(0.6)',
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-40 md:w-52 lg:w-64 opacity-40 hover:opacity-70 transition-opacity duration-300"
              dangerouslySetInnerHTML={{ __html: logo }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}