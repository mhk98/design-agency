import Image from 'next/image';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export default function TestimonialCard({ name, role, company, content, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
      <Quote className="text-blue-600 mb-4" size={32} />
      <p className="text-gray-700 mb-6 flex-grow leading-relaxed">{content}</p>
      <div className="flex items-center gap-4">
        {image && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{role} at {company}</p>
        </div>
      </div>
    </div>
  );
}
