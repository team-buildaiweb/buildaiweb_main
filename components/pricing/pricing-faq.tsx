"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Can I change plans at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated amount immediately. When downgrading, the change takes effect at your next billing cycle, and you'll retain access to premium features until then.",
  },
  {
    question: "What happens if I exceed my build limit on the Starter plan?",
    answer:
      "If you reach your 3-build limit on the Starter plan, you'll need to wait until the next month or upgrade to a paid plan for unlimited builds. We'll send you notifications as you approach your limit.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied within the first 30 days, contact our support team for a full refund. No questions asked.",
  },
  {
    question: "Can I export my websites and cancel my subscription?",
    answer:
      "You own all the websites you create. You can export your code at any time and host it anywhere. Even if you cancel your subscription, you keep all your generated websites and code.",
  },
  {
    question: "What's included in the Enterprise plan?",
    answer:
      "Enterprise plans are customized based on your specific needs. This typically includes unlimited team members, custom AI model training, dedicated support, on-premise deployment options, custom integrations, and SLA guarantees. Contact our sales team for a custom quote.",
  },
  {
    question: "Do you offer discounts for nonprofits or educational institutions?",
    answer:
      "Yes! We offer 50% discounts for verified nonprofits and educational institutions. Contact our support team with your organization details to apply for the discount.",
  },
  {
    question: "How does the AI website generation work?",
    answer:
      "Our AI analyzes your text description and generates a complete website including layout, content, styling, and responsive design. The process typically takes 2-5 minutes and produces production-ready code that you can customize further or use as-is.",
  },
  {
    question: "Is there a limit to how much I can customize the generated websites?",
    answer:
      "No limits! Once generated, you have full access to the code and can customize it however you like. Pro and Business plans also include advanced customization tools within the platform for easier editing without touching code.",
  },
]

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Questions?</h2>
          <p className="text-xl text-gray-600">Everything you need to know about our pricing and plans.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="shadow-sm border border-gray-200">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
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
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="mailto:sales@buildaiweb.com"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Email Sales Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
