"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How quickly can I get a response to my inquiry?",
    answer:
      "We typically respond to all inquiries within 2 hours during business hours. For urgent matters, you can use our live chat or call our support line directly. Our AI assistant is available 24/7 for immediate help.",
  },
  {
    question: "Can I schedule a demo of the AI website builder?",
    answer:
      "We offer both self-guided demos that you can try immediately, and personalized demo calls with our specialists. The personalized demos are tailored to your specific needs and typically last 15-30 minutes.",
  },
  {
    question: "Do you offer custom development services?",
    answer:
      "Yes, we provide custom development services for enterprise clients and complex projects. Our team can create custom AI models, integrate with existing systems, and provide dedicated support. Contact us to discuss your specific requirements.",
  },
  {
    question: "What information should I include in my contact form?",
    answer:
      "The more details you provide about your project, the better we can help you. Include your website goals, target audience, preferred timeline, and any specific features you need. Our AI will analyze this information to provide better recommendations.",
  },
  {
    question: "Is there a cost for consultation calls?",
    answer:
      "Initial consultation calls and demos are completely free. We want to understand your needs and show you how our platform can help before you make any commitment. Paid consulting is only for extensive custom development projects.",
  },
  {
    question: "Can you help migrate my existing website?",
    answer:
      "Yes, we can help migrate content from your existing website to a new AI-generated site. We also offer redesign services where we use AI to create a modern version of your current site while preserving your content and SEO rankings.",
  },
]

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="mt-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
          <HelpCircle className="w-4 h-4 mr-2" />
          Frequently Asked Questions
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Got Questions? We've Got Answers</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find quick answers to common questions about our AI website builder and services.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@buildaiweb.com"
              className="inline-flex items-center px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
            >
              Send us an email
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Call us directly
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
