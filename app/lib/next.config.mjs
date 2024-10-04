/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add any other Next.js config options here
  async redirects() {
    return [
      // Log any redirects here
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'debugRedirects',
            value: 'true',
          },
        ],
        destination: '/debugRedirect?from=:path*',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
