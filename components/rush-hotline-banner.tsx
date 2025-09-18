import { Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RushHotlineBanner() {
  return (
    <div className="bg-primary text-primary-foreground py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 text-sm font-medium">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Need it today?</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>Rush Hotline: (813) 555-RUSH</span>
          </div>
          <Button variant="secondary" size="sm" className="ml-2">
            Call Now
          </Button>
        </div>
      </div>
    </div>
  )
}
