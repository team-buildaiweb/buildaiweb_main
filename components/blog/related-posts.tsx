"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className='bg-gray-50 py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Related Articles
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Continue learning with these related articles about AI-powered
            mobile app development.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {posts.map((post) => (
            <Card
              key={post.id}
              className='overflow-hidden hover:shadow-lg transition-shadow duration-300 group'
            >
              <div className='relative'>
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute top-3 left-3'>
                  <Badge variant='secondary' className='text-xs'>
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardContent className='p-6'>
                <div className='flex items-center space-x-3 mb-3 text-xs text-gray-600'>
                  <div className='flex items-center'>
                    <Clock className='w-3 h-3 mr-1' />
                    {post.readTime} min
                  </div>
                  <div className='flex items-center'>
                    <User className='w-3 h-3 mr-1' />
                    {post.author.name}
                  </div>
                </div>

                <h3 className='text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2'>
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>

                <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                  {post.excerpt}
                </p>

                <Link href={`/blog/${post.id}`}>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='w-full group-hover:bg-purple-50 group-hover:text-purple-600'
                  >
                    Read Article
                    <ArrowRight className='w-4 h-4 ml-1' />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='text-center mt-12'>
          <Link href='/blog'>
            <Button
              variant='outline'
              size='lg'
              className='border-purple-600 text-purple-600 hover:bg-purple-50'
            >
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
