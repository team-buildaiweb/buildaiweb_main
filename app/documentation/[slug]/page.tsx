import { getGuideBySlug, getGuidePaths } from "@/lib/docs-data";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

// Enable static generation
export const dynamic = "force-static";

export async function generateStaticParams() {
  const paths = getGuidePaths();
  return paths;
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    notFound();
  }

  const Icon = guide.icon;

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <Navigation />
      <main className='flex-1 max-w-4xl mx-auto px-4 py-16'>
        {/* Header */}
        <div className='mb-8'>
          <Link href='/documentation'>
            <Button variant='ghost' className='mb-6 hover:bg-purple-50'>
              <ArrowLeft className='w-4 h-4 mr-2' />
              Back to Documentation
            </Button>
          </Link>
          <div className='bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-2xl p-8'>
            <Badge className='mb-4 inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium'>
              <Icon className='w-4 h-4 mr-2' />
              {guide.category}
            </Badge>
            <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
              {guide.title}
            </h1>
            <p className='text-gray-600 mb-4 text-lg'>{guide.description}</p>
            <div className='flex items-center text-gray-500'>
              <Clock className='w-4 h-4 mr-2' />
              {guide.time}
            </div>
          </div>
        </div>
        {/* Content */}{" "}
        <div className='prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-strong:font-semibold prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-200 prose-pre:rounded-lg prose-code:text-purple-600 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-li:text-gray-600 prose-a:text-purple-600 prose-a:font-medium hover:prose-a:text-purple-700'>
          <ReactMarkdown
            components={{
              a: ({ children, href }) => (
                <a href={href} className='no-underline hover:underline'>
                  {children}
                </a>
              ),
              code: ({ children }) => (
                <code className='bg-gray-50 px-1.5 py-0.5 rounded'>
                  {children}
                </code>
              ),
            }}
          >
            {guide.content}
          </ReactMarkdown>
        </div>
        {/* Navigation Footer */}
        <div className='mt-16 pt-8 border-t border-gray-200'>
          <Link href='/documentation'>
            <Button variant='outline' className='hover:bg-purple-50'>
              <ArrowLeft className='w-4 h-4 mr-2' />
              Back to Documentation
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
