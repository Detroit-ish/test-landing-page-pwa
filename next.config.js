/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['corpinsights.co'],
  },
  // PWA config
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  }
};

module.exports = nextConfig;