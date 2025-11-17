import { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our comprehensive digital services including web development, UI/UX design, branding, and digital marketing.',
};

export default function ServicesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Comprehensive digital solutions designed to help your business thrive in the modern landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              slug={service.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
