import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'DesignDC - Creative Digital Agency',
    template: '%s | DesignDC',
  },
  description: 'Transform your vision into reality with innovative design and cutting-edge development solutions.',
  keywords: ['web design', 'web development', 'branding', 'UI/UX design', 'digital marketing'],
  authors: [{ name: 'DesignDC' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://designdc.com',
    siteName: 'DesignDC',
    title: 'DesignDC - Creative Digital Agency',
    description: 'Transform your vision into reality with innovative design and cutting-edge development solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DesignDC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DesignDC - Creative Digital Agency',
    description: 'Transform your vision into reality with innovative design and cutting-edge development solutions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
