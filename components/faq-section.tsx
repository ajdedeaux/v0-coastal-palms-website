import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, Clock, DollarSign, Truck } from "lucide-react"

const faqs = [
  {
    question: "What is included in white-glove delivery?",
    answer:
      "Our white-glove service includes careful transport, unpacking, assembly (if needed), placement in your desired location, and removal of all packaging materials. We ensure everything is photo-ready before we leave.",
  },
  {
    question: "How do you ensure my items are protected?",
    answer:
      "We are fully insured and bonded. All team members are background-checked professionals. We use specialized equipment, protective materials, and proven handling techniques to ensure your items arrive in perfect condition.",
  },
  {
    question: "What if my site isn't ready for delivery?",
    answer:
      "We offer flexible rescheduling at no extra charge if your site isn't ready. Our team will assess site readiness during scheduling and provide recommendations to ensure a smooth delivery process.",
  },
  {
    question: "Do you offer storage services?",
    answer:
      "Yes! Our climate-controlled warehouse can store your items for flexible periods. We handle receiving, inspection, inventory management, and can coordinate delivery when you're ready.",
  },
  {
    question: "Why do Pulte and Richmond American choose Coastal Palms?",
    answer:
      "We maintain dedicated team members for each builder account, understand their standards, and have never missed a model home deadline. Our builder portal provides real-time updates and photo confirmation of every installation.",
  },
  {
    question: "How does rush delivery work?",
    answer:
      "Call our rush hotline at (813) 876-8314 for same-day delivery. Rush orders placed before 10 AM can typically be delivered the same day, subject to availability and location.",
  },
  {
    question: "What are your pricing policies?",
    answer:
      "We provide transparent, upfront pricing with no hidden fees. Quotes include all labor, materials, and standard delivery. Additional services like storage or rush delivery are clearly itemized.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-balance font-[family-name:var(--font-playfair)]">
            No Surprises Policy
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Clear answers to common questions about our delivery and installation services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="text-center space-y-3 p-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold">Fully Insured</h3>
                <p className="text-sm text-muted-foreground">Comprehensive coverage for your peace of mind</p>
              </div>
              <div className="text-center space-y-3 p-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold">On-Time Guarantee</h3>
                <p className="text-sm text-muted-foreground">Reliable scheduling you can count on</p>
              </div>
              <div className="text-center space-y-3 p-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold">Transparent Pricing</h3>
                <p className="text-sm text-muted-foreground">No hidden fees or surprise charges</p>
              </div>
              <div className="text-center space-y-3 p-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold">Professional Team</h3>
                <p className="text-sm text-muted-foreground">Background-checked, trained specialists</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-4 md:px-6"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-4 md:py-5 text-sm md:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
