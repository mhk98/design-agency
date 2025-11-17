# CMS Integration Guide

## Option 1: Sanity CMS (Recommended)

### Setup

1. Install dependencies:
```bash
npm install @sanity/client next-sanity @portabletext/react
npm install -D @sanity/vision
```

2. Create Sanity project:
```bash
npm create sanity@latest
```

3. Create `lib/sanity.ts`:
```typescript
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: true,
});
```

4. Define schemas in Sanity Studio for:
   - Projects
   - Services
   - Team Members
   - Blog Posts
   - Testimonials

### Fetching Data

```typescript
// lib/sanity-queries.ts
export async function getProjects() {
  return client.fetch(`*[_type == "project"]`);
}
```

## Option 2: Contentful

### Setup

1. Install:
```bash
npm install contentful
```

2. Create `lib/contentful.ts`:
```typescript
import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});
```

## Option 3: Markdown Files

### Setup

1. Install:
```bash
npm install gray-matter remark remark-html
```

2. Create content structure:
```
content/
├── projects/
│   ├── project-1.md
│   └── project-2.md
├── blog/
│   ├── post-1.md
│   └── post-2.md
└── services/
    └── web-development.md
```

3. Create parser in `lib/markdown.ts`:
```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getMarkdownContent(folder: string) {
  const directory = path.join(process.cwd(), 'content', folder);
  const files = fs.readdirSync(directory);
  
  return files.map(filename => {
    const filePath = path.join(directory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return { ...data, content };
  });
}
```

## Recommended: Start with Static Data

The project currently uses static data in `lib/data.ts`. This is perfect for:
- Quick prototyping
- Small sites
- Learning the structure

When ready to scale, migrate to a CMS using the guides above.
