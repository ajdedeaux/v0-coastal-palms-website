import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, Home, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-background py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance font-[family-name:var(--font-playfair)]">
                White-Glove Delivery, Setup & Warehousing for <span className="text-primary">Tampa Bay</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Professional end-to-end logistics for model homes, Airbnb properties, and high-touch residential
                installations. From receiving to setup, we handle it all.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Call Rush Hotline
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Same/Next Day</span>
              </div>
              <div className="flex items-center gap-2">
                <Home className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">White-Glove Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Fully Insured</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/hero-delivery-team.jpg"
                alt="Professional delivery team carefully moving furniture at luxury Tampa Bay home with palm trees"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Successful Installs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
