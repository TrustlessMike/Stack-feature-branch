/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_WEB3AUTH_CLIENT_ID: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID,
  },
};

module.exports = nextConfig;
