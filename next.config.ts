import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const base = isProd ? "/HWki" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: base,
  images: { unoptimized: true },
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: base },
};

export default nextConfig;