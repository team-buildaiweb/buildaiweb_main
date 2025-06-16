"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Search,
  ArrowLeft,
  Compass,
  Lightbulb,
  Zap,
  BookOpen,
  MessageCircle,
  ExternalLink,
  RefreshCw,
  MapPin,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const popularPages = [
  {
    title: "AI Website Builder",
    description: "Try our interactive demo and build your first AI website",
    href: "/dashboard",
    icon: Zap,
    category: "Product",
    popular: true,
  },
  {
    title: "Features & Capabilities",
    description: "Explore all the powerful AI features we offer",
    href: "/features",
    icon: Lightbulb,
    category: "Product",
    popular: true,
  },
  {
    title: "Pricing Plans",
    description: "Find the perfect plan for your needs",
    href: "/pricing",
    icon: BookOpen,
    category: "Product",
    popular: true,
  },
  {
    title: "Blog & Tutorials",
    description: "Learn about AI web development and best practices",
    href: "/blog",
    icon: BookOpen,
    category: "Resources",
    popular: false,
  },
  {
    title: "Contact Support",
    description: "Get help from our team or AI assistant",
    href: "/contact",
    icon: MessageCircle,
    category: "Support",
    popular: false,
  },
  {
    title: "Documentation",
    description: "Technical guides and API documentation",
    href: "/docs",
    icon: BookOpen,
    category: "Resources",
    popular: false,
  },
]

const quickActions = [
  {
    title: "Start Building",
    description: "Jump right into creating your website",
    href: "/dashboard",
    icon: Zap,
    color: "bg-purple-600 hover:bg-purple-700",
  },
  {
    title: "View Examples",
    description: "See websites built with our AI",
    href: "/examples",
    icon: Compass,
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    title: "Get Help",
    description: "Chat with our support team",
    href: "/contact",
    icon: MessageCircle,
    color: "bg-green-600 hover:bg-green-700",
  },
]

const recentUpdates = [
  {
    title: "New AI Model Released",
    description: "Faster generation with improved accuracy",
    time: "2 days ago",
    href: "/blog/new-ai-model-2024",
  },
  {
    title: "Mobile App Beta",
    description: "Build websites on the go",
    time: "1 week ago",
    href: "/blog/mobile-app-beta",
  },
  {
    title: "Enterprise Features",
    description: "Advanced collaboration tools",
    time: "2 weeks ago",
    href: "/blog/enterprise-features",
  },
]

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredPages, setFilteredPages] = useState(popularPages)
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true)
      const timer = setTimeout(() => {
        const filtered = popularPages.filter(
          (page) =>
            page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            page.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            page.category.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        setFilteredPages(filtered)
        setIsSearching(false)
      }, 300)
      return () => clearTimeout(timer)
    } else {
      setFilteredPages(popularPages)
      setIsSearching(false)
    }
  }, [searchQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would trigger a site-wide search
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navigation />

      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            {/* Animated 404 */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full mb-6 relative overflow-hidden">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  404
                </div>
                {/* Floating elements */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-3 left-3 w-2 h-2 bg-blue-400 rounded-full animate-bounce animation-delay-200"></div>
                <div className="absolute top-1/2 left-1 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce animation-delay-400"></div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Oops! Page Not Found</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The page you're looking for seems to have wandered off into the digital void. But don't worry – our AI can
              help you find what you need!
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              {quickActions.map((action, index) => (
                <Link key={index} href={action.href}>
                  <Button className={`${action.color} text-white px-6 py-3`}>
                    <action.icon className="w-5 h-5 mr-2" />
                    {action.title}
                  </Button>
                </Link>
              ))}
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for pages, features, or help topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500"
                />
                {isSearching && (
                  <RefreshCw className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 animate-spin" />
                )}
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content - Popular Pages */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {searchQuery ? `Search Results (${filteredPages.length})` : "Popular Pages"}
                </h2>
                {searchQuery && (
                  <Button variant="outline" size="sm" onClick={() => setSearchQuery("")} className="text-gray-600">
                    Clear Search
                  </Button>
                )}
              </div>

              {filteredPages.length === 0 ? (
                <Card className="text-center py-12">
                  <CardContent>
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
                    <p className="text-gray-600 mb-4">
                      We couldn't find any pages matching "{searchQuery}". Try a different search term.
                    </p>
                    <Button onClick={() => setSearchQuery("")} variant="outline">
                      Clear Search
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPages.map((page, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                              <page.icon className="w-5 h-5 text-purple-600 group-hover:text-white" />
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {page.category}
                            </Badge>
                          </div>
                          {page.popular && <Badge className="bg-green-100 text-green-800 text-xs">Popular</Badge>}
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                          <Link href={page.href} className="flex items-center">
                            {page.title}
                            <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">{page.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Navigation Breadcrumb */}
              <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                  Where would you like to go?
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Link href="/">
                    <Button variant="outline" size="sm">
                      <Home className="w-4 h-4 mr-2" />
                      Home
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button variant="outline" size="sm">
                      <Zap className="w-4 h-4 mr-2" />
                      Dashboard
                    </Button>
                  </Link>
                  <Link href="/features">
                    <Button variant="outline" size="sm">
                      <Lightbulb className="w-4 h-4 mr-2" />
                      Features
                    </Button>
                  </Link>
                  <Link href="/pricing">
                    <Button variant="outline" size="sm">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Pricing
                    </Button>
                  </Link>
                  <Link href="/blog">
                    <Button variant="outline" size="sm">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Blog
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Updates */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                    Recent Updates
                  </h3>
                  <div className="space-y-4">
                    {recentUpdates.map((update, index) => (
                      <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                        <Link href={update.href} className="group">
                          <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors mb-1">
                            {update.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">{update.description}</p>
                          <div className="text-xs text-gray-500">{update.time}</div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Help & Support */}
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Our AI assistant and support team are here to help you find what you're looking for.
                  </p>
                  <div className="space-y-2">
                    <Link href="/contact">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Support</Button>
                    </Link>
                    <Link href="/docs">
                      <Button variant="outline" className="w-full">
                        View Documentation
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Go Back */}
              <Card>
                <CardContent className="p-6 text-center">
                  <Button onClick={() => window.history.back()} variant="outline" className="w-full">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Go Back
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
