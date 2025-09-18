import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Phone, Mail } from "lucide-react"

export function QuoteFormSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance font-[family-name:var(--font-playfair)]">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to get started? Submit your project details and we'll provide a detailed quote within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Project Details</CardTitle>
              <CardDescription>Tell us about your delivery and installation needs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input id="company" placeholder="Company name" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(813) 555-0123" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Delivery Address</Label>
                <Input id="address" placeholder="Street address, City, FL" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="service-type">Service Type</Label>
                  <Select>
                    <SelectTrigger>
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
                    <SelectTrigger>
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
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label>Manifest Upload (Optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Drop your furniture list here or click to browse</p>
                  <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                    Choose File
                  </Button>
                </div>
              </div>

              <Button size="lg" className="w-full text-lg">
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
                  <div className="font-medium">General Inquiries</div>
                  <div className="text-muted-foreground">(813) 555-0123</div>
                </div>
                <div>
                  <div className="font-medium text-primary">Rush Hotline</div>
                  <div className="text-lg font-bold">(813) 555-RUSH</div>
                  <div className="text-sm text-muted-foreground">For same-day delivery needs</div>
                </div>
                <div>
                  <div className="font-medium">Business Hours</div>
                  <div className="text-sm text-muted-foreground">
                    Mon-Fri: 7 AM - 7 PM
                    <br />
                    Sat: 8 AM - 5 PM
                    <br />
                    Sun: Emergency only
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
                  <div className="text-muted-foreground">info@coastalpalmsdelivery.com</div>
                </div>
                <div>
                  <div className="font-medium">Quotes:</div>
                  <div className="text-muted-foreground">quotes@coastalpalmsdelivery.com</div>
                </div>
                <div>
                  <div className="font-medium">Support:</div>
                  <div className="text-muted-foreground">support@coastalpalmsdelivery.com</div>
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
