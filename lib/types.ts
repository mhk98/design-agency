export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  images?: string[];
  client?: string;
  year?: string;
  services?: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
}
