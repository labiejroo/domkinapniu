import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/cz',
        destination: '/cs',
        permanent: true,
      },
      {
        source: '/cz/:path*',
        destination: '/cs/:path*',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
