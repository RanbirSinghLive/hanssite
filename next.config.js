/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    remotePatterns: [],
  },
  // Custom domain configuration
  // When you add a custom domain in Vercel, it will automatically handle SSL/HTTPS
  // No additional configuration needed here - Vercel handles it automatically
}

module.exports = nextConfig
