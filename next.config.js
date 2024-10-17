/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add this line to disable automatic static optimization for API routes
  experimental: {
    disableOptimizedLoading: true
  }
};

module.exports = nextConfig;
