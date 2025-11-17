import { Project, Service, TeamMember, Testimonial, BlogPost } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Modern E-Commerce Platform',
    slug: 'modern-ecommerce-platform',
    category: 'Web Development',
    description: 'A fully responsive e-commerce platform with advanced filtering and checkout.',
    image: '/projects/project-1.jpg',
    images: ['/projects/project-1.jpg', '/projects/project-1-2.jpg'],
    client: 'RetailCo',
    year: '2024',
    services: ['UI/UX Design', 'Web Development', 'SEO'],
    featured: true,
  },
  {
    id: '2',
    title: 'Brand Identity Redesign',
    slug: 'brand-identity-redesign',
    category: 'Branding',
    description: 'Complete brand refresh including logo, color palette, and brand guidelines.',
    image: '/projects/project-2.jpg',
    client: 'TechStart',
    year: '2024',
    services: ['Branding', 'Graphic Design'],
    featured: true,
  },
  {
    id: '3',
    title: 'Mobile App Design',
    slug: 'mobile-app-design',
    category: 'UI/UX Design',
    description: 'Intuitive mobile app design for fitness tracking and social features.',
    image: '/projects/project-3.jpg',
    client: 'FitLife',
    year: '2023',
    services: ['UI/UX Design', 'Mobile Development'],
    featured: false,
  },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    slug: 'web-development',
    description: 'Custom websites and web applications built with modern technologies.',
    icon: 'Code',
    features: ['Responsive Design', 'Performance Optimization', 'SEO Best Practices', 'CMS Integration'],
  },
  {
    id: '2',
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    description: 'User-centered design that creates engaging digital experiences.',
    icon: 'Palette',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
  },
  {
    id: '3',
    title: 'Branding',
    slug: 'branding',
    description: 'Strategic brand development that tells your unique story.',
    icon: 'Sparkles',
    features: ['Brand Strategy', 'Logo Design', 'Brand Guidelines', 'Visual Identity'],
  },
  {
    id: '4',
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    description: 'Data-driven marketing strategies to grow your online presence.',
    icon: 'TrendingUp',
    features: ['SEO', 'Content Marketing', 'Social Media', 'Analytics'],
  },
];

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Creative Director',
    image: '/team/member-1.jpg',
    bio: 'With over 10 years of experience in design, Sarah leads our creative vision.',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Lead Developer',
    image: '/team/member-2.jpg',
    bio: 'Michael specializes in building scalable web applications with modern frameworks.',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    image: '/team/member-3.jpg',
    bio: 'Emily creates intuitive user experiences backed by research and testing.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'CEO',
    company: 'TechCorp',
    content: 'The team delivered an exceptional website that exceeded our expectations. Their attention to detail and commitment to quality is outstanding.',
    image: '/testimonials/client-1.jpg',
  },
  {
    id: '2',
    name: 'Lisa Anderson',
    role: 'Marketing Director',
    company: 'GrowthLabs',
    content: 'Working with this agency transformed our digital presence. The results speak for themselves - our engagement is up 300%.',
    image: '/testimonials/client-2.jpg',
  },
  {
    id: '3',
    name: 'David Park',
    role: 'Founder',
    company: 'StartupXYZ',
    content: 'Professional, creative, and always on time. They understood our vision and brought it to life beautifully.',
    image: '/testimonials/client-3.jpg',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Design in 2024',
    slug: 'future-of-web-design-2024',
    excerpt: 'Exploring emerging trends and technologies shaping the web design landscape.',
    content: 'Full blog content here...',
    image: '/blog/post-1.jpg',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Design',
  },
  {
    id: '2',
    title: 'Building Accessible Websites',
    slug: 'building-accessible-websites',
    excerpt: 'A comprehensive guide to creating inclusive digital experiences for all users.',
    content: 'Full blog content here...',
    image: '/blog/post-2.jpg',
    author: 'Emily Rodriguez',
    date: '2024-01-10',
    category: 'Development',
  },
];
