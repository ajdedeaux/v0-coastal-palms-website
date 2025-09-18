import { Header } from "@/components/header"
import { RushHotlineBanner } from "@/components/rush-hotline-banner"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioGallery } from "@/components/portfolio-gallery"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CoverageSection } from "@/components/coverage-section"
import { FAQSection } from "@/components/faq-section"
import { QuoteFormSection } from "@/components/quote-form-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <RushHotlineBanner />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioGallery />
        <HowItWorksSection />
        <CoverageSection />
        <FAQSection />
        <QuoteFormSection />
      </main>
      <Footer />
    </div>
  )
}
