/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/historia',
            destination: '/',
          },
        ]
      },
}

module.exports = nextConfig
