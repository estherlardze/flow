import {
  BarChart3,
  MessageSquare,
  Users,
  Zap,
  Target,
  Clock,
  Shield,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Card } from "./types";


// final cta stats

export const stats = [
  { icon: Users, value: "100+", label: "Active Users" },
  { icon: TrendingUp, value: "40%", label: "Average Lead Increase" },
  { icon: Shield, value: "99.9%", label: "Uptime Guarantee" },
];

export const cardData = [
  {
    title: "Lead management",
    subtitle:
      "Capture, organize, and nurture leads from multiple sources with automated workflows",
    icon: Users,
    color: "#6366F1",
  },
  {
    title: "Analytics & Reports",
    subtitle:
      "Track performance metrics, conversion rates, and ROI with comprehensive reporting and visual dashboards.",
    icon: BarChart3,
    color: "#06B6D4",
  },
 
  {
    title: "Automation Tools",
    subtitle:
      "Automate follow-ups, lead management, and reminders to save time and increase efficiency.",
    icon: Zap,
    color: "#F43F5E",
  },
];

export  const faqs = [
    {
      question: "Do you integrate with other tools?",
      answer:
        "Yes, we integrate with popular real estate tools including MLS systems, email platforms like Gmail and Outlook, calendar applications, and marketing automation tools. We also offer API access for custom integrations.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Absolutely! Our mobile app is available for both iOS and Android. You can manage leads, update deal status, and communicate with clients on the go. The mobile app syncs in real-time with your desktop dashboard.",
    },
    {
      question: "How secure is my data?",
      answer:
        "Security is our top priority. We use bank-level encryption, regular security audits, and comply with industry standards. Your data is backed up daily and stored in secure, redundant servers.",
    },
    {
      question: "Can I import my existing leads?",
      answer:
        "Yes, we provide easy import tools that work with Excel, CSV, and most popular CRM formats. Our support team can help you migrate your data and ensure nothing is lost in the process.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer multiple support channels including live chat, email support, and phone support. Professional and Enterprise plans get priority support. We also provide extensive documentation and video tutorials.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. You can export your data before canceling to ensure you keep all your information.",
    },
  ];

  // pricing
  export const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individual agents",
      features: [
        "Up to 500 leads",
        "Basic pipeline management",
        "Email integration",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$79",
      period: "/month",
      description: "Best for growing teams",
      features: [
        "Unlimited leads",
        "Advanced automation",
        "Custom reporting",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large brokerages",
      features: [
        "Everything in Pro",
        "Custom integrations",
        "Dedicated account manager",
        "White-label options",
        "Advanced security"
      ],
      popular: false
    }
  ];

  // testimonials
  export  const testimonials = [
    {
      quote: "RealtyFlow has completely transformed how I manage my leads. I've increased my conversion rate by 40% in just 3 months.",
      author: "Sarah Johnson",
      role: "Senior Real Estate Agent",
      rating: 5
    },
    {
      quote: "The automation features save me 10 hours a week. I can focus on what I do best - selling properties and serving clients.",
      author: "Michael Chen",
      role: "Broker",
      rating: 5
    },
    {
      quote: "Best investment I've made for my real estate business. The pipeline visualization alone is worth the price.",
      author: "Jessica Martinez",
      role: "Team Leader",
      rating: 5
    }
  ];


export const spreadsheet: Card[] = [
  {
    id: 1,
    type: "value",
    title: "Total Leads",
    value: "536,256",
    change: "+2.7%",
    changeColor: "text-red-500",
    chartColor: "stroke-red-400",
    descriptionTitle: "Disorganized Follow-ups",
    description:
      "Leads slip through the cracks when follow-up tasks are scattered...",
  },
  {
    id: 2,
    type: "progress",
    title: "Deal Progress",
    steps: [1, 2, 3, 4, 5, 6],
    activeStep: 2,
    descriptionTitle: "Difficult Pipeline Tracking",
    description:
      "Manually managing lead stages or deal progress can quickly become confusing...",
  },
  {
    id: 3,
    type: "avatar",
    title: "Missed Client Messages",
    avatars: [
      "https://randomuser.me/api/portraits/men/75.jpg",
      "https://randomuser.me/api/portraits/women/65.jpg",
      "https://randomuser.me/api/portraits/men/33.jpg",
    ],
    descriptionTitle: "Calls with Teammates",
    description:
      "Inconsistent communication channels often lead to unread messages or delay...",
  },
  {
    id: 4,
    type: "value",
    title: "Total Revenue",
    value: "$191,256",
    change: "+12.7%",
    changeColor: "text-blue-500",
    chartColor: "stroke-blue-400",
    descriptionTitle: "Performance insight",
    description:
      "Without visibility into what your team is doing — who's closing deals...",
  },
];

export const tags = [
  { label: "New Leads", top: "10%", left: "60%", color: "bg-cyan-500" },
  { label: "Closed Deals", top: "30%", left: "50%", color: "bg-green-600" },
  { label: "Active Leads", top: "60%", left: "20%", color: "bg-pink-500" },
  { label: "Hot Leads", top: "70%", left: "75%", color: "bg-red-600" },
];

export const metrics = [
  {
    icon: Target,
    number: "10k+",
    label: "leads managed monthly",
    color: "text-[#0088FE]",
  },
  {
    icon: Users,
    number: "50+",
    label: "real estate teams onboarded",
    color: "text-[#00C49F]",
  },
  {
    icon: Clock,
    number: "30%",
    label: "faster deal closures",
    color: "text-[#FF8042]",
  },
  {
    icon: Shield,
    number: "99.9%",
    label: "Uptime Guarantee",
    color: "text-[#FFBB28]",
  },
];


// foofter

export const productLinks = [
  { name: "Home", href: "#/" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "Blog", href: "#" },
  { name: "FAQS", href: "#faqs" },
];

export const companyLinks = [
  { name: "info@sleekteq.com", href: "mailto:info@sleekteq.com", icon: Mail},
  { name: "+233553597847", href: "tel:+233553597847", icon: Phone },
  { name: "+233543920766", href: "tel:+233543920766", icon: Phone },
  { name: "Accra, Ghana", href: "#", icon: MapPin },];

export const supportLinks = [
  { name: "Help Center", href: "#" },
  { name: "Documentation", href: "#" },
  { name: "Status", href: "#" },
  { name: "Contact Support", href: "#" },
];

export const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
];

export const socials = [
  { icon: Phone, label: "Phone", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
  { icon: MapPin, label: "Location", href: "#" },
];