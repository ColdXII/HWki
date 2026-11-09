import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'HWki';

const nextConfig: NextConfig = {
  output: 'export',

  // Required for subpath hosting on username.github.io/repo-name
  // Leave empty if using a custom root domain (e.g., yourdomain.com)
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;