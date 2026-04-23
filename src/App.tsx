import { ParallaxHero } from './components/ui/ParallaxHero';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LoadingOverlay } from './components/layout/LoadingOverlay';
import { StickyCta } from './components/StickyCta';
import { StatsSection } from './components/sections/StatsSection';
import { AppPreviewSection } from './components/sections/AppPreviewSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { ComparisonSection } from './components/sections/ComparisonSection';
import { BrandsCarouselSection } from './components/sections/BrandsCarouselSection';
import { DownloadSection } from './components/sections/DownloadSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { FaqSection } from './components/sections/FaqSection';
import { ContactSection } from './components/sections/ContactSection';
import { CtaSection } from './components/sections/CtaSection';
import './i18n';

function App() {
  return (
    <div className="relative min-h-screen bg-bg-dark font-body text-text overflow-x-hidden">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-primary)] focus:text-white focus:rounded-lg focus:font-medium"
      >
        Saltar al contenido principal
      </a>
      <LoadingOverlay />
      <StickyCta />
      <Navbar />
      
      <main id="main-content" className="relative z-10 flex flex-col overflow-x-hidden" tabIndex={-1}>
        <ParallaxHero />
        
        <div className="section-dark"><StatsSection /></div>
        
        <div className="section-light"><AppPreviewSection /></div>
        
        <div className="section-dark"><FeaturesSection /></div>
        
        <div className="section-light"><BenefitsSection /></div>
        
        <div className="section-dark"><ComparisonSection /></div>
        
        <div className="section-dark radial-glow-accent"><BrandsCarouselSection /></div>
        
        <div className="section-light"><DownloadSection /></div>
        
        <div className="section-dark"><TestimonialsSection /></div>
        
        <div className="section-light"><FaqSection /></div>
        
        <div className="section-dark"><ContactSection /></div>
        
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;