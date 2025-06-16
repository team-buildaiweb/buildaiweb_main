"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useState } from "react";

export default function StatusPage() {
  const services = [
    {
      id: "api",
      name: "API Services",
      status: "down",
      uptime: "0%",
      lastIncident: "None",
    },
    {
      id: "web",
      name: "Web Platform",
      status: "operational",
      uptime: "99.98%",
      lastIncident: "3 days ago",
    },
    {
      id: "ml",
      name: "ML Processing",
      status: "operational",
      uptime: "99.95%",
      lastIncident: "7 days ago",
    },
    {
      id: "db",
      name: "Database",
      status: "operational",
      uptime: "99.99%",
      lastIncident: "None",
    },
  ];

  const regions = [
    {
      id: "us",
      name: "North America",
      latency: "45ms",
      status: "optimal",
    },
    {
      id: "eu",
      name: "Europe",
      latency: "85ms",
      status: "optimal",
    },
    {
      id: "asia",
      name: "Asia Pacific",
      latency: "120ms",
      status: "optimal",
    },
  ];

  interface Service {
    id: string;
    name: string;
    status: "operational" | "degraded" | "down" | string;
    uptime: string;
    lastIncident: string;
  }

  interface Region {
    id: string;
    name: string;
    latency: string;
    status: "optimal" | "degraded" | "down" | string;
  }

  const getStatusColor = (
    status: "operational" | "optimal" | "degraded" | "down" | string
  ): string => {
    switch (status) {
      case "operational":
      case "optimal":
        return "bg-green-100 text-green-800";
      case "degraded":
        return "bg-yellow-100 text-yellow-800";
      case "down":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/subscribe.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email }),
      });

      if (response.ok) {
        setMessage("Subscription successful! Please check your email.");
        setEmail("");
      } else {
        setMessage("Failed to subscribe. Please try again later.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <Navigation />
      <main className='flex-1 pt-16 max-w-4xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>System Status</h1>
          <div className='inline-flex items-center space-x-2 bg-green-100 text-green-800 px-6 py-3 rounded-full'>
            <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
            <span className='font-semibold'>All Systems Operational</span>
          </div>
        </div>

        <div className='mb-12'>
          <h2 className='text-2xl font-bold mb-6'>Service Status</h2>
          <div className='grid gap-4'>
            {services.map((service) => (
              <div
                key={service.id}
                className='bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-center justify-between'
              >
                <div>
                  <h3 className='font-semibold text-gray-800'>
                    {service.name}
                  </h3>
                  <p className='text-sm text-gray-500'>
                    Uptime: {service.uptime}
                  </p>
                </div>
                <div className='flex items-center space-x-4'>
                  <span className='text-sm text-gray-500'>
                    Last incident: {service.lastIncident}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                      service.status
                    )}`}
                  >
                    {service.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='mb-12'>
          <h2 className='text-2xl font-bold mb-6'>Regional Performance</h2>
          <div className='grid md:grid-cols-3 gap-4'>
            {regions.map((region) => (
              <div
                key={region.id}
                className='bg-white rounded-lg shadow-sm border border-gray-100 p-4'
              >
                <h3 className='font-semibold text-gray-800 mb-2'>
                  {region.name}
                </h3>
                <div className='flex justify-between items-center'>
                  <span className='text-sm text-gray-500'>
                    Latency: {region.latency}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                      region.status
                    )}`}
                  >
                    {region.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='bg-blue-50 rounded-lg p-6 text-center'>
          <h2 className='text-xl font-semibold mb-4'>Subscribe to Updates</h2>
          <p className='text-gray-600 mb-4'>
            Get notified when there are changes to our system status.
          </p>
          <form onSubmit={handleSubscribe} className='space-y-4'>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
            <button
              type='submit'
              className='inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
            >
              Subscribe
            </button>
          </form>
          {message && <p className='mt-4 text-sm text-gray-700'>{message}</p>}
        </div>
      </main>
      <Footer />
    </div>
  );
}
