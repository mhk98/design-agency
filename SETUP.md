# Quick Setup Guide

## 1. Install Dependencies

```bash
npm install
```

## 2. Add Placeholder Images

Create these folders and add images:

```
public/
├── projects/
│   ├── project-1.jpg (any image, 1200x900px recommended)
│   ├── project-2.jpg
│   ├── project-3.jpg
│   ├── project-1-2.jpg (additional project image)
├── team/
│   ├── member-1.jpg (square, 400x400px recommended)
│   ├── member-2.jpg
│   ├── member-3.jpg
├── testimonials/
│   ├── client-1.jpg (square, 200x200px recommended)
│   ├── client-2.jpg
│   ├── client-3.jpg
├── blog/
│   ├── post-1.jpg (1200x630px recommended)
│   ├── post-2.jpg
└── og-image.jpg (1200x630px for social sharing)
```

**Quick tip**: Use placeholder services like:
- https://picsum.photos/1200/900 (random images)
- https://ui-avatars.com/api/?name=John+Doe&size=400 (avatar placeholders)

## 3. Run Development Server

```bash
npm run dev
```

Open http://localhost:3000

## 4. Customize Content

Edit `lib/data.ts` to update:
- Projects
- Services
- Team members
- Testimonials
- Blog posts

## 5. Update Branding

- Change "DesignDC" to your agency name in:
  - `components/Header.tsx`
  - `components/Footer.tsx`
  - `app/layout.tsx` (metadata)
  - `README.md`

## 6. Build for Production

```bash
npm run build
npm start
```

## 7. Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or push to GitHub and import in Vercel dashboard.

## Next Steps

1. ✅ Replace placeholder images with real ones
2. ✅ Update content in `lib/data.ts`
3. ✅ Customize colors in `tailwind.config.ts`
4. ✅ Add your logo
5. ✅ Set up contact form backend
6. ✅ Add Google Analytics
7. ✅ Configure custom domain
8. ✅ Optional: Integrate CMS (see CMS_SETUP.md)

## Troubleshooting

**Images not showing**: Make sure image files exist in `/public` folder

**Build errors**: Ensure Node.js 18+ is installed

**Styling issues**: Clear `.next` folder and rebuild:
```bash
rm -rf .next
npm run build
```
