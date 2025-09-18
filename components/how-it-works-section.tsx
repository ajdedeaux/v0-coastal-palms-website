"use client"

import { CheckCircle, Upload, Calendar, Truck, Home } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([])
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        },
        { threshold: 0.3 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance font-[family-name:var(--font-playfair)]">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our streamlined process makes furniture delivery and setup effortless for you.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute top-16 left-0 right-0">
            <div className="relative h-0.5 bg-gradient-to-r from-transparent via-orange-200 to-transparent">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 opacity-60"></div>
            </div>
          </div>

          <div className="md:hidden absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 via-orange-400 to-orange-300 opacity-60"></div>

          <div className="grid md:grid-cols-4 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`relative transition-all duration-700 ${
                  visibleSteps[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-center space-y-6 h-full flex flex-col">
                  <div className="mx-auto relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white relative z-10">
                      <step.icon className="h-11 w-11 text-white" />
                    </div>
                    <div className="absolute inset-0 w-24 h-24 bg-orange-400 rounded-full blur-xl opacity-20 -z-10"></div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-balance">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty flex-1 min-h-[4rem] flex items-center text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <>
                    {/* Desktop connection dot */}
                    <div className="hidden md:block absolute -right-6 lg:-right-8 top-16 transform -translate-y-1/2 z-20">
                      <div className="w-3 h-3 bg-orange-400 rounded-full border-2 border-white shadow-md"></div>
                    </div>
                    {/* Mobile connection dot */}
                    <div className="md:hidden absolute -bottom-4 left-12 transform -translate-x-1/2 z-20">
                      <div className="w-3 h-3 bg-orange-400 rounded-full border-2 border-white shadow-md"></div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
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
