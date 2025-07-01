"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Youtube,
  Facebook,
  ArrowRight,
  Check,
  Heart,
  Shield,
  Award,
  Globe,
  Search,
} from "lucide-react";
import { SiX, SiPinterest } from "react-icons/si";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "API", href: "/api" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ],
  resources: [
    { name: "Documentation", href: "/documentation" },
    { name: "Community", href: "/community" },
    { name: "Status", href: "/status" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "GDPR", href: "/gdpr" },
  ],
};

const socialLinks = [
  {
    name: "X",
    icon: SiX,
    href: "https://x.com/buildaiweb",
    color: "hover:text-blue-400",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/build-aii/",
    color: "hover:text-blue-600",
  },
  {
    name: "Crunchbase",
    customIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 68" class="w-6 h-6">
      <path
        class="fill-current"
        d="M13.94 33.658a2.962 2.962 0 110.034-2.44h2.296a5.167 5.167 0 100 2.44h-2.296zM23.51 27.257h-.379a5.098 5.098 0 00-2.526.89v-5.752h-2.095v14.794h2.107v-.54a5.167 5.167 0 102.893-9.392zm2.962 5.534v.092a2.94 2.94 0 01-.08.362 2.934 2.934 0 01-.144.373v.046a2.98 2.98 0 01-2.072 1.625l-.281.046h-.063a2.916 2.916 0 01-.322 0 2.962 2.962 0 01-.402-.029h-.057a2.934 2.934 0 01-.752-.23h-.057a2.974 2.974 0 01-.666-.447 2.991 2.991 0 01-.522-.626 2.962 2.962 0 01-.19-.367 2.945 2.945 0 01.035-2.44 2.968 2.968 0 012.377-1.682 2.934 2.934 0 01.304 0 2.968 2.968 0 012.928 2.882 2.957 2.957 0 010 .396z"
        transform="matrix(3 0 0 3 -17 -60)"
      />
    </svg>`,
    href: "https://www.crunchbase.com/organization/buildaiweb",
    color: "hover:text-blue-500 group",
  },
  {
    name: "F6S",
    customIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" class="w-6 h-6" style="fill: currentColor">
      <path d="M156.9 180.1h136.8v57.8h-79.1v124.9h45.8v57.8h-45.8v199.3h-57.8V180.1z"/>
      <path d="M372.4 237.9v124.9h68.5c16.6 0 31.1 14.5 31.1 31v194.7c0 16.7-14.5 31.4-31.1 31.4h-95c-16.6 0-31.1-14.3-31.1-30.6V212.3c0-16.8 14.4-32.2 30.3-32.2h95.9c16.6 0 31.1 14.5 31.1 31v72.7h-57.8v-45.8zm0 182.7v141.5h41.9V420.6h-41.9z"/>
      <path d="M647.1 283.7h-57.8v-45.8h-41.9v124.9l69.1 0.02c16.4 0 30.5 19.7 30.5 35.8v189.7c0 16.8-14.3 31.6-30.5 31.6h-92.9c-16.3 0-30.5-14.4-30.5-30.7v-106l54.3-0.1v79.1h41.9v-141.5l-65.7 0.02c-16.2 0-30.5-14.6-30.5-31.1V211.3c0-16.6 14.3-31.2 30.5-31.2h92.9c16.3 0 30.5 14.6 30.5 31.2v72.4z"/>
    </svg>`,
    href: "https://www.f6s.com/buildaiweb",
    color: "hover:text-purple-600",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@BuildAIWeb",
    color: "hover:text-red-600",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61577628031714",
    color: "hover:text-blue-600",
  },
  {
    name: "Pinterest",
    icon: SiPinterest,
    href: "https://www.pinterest.com/BuildAIWeb",
    color: "hover:text-pink-600",
  },
];

interface FooterLink {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  customIcon?: string; // For custom SVG content
  href: string;
  color: string;
}

