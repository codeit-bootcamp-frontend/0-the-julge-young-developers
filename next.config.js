/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    serverActions: true,
  },
  async rewrites() {
    return [
      {
        source: '/token/:path*',
        destination:
          'https://bootcamp-api.codeit.kr/api/0-1/the-julge/token/:path*',
      },
      {
        source: '/users/:path*',
        destination:
          'https://bootcamp-api.codeit.kr/api/0-1/the-julge/users/:path*',
      },
      {
        source: '/notices/:path*',
        destination:
          'https://bootcamp-api.codeit.kr/api/0-1/the-julge/notices/:path*',
      },
      {
        source: '/images/:path*',
        destination:
          'https://bootcamp-api.codeit.kr/api/0-1/the-julge/images/:path*',
      },
      {
        source: '/shops/:path*',
        destination:
          'https://bootcamp-api.codeit.kr/api/0-1/the-julge/shops/:path*',
      },
    ]
  },
}

module.exports = nextConfig
