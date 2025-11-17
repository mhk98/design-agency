import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/lib/data';
import { Check } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            {service.description}
          </p>

          {service.features && service.features.length > 0 && (
            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What's Included
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="bg-blue-600 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="mb-6 text-blue-100">
              Let's discuss how we can help with your {service.title.toLowerCase()} needs.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
