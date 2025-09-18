import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WarehouseSection } from "@/components/warehouse-section"
import { PortfolioGallery } from "@/components/portfolio-gallery"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CoverageSection } from "@/components/coverage-section"
import { FAQSection } from "@/components/faq-section"
import { QuoteFormSection } from "@/components/quote-form-section"
import { Footer } from "@/components/footer"
import { TrustBadge } from "@/components/trust-badge"
import { RushBannerFloating } from "@/components/rush-banner-floating"
import { MobileRushBar } from "@/components/mobile-rush-bar"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WarehouseSection />
        <TrustBadge />
        <PortfolioGallery />
        <HowItWorksSection />
        <CoverageSection />
        <FAQSection />
        <QuoteFormSection />
      </main>
      <Footer />
      <RushBannerFloating />
      <MobileRushBar />
    </div>
  )
}
