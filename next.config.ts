import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable static exports for better performance
  // output: 'export', // Uncomment for static export
};

export default nextConfig;
