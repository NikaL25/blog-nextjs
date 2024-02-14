/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.yourstory.com', 'shorturl.at', "img.freepik.com", 'revenuearchitects.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.yourstory.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'shorturl.at',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: "img.freepik.com",
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'revenuearchitects.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;