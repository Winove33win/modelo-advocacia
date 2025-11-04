/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
