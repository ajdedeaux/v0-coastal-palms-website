import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Truck, Warehouse, ArrowRight } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Home,
    title: "Builder-Grade Model Home Setup",
    description:
      "Transform empty model homes into sales-driving showcases. We partner exclusively with Tampa Bay's top builders, delivering complete installations that help sell homes faster and at premium prices.",
    features: ["Full room staging", "Furniture assembly", "Decor placement", "Photo-ready setup"],
    image: "/images/model-home-delivery.jpeg",
  },
  {
    icon: Truck,
    title: "Airbnb & Rental Staging",
    description:
      "Turn vacant properties into 5-star rental experiences that command premium rates. From Wayfair deliveries to custom furnishings, we get your property booking-ready in days.",
    features: ["Same-day available", "White-glove handling", "Real-time tracking", "Flexible scheduling"],
    image: "/images/master-bedroom.jpeg",
  },
  {
    icon: Warehouse,
    title: "Premium Residential Delivery",
    description:
      "Your luxury furniture deserves expert care from warehouse to final placement. We protect your investment with climate-controlled storage and precision installation.",
    features: ["Climate controlled", "Inventory management", "Quality inspection", "Flexible storage terms"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2760.JPG-G4x3XUM4UWf06KuGFAJQl1KPVpWyZm.jpeg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-balance font-[family-name:var(--font-playfair)]">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            End-to-end logistics solutions designed for the unique needs of model homes and rental properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer active:scale-95 md:active:scale-100"
              role="button"
              tabIndex={0}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center pb-4 p-4 md:p-6">
                <div className="mx-auto w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <CardTitle className="text-lg md:text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4 md:p-6 pt-0">
                <CardDescription className="text-center text-sm md:text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button size="lg" className="w-full md:w-auto text-lg px-8 min-h-[48px]">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
