"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Clock, ChevronLeft, ChevronRight } from "@/components/icon-placeholder"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"

const SLIDES = [
  {
    src: "/images/operations/main-warehouse-floor.jpg",
    alt: "Spacious climate-controlled furniture warehouse in Tampa with high clear-height",
    caption: "10,000+ sq ft | Climate-controlled, secured receiving",
  },
  {
    src: "/images/operations/furniture-intake-processing.jpg",
    alt: "Organized intake lines with labeled cartons during photo-verified receiving",
    caption: "Photo-verified intake | Damage prevention handling",
  },
  {
    src: "/images/operations/appliance-boxes-ready.jpg",
    alt: "Palletized cabinets staged for consolidated delivery in warehouse",
    caption: "Consolidated loads | On-schedule installs",
  },
  {
    src: "/images/hero-delivery-team.jpg",
    alt: "Professional delivery team preparing for white-glove installation",
    caption: "Site-ready walkthrough | Floor & finish protection",
  },
  {
    src: "/images/gallery/kitchens/clean-kitchen.jpg",
    alt: "Finished model home kitchen after white-glove installation",
    caption: "White-glove placement | Photo-ready handoff",
  },
]

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SLIDES.length)
  }, [])

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  useEffect(() => {
    if (isPaused) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const interval = setInterval(nextSlide, 6500)
    return () => clearInterval(interval)
  }, [nextSlide, isPaused])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        prevSlide()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide])

  return (
    <>
      {/* Main Hero Section */}
      <section
        className="relative min-h-[60vh] md:min-h-[65vh] flex flex-col overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-0 z-0">
          {SLIDES.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.src || "/placeholder.svg"}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
                style={{ objectPosition: "center" }}
              />

              <div className="absolute bottom-4 left-4 bg-black/40 text-white text-xs md:text-sm rounded-full px-3 py-1 backdrop-blur-sm">
                {slide.caption}
              </div>
            </div>
          ))}

          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-transparent md:from-black/40"></div>
          <div className="absolute bottom-0 left-0 right-0 md:hidden bg-gradient-to-t from-black/50 to-transparent h-40"></div>
          <div className="hidden md:block absolute left-0 right-[40%] top-0 bottom-0 bg-gradient-to-r from-black/45 via-black/25 to-transparent"></div>
        </div>

        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-auto bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-auto bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dot Navigation */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-auto">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
                className={`w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  index === activeIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeIndex ? "true" : "false"}
              />
            ))}
          </div>
        </div>

        {/* Main Content - unchanged positioning */}
        <div className="relative z-10 container mx-auto px-4 py-6 md:py-8 lg:py-10 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 order-1 lg:order-1">
              <div className="space-y-4">
                <h1 className="max-w-[22ch] text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-balance font-[family-name:var(--font-playfair)] text-white">
                  Tampa Bay's Premier <span className="text-orange-400">White-Glove Delivery Partner</span>
                </h1>
                <p className="max-w-[60ch] text-white/90 text-base md:text-lg text-pretty leading-relaxed">
                  Trusted by Pulte Homes, Richmond American, and Wayfair for flawless furniture installations and
                  logistics solutions.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="h-11 px-5 rounded-md bg-orange-500 text-white font-semibold shadow-lg hover:bg-orange-600 transition-colors"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-11 px-5 rounded-md bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/15 transition-all"
                >
                  <a href="tel:8138768314" className="flex items-center justify-center w-full">
                    Call Rush Hotline
                  </a>
                </Button>
              </div>

              <div className="hidden md:flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-orange-400" />
                  <span className="text-sm font-medium text-white drop-shadow-sm">
                    Licensed & Insured FL Logistics Provider
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-orange-400" />
                  <span className="text-sm font-medium text-white drop-shadow-sm">500+ Model Homes Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-400" />
                  <span className="text-sm font-medium text-white drop-shadow-sm">Same-Day Rush Available</span>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <div className="rounded-lg bg-white/90 shadow-xl px-4 py-2 backdrop-blur-sm">
                  <span className="text-orange-600 font-extrabold text-2xl">500+</span>
                  <span className="ml-2 text-slate-600 font-medium">Successful Installs</span>
                </div>
                <div className="rounded-lg bg-white/90 shadow-xl px-4 py-2 backdrop-blur-sm">
                  <span className="text-orange-600 font-extrabold text-2xl">3+</span>
                  <span className="ml-2 text-slate-600 font-medium">Years Serving Tampa</span>
                </div>
              </div>
            </div>

            <div className="relative order-2 lg:order-2 hidden lg:block">
              {/* This space is intentionally left for layout balance on larger screens */}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-foreground py-6 md:py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-8">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12">
            <div className="opacity-75 hover:opacity-100 transition-all duration-500 hover:scale-110 flex items-center justify-center">
              <Image
                src="/images/logos/pulte-homes.png"
                alt="PULTE HOMES logo"
                width={120}
                height={60}
                className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-95 hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
              />
            </div>
            <div className="opacity-75 hover:opacity-100 transition-all duration-500 hover:scale-110 flex items-center justify-center">
              <Image
                src="/images/logos/richmond-american-clean.png"
                alt="RICHMOND AMERICAN logo"
                width={120}
                height={60}
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-95 hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
              />
            </div>
            <div className="opacity-75 hover:opacity-100 transition-all duration-500 hover:scale-110 flex items-center justify-center">
              <Image
                src="/images/logos/fieldstone-white.png"
                alt="FIELDSTONE A&E logo"
                width={120}
                height={60}
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-95 hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
              />
            </div>
            <div className="opacity-75 hover:opacity-100 transition-all duration-500 hover:scale-110 flex items-center justify-center">
              <Image
                src="/images/logos/dr-horton-clean.png"
                alt="DR HORTON logo"
                width={120}
                height={60}
                className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-95 hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
              />
            </div>
            <div className="opacity-75 hover:opacity-100 transition-all duration-500 hover:scale-110 flex items-center justify-center">
              <Image
                src="/images/logos/wayfair.png"
                alt="WAYFAIR logo"
                width={120}
                height={60}
                className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-95 hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
