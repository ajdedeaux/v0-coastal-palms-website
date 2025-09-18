import {
  MapPin,
  Clock,
  Shield,
  Home,
  Truck,
  Warehouse,
  ArrowRight,
  Upload,
  Phone,
  Mail,
  CheckCircle,
  Award,
  X,
  Menu,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Check,
  Instagram,
  Facebook,
  ExternalLink,
  ShieldCheck,
  Building2,
  Zap,
  PhoneCall,
  Calendar,
  Circle,
  GripVertical,
  Minus,
  MoreHorizontal,
  Search,
} from "lucide-react"

// Export all the icons directly from Lucide React
export {
  MapPin,
  Clock,
  Shield,
  Home,
  Truck,
  Warehouse,
  ArrowRight,
  Upload,
  Phone,
  Mail,
  CheckCircle,
  Award,
  X,
  Menu,
  DollarSign,
  ChevronDown,
  ChevronDown as ChevronDownIcon, // Added missing ChevronDownIcon export
  ChevronUp as ChevronUpIcon,
  Check as CheckIcon,
  Instagram,
  Facebook,
  ExternalLink,
  ShieldCheck,
  Building2,
  Zap,
  PhoneCall,
  Calendar,
  X as XIcon,
  Circle as CircleIcon,
  GripVertical as GripVerticalIcon,
  Minus as MinusIcon,
  MoreHorizontal,
  Search as SearchIcon,
}

// Keep the original placeholder for any missing icons
interface IconPlaceholderProps {
  className?: string
}

export function IconPlaceholder({ className = "h-5 w-5" }: IconPlaceholderProps) {
  return <div className={`bg-primary/20 rounded ${className}`} />
}
