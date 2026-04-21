import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-[var(--color-text)]">Hablemos de tu</span>
              <br />
              <span className="text-gradient">crecimiento</span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-lg mb-10 max-w-lg">
              Nuestro equipo de expertos financieros está listo para ayudarte a modernizar tu gestión de gastos.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center group-hover:bg-[var(--color-accent)]/10 transition-colors">
                  <Mail className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <div className="text-sm text-[var(--color-text-muted)] mb-1">Email</div>
                  <div className="text-lg font-semibold text-[var(--color-text)]">hola@smartfinance.pe</div>
                </div>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center group-hover:bg-[var(--color-accent)]/10 transition-colors">
                  <Phone className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <div className="text-sm text-[var(--color-text-muted)] mb-1">WhatsApp</div>
                  <div className="text-lg font-semibold text-[var(--color-text)]">+51 999 888 777</div>
                </div>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center group-hover:bg-[var(--color-accent)]/10 transition-colors">
                  <MapPin className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <div className="text-sm text-[var(--color-text-muted)] mb-1">Oficina</div>
                  <div className="text-lg font-semibold text-[var(--color-text)]">San Isidro, Lima</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[var(--color-text)] ml-1">Nombre</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre"
                    className="w-full px-5 py-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] outline-none transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[var(--color-text)] ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="tu@email.com"
                    className="w-full px-5 py-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] outline-none transition-all duration-300"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--color-text)] ml-1">Asunto</label>
                <select className="w-full px-5 py-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all duration-300 appearance-none">
                  <option>Soporte Técnico</option>
                  <option>Ventas / Business</option>
                  <option>Integración SUNAT</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--color-text)] ml-1">Mensaje</label>
                <textarea 
                  rows={4} 
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full px-5 py-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full justify-center !py-4">
                Enviar Mensaje
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}