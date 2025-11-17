import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export default function ServiceCard({ title, description, icon, slug }: ServiceCardProps) {
  const Icon = (Icons as any)[icon] as LucideIcon;

  return (
    <Link href={`/services/${slug}`}>
      <div className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
          {Icon && <Icon className="text-blue-600 group-hover:text-white transition-colors" size={24} />}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
