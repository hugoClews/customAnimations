import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/stuxnet-story',
  assetPrefix: '/stuxnet-story/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
