"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { DollarSign, Clipboard, RotateCw, Target, Users, CheckCircle } from "lucide-react"

const serviceDetails = [
  {
    icon: DollarSign,
    title: "Revenue Cycle Management",
    description:
      "Comprehensive management of your entire revenue cycle from patient registration to final payment collection.",
    benefits: [
      "Increased cash flow",
      "Reduced claim denials",
      "Faster payment processing",
      "Improved patient satisfaction",
    ],
  },
  {
    icon: Clipboard,
    title: "Medical Billing Services",
    description: "Expert billing services with HIPAA compliance, accuracy, and attention to detail.",
    benefits: ["HIPAA compliant", "99%+ accuracy rate", "Timely submissions", "Detailed reporting"],
  },
  {
    icon: RotateCw,
    title: "A/R Recovery Analysis",
    description: "Comprehensive analysis and strategic recovery of outstanding accounts receivable.",
    benefits: ["Recover lost revenue", "Identify problem areas", "Prevent future issues", "Maximize collections"],
  },
  {
    icon: Target,
    title: "Practice Management Software",
    description: "Integrated software solutions designed for efficient practice operations and management.",
    benefits: ["Easy to use interface", "Real-time reporting", "Secure data storage", "Seamless integration"],
  },
  {
    icon: Users,
    title: "MedCare Force",
    description: "Dedicated team of billing specialists available to support your practice.",
    benefits: ["Expert support", "Responsive team", "Customized solutions", "Ongoing training"],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your practice's unique needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {serviceDetails.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                    idx % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div>
                    <div className="p-4 bg-primary/10 rounded-lg w-fit mb-4">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{service.description}</p>
                    <div className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-3">
                          <CheckCircle className="text-primary flex-shrink-0" size={20} />
                          <span className="text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
                    <p className="text-muted-foreground">Service Image</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
