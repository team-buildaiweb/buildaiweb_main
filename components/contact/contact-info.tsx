"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Twitter,
  Linkedin,
  Github,
  Calendar,
  Zap,
  Users,
  Globe,
} from "lucide-react";

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM PST",
      action: "Call Now",
      href: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email Support",
      content: "hello@buildaiweb.com",
      description: "Response within 2 hours",
      action: "Send Email",
      href: "mailto:hello@buildaiweb.com",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      content: "24/7 AI Assistant",
      description: "Instant responses",
      action: "Start Chat",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/buildaiweb", label: "Twitter" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/buildaiweb",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/buildaiweb", label: "GitHub" },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM PST" },
    { day: "Sunday", hours: "Closed (AI support available)" },
  ];
  // Dynamic online/offline status based on current PST time and office hours
  function getPSTDate() {
    // PST is UTC-8, PDT is UTC-7 (Daylight Saving). We'll use US Pacific Time.
    const now = new Date();
    // Get current time in US Pacific Time (handles DST)
    const pst = now.toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    });
    return new Date(pst);
  }

  function getOnlineStatus() {
    const now = getPSTDate();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hour = now.getHours();
    const minute = now.getMinutes();

    // Office hours: Mon-Fri 9:00-18:00, Sat 10:00-16:00, Sun closed (AI support only)
    if (day >= 1 && day <= 5) {
      // Monday-Friday
      if (hour > 9 && hour < 18) return "online";
      if (hour === 9 && minute >= 0) return "online";
      if (hour === 18 && minute === 0) return "online";
      return "offline";
    }
    if (day === 6) {
      // Saturday
      if (hour > 10 && hour < 16) return "online";
      if (hour === 10 && minute >= 0) return "online";
      if (hour === 16 && minute === 0) return "online";
      return "offline";
    }
    // Sunday
    return "ai";
  }

  const [status, setStatus] = useState(getOnlineStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getOnlineStatus());
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='space-y-6'>
      {/* Contact Methods */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center text-lg'>
            <Phone className='w-5 h-5 mr-2 text-purple-600' />
            Get in Touch
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className='border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors'
            >
              <div className='flex items-start space-x-3'>
                <div className='flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
                  <method.icon className='w-5 h-5 text-purple-600' />
                </div>
                <div className='flex-1 min-w-0'>
                  <h4 className='font-medium text-gray-900'>{method.title}</h4>
                  <p className='text-sm text-gray-600 font-mono'>
                    {method.content}
                  </p>
                  <p className='text-xs text-gray-500 mt-1'>
                    {method.description}
                  </p>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='mt-2 p-0 h-auto text-purple-600 hover:text-purple-700'
                    asChild
                  >
                    <a href={method.href}>{method.action}</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Office Hours */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center text-lg'>
            <Clock className='w-5 h-5 mr-2 text-purple-600' />
            Office Hours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-3'>
            {officeHours.map((schedule, index) => (
              <div key={index} className='flex justify-between items-center'>
                <span className='text-sm text-gray-600'>{schedule.day}</span>
                <span className='text-sm font-medium text-gray-900'>
                  {schedule.hours}
                </span>
              </div>
            ))}
          </div>
          <div
            className={`mt-4 p-3 rounded-lg border ${
              status === "online"
                ? "bg-green-50 border-green-200"
                : status === "offline"
                ? "bg-red-50 border-red-200"
                : "bg-blue-50 border-blue-200"
            }`}
          >
            <div className='flex items-center'>
              <div
                className={`w-2 h-2 rounded-full mr-2 animate-pulse ${
                  status === "online"
                    ? "bg-green-500"
                    : status === "offline"
                    ? "bg-red-500"
                    : "bg-blue-500"
                }`}
              ></div>
              <span
                className={`text-sm font-medium ${
                  status === "online"
                    ? "text-green-800"
                    : status === "offline"
                    ? "text-red-800"
                    : "text-blue-800"
                }`}
              >
                {status === "online"
                  ? "Currently Online"
                  : status === "offline"
                  ? "Currently Offline"
                  : "AI Support Available"}
              </span>
            </div>
            <p
              className={`text-xs mt-1 ${
                status === "online"
                  ? "text-green-600"
                  : status === "offline"
                  ? "text-red-600"
                  : "text-blue-600"
              }`}
            >
              {status === "online"
                ? "Live support available now"
                : status === "offline"
                ? "Live support is offline. AI support is available 24/7."
                : "AI support available 24/7"}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center text-lg'>
            <Zap className='w-5 h-5 mr-2 text-purple-600' />
            Why Choose Us
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div className='flex items-center space-x-3'>
              <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
                <Users className='w-4 h-4 text-blue-600' />
              </div>
              <div>
                <div className='font-semibold text-gray-900'>10,000+</div>
                <div className='text-sm text-gray-600'>Happy Customers</div>
              </div>
            </div>
            <div className='flex items-center space-x-3'>
              <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center'>
                <Globe className='w-4 h-4 text-green-600' />
              </div>
              <div>
                <div className='font-semibold text-gray-900'>50,000+</div>
                <div className='text-sm text-gray-600'>Mobile apps Built</div>
              </div>
            </div>
            <div className='flex items-center space-x-3'>
              <div className='w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center'>
                <Zap className='w-4 h-4 text-purple-600' />
              </div>
              <div>
                <div className='font-semibold text-gray-900'>&lt; 2 Hours</div>
                <div className='text-sm text-gray-600'>Response Time</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Media */}
      <Card>
        <CardHeader>
          <CardTitle className='text-lg'>Follow Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex space-x-3'>
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant='outline'
                size='sm'
                className='flex-1 hover:bg-purple-50 hover:border-purple-300'
                asChild
              >
                <a href={social.href} target='_blank' rel='noopener noreferrer'>
                  <social.icon className='w-4 h-4' />
                </a>
              </Button>
            ))}
          </div>
          <p className='text-xs text-gray-500 mt-3 text-center'>
            Stay updated with the latest AI mobile app development trends
          </p>
        </CardContent>
      </Card>

      {/* Schedule Call CTA */}
      <Card className='bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200'>
        <CardContent className='p-6 text-center'>
          <Calendar className='w-12 h-12 text-purple-600 mx-auto mb-4' />
          <h3 className='font-bold text-gray-900 mb-2'>Schedule a Demo Call</h3>
          <p className='text-sm text-gray-600 mb-4'>
            See our AI in action with a personalized demo tailored to your
            needs.
          </p>
          <Button className='w-full bg-purple-600 hover:bg-purple-700'>
            Book Free Demo
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
