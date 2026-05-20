import { ParallaxHero } from './components/ui/ParallaxHero';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LoadingOverlay } from './components/layout/LoadingOverlay';
import { StickyCta } from './components/StickyCta';
import { AppPreviewSection } from './components/sections/AppPreviewSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { ComparisonSection } from './components/sections/ComparisonSection';
import { BrandsCarouselSection } from './components/sections/BrandsCarouselSection';
import { DownloadSection } from './components/sections/DownloadSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { SupportSection } from './components/sections/SupportSection';
// Inicialización de i18next para traducciones multilenguaje (es/en)
import './i18n';

/**
 * Stack: Vite + React + TypeScript + Tailwind CSS + i18next
 * Estructura: Incluye Navbar, secciones alternando temas oscuros/claros, y Footer.
 */
function App() {
  return (
    <div className="relative min-h-screen bg-bg-dark font-body text-text overflow-x-hidden">
      {/* Enlace de accesibilidad WCAG: salto rápido al contenido principal para lectores de pantalla */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-primary)] focus:text-white focus:rounded-lg focus:font-medium"
      >
        Saltar al contenido principal
      </a>
      {/* Overlay de carga inicial de la aplicación */}
      <LoadingOverlay />
      {/* Botón de llamada a la acción flotante persistente */}
      <StickyCta />
      {/* Barra de navegación principal */}
      <Navbar />
      
      {/* Contenido principal de la landing page, secciones alternando fondos oscuros (section-dark) y claros (section-light) */}
      <main id="main-content" className="relative z-10 flex flex-col overflow-x-hidden" tabIndex={-1}>
        {/* Hero section con efecto parallax */}
        <ParallaxHero />
        {/* Sección de estadísticas integrada en el hero */}
        
        <div className="section-light"><AppPreviewSection /></div>
        {/* Sección de vista previa de la interfaz de la app */}
        
        <div className="section-dark"><FeaturesSection /></div>
        {/* Sección de funcionalidades principales de la app */}
        
        <div className="section-light"><BenefitsSection /></div>
        {/* Sección de beneficios de usar la aplicación */}
        
        <div className="section-dark"><ComparisonSection /></div>
        {/* Sección de comparativa con soluciones similares */}
        
        <div className="section-dark radial-glow-accent"><BrandsCarouselSection /></div>
        {/* Carrusel de marcas/clientes que usan la app */}
        
        <div className="section-light"><DownloadSection /></div>
        {/* Sección de descarga de la aplicación */}
        
        <div className="section-dark"><TestimonialsSection /></div>
        {/* Sección de testimonios de usuarios */}
        
        <div className="section-dark"><SupportSection /></div>
        {/* Sección de opciones de soporte técnico */}
      </main>
      
      {/* Pie de página con enlaces e información legal */}
      <Footer />
    </div>
  );
}

export default App;