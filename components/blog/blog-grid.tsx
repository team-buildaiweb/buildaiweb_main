"use client";

import type { BlogPost } from "@/lib/blog-data";
import { CardSkeleton } from "@/components/loading/card-skeleton";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Next.js", "React", "JavaScript", "TypeScript"];

export function BlogGrid({
  posts,
  loading = false,
}: {
  posts: BlogPost[];
  loading?: boolean;
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(6);

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);
  const displayedPosts = filteredPosts.slice(0, visiblePosts);

  if (loading) {
    return (
      <div>
        {/* Category Filter Skeleton */}
        <div className='mb-8'>
          <div className='flex flex-wrap gap-2'>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className='h-8 w-20 bg-gray-200 rounded animate-pulse'
              />
            ))}
          </div>
        </div>

        {/* Posts Grid Skeleton */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {Array.from({ length: 6 }).map((_, i) => (
            <CardSkeleton key={i} showImage={true} showBadge={true} lines={3} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Category Filter */}
      {/* <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-purple-600 hover:bg-purple-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
      </div> */}

      {/* Featured Posts */}
      {selectedCategory === "All" && (
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            Featured Articles
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {posts
              .filter((post) => post.featured)
              .map((post) => (
                <Card
                  key={post.id}
                  className='overflow-hidden hover:shadow-xl transition-shadow duration-300 group'
                >
                  <div className='relative'>
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                    <div className='absolute top-4 left-4'>
                      <Badge className='bg-yellow-500 text-yellow-900'>
                        <Star className='w-3 h-3 mr-1' />
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardContent className='p-6'>
                    <div className='flex items-center space-x-4 mb-4 text-sm text-gray-600'>
                      <Badge variant='secondary'>{post.category}</Badge>
                      <div className='flex items-center'>
                        <Clock className='w-4 h-4 mr-1' />
                        {post.readTime} min read
                      </div>
                    </div>

                    <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors'>
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>

                    <p className='text-gray-600 mb-4 line-clamp-2'>
                      {post.excerpt}
                    </p>

                    <div className='flex items-center justify-between'>
                      <div className='flex items-center space-x-3'>
                        <img
                          src={post.author.avatar || "/placeholder.svg"}
                          alt={post.author.name}
                          className='w-8 h-8 rounded-full'
                        />
                        <div>
                          <div className='text-sm font-medium text-gray-900'>
                            {post.author.name}
                          </div>
                          <div className='text-xs text-gray-500'>
                            {post.author.role}
                          </div>
                        </div>
                      </div>

                      <Link href={`/blog/${post.id}`}>
                        <Button
                          variant='ghost'
                          size='sm'
                          className='group-hover:text-purple-600'
                        >
                          Read More
                          <ArrowRight className='w-4 h-4 ml-1' />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      )}

      {/* All Posts Grid */}
      <div className='mb-8'>
        <h2 className='text-2xl font-bold text-gray-900 mb-6'>
          {selectedCategory === "All"
            ? "Latest Articles"
            : `${selectedCategory} Articles`}
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {displayedPosts.map((post) => (
            <Card
              key={post.id}
              className='overflow-hidden hover:shadow-lg transition-shadow duration-300 group'
            >
              <div className='relative'>
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className='w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute top-3 left-3'>
                  <Badge variant='secondary' className='text-xs'>
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardContent className='p-5'>
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

                <h3 className='text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2'>
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>

                <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                  {post.excerpt}
                </p>

                <div className='flex flex-wrap gap-1 mb-3'>
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant='outline' className='text-xs'>
                      {tag}
                    </Badge>
                  ))}
                </div>

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
      </div>

      {/* Load More Button */}
      {visiblePosts < filteredPosts.length && (
        <div className='text-center'>
          <Button
            onClick={() => setVisiblePosts((prev) => prev + 6)}
            variant='outline'
            size='lg'
            className='border-purple-600 text-purple-600 hover:bg-purple-50'
          >
            Load More Articles
          </Button>
        </div>
      )}
    </div>
  );
}
