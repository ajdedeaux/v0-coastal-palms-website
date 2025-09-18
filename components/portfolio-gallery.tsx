import { Card } from "@/components/ui/card"

const portfolioImages = [
  {
    src: "/images/living-room-2.jpeg",
    alt: "Luxury living room setup with sectional seating and entertainment center",
    category: "Living Rooms",
  },
  {
    src: "/images/dining-room.jpeg",
    alt: "Elegant dining room with statement chandelier and accent wall",
    category: "Dining Rooms",
  },
  {
    src: "/images/bedroom-2.jpeg",
    alt: "Modern bedroom with textured accent wall and platform bed",
    category: "Bedrooms",
  },
  {
    src: "/images/hallway-console.jpeg",
    alt: "Stylish hallway console with botanical artwork",
    category: "Entryways",
  },
]

export function PortfolioGallery() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance font-[family-name:var(--font-playfair)]">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            See the quality and attention to detail that sets Coastal Palms Delivery apart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioImages.map((image, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-primary">{image.category}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
