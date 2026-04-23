/**
 * ContactSection.tsx
 * =================
 * Sección de contacto para recibir feedback de usuarios.
 * Layout: 3 columnas con fondo oscuro (imagen | título 50% | formulario)
 */

import { Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section 
      id="contact" 
      className="py-16 md:py-20 lg:py-24 px-[1%] bg-[var(--color-background)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-6 gap-4 lg:gap-6 items-stretch" style={{ minHeight: '500px' }}>
          
          {/* Columna 1: Imagen - misma altura que la sección */}
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

          {/* Columna 2: Título - más relevante */}
          <div className="col-span-2 flex flex-col px-4" style={{ paddingTop: '60px' }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)]" style={{ fontFamily: 'var(--font-display)' }}>
              Tu opinión
              <br />
              <span className="text-[var(--color-accent)]">nos importa</span>
            </h2>
            <p className="text-base text-[var(--color-text-muted)] mt-5 leading-relaxed">
              Ayúdanos a mejorar. Envíanos tus sugerencias, reporta errores o cuéntanos cómo podemos ayudarte mejor a transformar tus finanzas.
            </p>
          </div>

          {/* Columna 3: Formulario - misma altura */}
          <div className="col-span-2">
            <div className="h-full min-h-[400px] bg-[var(--color-surface)] rounded-2xl p-5 border border-[var(--color-border)] flex flex-col">
              <form className="flex flex-col h-full space-y-3">
                <div className="space-y-2">
                  <input 
                    type="text" 
                    placeholder="Tu nombre"
                    className="w-full px-4 py-4 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl text-base text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] outline-none transition-all"
                  />
                  <input 
                    type="email" 
                    placeholder="Tu email"
                    className="w-full px-4 py-4 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl text-base text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] outline-none transition-all"
                  />
                </div>
                
                <textarea 
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 min-h-[140px] w-full px-4 py-4 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl text-base text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] outline-none transition-all resize-none"
                ></textarea>
                
                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-base font-semibold text-[var(--color-background)] hover:opacity-90 transition-opacity mt-auto"
                >
                  <span>Enviar mensaje</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}