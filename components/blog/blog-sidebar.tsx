"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrendingUp, Mail, Tag, Clock, User } from "lucide-react";
import Link from "next/link";
import { recentPosts, categories } from "@/lib/blog-data";

export function BlogSidebar() {
  const popularTags = [
    "AI",
    "Mobile app development",
    "Design",
    "SEO",
    "Performance",
    "Future Tech",
    "No-Code",
    "UX",
    "Innovation",
    "Automation",
  ];

  return (
    <div className='space-y-6'>
      {/* Newsletter Signup */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center text-lg'>
            <Mail className='w-5 h-5 mr-2 text-purple-600' />
            Stay Updated
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-sm text-gray-600 mb-4'>
            Get the latest AI mobile app development insights delivered to your
            inbox weekly.
          </p>
          <div className='space-y-3'>
            <Input placeholder='Enter your email' type='email' />
            <Button className='w-full bg-purple-600 hover:bg-purple-700'>
              Subscribe
            </Button>
          </div>
          <p className='text-xs text-gray-500 mt-2'>
            No spam. Unsubscribe anytime.
          </p>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center text-lg'>
            <Clock className='w-5 h-5 mr-2 text-purple-600' />
            Recent Posts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className='border-b border-gray-100 pb-4 last:border-b-0 last:pb-0'
              >
                <Link href={`/blog/${post.id}`} className='group'>
                  <h4 className='font-medium text-gray-900 group-hover:text-purple-600 transition-colors mb-2 line-clamp-2'>
                    {post.title}
                  </h4>
                  <div className='flex items-center text-xs text-gray-500 space-x-3'>
                    <div className='flex items-center'>
                      <User className='w-3 h-3 mr-1' />
                      {post.author.name}
                    </div>
                    <div className='flex items-center'>
                      <Clock className='w-3 h-3 mr-1' />
                      {post.readTime} min
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center text-lg'>
            <TrendingUp className='w-5 h-5 mr-2 text-purple-600' />
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-2'>
            {categories
              .filter((cat) => cat !== "All")
              .map((category) => (
                <Link key={category} href={`/blog?category=${category}`}>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='w-full justify-start hover:bg-purple-50 hover:text-purple-600'
                  >
                    {category}
                  </Button>
                </Link>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center text-lg'>
            <Tag className='w-5 h-5 mr-2 text-purple-600' />
            Popular Tags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-wrap gap-2'>
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant='outline'
                className='hover:bg-purple-50 hover:border-purple-300 cursor-pointer'
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA Card */}
      <Card className='bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200'>
        <CardContent className='p-6 text-center'>
          <h3 className='font-bold text-gray-900 mb-2'>Ready to Build?</h3>
          <p className='text-sm text-gray-600 mb-4'>
            Try our AI mobile app builder and create your site in minutes.
          </p>
          <Link href='/dashboard'>
            <Button className='bg-purple-600 hover:bg-purple-700'>
              Start Building
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
