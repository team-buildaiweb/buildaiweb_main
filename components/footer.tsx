"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Youtube,
  Facebook,
  Instagram,
  ArrowRight,
  Check,
  Heart,
  Shield,
  Award,
  Globe,
  Search,
} from "lucide-react";
import Link from "next/link";

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
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "GDPR", href: "/gdpr" },
  ],
};

const socialLinks = [
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/buildaiweb",
    color: "hover:text-blue-400",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/company/buildaiweb",
    color: "hover:text-blue-600",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/buildaiweb",
    color: "hover:text-gray-900",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com/@buildaiweb",
    color: "hover:text-red-600",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/buildaiweb",
    color: "hover:text-blue-600",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/buildaiweb",
    color: "hover:text-pink-600",
  },
];

interface FooterLink {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
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
            <div className='flex items-center mb-6'>
              <Zap className='h-8 w-8 text-purple-500 mr-2' />
              <span className='text-2xl font-bold'>BuildAIWeb</span>
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
                  href='tel:+15551234567'
                  className='hover:text-white transition-colors'
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className='flex items-center text-gray-400'>
                <MapPin className='w-4 h-4 mr-3 text-purple-500' />
                <span>San Francisco, CA</span>
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
                  <social.icon className='w-5 h-5' />
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
                  Made with love in United States
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
                href='/sitemap'
                className='hover:text-white transition-colors'
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
