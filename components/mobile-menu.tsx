"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Phone } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when clicking on navigation links
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-80 p-0 bg-background border-l border-border">
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <span className="text-lg font-semibold">Menu</span>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          {/* Rush phone button - prominent at top */}
          <div className="p-6 border-b border-border">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 text-lg"
            >
              <a href="tel:+18138768314" className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Rush? Call Now</span>
              </a>
            </Button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 p-6">
            <div className="space-y-6">
              <Link
                href="#services"
                className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={handleLinkClick}
              >
                Services
              </Link>
              <Link
                href="#how-it-works"
                className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={handleLinkClick}
              >
                How It Works
              </Link>
              <Link
                href="#coverage"
                className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={handleLinkClick}
              >
                Coverage
              </Link>
              <Link
                href="#faq"
                className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={handleLinkClick}
              >
                FAQ
              </Link>
            </div>
          </nav>

          {/* Bottom section with contact info and CTA */}
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>(813) 876-8314</span>
            </div>
            <Button className="w-full" onClick={handleLinkClick}>
              Get Quote
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
