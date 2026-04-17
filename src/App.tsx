import { ParallaxHero } from './components/ui/ParallaxHero';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LoadingOverlay } from './components/layout/LoadingOverlay';
import { ScrollReveal } from './components/ScrollReveal';
import { FadeOnScroll } from './components/FadeOnScroll';
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