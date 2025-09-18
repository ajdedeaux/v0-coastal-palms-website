import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/coastal-palms-palm-logo.png"
            alt="Coastal Palms Delivery"
            width={60}
            height={60}
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold text-foreground">Coastal Palms</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link href="#coverage" className="text-foreground hover:text-primary transition-colors">
            Coverage
          </Link>
          <Link href="#faq" className="text-foreground hover:text-primary transition-colors">
            FAQ
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 text-sm">
            <Phone className="h-4 w-4 text-primary" />
            <span className="font-medium">(813) 555-RUSH</span>
          </div>
          <Button>Get Quote</Button>
        </div>
      </div>
    </header>
  )
}
