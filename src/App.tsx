import { ParallaxHero } from './components/ParallaxHero';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LoadingOverlay } from './components/LoadingOverlay';
import { ScrollReveal } from './components/ScrollReveal';
import { FadeOnScroll } from './components/FadeOnScroll';
import { StatsSection } from './sections/StatsSection';
import { AppPreviewSection } from './sections/AppPreviewSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { BenefitsSection } from './sections/BenefitsSection';
import { ComparisonSection } from './sections/ComparisonSection';
import { BrandsCarouselSection } from './sections/BrandsCarouselSection';
import { DownloadSection } from './sections/DownloadSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FaqSection } from './sections/FaqSection';
import { ContactSection } from './sections/ContactSection';
import { CtaSection } from './sections/CtaSection';
import './i18n';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <LoadingOverlay />
      <Navbar />
      <main>
        <ParallaxHero />
        
        <ScrollReveal direction="up" delay={0.1}>
          <StatsSection />
        </ScrollReveal>
        
        <ScrollReveal direction="none" delay={0.2}>
          <AppPreviewSection />
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.15}>
          <FeaturesSection />
        </ScrollReveal>
        
        <FadeOnScroll>
          <BenefitsSection />
        </FadeOnScroll>
        
        <ScrollReveal direction="left" delay={0.1}>
          <ComparisonSection />
        </ScrollReveal>
        
        <ScrollReveal direction="right" delay={0.1}>
          <BrandsCarouselSection />
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.2}>
          <DownloadSection />
        </ScrollReveal>
        
        <FadeOnScroll>
          <TestimonialsSection />
        </FadeOnScroll>
        
        <ScrollReveal direction="up" delay={0.1}>
          <FaqSection />
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.15}>
          <ContactSection />
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.1}>
          <CtaSection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;