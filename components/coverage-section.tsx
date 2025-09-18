import { MapPin, Clock, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CoverageSection() {
  return (
    <section id="coverage" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance font-[family-name:var(--font-playfair)]">
            Tampa Bay Coverage
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Serving the entire Tampa Bay area with our centrally located warehouse and professional delivery fleet.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  Service Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="font-medium">Primary Coverage:</div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Tampa</li>
                      <li>• St. Petersburg</li>
                      <li>• Clearwater</li>
                      <li>• Brandon</li>
                      <li>• Westchase</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium">Extended Coverage:</div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Sarasota</li>
                      <li>• Lakeland</li>
                      <li>• Wesley Chapel</li>
                      <li>• Pinellas Park</li>
                      <li>• Plant City</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="h-5 w-5 text-primary" />
                    Delivery Windows
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <div>
                    <strong>Same Day:</strong> Order by 10 AM
                  </div>
                  <div>
                    <strong>Next Day:</strong> Order by 6 PM
                  </div>
                  <div>
                    <strong>Scheduled:</strong> Up to 30 days out
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Shield className="h-5 w-5 text-primary" />
                    Warehouse Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <div>
                    <strong>Address:</strong> Central Tampa
                  </div>
                  <div>
                    <strong>Climate Controlled</strong>
                  </div>
                  <div>
                    <strong>24/7 Security</strong>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src="/tampa-bay-area-map-showing-delivery-coverage-zones.jpg"
                alt="Tampa Bay delivery coverage map"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground p-3 rounded-lg shadow-lg">
              <div className="text-lg font-bold">50+ Miles</div>
              <div className="text-xs">Coverage Radius</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
