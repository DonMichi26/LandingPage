import { lazy, Suspense } from 'react';
import { ParallaxHero } from './components/ui/ParallaxHero';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LoadingOverlay } from './components/layout/LoadingOverlay';
import { StickyCta } from './components/StickyCta';
import './i18n';

const AppPreviewSection = lazy(() => import('./components/sections/AppPreviewSection').then(m => ({ default: m.AppPreviewSection })));
const FeaturesSection = lazy(() => import('./components/sections/FeaturesSection').then(m => ({ default: m.FeaturesSection })));
const BenefitsSection = lazy(() => import('./components/sections/BenefitsSection').then(m => ({ default: m.BenefitsSection })));
const ComparisonSection = lazy(() => import('./components/sections/ComparisonSection').then(m => ({ default: m.ComparisonSection })));
const BrandsCarouselSection = lazy(() => import('./components/sections/BrandsCarouselSection').then(m => ({ default: m.BrandsCarouselSection })));
const DownloadSection = lazy(() => import('./components/sections/DownloadSection').then(m => ({ default: m.DownloadSection })));
const TestimonialsSection = lazy(() => import('./components/sections/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const SupportSection = lazy(() => import('./components/sections/SupportSection').then(m => ({ default: m.SupportSection })));

function SectionFallback() {
  return <div className="h-64 bg-[var(--color-background)] animate-pulse" />;
}

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
        
        <Suspense fallback={<SectionFallback />}>
          <div className="section-light"><AppPreviewSection /></div>
          <div className="section-dark"><FeaturesSection /></div>
          <div className="section-light"><BenefitsSection /></div>
          <div className="section-dark"><ComparisonSection /></div>
          <div className="section-dark radial-glow-accent"><BrandsCarouselSection /></div>
          <div className="section-light"><DownloadSection /></div>
          <div className="section-light"><TestimonialsSection /></div>
          <div className="section-dark"><SupportSection /></div>
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
