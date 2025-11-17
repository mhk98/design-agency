import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { ArrowLeft, Calendar, User } from 'lucide-react';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </Link>

        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Meta */}
          <div className="flex flex-wrap gap-6 mb-8 text-gray-600">
            {project.client && (
              <div className="flex items-center">
                <User className="mr-2" size={20} />
                <span>Client: {project.client}</span>
              </div>
            )}
            {project.year && (
              <div className="flex items-center">
                <Calendar className="mr-2" size={20} />
                <span>Year: {project.year}</span>
              </div>
            )}
          </div>

          {/* Main Image */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-gray-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Services Used */}
          {project.services && project.services.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Services Provided
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.services.map((service, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Additional Images */}
          {project.images && project.images.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Like What You See?
            </h2>
            <p className="text-gray-600 mb-6">
              Let's create something amazing together.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
