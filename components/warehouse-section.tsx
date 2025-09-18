import { CheckCircle } from "@/components/icon-placeholder"

export function WarehouseSection() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-balance font-[family-name:var(--font-playfair)]">
                10,000+ sq ft, Climate-Controlled. <span className="text-primary">Built for Builders.</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
                Direct-ship to our Tampa facility. We receive, photo-verify, and stage so install days run on time.
              </p>
            </div>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base font-medium">Photo-verified receiving</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base font-medium">24/7 monitored facility</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base font-medium">Consolidated, on-schedule loads</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base font-medium">Damage-prevention handling</span>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-first lg:order-last">
            <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/intake%20organized%20clean.jpg-06mLe5gg6mltIkklyZEouD671fZ0UV.jpeg"
                alt="Coastal Palms 10,000+ sq ft climate-controlled warehouse facility with organized storage systems"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
