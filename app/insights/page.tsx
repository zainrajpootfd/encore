"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, User } from "lucide-react"

const articles = [
  {
    title: "10 Ways to Improve Your Medical Billing Process",
    excerpt: "Learn proven strategies to streamline your billing operations and increase revenue.",
    date: "Oct 15, 2024",
    author: "Dr. Sarah Johnson",
    category: "Billing Tips",
  },
  {
    title: "HIPAA Compliance: What Every Practice Needs to Know",
    excerpt: "A comprehensive guide to maintaining HIPAA compliance in your medical practice.",
    date: "Oct 10, 2024",
    author: "Michael Chen",
    category: "Compliance",
  },
  {
    title: "The Future of Medical Billing Technology",
    excerpt: "Explore emerging technologies that are transforming the medical billing industry.",
    date: "Oct 5, 2024",
    author: "Emily Rodriguez",
    category: "Technology",
  },
]

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Insights & Resources</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest in medical billing and healthcare management
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {articles.map((article, idx) => (
              <article
                key={article.title}
                className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow cursor-pointer group animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{article.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
