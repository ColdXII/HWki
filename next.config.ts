import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'HWki';
const base = isProd ? `/${repoName}` : '';

const nextConfig: NextConfig = {
  output: 'export',

  basePath: base,
  assetPrefix: isProd ? `${base}/` : '',

  env: { 
    NEXT_PUBLIC_BASE_PATH: base 
  },

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;