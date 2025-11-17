import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import { Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description: 'Read our latest articles on design, development, and digital trends.',
};

export default function BlogPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog & Insights
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Stay updated with the latest trends, tips, and insights from our team.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="relative w-full aspect-video bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {formatDate(post.date)}
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
