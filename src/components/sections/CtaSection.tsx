/**
 * CtaSection.tsx
 * ==========
 * Sección CTA con diseño distintivo y profesional.
 * Evita AI slop aesthetics con composición intencional.
 * 
 * @features
 * - Layout asimétrico con énfasis en texto
 * - Botones con jerarquía clara
 * - Sin gradient text (prohibido)
 * - Sin border-left stripes (prohibido)
 */

import { useTranslation } from 'react-i18next';
import { ArrowRight, Play } from 'lucide-react';

// =============================================================================
// COMPONENTE PRINCIPAL
// =============================================================================
export function CtaSection() {
  const { t } = useTranslation();

  return (
    <section 
      id="cta" 
      className="py-12 md:py-16 lg:py-20 px-[1%]"
    >
      {/* Contenedor con esquinas redondeadas */}
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden">
        <div className="relative overflow-hidden">
          {/* Fondo */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-surface)] via-[var(--color-surface-elevated)] to-[var(--color-surface)]" />
          
          {/* Orbes decorativos */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent)] rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[var(--color-primary)] rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 px-[1%] py-8 md:py-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span className="text-xs font-medium text-[var(--color-accent)]">
                Nueva versión
              </span>
            </div>

            {/* Título */}
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.1] text-[var(--color-text)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ¿Listo para transformar
              <br />
              <span className="text-[var(--color-accent)]">tus finanzas?</span>
            </h2>

            {/* Subtítulo */}
            <p className="text-sm text-[var(--color-text-muted)] max-w-md mt-3 mb-6">
              Únete a +100K usuarios que ya disfrutan de la mejor experiencia en gestión financiera.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-2">
              <button className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-sm font-semibold text-[var(--color-background)] hover:opacity-90 transition-opacity">
                <span>{t('cta.button')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-border)] text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
                <span className="w-7 h-7 rounded-full bg-[var(--color-surface)] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-background)] transition-colors">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </span>
                <span>Ver demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}