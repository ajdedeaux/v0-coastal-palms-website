import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Building2, Zap } from "@/components/icon-placeholder"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-background py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-balance font-[family-name:var(--font-playfair)]">
                Tampa Bay's Premier <span className="text-primary">White-Glove Delivery Partner</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
                Trusted by Pulte Homes, Richmond American, and Wayfair for flawless furniture installations and
                logistics solutions.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:gap-4">
              <Button size="lg" className="w-full md:w-auto text-lg px-8 min-h-[48px]">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="w-full md:w-auto text-lg px-8 bg-transparent min-h-[48px]">
                <a href="tel:8138768314" className="flex items-center justify-center w-full">
                  Call Rush Hotline
                </a>
              </Button>
            </div>

            <div className="hidden md:flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Licensed & Insured FL Logistics Provider</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">500+ Model Homes Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Same-Day Rush Available</span>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 mt-6">
              <div className="bg-primary/10 border border-primary/20 rounded-lg px-3 py-2 md:px-4 md:py-3 flex-1 md:flex-none">
                <span className="text-2xl md:text-3xl font-bold text-primary">500+</span>
                <span className="text-xs md:text-sm text-muted-foreground ml-1 md:ml-2 block md:inline">
                  Successful Installs
                </span>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg px-3 py-2 md:px-4 md:py-3 flex-1 md:flex-none">
                <span className="text-2xl md:text-3xl font-bold text-primary">3+</span>
                <span className="text-xs md:text-sm text-muted-foreground ml-1 md:ml-2 block md:inline">
                  Years Serving Tampa
                </span>
              </div>
            </div>
          </div>

          <div className="relative order-2 lg:order-2">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/living-room-1.jpeg"
                alt="Beautifully furnished living room showcasing professional furniture delivery and installation"
                width={600}
                height={450}
                priority
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-primary text-white p-2 md:p-4 rounded-lg shadow-xl">
              <div className="text-sm md:text-lg font-bold">500+</div>
              <div className="text-xs md:text-sm">Successful Installs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
