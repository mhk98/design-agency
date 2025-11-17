import { Metadata } from 'next';
import Image from 'next/image';
import { team } from '@/lib/data';
import { Target, Users, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our team, mission, and values at DesignDC.',
};

export default function AboutPage() {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About DesignDC
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're a passionate team of designers and developers dedicated to creating exceptional digital experiences that drive results.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-16 mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses through innovative design and technology solutions that exceed expectations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Approach</h3>
              <p className="text-gray-600">
                Collaborative, transparent, and focused on delivering measurable results for our clients.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Values</h3>
              <p className="text-gray-600">
                Excellence, integrity, and continuous innovation in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Talented professionals dedicated to your success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.id} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3">{member.role}</p>
              {member.bio && (
                <p className="text-gray-600 text-sm">{member.bio}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
