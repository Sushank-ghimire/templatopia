import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  experimental: {
    reactCompiler: true,
  },
  output: "standalone"
};

export default nextConfig;
