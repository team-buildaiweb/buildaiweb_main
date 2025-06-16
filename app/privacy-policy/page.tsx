"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "collection",
      title: "Information We Collect",
      content:
        "We collect information that you provide directly to us, including personal information such as your name, email address, and any other information you choose to provide. We also automatically collect certain information about your device when you use our services.",
    },
    {
      id: "usage",
      title: "How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations. We may also use your information to personalize your experience and analyze usage patterns.",
    },
    {
      id: "sharing",
      title: "Information Sharing",
      content:
        "We do not sell your personal information. We may share your information with third-party service providers who assist us in operating our website, conducting our business, or servicing you.",
    },
    {
      id: "security",
      title: "Data Security",
      content:
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.",
    },
    {
      id: "rights",
      title: "Your Rights",
      content:
        "You have the right to access, correct, or delete your personal information. You can also object to processing or request restrictions on processing.",
    },
  ];

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <Navigation />
      <main className='flex-1 pt-16 max-w-4xl mx-auto px-4'>
        <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8'>
          <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
            Privacy Policy
          </h1>
          <p className='text-gray-600'>Last updated: June 16, 2025</p>
        </div>

        <div className='prose prose-lg max-w-none mb-8'>
          <p className='text-gray-600 leading-relaxed'>
            At BuildAIWeb.com, we take your privacy seriously. This Privacy
            Policy explains our practices regarding the collection, use, and
            disclosure of your information through our website and services.
          </p>
        </div>

        <div className='space-y-6'>
          {sections.map((section) => (
            <div
              key={section.id}
              className='bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200'
            >
              <h2 className='text-xl font-semibold mb-4 text-gray-800'>
                {section.title}
              </h2>
              <p className='text-gray-600 leading-relaxed'>{section.content}</p>
            </div>
          ))}
        </div>

        <div className='mt-12 bg-blue-50 rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4 text-gray-800'>
            Contact Us
          </h2>
          <p className='text-gray-600 mb-4'>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <a
            href='mailto:privacy@buildaiweb.com'
            className='inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors'
          >
            privacy@buildaiweb.com
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
