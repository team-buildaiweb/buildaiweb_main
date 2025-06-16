"use client"

import { Navigation } from "@/components/navigation"
import { ContactHeader } from "@/components/contact/contact-header"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactChatbot } from "@/components/contact/contact-chatbot"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactFAQ } from "@/components/contact/contact-faq"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function ContactPage() {
  const [activeMethod, setActiveMethod] = useState<"form" | "chat">("form")

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16">
        <ContactHeader />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Contact Area */}
            <div className="lg:col-span-2">
              {/* Contact Method Toggle */}
              <div className="flex bg-white rounded-xl p-2 mb-8 shadow-sm border border-gray-200">
                <button
                  onClick={() => setActiveMethod("form")}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
                    activeMethod === "form"
                      ? "bg-purple-600 text-white shadow-md"
                      : "text-gray-600 hover:text-purple-600"
                  }`}
                >
                  Contact Form
                </button>
                <button
                  onClick={() => setActiveMethod("chat")}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
                    activeMethod === "chat"
                      ? "bg-purple-600 text-white shadow-md"
                      : "text-gray-600 hover:text-purple-600"
                  }`}
                >
                  AI Chat Assistant
                </button>
              </div>

              {/* Contact Interface */}
              {activeMethod === "form" ? <ContactForm /> : <ContactChatbot />}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>

          {/* FAQ Section */}
          <ContactFAQ />
        </div>
      </div>
      <Footer />
    </div>
  )
}
