import Image from "next/image"

export function PartnersBar() {
  const partners = [
    { name: "PULTE HOMES", logo: "/images/logos/pulte-homes.png" },
    { name: "RICHMOND AMERICAN", logo: "/images/logos/richmond-american.png" },
    { name: "FIELDSTONE A&E", logo: "/images/logos/fieldstone.png" },
    { name: "DR HORTON", logo: "/images/logos/dr-horton.png" },
    { name: "WAYFAIR", logo: "/images/logos/wayfair.png" },
  ]

  return (
    <section className="py-12 bg-white border-y">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
          Trusted by Tampa Bay's Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 
                         transition-all duration-300 hover:scale-110"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
