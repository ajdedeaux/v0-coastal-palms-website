import { Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RushHotlineBanner() {
  return (
    <div className="bg-primary text-primary-foreground py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 text-sm font-medium">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>🚨 MODEL HOME EMERGENCY?</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>
              Call our Rush Line:{" "}
              <a href="tel:8138768314" className="underline hover:no-underline">
                (813) 876-8314
              </a>
            </span>
          </div>
          <span>→ Same-Day Service Available</span>
          <Button variant="secondary" size="sm" className="ml-2">
            <a href="tel:8138768314">Call Now</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
