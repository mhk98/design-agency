# DesignDC - Modern Design Agency Website

A pixel-perfect, responsive design agency website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✅ **Next.js 15 App Router** - Latest Next.js with server components
- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **Framer Motion** - Smooth animations
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **SEO Optimized** - Meta tags, OpenGraph, sitemap, robots.txt
- ✅ **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- ✅ **Form Validation** - React Hook Form + Zod
- ✅ **Performance** - Optimized images with next/image
- ✅ **Static Generation** - ISR for project and service pages

## Pages

- **Home** - Hero, services preview, featured projects, testimonials, CTA
- **About** - Team members, mission, values
- **Services** - Service listing + individual service detail pages
- **Projects** - Filterable portfolio grid + project detail pages
- **Blog** - Blog listing + individual blog post pages
- **Contact** - Contact form with validation + Google Maps

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Image Optimization:** next/image

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd design-agency
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
design-agency/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── projects/          # Projects pages
│   ├── services/          # Services pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── Header.tsx         # Global header
│   ├── Footer.tsx         # Global footer
│   ├── Hero.tsx           # Hero section
│   ├── ServiceCard.tsx    # Service card component
│   ├── ProjectCard.tsx    # Project card component
│   ├── TestimonialCard.tsx # Testimonial component
│   └── ContactForm.tsx    # Contact form
├── lib/                   # Utilities and data
│   ├── data.ts            # Mock data (replace with CMS)
│   ├── types.ts           # TypeScript types
│   └── utils.ts           # Utility functions
├── public/                # Static assets
│   ├── projects/          # Project images
│   ├── team/              # Team member images
│   ├── blog/              # Blog images
│   └── testimonials/      # Client images
└── package.json
```

## Adding Images

Replace placeholder image paths in `/public` with actual images:

```
public/
├── projects/
│   ├── project-1.jpg
│   ├── project-2.jpg
│   └── project-3.jpg
├── team/
│   ├── member-1.jpg
│   ├── member-2.jpg
│   └── member-3.jpg
├── testimonials/
│   ├── client-1.jpg
│   ├── client-2.jpg
│   └── client-3.jpg
├── blog/
│   ├── post-1.jpg
│   └── post-2.jpg
└── og-image.jpg
```

## Content Management

Currently using static data in `lib/data.ts`. To integrate a CMS:

### Option 1: Sanity CMS
```bash
npm install @sanity/client next-sanity
```

### Option 2: Contentful
```bash
npm install contentful
```

### Option 3: Markdown Files
Use `gray-matter` and `remark` for markdown-based content.

## Build & Deploy

### Build for production:
```bash
npm run build
```

### Deploy to Vercel:

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```

## Environment Variables

Create `.env.local` for environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# Add CMS credentials here
```

## Performance Optimizations

- ✅ Server Components by default
- ✅ Static generation for projects/services
- ✅ Optimized images with next/image
- ✅ Code splitting
- ✅ Font optimization with next/font

## Accessibility Features

- ✅ Semantic HTML elements
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus states on all interactive elements
- ✅ Alt text on all images
- ✅ Color contrast compliance

## SEO Features

- ✅ Per-page metadata
- ✅ OpenGraph tags
- ✅ Twitter Card tags
- ✅ Dynamic sitemap.xml
- ✅ robots.txt
- ✅ Semantic HTML structure
- ✅ JSON-LD structured data (ready to add)

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme.

### Fonts
Change fonts in `app/layout.tsx` using `next/font`.

### Content
Update data in `lib/data.ts` or integrate your preferred CMS.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues or questions, please open an issue on GitHub.
