import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import { ArrowLeft, Calendar, User } from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center">
                <User className="mr-2" size={20} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2" size={20} />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </header>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-gray-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              {post.excerpt}
            </p>
            <div className="text-gray-700 leading-relaxed">
              {post.content}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
