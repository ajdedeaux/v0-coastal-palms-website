import { Shield, Clock, Award } from "lucide-react"

export function TrustBadge() {
  return (
    <div className="bg-gray-50 py-8 border-y">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-semibold">Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-6 w-6 text-primary" />
            <span className="font-semibold">On-Time Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            <span className="font-semibold">White-Glove Service</span>
          </div>
        </div>
      </div>
    </div>
  )
}
