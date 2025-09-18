import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/images/coastal-palms-logo-transparent.png"
              alt="Coastal Palms Delivery"
              width={300}
              height={150}
              className="h-20 w-auto"
            />
            <p className="text-sm text-background/80 leading-relaxed">
              Professional white-glove delivery and installation services for Tampa Bay. Trusted by model homes, Airbnb
              hosts, and discerning homeowners.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Services</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Model Home Setup
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Airbnb Staging
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Same-Day Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Warehousing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  White-Glove Setup
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Coverage Area
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Insurance & Bonding
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <div className="text-background/80">General: (813) 555-0123</div>
                  <div className="text-primary font-medium">Rush: (813) 555-RUSH</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">info@coastalpalmsdelivery.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">Tampa Bay, Florida</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2024 Coastal Palms Delivery. All rights reserved. Licensed, Insured & Bonded.</p>
        </div>
      </div>
    </footer>
  )
}
