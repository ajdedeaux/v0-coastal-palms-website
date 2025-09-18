import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Phone, Mail } from "@/components/icon-placeholder"

export function QuoteFormSection() {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-balance font-[family-name:var(--font-playfair)]">
            Get Your Free Quote
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to get started? Submit your project details and we'll provide a detailed quote within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Project Details</CardTitle>
              <CardDescription>Tell us about your delivery and installation needs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your name" className="min-h-[48px]" autoComplete="name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input id="company" placeholder="Company name" className="min-h-[48px]" autoComplete="organization" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    inputMode="email"
                    placeholder="your@email.com"
                    className="min-h-[48px]"
                    autoComplete="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="(813) 555-0123"
                    className="min-h-[48px]"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Delivery Address</Label>
                <Input
                  id="address"
                  placeholder="Street address, City, FL"
                  className="min-h-[48px]"
                  inputMode="text"
                  autoComplete="street-address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="service-type">Service Type</Label>
                  <Select>
                    <SelectTrigger className="min-h-[48px]">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="model-home">Model Home Setup</SelectItem>
                      <SelectItem value="airbnb">Airbnb/Rental Setup</SelectItem>
                      <SelectItem value="delivery-only">Delivery Only</SelectItem>
                      <SelectItem value="storage">Storage + Delivery</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Preferred Timeline</Label>
                  <Select>
                    <SelectTrigger className="min-h-[48px]">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="same-day">Same Day (Rush)</SelectItem>
                      <SelectItem value="next-day">Next Day</SelectItem>
                      <SelectItem value="this-week">This Week</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Project Details</Label>
                <Textarea
                  id="details"
                  placeholder="Describe your furniture, room layout, special requirements, etc."
                  className="min-h-[120px] md:min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label>Manifest Upload (Optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-4 md:p-6 text-center">
                  <Upload className="mx-auto h-6 w-6 md:h-8 md:w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">Drop your furniture list here or click to browse</p>
                  <Button variant="outline" size="sm" className="bg-transparent min-h-[44px]">
                    Choose File
                  </Button>
                </div>
              </div>

              <Button size="lg" className="w-full text-lg min-h-[48px] md:sticky md:bottom-4 md:z-10">
                Get Free Quote
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Need to Talk?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-medium">General</div>
                  <div className="text-muted-foreground">
                    <a href="tel:8138768314" className="hover:text-primary transition-colors">
                      (813) 876-8314
                    </a>
                  </div>
                </div>
                <div>
                  <div className="font-medium text-primary">Rush Hotline</div>
                  <div className="text-lg font-bold">
                    <a href="tel:8138768314" className="hover:text-primary transition-colors">
                      (813) 876-8314
                    </a>
                  </div>
                  <div className="text-sm text-muted-foreground">For same-day delivery needs</div>
                </div>
                <div>
                  <div className="font-medium">Business Hours</div>
                  <div className="text-sm text-muted-foreground">
                    Mon-Fri: 9 AM - 6 PM
                    <br />
                    Sat-Sun: By Appointment
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <div className="font-medium">General:</div>
                  <div className="text-muted-foreground">
                    <a href="mailto:info@coastalpalmsdelivery.com" className="hover:text-primary transition-colors">
                      info@coastalpalmsdelivery.com
                    </a>
                  </div>
                </div>
                <div>
                  <div className="font-medium">Quotes:</div>
                  <div className="text-muted-foreground">
                    <a href="mailto:info@coastalpalmsdelivery.com" className="hover:text-primary transition-colors">
                      info@coastalpalmsdelivery.com
                    </a>
                  </div>
                </div>
                <div>
                  <div className="font-medium">Support:</div>
                  <div className="text-muted-foreground">
                    <a href="mailto:info@coastalpalmsdelivery.com" className="hover:text-primary transition-colors">
                      info@coastalpalmsdelivery.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-primary/10 rounded-lg p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                We typically respond to quote requests within 2-4 hours during business hours. Rush requests get
                priority response within 30 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
