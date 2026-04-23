/**
 * Footer.tsx
 * ==========
 * Footer profesional con columnas: logo, contacto, redes sociales y licencia.
 * Diseño limpio con énfasis en la licencia de uso personal.
 */

import { Smartphone, Mail, Phone } from 'lucide-react';

// =============================================================================
// ICONOS SVG: Redes Sociales (inline para reducir dependencias)
// =============================================================================
const SocialIcon = ({ type }: { type: 'twitter' | 'linkedin' | 'instagram' | 'youtube' }) => {
  const icons = {
    twitter: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L5.82 21.75H2.474l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 01-2.064-2.065 2.067 2.067 0 112.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-1.016 4.587-1.007 4.921-.476 1.38-2.001 4.762-4.913 4.762-2.912 0-4.437-2.382-4.913-4.762C4.016 12.61 3 11.238 3 9.033c0-3.204.012-3.584.07-4.849C3.321 1.265 3.84-.183 5.091.058c1.266.068 1.645.07 4.849.07h.06zm5.165 1.97c-.298-.07-1.613-.07-1.972-.07-1.335 0-1.752.055-2.325.193-.566.137-.97.492-1.189 1.088-.212.586-.315 1.544-.315 3.102 0 1.558.103 2.516.315 3.102.218.596.623.951 1.189 1.088.573.138.99.193 2.325.193 1.359 0 1.674-.055 1.972-.07.286-.014.532-.055.775-.098.235-.042.449-.139.646-.291.197-.153.35-.349.475-.646.125-.298.18-.636.217-.951.04-.315.061-.566.07-.775.014-.298.07-1.613.07-1.972s-.056-1.674-.07-1.972c-.01-.235-.055-.532-.07-.775-.055-.235-.139-.449-.217-.775zm-3.38-1.448c.596 0 1.08.484 1.08 1.08 0 .596-.484 1.08-1.08 1.08-.596 0-1.08-.484-1.08-1.08 0-.596.484-1.08 1.08-1.08zm4.836 0c.596 0 1.08.484 1.08 1.08 0 .596-.484 1.08-1.08 1.08-.596 0-1.08-.484-1.08-1.08 0 .596.484-1.08 1.08-1.08zM12 16.76c-2.643 0-4.784-2.141-4.784-4.784 0-2.643 2.141-4.784 4.784-4.784 2.643 0 4.784 2.141 4.784 4.784 0 2.643-2.141 4.784-4.784 4.784zm0-7.072c-1.261 0-2.288 1.027-2.288 2.288s1.027 2.288 2.288 2.288 2.288-1.027 2.288-2.288-1.027-2.288-2.288-2.288z"/>
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  };
  return icons[type];
};

// =============================================================================
// CONSTANTES
// =============================================================================
const currentYear = new Date().getFullYear();

const socialLinks = [
  { id: 'twitter', href: '#' },
  { id: 'linkedin', href: '#' },
  { id: 'instagram', href: '#' },
  { id: 'youtube', href: '#' },
];

// =============================================================================
// COMPONENTE PRINCIPAL
// =============================================================================
export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-surface)]/20" />
      
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        
        {/* Grid de columnas */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          
          {/* Columna 1: Logo y descripción */}
          <div className="col-span-3 sm:col-span-1 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)] flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-[var(--color-background)]" />
              </div>
              <span className="text-sm font-bold">
                <span className="text-[var(--color-text)]">Smart</span>
                <span className="text-[var(--color-accent)]">Finance</span>
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-muted)] hidden sm:block">
              Banca digital en Perú.
            </p>
          </div>

          {/* Columna 2: Contacto */}
          <div className="col-span-1 space-y-1 hidden sm:block">
            <h3 className="text-xs font-semibold text-[var(--color-text)] uppercase mb-2">
              Contacto
            </h3>
            <div className="space-y-1">
              <a href="mailto:hola@smartfinance.pe" className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                <Mail className="w-3 h-3 text-[var(--color-accent)]" />
                <span>hola@smartfinance.pe</span>
              </a>
              <a href="tel:+51999888777" className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                <Phone className="w-3 h-3 text-[var(--color-accent)]" />
                <span>+51 999 888 777</span>
              </a>
            </div>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div className="col-span-3 sm:col-span-1 space-y-1">
            <h3 className="text-xs font-semibold text-[var(--color-text)] uppercase mb-2">
              Síguenos
            </h3>
            <div className="flex gap-2">
              {socialLinks.map(({ id, href }) => (
                <a
                  key={id}
                  href={href}
                  aria-label={id}
                  className="w-7 h-7 rounded-lg bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[var(--color-accent)] hover:text-[var(--color-background)] transition-all"
                >
                  <SocialIcon type={id as 'twitter' | 'linkedin' | 'instagram' | 'youtube'} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="w-full h-px bg-[var(--color-border)] mb-5" />

        {/* Sección de Licencia */}
        <div className="bg-[var(--color-surface)]/50 rounded-lg p-3 mb-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <p className="text-xs font-semibold text-[var(--color-text)]">
                LICENCIA DE USO PERSONAL
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">
                Uso exclusivamente personal. Prohibida distribución sin autorización.
              </p>
            </div>
            <span className="text-xs px-2 py-1 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              Solo uso personal
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-1">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {currentYear} Smart Finance.
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            Gestión financiera Perú con SUNAT.
          </p>
        </div>

      </div>
    </footer>
  );
}