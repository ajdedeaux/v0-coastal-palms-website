import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Truck, Warehouse, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Home,
    title: "Model Home & Rental Setup",
    description:
      "Complete furniture placement and styling for model homes, Airbnb properties, and vacation rentals. We handle everything from unpacking to final staging.",
    features: ["Full room staging", "Furniture assembly", "Decor placement", "Photo-ready setup"],
    image: "/images/model-home-delivery.jpeg",
  },
  {
    icon: Truck,
    title: "Same/Next-Day Delivery",
    description:
      "Fast, reliable delivery service throughout Tampa Bay. Our professional team ensures your items arrive safely and on schedule.",
    features: ["Same-day available", "White-glove handling", "Real-time tracking", "Flexible scheduling"],
    image: "/images/master-bedroom.jpeg",
  },
  {
    icon: Warehouse,
    title: "Receiving & Storage",
    description:
      "Secure warehousing solutions for your inventory. We receive, inspect, and store your items until you're ready for delivery and installation.",
    features: ["Climate controlled", "Inventory management", "Quality inspection", "Flexible storage terms"],
    image: "/images/warehouse-operation.jpeg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance font-[family-name:var(--font-playfair)]">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            End-to-end logistics solutions designed for the unique needs of model homes and rental properties.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center text-base leading-relaxed">
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

        <div className="text-center mt-12">
          <Button size="lg" className="text-lg px-8">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
