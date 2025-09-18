import { Button } from "@/components/ui/button"

export function RushHotlineBanner() {
  return (
    <div className="bg-primary text-primary-foreground py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-6 text-sm font-medium">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="font-semibold tracking-wide">MODEL HOME EMERGENCY?</span>
          </div>

          <div className="h-4 w-px bg-white/30"></div>

          <div className="flex items-center gap-2">
            <span className="text-white/90">Call our Rush Line:</span>
            <a
              href="tel:8138768314"
              className="font-bold text-white hover:text-white/90 transition-colors tracking-wider"
            >
              (813) 876-8314
            </a>
          </div>

          <div className="h-4 w-px bg-white/30"></div>

          <span className="text-white/90 font-medium">Same-Day Service Available</span>

          <Button
            variant="secondary"
            size="sm"
            className="ml-2 bg-white text-primary hover:bg-white/90 font-semibold px-4 py-1.5 rounded-md transition-all duration-200 hover:scale-105"
          >
            <a href="tel:8138768314">Call Now</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
