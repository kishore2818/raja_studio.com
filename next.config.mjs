/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'rajastudiosrivi.in',
      },
      {
        protocol: 'https',
        hostname: 'www.rajastudiosrivi.in',
      }
    ],
  },
};

export default nextConfig;
