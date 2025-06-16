"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  const terms = [
    {
      id: "service",
      title: "Use of Service",
      content:
        "By accessing and using BuildAIWeb.com, you agree to use our services only for lawful purposes. You must not use our service to transmit any malicious code, conduct unauthorized data collection, or engage in any activity that could harm our infrastructure.",
    },
    {
      id: "ip",
      title: "Intellectual Property",
      content:
        "All content, features, and functionality of BuildAIWeb.com, including but not limited to text, graphics, logos, and code, are the exclusive property of BuildAIWeb.com and are protected by international copyright, trademark, and other intellectual property laws.",
    },
    {
      id: "accounts",
      title: "User Accounts",
      content:
        "When you create an account with us, you must provide accurate and complete information. You are solely responsible for maintaining the confidentiality of your account and password. Contact us immediately if you suspect any unauthorized access to your account.",
    },
    {
      id: "content",
      title: "User Content",
      content:
        "By submitting, posting, or displaying content on BuildAIWeb.com, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, and publish the content for the purpose of providing and promoting our services.",
    },
    {
      id: "privacy",
      title: "Privacy & Data Protection",
      content:
        "Your use of BuildAIWeb.com is also governed by our Privacy Policy. By using our services, you consent to our collection and use of your information as described in the Privacy Policy.",
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content:
        "BuildAIWeb.com and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service. This includes any loss of data, revenue, or business opportunities.",
    },
    {
      id: "termination",
      title: "Account Termination",
      content:
        "We reserve the right to suspend or terminate your account and access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users, us, or third parties.",
    },
    {
      id: "dispute",
      title: "Dispute Resolution",
      content:
        "Any disputes arising from the use of our services will be governed by the laws of the jurisdiction in which we operate. You agree to submit to the personal jurisdiction of the courts located within this jurisdiction.",
    },
    {
      id: "changes",
      title: "Changes to Terms",
      content:
        "We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website. Your continued use of BuildAIWeb.com after such modifications constitutes your acceptance of the updated terms.",
    },
  ];

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <Navigation />{" "}
      <main className='flex-1 pt-16 max-w-6xl mx-auto px-4'>
        <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8'>
          <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
            Terms and Conditions
          </h1>
          <p className='text-gray-600'>Last updated: June 16, 2025</p>
        </div>

        <div className='flex gap-8'>
          <div className='hidden lg:block w-64 flex-shrink-0'>
            <div className='sticky top-24 bg-white rounded-lg shadow-sm border border-gray-100 p-4'>
              <h3 className='font-semibold text-gray-800 mb-4'>
                Table of Contents
              </h3>
              <nav className='space-y-2'>
                {terms.map((term) => (
                  <a
                    key={term.id}
                    href={`#${term.id}`}
                    className='block text-gray-600 hover:text-blue-600 transition-colors text-sm'
                  >
                    {term.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className='flex-grow'>
            <div className='prose prose-lg max-w-none mb-8'>
              <p className='text-gray-600 leading-relaxed'>
                Welcome to BuildAIWeb.com. By accessing or using our website,
                you agree to be bound by these Terms and Conditions. Please read
                them carefully before proceeding to use our services.
              </p>
            </div>

            <div className='space-y-6'>
              {terms.map((term) => (
                <div
                  id={term.id}
                  key={term.id}
                  className='bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200 scroll-mt-24'
                >
                  <h2 className='text-xl font-semibold mb-4 text-gray-800'>
                    {term.title}
                  </h2>
                  <p className='text-gray-600 leading-relaxed'>
                    {term.content}
                  </p>
                </div>
              ))}
            </div>

            <div className='mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8'>
              <h2 className='text-2xl font-bold mb-4 text-gray-800'>
                Questions About Our Terms?
              </h2>
              <p className='text-gray-600 mb-6'>
                If you have any questions about these Terms and Conditions,
                please don't hesitate to reach out to our legal team.
              </p>
              <div className='flex items-center gap-4'>
                <a
                  href='mailto:legal@buildaiweb.com'
                  className='inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
                >
                  Contact Legal Team
                </a>
                <a
                  href='/privacy-policy'
                  className='inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors'
                >
                  View Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
