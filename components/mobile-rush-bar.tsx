"use client"

import { Phone } from "@/components/icon-placeholder"

export function MobileRushBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 safe-bottom">
      <a
        href="tel:+18138768314"
        className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-4 shadow-lg shadow-black/20 transition-all duration-200 active:scale-95"
        style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom))" }}
      >
        <div className="flex items-center justify-center space-x-3">
          <Phone className="h-5 w-5 animate-pulse" />
          <span className="text-lg">Rush? Call Now - (813) 876-8314</span>
        </div>
      </a>
    </div>
  )
}
