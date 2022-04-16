/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.experiments = { 
      asyncWebAssembly: true,
      topLevelAwait: true
    }
    return config
  }
}

module.exports = nextConfig
