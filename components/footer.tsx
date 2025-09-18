import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Instagram, Facebook } from "@/components/icon-placeholder"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CoastalPalmsLogoTransperent1200x600-2T1qbfAc0UwTLNX9Pm8kjynPQ2rhrj.png"
                  alt="Coastal Palms Delivery Logo"
                  width={240}
                  height={120}
                  className="h-auto"
                />
              </div>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Professional white-glove delivery and installation services for Tampa Bay. Trusted by model homes, Airbnb
              hosts, and discerning homeowners.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
              <a
                href="https://www.instagram.com/coastalpalmsdelivery/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578726451910"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.google.com/maps/place/Coastal+Palms+Delivery/@28.0131667,-82.5265566,17z/data=!3m1!4b1!4m6!3m5!1s0x88c2c123a296c059:0x46dc191dfd319296!8m2!3d28.0131667!4d-82.5239817!16s%2Fg%2F11yh3gfc3h?entry=ttu&g_ep=EgoyMDI1MDkxNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
                aria-label="Google Maps"
              >
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-bold text-lg">Services</h3>
            <ul className="space-y-3 text-sm text-background/80">
              <li>
                <Link href="#" className="hover:text-primary transition-colors py-1 block">
                  Model Home Setup
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors py-1 block">
                  Airbnb Staging
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors py-1 block">
                  Same-Day Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors py-1 block">
                  Warehousing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors py-1 block">
                  White-Glove Setup
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="space-y-3 text-sm text-background/80">
              <li>
                <Link href="#" className="hover:text-primary transition-colors py-1 block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors py-1 block">
                  Coverage Area
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors py-1 block">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors py-1 block">
                  Insurance & Bonding
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors py-1 block">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-bold text-lg">Contact</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <div className="text-background/80 text-base md:text-sm">
                    <a href="tel:8138768314" className="hover:text-primary transition-colors py-2 block">
                      (813) 876-8314
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/80 text-base md:text-sm">
                  <a
                    href="mailto:info@coastalpalmsdelivery.com"
                    className="hover:text-primary transition-colors block py-2"
                  >
                    info@coastalpalmsdelivery.com
                  </a>
                </span>
              </div>
              <div className="flex items-start justify-center md:justify-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-background/80 text-base md:text-sm">
                  <a
                    href="https://www.google.com/maps/place/Coastal+Palms+Delivery/@28.0131667,-82.5265566,17z/data=!3m1!4b1!4m6!3m5!1s0x88c2c123a296c059:0x46dc191dfd319296!8m2!3d28.0131667!4d-82.5239817!16s%2Fg%2F11yh3gfc3h?entry=ttu&g_ep=EgoyMDI1MDkxNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors block py-2"
                  >
                    <span>
                      6914 Asphalt Ave Suite A<br />
                      Tampa, FL 33614
                    </span>
                  </a>
                </div>
              </div>
              <div className="text-background/80 text-xs">
                <strong>Hours:</strong> Mon-Fri: 9 AM - 6 PM
                <br />
                Sat-Sun: By Appointment
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-sm text-background/60">
          <p>&copy; 2024 Coastal Palms Delivery. All rights reserved. Licensed, Insured & Bonded.</p>
        </div>
      </div>
    </footer>
  )
}
