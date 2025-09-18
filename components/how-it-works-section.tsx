import { CheckCircle, Upload, Calendar, Truck, Home, ChevronRight } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Submit Manifest",
    description: "Upload your furniture list and delivery requirements through our simple online form.",
  },
  {
    icon: Calendar,
    title: "Schedule Delivery",
    description: "Choose your preferred delivery and installation date. Same-day and next-day options available.",
  },
  {
    icon: Truck,
    title: "Professional Delivery",
    description: "Our insured team carefully transports your items using specialized equipment and vehicles.",
  },
  {
    icon: Home,
    title: "White-Glove Setup",
    description: "Complete installation, assembly, and placement exactly where you want it. Photo-ready results.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance font-[family-name:var(--font-playfair)]">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our streamlined process makes furniture delivery and setup effortless for you.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center space-y-4 h-full flex flex-col">
                <div className="mx-auto w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <step.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-balance">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty flex-1 min-h-[4rem] flex items-center">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 lg:-right-4 top-10 transform -translate-y-1/2">
                  <ChevronRight className="h-8 w-8 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 bg-muted/50 rounded-lg p-8 lg:p-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <CheckCircle className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">No Surprises Guarantee</h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transparent pricing, clear timelines, and professional service every step of the way. We handle the
            logistics so you can focus on what matters most.
          </p>
        </div>
      </div>
    </section>
  )
}
