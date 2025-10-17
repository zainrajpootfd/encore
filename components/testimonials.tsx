"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Practice Owner",
    content:
      "MedCare MSO transformed our billing process. We saw a 40% improvement in collections within the first quarter.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Office Manager",
    content:
      "The team is incredibly responsive and professional. They handle everything so we can focus on patient care.",
    rating: 5,
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Medical Director",
    content: "Outstanding service and support. Their expertise in medical billing is unmatched in the industry.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by healthcare providers across the country
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.name}
              className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
