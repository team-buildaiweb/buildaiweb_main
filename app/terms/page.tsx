"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Smartphone,
  Sparkles,
  Shield,
  User,
  AppWindow,
  Lock,
  ShieldCheck,
  Ban,
  Gavel,
  RefreshCw,
} from "lucide-react";

export default function TermsPage() {
  // Helper function to render icon with consistent styling
  const renderIcon = (icon: React.ReactNode) => (
    <div className='text-purple-500'>{icon}</div>
  );
  const terms = [
    {
      id: "service",
      title: "Use of Service",
      content:
        "By using BuildAIWeb.com's mobile app development platform, you agree to use our services only for lawful purposes. This includes our AI-powered code generation, app building tools, and development resources. You must not use our service to create malicious applications, conduct unauthorized data collection, or engage in activities that could harm our infrastructure or end users.",
      icon: <Smartphone className='w-6 h-6' />,
    },
    {
      id: "ai-usage",
      title: "AI-Generated Content",
      content:
        "When using our AI-powered code generation and app development tools, you retain ownership of your app's unique features and custom code. However, you acknowledge that the AI-generated components may produce similar patterns across different users' applications. You are responsible for reviewing and validating all AI-generated code before deployment.",
      icon: <Sparkles className='w-6 h-6' />,
    },
    {
      id: "ip",
      title: "Intellectual Property",
      content:
        "All content, features, and functionality of BuildAIWeb.com, including our AI models, SDKs, APIs, and mobile development tools, are the exclusive property of BuildAIWeb.com and are protected by international intellectual property laws. When you create apps using our platform, you retain rights to your unique code and content while licensing our tools and frameworks.",
      icon: <Shield className='w-6 h-6' />,
    },
    {
      id: "accounts",
      title: "Developer Accounts",
      content:
        "Your developer account gives you access to our AI-powered mobile development tools, analytics, and deployment services. You must provide accurate information and maintain security of your API keys and credentials. Enable two-factor authentication and report any unauthorized access immediately.",
      icon: <User className='w-6 h-6' />,
    },
    {
      id: "apps",
      title: "Mobile Applications",
      content:
        "Apps created using our platform must comply with all applicable app store guidelines and regulations. You are responsible for ensuring your apps meet privacy requirements, handle user data appropriately, and maintain appropriate content ratings. We reserve the right to suspend apps that violate these guidelines.",
      icon: <AppWindow className='w-6 h-6' />,
    },
    {
      id: "data",
      title: "Data & Privacy",
      content:
        "When building apps with our platform, you must clearly communicate to users how their data is collected and used. Our tools include privacy-focused features to help you comply with GDPR, CCPA, and other regulations. You are responsible for implementing appropriate data protection measures in your apps.",
      icon: <Lock className='w-6 h-6' />,
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content:
        "BuildAIWeb.com and its affiliates shall not be liable for any damages resulting from: (1) use or performance of AI-generated code, (2) app store rejection or removal, (3) service interruptions, or (4) data loss. We recommend regular testing and backing up of your app's code and data.",
      icon: <ShieldCheck className='w-6 h-6' />,
    },
    {
      id: "termination",
      title: "Account Termination",
      content:
        "We may suspend or terminate developer accounts that violate these terms, create malicious applications, misuse our AI services, or harm other users. Upon termination, you must cease using our SDKs and APIs, though existing mobile apps may continue functioning subject to our discretion.",
      icon: <Ban className='w-6 h-6' />,
    },
    {
      id: "dispute",
      title: "Dispute Resolution",
      content:
        "Any disputes regarding our mobile development platform, AI services, or these terms will be governed by the laws of our jurisdiction. For app store-related disputes, additional terms from respective app marketplaces may apply.",
      icon: <Gavel className='w-6 h-6' />,
    },
    {
      id: "changes",
      title: "Changes to Terms",
      content:
        "We may update these terms to reflect changes in our services, AI capabilities, or legal requirements. We'll notify developers of significant changes via email or our developer dashboard. Continuing to use our platform or maintaining published apps constitutes acceptance of updated terms.",
      icon: <RefreshCw className='w-6 h-6' />,
    },
  ];

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <Navigation />
      <main className='flex-1 pt-24 pb-16 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='relative bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 rounded-3xl p-12 mb-16 overflow-hidden'>
          <div className='relative z-10'>
            <h1 className='text-4xl sm:text-5xl font-bold mb-4 text-white'>
              Terms and Conditions
            </h1>
            <p className='text-xl text-white/90 max-w-3xl'>
              By using BuildAIWeb.com's AI-powered mobile development platform,
              you agree to these terms. Last updated: June 17, 2025
            </p>
          </div>
          <div className='absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent mix-blend-overlay'></div>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='w-full lg:w-64 flex-shrink-0 order-2 lg:order-1'>
            {" "}
            <div className='sticky top-24 bg-white rounded-xl border border-purple-100 p-6'>
              <h3 className='font-semibold text-gray-900 mb-4'>
                Quick Navigation
              </h3>
              <nav className='space-y-2'>
                {terms.map((term) => (
                  <a
                    key={term.id}
                    href={`#${term.id}`}
                    className='group flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors'
                  >
                    {renderIcon(term.icon)}
                    <span className='text-sm font-medium'>{term.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className='flex-grow order-1 lg:order-2'>
            <div className='prose prose-lg max-w-none mb-8'>
              {" "}
              <div className='p-6 bg-purple-50/50 rounded-xl border border-purple-100/50'>
                <p className='text-gray-600 leading-relaxed'>
                  Welcome to BuildAIWeb.com's mobile app development platform.
                  These terms govern your use of our AI-powered development
                  tools, SDKs, and services. Please read them carefully before
                  building your applications.
                </p>
              </div>
            </div>
            <div className='space-y-6'>
              {terms.map((term) => (
                <div
                  id={term.id}
                  key={term.id}
                  className='group bg-white hover:bg-purple-50/80 rounded-xl p-6 border border-purple-100 
                    hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100/20 transition-all scroll-mt-24'
                >
                  {" "}
                  <div className='flex items-start gap-4'>
                    <div className='text-purple-500'>{term.icon}</div>
                    <div className='space-y-3 flex-grow'>
                      <h2 className='text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors'>
                        {term.title}
                      </h2>
                      <p className='text-gray-600 leading-relaxed'>
                        {term.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>{" "}
            <div
              className='mt-16 relative bg-gradient-to-br from-purple-100 via-purple-50 to-white 
              rounded-xl border border-purple-200 p-8 overflow-hidden'
            >
              <div className='relative z-10'>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  Questions About Our Terms?
                </h2>
                <p className='text-gray-600 mb-6'>
                  If you have questions about these terms or need clarification
                  about using our mobile app development platform, please
                  contact our legal team.
                </p>
                <div className='flex flex-wrap items-center gap-4'>
                  <a
                    href='mailto:hello@buildaiweb.com'
                    className='inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white 
                      font-medium rounded-lg hover:bg-purple-700 transition-colors'
                  >
                    Contact Legal Team
                  </a>
                  <a
                    href='/privacy'
                    className='inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 
                      font-medium rounded-lg border border-purple-200 hover:bg-purple-50 transition-colors'
                  >
                    View Privacy Policy
                  </a>
                </div>
              </div>
              <div className='absolute inset-0 bg-gradient-to-tr from-purple-100/50 to-transparent mix-blend-overlay'></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
