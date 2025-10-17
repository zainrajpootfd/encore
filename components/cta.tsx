"use client"

export default function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-reverse"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Ready to Transform Your Revenue Cycle?
          </h2>
          <p
            className="text-lg text-white/90 mb-8 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Join hundreds of healthcare providers who trust MedCare MSO for their billing needs.
          </p>
          <button
            className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-50 transition-colors text-lg hover:scale-105 active:scale-95 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Request a Demo Today
          </button>
        </div>
      </div>
    </section>
  )
}
