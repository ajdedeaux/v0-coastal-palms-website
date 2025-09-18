"use client"

import { useState, useEffect } from "react"
import { X } from "@/components/icon-placeholder"

export function RushBannerFloating() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  return (
    <>
      {/* Desktop Floating Banner */}
      {isVisible && (
        <div className="hidden md:block fixed bottom-8 right-8 z-50 animate-pulse shadow-2xl max-w-sm">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-lg relative">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-white/80 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="h-4 w-4" />
            </button>
            <p className="font-bold text-lg">⚡ Need Rush Delivery?</p>
            <p className="text-sm mt-1">Same-day service available!</p>
            <a
              href="tel:8138768314"
              className="mt-2 inline-block bg-white text-orange-600 px-4 py-2 rounded font-bold text-sm hover:bg-gray-100 transition-colors"
            >
              Call (813) 876-8314 Now →
            </a>
          </div>
        </div>
      )}

      {/* Mobile Sticky Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 to-orange-600">
        <a href="tel:8138768314" className="block text-white p-4 text-center hover:bg-orange-600 transition-colors">
          <span className="font-bold">📞 Rush? Call (813) 876-8314</span>
        </a>
      </div>
    </>
  )
}
