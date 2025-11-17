'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Projects
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explore our portfolio of successful projects across various industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              slug={project.slug}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
