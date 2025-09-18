import Image from "next/image"

export function PartnersBar() {
  const partners = [
    {
      name: "PULTE HOMES",
      logo: "/images/logos/pulte-homes.png",
      className: "h-14 md:h-16 w-auto", // Standard size
    },
    {
      name: "RICHMOND AMERICAN",
      logo: "/images/logos/richmond-american-clean.png",
      className: "h-16 md:h-20 w-auto", // Larger to compensate for wide aspect ratio
    },
    {
      name: "FIELDSTONE A&E",
      logo: "/images/logos/fieldstone-white.png",
      className: "h-16 md:h-20 w-auto", // Larger to compensate for wide aspect ratio
    },
    {
      name: "DR HORTON",
      logo: "/images/logos/dr-horton-clean.png",
      className: "h-14 md:h-16 w-auto", // Standard size
    },
    {
      name: "WAYFAIR",
      logo: "/images/logos/wayfair.png",
      className: "h-14 md:h-16 w-auto", // Standard size
    },
  ]

  return (
    <section className="py-20 bg-slate-800 border-y border-slate-700">
      <div className="container mx-auto px-4 max-w-6xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-16">
          Trusted by Industry Leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="opacity-75 hover:opacity-100 transition-all duration-500 hover:scale-110 flex items-center justify-center w-full h-16 md:h-20"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                width={160}
                height={80}
                className={`${partner.className} object-contain max-w-[140px] md:max-w-[160px] brightness-0 invert opacity-95 hover:opacity-100 transition-opacity duration-500`}
                priority={false}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
