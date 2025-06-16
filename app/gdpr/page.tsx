"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function GDPRPage() {
  const rights = [
    {
      id: "access",
      title: "Right to Access",
      description:
        "You have the right to request a copy of your personal data and to know how we are processing it.",
    },
    {
      id: "rectification",
      title: "Right to Rectification",
      description:
        "You can request corrections to your personal data if it is inaccurate or incomplete.",
    },
    {
      id: "erasure",
      title: "Right to Erasure",
      description:
        "Also known as 'right to be forgotten', you can request deletion of your personal data under certain conditions.",
    },
    {
      id: "restrict",
      title: "Right to Restrict Processing",
      description:
        "You can request to limit how we use your personal data in specific circumstances.",
    },
    {
      id: "portability",
      title: "Right to Data Portability",
      description:
        "You can request to receive your data in a structured, commonly used format or have it transferred to another service.",
    },
    {
      id: "object",
      title: "Right to Object",
      description:
        "You can object to how we process your personal data, including direct marketing.",
    },
  ];

  const protectionMeasures = [
    "Encryption of data in transit and at rest",
    "Regular security assessments and audits",
    "Strict access controls and authentication",
    "Data backup and recovery procedures",
    "Employee training on data protection",
    "Incident response planning",
  ];

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <Navigation />
      <main className='flex-1 pt-16 max-w-4xl mx-auto px-4'>
        <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8'>
          <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
            GDPR Compliance
          </h1>
          <p className='text-gray-600'>Last updated: June 16, 2025</p>
        </div>

        <div className='prose prose-lg max-w-none mb-8'>
          <p className='text-gray-600 leading-relaxed'>
            At BuildAIWeb.com, we are committed to protecting your privacy and
            complying with the General Data Protection Regulation (GDPR). We
            believe in transparency about how we collect, use, and protect your
            personal data.
          </p>
        </div>

        <h2 className='text-2xl font-bold mb-6 text-gray-800'>
          Your Rights Under GDPR
        </h2>
        <div className='grid md:grid-cols-2 gap-6 mb-12'>
          {rights.map((right) => (
            <div
              key={right.id}
              className='bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200'
            >
              <h3 className='text-xl font-semibold mb-3 text-gray-800'>
                {right.title}
              </h3>
              <p className='text-gray-600'>{right.description}</p>
            </div>
          ))}
        </div>

        <div className='bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-12'>
          <h2 className='text-2xl font-bold mb-6 text-gray-800'>
            How We Protect Your Data
          </h2>
          <ul className='grid md:grid-cols-2 gap-4'>
            {protectionMeasures.map((measure, index) => (
              <li key={index} className='flex items-start space-x-3'>
                <span className='text-green-500 mt-1'>✓</span>
                <span className='text-gray-600'>{measure}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='bg-blue-50 rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4 text-gray-800'>
            Data Protection Officer
          </h2>
          <p className='text-gray-600 mb-4'>
            For any questions about our GDPR compliance or to exercise your
            rights, please contact our Data Protection Officer at:
          </p>
          <a
            href='mailto:dpo@buildaiweb.com'
            className='inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors'
          >
            dpo@buildaiweb.com
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
