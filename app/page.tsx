"use client";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { BenefitsSection } from "@/components/benefits-section";
import { WorkflowSection } from "@/components/workflow-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Footer } from "@/components/footer";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookieConsent="));

    if (!cookieConsent) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleCookieConsent = (consent: boolean) => {
    document.cookie = `cookieConsent=${consent}; path=/; max-age=${
      60 * 60 * 24 * 365
    }`; // 1 year
    setShowCookieBanner(false);
  };

  return (
    <main className='min-h-screen'>
      <Navigation />
      <HeroSection />
      <BenefitsSection />
      <WorkflowSection />
      <TestimonialsSection />
      <Footer />

      {showCookieBanner && (
        <div className='fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 flex justify-between items-center'>
          <p className='text-sm'>
            We use cookies to improve your experience. By using our site, you
            agree to our{" "}
            <a href='/privacy' className='underline'>
              Privacy Policy
            </a>
            .
          </p>
          <div className='space-x-4'>
            <button
              onClick={() => handleCookieConsent(true)}
              className='bg-purple-500 px-4 py-2 rounded text-sm hover:bg-purple-600'
            >
              Accept
            </button>
            <button
              onClick={() => handleCookieConsent(false)}
              className='bg-gray-500 px-4 py-2 rounded text-sm hover:bg-gray-600'
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
