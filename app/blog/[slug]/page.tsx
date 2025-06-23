import { notFound } from "next/navigation";
import { BlogPostComponent } from "@/components/blog/blog-post";
import { RelatedPosts } from "@/components/blog/related-posts";
import { blogPosts } from "@/lib/blog-data";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.id === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.id !== post.id &&
        (p.category === post.category ||
          p.tags.some((tag) => post.tags.includes(tag)))
    )
    .slice(0, 3);

  return (
    <div className='min-h-screen bg-white'>
      <BlogPostComponent post={post} />
      <RelatedPosts posts={relatedPosts} />
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}
