// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CRITICAL: Keep static export for Firebase Hosting deployment
  output: 'export',

  // Merged Image Configuration
  images: {
    // Keep unoptimized for static export (from HEAD)
    unoptimized: true, 
    
    // Add remote patterns for external image loading (from FETCH_HEAD)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.veasacoustics.com", 
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com", // Essential for dynamic Firebase content
      },
    ],
    // Optional quality and size settings can be kept if desired, but unoptimized: true overrides quality.
  },
  
  // (you can add other Next config options below)
};

export default nextConfig;