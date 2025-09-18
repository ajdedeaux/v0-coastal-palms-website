"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneCall } from "@/components/icon-placeholder"
import { useState, useEffect } from "react"
import { MobileMenu } from "@/components/mobile-menu"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`bg-background border-b border-border sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-4 py-3 md:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/coastal-palms-palm-logo.png"
            alt="Coastal Palms Delivery"
            width={96}
            height={96}
            className="h-12 md:h-20 w-auto"
          />
          <span className="text-lg md:text-xl font-bold text-foreground">Coastal Palms</span>
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

        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="flex items-center space-x-2 text-xs md:text-sm">
            <PhoneCall className="h-3 w-3 md:h-4 md:w-4 text-primary animate-pulse" />
            <span className="font-medium">(813) 876-8314</span>
          </div>
          <Button className="hidden md:inline-flex">Get Quote</Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
