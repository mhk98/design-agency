import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
}

export default function ProjectCard({ title, category, description, image, slug }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group block">
      <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">View Project</span>
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-blue-600 font-medium mb-1">{category}</p>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}
