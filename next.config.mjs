import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@/sass'] = path.resolve(process.cwd(), 'src/sass');
    return config;
  },
};

export default nextConfig;
