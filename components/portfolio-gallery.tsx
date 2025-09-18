import { Card } from "@/components/ui/card"
import Image from "next/image"

const portfolioImages = [
  {
    src: "/images/gallery/kitchens/clean-kitchen.jpg",
    alt: "Professionally staged kitchen ready for model home showing with premium appliances and styling",
    category: "Kitchen",
  },
  {
    src: "/images/gallery/bedrooms/clean-bedroom-1.jpg",
    alt: "Luxury bedroom setup optimized for vacation rental bookings with hotel-quality presentation",
    category: "Bedroom",
  },
  {
    src: "/images/gallery/bathrooms/clean-bathroom-1.jpg",
    alt: "Spa-inspired bathroom staging that elevates property value and buyer appeal",
    category: "Bathroom",
  },
  {
    src: "/images/gallery/living-rooms/neutral-living-room.jpg",
    alt: "Designer living room arrangement that showcases space potential and lifestyle appeal",
    category: "Living Room",
  },
]

export function PortfolioGallery() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-balance font-[family-name:var(--font-playfair)]">
            Our Work
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            See the quality and attention to detail that sets Coastal Palms Delivery apart.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 max-w-4xl mx-auto">
          {portfolioImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 active:scale-95 md:active:scale-100"
            >
              <div className="aspect-square md:aspect-[4/3] overflow-hidden relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm md:text-lg">{image.category}</span>
                </div>
              </div>
              <div className="p-3 md:p-4 hidden md:block">
                <p className="text-sm font-medium text-primary">{image.category}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
