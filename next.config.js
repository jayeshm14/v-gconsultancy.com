/** @type {import('next').NextConfig} */
const isCloudflareExport = process.env.CLOUDFLARE_EXPORT === 'true';

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  ...(isCloudflareExport ? { output: 'export' } : {}),
  images: {
    ...(isCloudflareExport ? { unoptimized: true } : {}),
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  ...(!isCloudflareExport
    ? {
        async headers() {
          return [
            {
              source: '/(.*)',
              headers: [
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
              ],
            },
          ];
        },
        async redirects() {
          return [
            { source: '/about.html', destination: '/about/', permanent: true },
            { source: '/services.html', destination: '/services/', permanent: true },
            { source: '/service.html', destination: '/services/', permanent: true },
            { source: '/contact.html', destination: '/contact/', permanent: true },
            { source: '/blogs.html', destination: '/insights/blog/', permanent: true },
            { source: '/portfolio.html', destination: '/case-studies/', permanent: true },
            { source: '/team.html', destination: '/about/leadership-team/', permanent: true },
            { source: '/404.html', destination: '/404/', permanent: true },
            { source: '/index.html', destination: '/', permanent: true },
          ];
        },
      }
    : {}),
};

module.exports = nextConfig;
