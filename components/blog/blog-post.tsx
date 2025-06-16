"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, User, Calendar, Share2, BookOpen, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog-data"

interface BlogPostProps {
  post: BlogPost
}

export function BlogPostComponent({ post }: BlogPostProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <div className="mb-8">
        <Link href="/blog">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center space-x-4 mb-6">
          <Badge className="bg-purple-100 text-purple-800">{post.category}</Badge>
          <div className="flex items-center text-sm text-gray-600 space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime} min read
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>

        {/* Author and Share */}
        <div className="flex items-center justify-between border-t border-b border-gray-200 py-6">
          <div className="flex items-center space-x-4">
            <img
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="font-semibold text-gray-900">{post.author.name}</div>
              <div className="text-sm text-gray-600">{post.author.role}</div>
            </div>
          </div>

          <Button onClick={handleShare} variant="outline" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </header>

      {/* Featured Image */}
      <div className="mb-8">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <div
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: post.content
              .replace(/\n/g, "<br />")
              .replace(/#{1,6}\s/g, (match) => {
                const level = match.trim().length
                return `<h${level} class="text-${4 - level}xl font-bold text-gray-900 mt-8 mb-4">`
              })
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
          }}
        />
      </div>

      {/* Tags */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="hover:bg-purple-50 hover:border-purple-300">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Author Bio */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <img
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              className="w-16 h-16 rounded-full"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About {post.author.name}</h3>
              <p className="text-gray-600 mb-4">
                {post.author.role} at BuildAIWeb. Passionate about the intersection of artificial intelligence and web
                development, with over 8 years of experience building scalable web applications.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-1" />
                  12 Articles
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  AI Expert
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your AI-Powered Website?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Put these insights into practice. Try our AI website builder and create a professional website in minutes,
            not hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Try the AI Builder
              </Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline">
                Read More Articles
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </article>
  )
}
