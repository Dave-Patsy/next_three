/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|frag|vert)$/,
      type: 'asset/source'
    })
    return config
  }
}

module.exports = nextConfig
