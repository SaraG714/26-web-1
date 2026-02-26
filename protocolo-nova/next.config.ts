import type { NextConfig } from "next";
import path from "path";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        //port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dummyjson.com',
        //port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