interface Award {
  name: string;
  organization?: string;
}

const awards: Award[] = [
  // { name: "Best AI Tool 2024", organization: "TechCrunch" },
  { name: "Innovation Award", organization: "WebDev Summit" },
  // { name: "Top Startup", organization: "Product Hunt" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubscribed(true);
    setIsLoading(false);
    setEmail("");

    // Reset success state after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className='bg-gray-900 text-white'>
      {/* Newsletter Section */}
      <div className='border-b border-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
            <div>
              <h3 className='text-2xl font-bold mb-2'>
                Stay Updated with AI Mobile app development
              </h3>
              <p className='text-gray-400 text-lg'>
                Get the latest insights, tutorials, and product updates
                delivered to your inbox weekly.
              </p>
              <div className='flex items-center mt-4 space-x-4 text-sm text-gray-400'>
                <div className='flex items-center'>
                  <Check className='w-4 h-4 mr-1 text-green-400' />
                  Weekly AI insights
                </div>
                <div className='flex items-center'>
                  <Check className='w-4 h-4 mr-1 text-green-400' />
                  No spam, ever
                </div>
                <div className='flex items-center'>
                  <Check className='w-4 h-4 mr-1 text-green-400' />
                  Unsubscribe anytime
                </div>
              </div>
            </div>

            <div className='lg:text-right'>
              {isSubscribed ? (
                <div className='inline-flex items-center px-6 py-3 bg-green-600 rounded-lg'>
                  <Check className='w-5 h-5 mr-2' />
                  <span className='font-medium'>Successfully subscribed!</span>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className='flex flex-col sm:flex-row gap-3 max-w-md lg:ml-auto'
                >
                  <Input
                    type='email'
                    placeholder='Enter your email address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500'
                    required
                  />
                  <Button
                    type='submit'
                    disabled={isLoading}
                    className='bg-purple-600 hover:bg-purple-700 whitespace-nowrap'
                  >
                    {isLoading ? (
                      <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2' />
                    ) : (
                      <Mail className='w-4 h-4 mr-2' />
                    )}
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8'>
          {/* Company Info */}
          <div className='lg:col-span-2'>
            <div className='flex items-center mb-2'>
              <Image
                src='/logo.webp'
                alt='BuildAIWeb Logo'
                className='h-10 w-auto max-w-[180px]'
                width={32}
                height={32}
              />
            </div>

            <p className='text-gray-400 mb-6 leading-relaxed'>
              The world's most advanced AI-powered mobile app builder. Transform
              your ideas into professional mobile apps in minutes with the power
              of artificial intelligence.
            </p>

            {/* Contact Info */}
            <div className='space-y-3 mb-6'>
              <div className='flex items-center text-gray-400'>
                <Mail className='w-4 h-4 mr-3 text-purple-500' />
                <a
                  href='mailto:hello@buildaiweb.com'
                  className='hover:text-white transition-colors'
                >
                  hello@buildaiweb.com
                </a>
              </div>
              <div className='flex items-center text-gray-400'>
                <Phone className='w-4 h-4 mr-3 text-purple-500' />
                <a
                  href='tel:+94777724782'
                  className='hover:text-white transition-colors'
                >
                  +94 77 772 4782
                </a>
              </div>
              <div className='flex items-center text-gray-400'>
                <MapPin className='w-4 h-4 mr-3 text-purple-500' />
                <span>55, 1 Kirimandala Mawatha, Colombo</span>
              </div>
            </div>

            {/* Social Links */}
            <div className='flex space-x-4'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`text-gray-400 ${social.color} transition-colors`}
                  aria-label={social.name}
                >
                  {social.icon ? (
                    <social.icon className='w-5 h-5' />
                  ) : social.customIcon ? (
                    <span
                      className='w-5 h-5'
                      dangerouslySetInnerHTML={{ __html: social.customIcon }}
                    />
                  ) : (
                    <span className='w-5 h-5' />
                  )}
                </a>
              ))}
            </div>

            {/* Simple Search Link */}
            <div className='mt-6 pt-6 border-t border-gray-800'>
              <p className='text-gray-400 text-sm mb-3'>
                Looking for something specific?
              </p>
              <Link
                href='/search'
                className='inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm'
              >
                <Search className='w-4 h-4' />
                Search our site
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Product</h4>
            <ul className='space-y-3'>
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-white transition-colors flex items-center group'
                  >
                    {link.name}
                    <ArrowRight className='w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity' />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Company</h4>
            <ul className='space-y-3'>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-white transition-colors flex items-center group'
                  >
                    {link.name}
                    <ArrowRight className='w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity' />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Resources</h4>
            <ul className='space-y-3'>
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-white transition-colors flex items-center group'
                  >
                    {link.name}
                    <ArrowRight className='w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity' />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Legal</h4>
            <ul className='space-y-3'>
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-white transition-colors flex items-center group'
                  >
                    {link.name}
                    <ArrowRight className='w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity' />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className='border-t border-gray-800 mt-12 pt-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center'>
            <div>
              <h5 className='text-sm font-semibold text-gray-300 mb-3'>
                Recognition & Awards
              </h5>
              <div className='space-y-2'>
                {awards.length > 0 &&
                  awards.map((award, index) => (
                    <div
                      key={index}
                      className='flex items-center text-sm text-gray-400'
                    >
                      <Award className='w-3 h-3 mr-2 text-yellow-500' />
                      <span>{award.name}</span>
                    </div>
                  ))}
              </div>
            </div>

            <div>
              <h5 className='text-sm font-semibold text-gray-300 mb-3'>
                Security & Compliance
              </h5>
              <div className='flex flex-wrap gap-2'>
                <Badge
                  variant='outline'
                  className='border-gray-600 text-gray-400'
                >
                  <Shield className='w-3 h-3 mr-1' />
                  SOC 2
                </Badge>
                <Badge
                  variant='outline'
                  className='border-gray-600 text-gray-400'
                >
                  <Shield className='w-3 h-3 mr-1' />
                  GDPR
                </Badge>
                <Badge
                  variant='outline'
                  className='border-gray-600 text-gray-400'
                >
                  <Shield className='w-3 h-3 mr-1' />
                  ISO 27001
                </Badge>
              </div>
            </div>

            <div>
              <h5 className='text-sm font-semibold text-gray-300 mb-3'>
                Global Presence
              </h5>
              <div className='flex items-center text-sm text-gray-400'>
                <Globe className='w-4 h-4 mr-2 text-blue-500' />
                <span>Available in 50+ countries</span>
              </div>
              <div className='flex items-center text-sm text-gray-400 mt-1'>
                <div className='w-2 h-2 bg-green-500 rounded-full mr-2' />
                <span>99.9% uptime guarantee</span>
              </div>
            </div>

            <div className='text-center md:text-right'>
              <div className='inline-flex items-center px-4 py-2 bg-gray-800 rounded-lg'>
                <Heart className='w-4 h-4 mr-2 text-red-500' />
                <span className='text-sm text-gray-300'>
                  Made with love in Sri Lanka
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          {" "}
          <div className='flex flex-col md:flex-row justify-between items-center'>
            {" "}
            <div className='text-gray-400 text-sm mb-4 md:mb-0'>
              © {new Date().getFullYear()} BuildAIWeb, Inc. All rights reserved.
            </div>
            <div className='flex items-center space-x-6 text-sm text-gray-400'>
              <Link
                href='/sitemap.xml'
                className='text-gray-400 hover:text-gray-300'
              >
                Sitemap
              </Link>
              <Link
                href='/accessibility'
                className='hover:text-white transition-colors'
              >
                Accessibility
              </Link>
              <div className='flex items-center'>
                <div className='w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse' />
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
