# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Method 1: GitHub Integration

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

Your site will be live in ~2 minutes!

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Custom Domain

1. Go to Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatically provisioned

## Performance Checklist

- ✅ Images optimized with next/image
- ✅ Server components for better performance
- ✅ Static generation for projects/services
- ✅ Automatic code splitting
- ✅ Font optimization

## Post-Deployment

1. **Add Real Images**: Replace placeholder images in `/public`
2. **Update Content**: Modify data in `lib/data.ts` or integrate CMS
3. **Configure Analytics**: Add Google Analytics or Vercel Analytics
4. **Set up Forms**: Connect contact form to email service
5. **Test**: Check all pages and functionality

## Alternative Deployment Options

### Netlify
```bash
npm run build
# Deploy the .next folder
```

### AWS Amplify
```bash
npm run build
# Connect GitHub repo in Amplify Console
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Monitoring

- Use Vercel Analytics for performance monitoring
- Set up error tracking (Sentry, LogRocket)
- Monitor Core Web Vitals

## Troubleshooting

**Build fails**: Check Node.js version (18+)
**Images not loading**: Verify image paths in `/public`
**Slow performance**: Enable ISR for dynamic pages
